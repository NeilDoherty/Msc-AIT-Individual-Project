package com.ait.logintest;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.Before;
import org.junit.Test;
import com.ait.login.Login;
import com.ait.login.LoginDAO;
import com.ait.login.LoginWS;

public class TestLoginWS {
	LoginWS loginWS;
	LoginDAO loginDAOmock;
	List<Login> logins;
	int id = 1;
	Login login;
	
	@Before
	public void setup() {
		loginWS = new LoginWS();
		loginDAOmock = mock(LoginDAO.class);
		logins = new ArrayList<Login>();
		loginWS.setLoginDao(loginDAOmock);
		login = new Login();
	}
	
	@Test
	public void testFindAll() {
		when(loginDAOmock.getAllLogins()).thenReturn(logins);
		assertNotNull(loginWS.findAll());
	}
	
	@Test
	public void testfindLoginById() {
		when(loginDAOmock.getLogin(id)).thenReturn(login);
		assertNotNull(loginWS.findLoginById(id));
	}
	
	@Test
	public void testSaveLogin() {
		assertNotNull(loginWS.saveLogin(login));
	}
	
	@Test
	public void testUpdateLogin() {
		assertNotNull(loginWS.updateLogin(login));
	}
	
	@Test
	public void testDeleteLogin() {
		assertNotNull(loginWS.deleteLogin(id));
	}
	
	@Test
	public void testfindByName() {
		when(loginDAOmock.getLoginsByName("admin")).thenReturn(logins);
		assertNotNull(loginWS.findByName("admin"));
	}
}