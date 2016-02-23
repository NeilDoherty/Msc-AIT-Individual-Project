package com.ait.player;

import java.util.List;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Stateless
@LocalBean
public class PlayerDataTable {
	
	private Integer echo;
	private String sumRecords;
	private String sumDisplayRecords;
	private List<Player> tableData;

    @PersistenceContext
    private EntityManager em;
    
    public String getiTotalRecords() {
        return sumRecords;
    }
 
    public void setiTotalRecords(String iTotalRecords) {
        this.sumRecords = iTotalRecords;
    }
    
    public String getiTotalDisplayRecords() {
        return sumDisplayRecords;
    }
 
    public void setiTotalDisplayRecords(String sumDisplayRecords) {
        this.sumDisplayRecords = sumDisplayRecords;
    }
    
    public List<Player> getAaData() {
        return tableData;
    }
 
    public void setAaData(List<Player> tableData) {
        this.tableData = tableData;
    }
    public Integer getsEcho() {
        return echo;
    }
 
    public void setsEcho(Integer echo) {
        this.echo = echo;
    }	  
}