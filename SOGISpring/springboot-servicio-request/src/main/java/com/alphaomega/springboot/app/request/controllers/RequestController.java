package com.alphaomega.springboot.app.request.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.alphaomega.springboot.app.request.models.Request;
import com.alphaomega.springboot.app.request.models.service.RequestService;

@RestController
public class RequestController {
	
	@Autowired
	@Qualifier("serviceRestTemplate")
	private RequestService requestService;
	
	@GetMapping("/listar")
	public List<Request> listar(){
		return requestService.findAll();
		
	}
	
	@GetMapping("/ver/{id}/cantidad/{quantity}")
	public Request ver(@PathVariable Long id, @PathVariable Integer quantity) {
		return requestService.findById(id, quantity);
	}
}
