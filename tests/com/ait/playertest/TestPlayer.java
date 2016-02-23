package com.ait.playertest;

import org.junit.Before;
import org.junit.Test;
import com.ait.player.Player;
import static org.junit.Assert.assertEquals;

public class TestPlayer {
	Player player;
	
	@Before
	public void setup() {
		player = new Player();
	}
	
	@Test
	public void testGettersAndSetters() {
		player.setId(1);
		assertEquals(1, player.getId());
		player.setFlag("Ireland");
		assertEquals("Ireland", player.getFlag());
		player.setCountry("Ireland");
		assertEquals("Ireland", player.getCountry());
		player.setName("Neil");
		assertEquals("Neil", player.getName());
		player.setTeam("Team1");
		assertEquals("Team1", player.getTeam());
		player.setCm360("10");
		assertEquals("10", player.getCm360());
		player.setxAxis("1");
		assertEquals("1", player.getxAxis());
		player.setHz("500");
		assertEquals("500", player.getHz());
		player.setWindowsSensitivity("5");
		assertEquals("5", player.getWindowsSensitivity());
		player.setSensitivity("300");
		assertEquals("300", player.getSensitivity());
		player.setZoomSensitivityRatio("1.2");
		assertEquals("1.2", player.getZoomSensitivityRatio());
		player.setmPitch("1");
		assertEquals("1", player.getmPitch());
		player.setmYaw("2");
		assertEquals("2", player.getmYaw());
		player.setMouseAcceleration("0");
		assertEquals("0", player.getMouseAcceleration());
		player.setmRawInput("null");
		assertEquals("null", player.getmRawInput());
		player.setRinputExe("null");
		assertEquals("null", player.getRinputExe());
		player.setResolution("1920 x 1080");
		assertEquals("1920 x 1080", player.getResolution());
		player.setAspectRatio("4:3");
		assertEquals("4:3", player.getAspectRatio());
		player.setFinalAspectRatio("4:3");
		assertEquals("4:3", player.getFinalAspectRatio());
		player.setAspectRatioDescription("null");
		assertEquals("null", player.getAspectRatioDescription());
		player.setMonitorHz("144");
		assertEquals("144", player.getMonitorHz());
		player.setLightboostBlurReduction("null");
		assertEquals("null", player.getLightboostBlurReduction());
		player.setDigitalVibranceSaturation("null");
		assertEquals("null", player.getDigitalVibranceSaturation());
		player.setMonitor("BenQ XL2411Z");
		assertEquals("BenQ XL2411Z", player.getMonitor());
		player.setMouse("Razer Deathadder Chroma");
		assertEquals("Razer Deathadder Chroma", player.getMouse());
		player.setMousepad("Steelseries Qck+");
		assertEquals("Steelseries Qck+", player.getMousepad());
		player.setNotes("null");
		assertEquals("null", player.getNotes());
		player.setLastUpdate("2015-12-03");
		assertEquals("2015-12-03", player.getLastUpdate());
		player.setPicture("null");
		assertEquals("null", player.getPicture());	
	}
}