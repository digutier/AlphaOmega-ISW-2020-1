package com.alphaomega.springboot.app.equipments.model.service;

import java.util.List;

import com.alphaomega.springboot.app.equipments.model.entity.Equipment;

public interface IEquipmentService {

	public List<Equipment> findAll();
	public Equipment findById(Long id);
	
}
