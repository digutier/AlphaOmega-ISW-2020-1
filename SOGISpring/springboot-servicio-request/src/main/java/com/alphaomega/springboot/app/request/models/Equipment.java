package com.alphaomega.springboot.app.request.models;

import java.util.Date;


public class Equipment {
	private Long id;
	private String name;
	private Date lastMaintenance;
	private Date nextMaintenance;
	private String description;
	private Boolean state;
	private Integer port;
	
	public Integer getPort() {
		return port;
	}
	public void setPort(Integer port) {
		this.port = port;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getLastMaintenance() {
		return lastMaintenance;
	}
	public void setLastMaintenance(Date lastMaintenance) {
		this.lastMaintenance = lastMaintenance;
	}
	public Date getNextMaintenance() {
		return nextMaintenance;
	}
	public void setNextMaintenance(Date nextMaintenance) {
		this.nextMaintenance = nextMaintenance;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Boolean getState() {
		return state;
	}
	public void setState(Boolean state) {
		this.state = state;
	}
	
}
