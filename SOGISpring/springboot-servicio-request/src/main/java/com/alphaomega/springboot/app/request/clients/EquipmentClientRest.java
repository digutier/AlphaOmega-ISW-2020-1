package com.alphaomega.springboot.app.request.clients;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.alphaomega.springboot.app.request.models.Equipment;

@FeignClient(name= "equipments-service")
public interface EquipmentClientRest {
	
	@GetMapping("/listar")
	public List<Equipment> listar();
	
	@GetMapping("/ver/{id}")
	public Equipment ver(@PathVariable Long id);
}
