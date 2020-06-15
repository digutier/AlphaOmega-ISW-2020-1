package com.alphaomega.springboot.app.request.models.service;

import java.util.List;

import com.alphaomega.springboot.app.request.models.Request;

public interface RequestService {
	
	public List<Request> findAll();
	public Request findById(Long id, Integer quantity);
}
