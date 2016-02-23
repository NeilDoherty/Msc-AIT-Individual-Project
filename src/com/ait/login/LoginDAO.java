package com.ait.login;

import java.util.List;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Stateless
@LocalBean
public class LoginDAO {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<Login> getAllLogins() {
		 Query query=entityManager.createQuery("SELECT id, email, password, credentials FROM Login");
		return query.getResultList();
	}
	
	public List<Login> getLoginsByName( String name) {
		 Query query = entityManager.createQuery("SELECT w FROM Login AS w " + "WHERE w.name LIKE ?1");
		return query.getResultList();
	}
	
	public Login getLogin( int identification) {
		return entityManager.find(Login.class, identification);
	}
	
	public void save( Login login) {
		entityManager.persist(login);
	}
	
	public void update( Login login) {
		entityManager.merge(login);
	}
	
	public void delete( int identification) {
		entityManager.remove(getLogin(identification));
	}

	public void setEntityManager( EntityManager entityManager) {
		this.entityManager = entityManager;
	}
}