package com.ait.login;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name="users")
public class Login {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int identification;
	private String credentials;
	private String password;
	private String email;
	
	public int getId() {
		return identification;
	}
	public void setId(final int identification) {
		this.identification = identification;
	}
	public String getCredentials() {
		return credentials;
	}
	public void setCredentials(final String credentials) {
		this.credentials = credentials;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(final String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(final String email) {
		this.email = email;
	}
}