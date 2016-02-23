package com.ait.logintest;

import org.junit.Before;
import org.junit.Test;
import com.ait.login.Login;

import static org.junit.Assert.assertEquals;

public class TestLogin {
	Login login;
	
	@Before
	public void setup() {
		login = new Login();
	}
	
	@Test
	public void testGettersAndSetters() {
		login.setId(1);
		assertEquals(1, login.getId());
		login.setCredentials("1");
		assertEquals("1", login.getCredentials());
		login.setEmail("neildoherty@live.ie");
		assertEquals("neildoherty@live.ie", login.getEmail());
		login.setPassword("admin");
		assertEquals("admin", login.getPassword());
	}
}