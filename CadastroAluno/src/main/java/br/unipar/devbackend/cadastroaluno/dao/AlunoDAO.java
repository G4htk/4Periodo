package br.unipar.devbackend.cadastroaluno.dao;

import br.unipar.devbackend.cadastroaluno.model.Aluno;
import jakarta.persistence.EntityManager;

import java.util.List;

public class AlunoDAO {
    //metodos CRUD
    //create/read/update/delete

    EntityManager em;

    public AlunoDAO(EntityManager em){
        this.em = em;
    }

    public List<Aluno> findAll(){
        return em.createQuery("SELECT a FROM Aluno a", Aluno.class).getResultList();
    }

    public Aluno findByRa(String ra){
        return em.createQuery("SELECT a FROM Aluno a WHERE a.ra = :ra", Aluno.class)
                .setParameter("ra", ra).getSingleResult();
    }

    public Aluno findById(Long id){
        return em.find(Aluno.class, id);
    }

    public Aluno inserirAluno(Aluno aluno){
        try{
            em.getTransaction().begin(); //abrimos transação com banco
            em.persist(aluno); //insere aluno no banco
            em.getTransaction().commit(); // confirma que é isso mesmo
            return aluno; //retorna aluno com ID
        } catch (Exception ex){
            em.getTransaction().rollback(); //desfaz operação
            System.out.println("Algo de errado não deu certo "+ ex.getMessage());
            return null;
        } finally{
            if(em.isOpen()){
                em.close();
                System.out.println("EntityManager fechado com sucesso");
            }
        }
    }
    public Aluno editarAluno(Aluno aluno){
        try{
            em.getTransaction().begin(); //abrimos transação com banco
            em.merge(aluno); //insere aluno no banco
            em.getTransaction().commit(); // confirma que é isso mesmo
            return aluno; //retorna aluno com ID
        } catch (Exception ex){
            em.getTransaction().rollback(); //desfaz operação
            System.out.println("Algo de errado não deu certo "+ ex.getMessage());
            return null;
        } finally {
            if (em.isOpen()) {
                em.close();
                System.out.println("EntityManager fechado com sucesso");
            }
        }
    }

    public Boolean deletarAluno(Aluno aluno){
        try{
            em.getTransaction().begin(); //abrimos transação com banco
            em.remove(aluno); //deleta aluno no banco
            em.getTransaction().commit(); // confirma que é isso mesmo
            return true; //retorna que foi excluido
        } catch (Exception ex){
            em.getTransaction().rollback(); //desfaz operação
            System.out.println("Algo de errado não deu certo "+ ex.getMessage());
            return false;
        } finally {
            if (em.isOpen()) {
                em.close();
                System.out.println("EntityManager fechado com sucesso");
            }
        }
    }
}
