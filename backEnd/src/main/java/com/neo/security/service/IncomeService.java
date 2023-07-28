package com.neo.security.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.dto.IncomeDto;
import com.neo.security.entity.Income;
import com.neo.security.entity.User;
import com.neo.security.repository.IncomeRepository;
import com.neo.security.repository.UserRepository;

@Service
public class IncomeService {
	@Autowired
	IncomeRepository incomeRepository;
	@Autowired
	UserRepository userRepository;

	public String addIncome(IncomeDto incomeDto) {
		System.err.println("---------------------------------------");
		System.err.println(incomeDto.toString());
		Optional<User> optional = userRepository.findById(incomeDto.getUserId());
		Income income = Income.builder().iAmt(incomeDto.getIncomeAmt()).iDate(incomeDto.getIncomeDate())
				.iDesc(incomeDto.getIncomeDesc()).iSource(incomeDto.getIncomeSource()).build();
		if (optional.isPresent()) {
			User user = optional.get();
			if (user.getIncome() == null) {
				user.setIncome(Arrays.asList(income));
			} else {
				user.getIncome().add(income);
			}
			income.setUser(user);
			userRepository.save(user);
			return "Income Added Successfully";
		}
		User user = User.builder().build();
		user.setIncome(Arrays.asList(income));
		income.setUser(user);
		userRepository.save(user);
		return "User not found";

	}

	public List<Income> getIncome() {
		return incomeRepository.findAll();
	}

	public Optional<Income> getIncomeByid(int id) {
		return incomeRepository.findById(id);
	}

	public Income updateIncome(IncomeDto incomeDto) {
		Income income = new Income();
		BeanUtils.copyProperties(incomeDto, income);
		incomeRepository.save(income);
		return income;
	}

	public String deleteIncome(int id) {
		incomeRepository.deleteById(id);
		return "Income deleted Successfully";
	}
}
