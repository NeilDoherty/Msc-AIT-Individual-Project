package com.ait.logintest;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.junit.Before;
import org.junit.Test;
import com.ait.login.Login;
import com.ait.login.LoginDAO;

public class TestLoginDAO {
	EntityManager mockEntityManager;
	Query query;
	Login login;
	LoginDAO loginDao;
	List<Login> loginList = new ArrayList<>();
	
	@Before
	public void setup() {
		mockEntityManager = mock(EntityManager.class);
		query = mock(Query.class);
		loginDao = new LoginDAO();
		loginDao.setEntityManager(mockEntityManager);
		login = new Login();
	}
	
	@Test
	public void testGetAllLogins() {
		when(mockEntityManager.createQuery("SELECT id, email, password, credentials FROM Login")).thenReturn(query);
		loginList.add(login);
		when(query.getResultList()).thenReturn(loginList);
		loginDao.getAllLogins();
	}
	
	@Test
	public void testGetLoginsByName() {
		final String email = "neildoherty@live.ie";
		when(mockEntityManager.createQuery("SELECT w FROM Login AS w " + "WHERE w.name LIKE ?1")).thenReturn(query);
		loginList.add(login);
		when(query.getResultList()).thenReturn(loginList);
		loginDao.getLoginsByName(email);
	}
	
	@Test
	public void testGetLogin() {
		final int identification = 1;
		when(mockEntityManager.find(Login.class, identification)).thenReturn(login);
		loginDao.getLogin(1);
	}
	
	@Test
	public void testSave() {
		loginDao.save(login);
	}
	
	@Test
	public void testUpdate() {
		loginDao.update(login);
	}
	
	@Test
	public void testDelete() {
		loginDao.delete(1);;
	}
}