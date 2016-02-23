package com.ait.playertest;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.junit.Before;
import org.junit.Test;
import com.ait.player.Player;
import com.ait.player.PlayerDAO;

public class TestPlayerDAO {
	EntityManager mockEntityManager;
	Query query;
	Player player;
	PlayerDAO playerDao;
	List<Player> playerList = new ArrayList<>();
	
	@Before
	public void setup() {
		mockEntityManager = mock(EntityManager.class);
		query = mock(Query.class);
		playerDao = new PlayerDAO();
		playerDao.setEntityManager(mockEntityManager);
		player = new Player();
	}
	
	@Test
	public void testGetAllPlayers() {
		when(mockEntityManager.createQuery("SELECT w FROM Player")).thenReturn(query);
		playerList.add(player);
		when(query.getResultList()).thenReturn(playerList);
		playerDao.getAllPlayers();
	}
	
	@Test
	public void testGetPlayersByName() {
		final String email = "neildoherty@live.ie";
		when(mockEntityManager.createQuery("SELECT w FROM Player AS w " + "WHERE w.name LIKE ?1")).thenReturn(query);
		playerList.add(player);
		when(query.getResultList()).thenReturn(playerList);
		playerDao.getPlayersByName(email);
	}
	
	@Test
	public void testGetPlayer() {
		final int identification = 1;
		when(mockEntityManager.find(Player.class, identification)).thenReturn(player);
		playerDao.getPlayer(1);
	}
	
	@Test
	public void testSave() {
		playerDao.save(player);
	}
	
	@Test
	public void testUpdate() {
		playerDao.update(player);
	}
	
	@Test
	public void testDelete() {
		playerDao.delete(1);;
	}
}