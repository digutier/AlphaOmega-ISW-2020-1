package com.alphaomega.springboot.app.request.models;

public class Request {
	
	private Equipment equipment;
	private Integer quantity;
	
	public Request() {
	}
	
	public Request(Equipment equipment, Integer quantity) {
		this.equipment = equipment;
		this.quantity = quantity;
	}
	public Equipment getEquipment() {
		return equipment;
	}
	public void setEquipment(Equipment equipment) {
		this.equipment = equipment;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
}
