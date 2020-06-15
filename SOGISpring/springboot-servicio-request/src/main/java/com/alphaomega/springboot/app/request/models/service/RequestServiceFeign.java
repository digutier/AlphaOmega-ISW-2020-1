package com.alphaomega.springboot.app.request.models.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.alphaomega.springboot.app.request.clients.EquipmentClientRest;
import com.alphaomega.springboot.app.request.models.Request;

@Service
@Primary
public class RequestServiceFeign implements RequestService {

	@Autowired
	private EquipmentClientRest feignClient;
	
	@Override
	public List<Request> findAll() {
		return feignClient.listar().stream().map(eq -> new Request(eq,1)).collect(Collectors.toList());
	}

	@Override
	public Request findById(Long id, Integer quantity) {
		return new Request(feignClient.ver(id), quantity);
	}

}
