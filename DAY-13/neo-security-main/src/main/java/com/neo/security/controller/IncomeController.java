package com.neo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.dto.IncomeDto;
import com.neo.security.entity.Income;
import com.neo.security.service.IncomeService;

@RestController
public class IncomeController {

	@Autowired
	IncomeService service;

	@PostMapping("/income")
	public String addIncomes(@RequestBody IncomeDto incomeDto) {
		return service.addIncome(incomeDto);
	}
	@GetMapping("/income")
	public List<Income> getIncomes(){
		return service.getIncome();
	}
}
