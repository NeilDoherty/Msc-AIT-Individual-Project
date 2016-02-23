package com.ait.login;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/logins")
@Stateless
@LocalBean
public class LoginWS {
	
	@EJB
	private LoginDAO loginDao;
	
	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	public Response findAll() {
		System.out.println("Get all logins");
		final List<Login> logins = loginDao.getAllLogins();
		return Response.status(200).entity(logins).build();
	}
	
	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	@Path("/{id}")
	public Response findLoginById(@PathParam("id") final int identification) {
		final Login login = loginDao.getLogin(identification);
		return Response.status(200).entity(login).build();
	}
	
	@POST
	@Produces({ MediaType.APPLICATION_JSON })
	public Response saveLogin(final Login login) {
		loginDao.save(login);
		return Response.status(201).entity(login).build();
	}
	
	@PUT
	@Path("/{id}")
	@Consumes("application/json")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response updateLogin(final Login login) {
		loginDao.update(login);
		return Response.status(200).entity(login).build();
	}
	
	@DELETE
	@Path("/{id}")
	public Response deleteLogin(@PathParam("id") final int identification) {
		loginDao.delete(identification);
		return Response.status(204).build();
	}
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	@Path("/search/{query}")
	public Response findByName(@PathParam("query") final String query) {
		System.out.println("findByName: " + query);
		final List<Login> logins=loginDao.getLoginsByName(query);
		return Response.status(200).entity(logins).build();
	}


	public void setLoginDao(final LoginDAO loginDao) {
		this.loginDao = loginDao;
	}
}