package com.alphaomega.springboot.app.request.models.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.alphaomega.springboot.app.request.models.Equipment;
import com.alphaomega.springboot.app.request.models.Request;

@Service(value="serviceRestTemplate")
public class RequestServiceImpl implements RequestService{

	@Autowired
	private RestTemplate restClient;
	
	@Override
	public List<Request> findAll() {
		List<Equipment> equipments = Arrays.asList(restClient.getForObject("http://equipments-service/listar", Equipment[].class));
		return equipments.stream().map(eq -> new Request(eq,1)).collect(Collectors.toList());
	}

	@Override
	public Request findById(Long id, Integer quantity) {
		
		Map<String, String> pathVariables = new HashMap<String, String>();
		pathVariables.put("id", id.toString());
		Equipment equipment = restClient.getForObject("http://equipments-service/ver/{id}", Equipment.class, pathVariables);
		return new Request(equipment, quantity);
	}

}
