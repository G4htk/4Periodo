package br.unipar.devbackend.cadastroaluno;

import br.unipar.devbackend.cadastroaluno.dao.AlunoDAO;
import br.unipar.devbackend.cadastroaluno.model.Aluno;
import br.unipar.devbackend.cadastroaluno.model.Endereco;
import br.unipar.devbackend.cadastroaluno.util.EntityManagerUtil;
import jakarta.persistence.EntityManager;

import java.util.Date;
import java.util.List;

public class Main {
    public static void main(String[] args) {
    EntityManagerUtil.getEmf();//abrindo sistema

        Aluno aluno = new Aluno();//criamos objeto aluno e instanciamos ele
        aluno.setNome("Juvenal Amaral"); //juvenal tem um nome
        aluno.setRa("60004869"); //juvenal tem ra
        aluno.setTelefone("(45) 98593-2694"); //juvenal tem telefone
        aluno.setEmail("juju@ama@gmail.com"); //juvenal tem email
        aluno.setData_nasc(new Date("01/09/2007")); //juvenal nasceu

        //criamos o objeto dao (data acess object) responsavel pela transação ocm banco de dados
        //no construtor passamos uma nova em
        AlunoDAO alunoDAO = new AlunoDAO(EntityManagerUtil.getEntityManager());
        alunoDAO.inserirAluno(aluno); //solitamos um insert do aluno no bd

    EntityManagerUtil.closeEntityManagerFactory();//fechando o sistema  e conexão com banco
    }
}
