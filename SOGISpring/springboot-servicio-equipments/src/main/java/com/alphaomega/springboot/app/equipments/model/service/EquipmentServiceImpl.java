package com.alphaomega.springboot.app.equipments.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alphaomega.springboot.app.equipments.model.entity.Equipment;
import com.alphaomega.springboot.app.equipments.model.repository.EquipmentRepository;

@Service
public class EquipmentServiceImpl implements IEquipmentService{

	@Autowired
	private EquipmentRepository equipmentRepository;
	
	@Override
	@Transactional(readOnly = true)
	public List<Equipment> findAll() {
		return (List<Equipment>) equipmentRepository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Equipment findById(Long id) {

		return equipmentRepository.findById(id).orElse(null);
	}

}
