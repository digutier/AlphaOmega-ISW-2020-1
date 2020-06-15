package com.alphaomega.springboot.app.equipments.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.alphaomega.springboot.app.equipments.model.entity.Equipment;
import com.alphaomega.springboot.app.equipments.model.service.IEquipmentService;

@RestController
public class EquipmentController {

	@Autowired
	private Environment env;
	
	@Value("${server.port}")
	private Integer port;
	
	@Autowired
	private IEquipmentService equipmentService;
	
	@GetMapping("/listar")
	public List<Equipment> listar(){
		return equipmentService.findAll().stream().map(eq -> {
			//eq.setPort(Integer.parseInt(env.getProperty("local.server.port")));
			eq.setPort(port);
			return eq;
		}).collect(Collectors.toList());
	}
	
	@GetMapping("/ver/{id}")
	public Equipment ver(@PathVariable Long id) {
		Equipment equipment = equipmentService.findById(id);
		//equipment.setPort(Integer.parseInt(env.getProperty("local.server.port")));
		equipment.setPort(port);
		return equipmentService.findById(id);
	}
}
