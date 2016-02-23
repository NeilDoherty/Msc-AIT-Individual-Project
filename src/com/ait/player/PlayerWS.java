package com.ait.player;

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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.ait.login.LoginDAO;

@Path("/players")
@Stateless
@LocalBean
public class PlayerWS {

	@EJB
	private PlayerDAO playerDao;
	@EJB
	private PlayerDataTable playerDataTable;
	
	String[] tableColumns = { "id", "name", "team", "monitor" };

	@GET
	@Path("/players") //including this seems to be needed for datatables but breaks other list / postman
	@Produces({ MediaType.APPLICATION_JSON })
	public Response findAll() {
		System.out.println("Get all players");
		List<Player> players = playerDao.getAllPlayers();
		return Response.status(200).entity(players).build();
	}

	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	@Path("/{id}")
	public Response findPlayerById(@PathParam("id") int id) {
		Player player = playerDao.getPlayer(id);
		return Response.status(200).entity(player).build();
	}
	
	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	@Path("/search/{query}")
	public Response findByName(@PathParam("query") String query) {
		System.out.println("findByName " + query);
		List<Player> players = playerDao.getPlayersByName(query);
		return Response.status(200).entity(players).build();
	}
	
	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getData(@QueryParam("echo") Integer echo,
		@QueryParam("iDisplayLength") Integer iDisplayLength,
		@QueryParam("iDisplayStart") Integer iDisplayStart,
		@QueryParam("sSearch") String search,
		@QueryParam("iSortCol_0") String iSortCol_0,
		@QueryParam("sSearch") String sSearch,
		@QueryParam("sSortDir_0") String sSortDir_0) {
		int col = Integer.parseInt(iSortCol_0);
		String colName = tableColumns[col];
		List<Player> playerList = playerDao.findPlayers(iDisplayStart,iDisplayLength, colName, sSearch, sSortDir_0);
		playerDataTable.setAaData(playerList);
		long sumRecords = playerDao.getCount();
		playerDataTable.setiTotalRecords(String.valueOf(sumRecords));
		playerDataTable.setiTotalDisplayRecords(String.valueOf(sumRecords));
		playerDataTable.setsEcho(echo);
		return Response.status(200).entity(playerDataTable).build();
	}

	@POST
	@Produces({ MediaType.APPLICATION_JSON })
	public Response savePlayer(Player player) {
		playerDao.save(player);
		return Response.status(201).entity(player).build();
	}

	@PUT
	@Path("/{id}")
	@Consumes("application/json")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response updatePlayer(Player player) {
		playerDao.update(player);
		return Response.status(200).entity(player).build();
	}

	@DELETE
	@Path("/{id}")
	public Response deletePlayer(@PathParam("id") int id) {
		playerDao.delete(id);
		return Response.status(204).build();
	}
	
	public void setPlayerDao(final PlayerDAO playerDao) {
		this.playerDao = playerDao;
	}
}