package com.alphaomega.springboot.app.request;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@RibbonClient(name="equipments-service")
@EnableFeignClients
@SpringBootApplication
public class SpringbootServicioRequestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootServicioRequestApplication.class, args);
	}

}
