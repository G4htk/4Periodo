package br.unipar.devbackend.cadastroaluno.dao;

import br.unipar.devbackend.cadastroaluno.model.Aluno;
import br.unipar.devbackend.cadastroaluno.model.Endereco;
import br.unipar.devbackend.cadastroaluno.util.EntityManagerUtil;
import jakarta.persistence.EntityManager;

import java.util.List;

public class EnderecoDAO {
    EntityManager em;

    public List<Endereco> findAll() {
        return em.createQuery("SELECT e FROM Endereco e", Endereco.class).getResultList();
    }

    public Endereco findById(Long id) {
        return em.find(Endereco.class, id);
    }

    public Endereco insertEndereco(Endereco endereco) {
        try {
            em.getTransaction().begin();
            em.merge(endereco);
            em.getTransaction().commit();
            return endereco;
        } catch (Exception ex) {
            em.getTransaction().rollback();
            System.out.println("Brutal" + ex.getMessage());
            return null;
        } finally {
            if (em.isOpen()) {
                em.close();
                System.out.println("Ta amarrado");
            }
        }
    }
}
