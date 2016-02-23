package com.ait.playertest;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.Before;
import org.junit.Test;
import com.ait.player.Player;
import com.ait.player.PlayerDAO;
import com.ait.player.PlayerWS;

public class TestPlayerWS {
	PlayerWS playerWS;
	PlayerDAO playerDAOmock;
	List<Player> players;
	int id = 1;
	Player player;
	
	@Before
	public void setup() {
		playerWS = new PlayerWS();
		playerDAOmock = mock(PlayerDAO.class);
		players = new ArrayList<Player>();
		playerWS.setPlayerDao(playerDAOmock);
		player = new Player();
	}
	
	@Test
	public void testFindAll() {
		when(playerDAOmock.getAllPlayers()).thenReturn(players);
		assertNotNull(playerWS.findAll());
	}
	
	@Test
	public void testfindPlayerById() {
		when(playerDAOmock.getPlayer(id)).thenReturn(player);
		assertNotNull(playerWS.findPlayerById(id));
	}
	
	@Test
	public void testSavePlayer() {
		assertNotNull(playerWS.savePlayer(player));
	}
	
	@Test
	public void testUpdatePlayer() {
		assertNotNull(playerWS.updatePlayer(player));
	}
	
	@Test
	public void testDeletePlayer() {
		assertNotNull(playerWS.deletePlayer(id));
	}
	
	@Test
	public void testfindByName() {
		when(playerDAOmock.getPlayersByName("admin")).thenReturn(players);
		assertNotNull(playerWS.findByName("admin"));
	}
}