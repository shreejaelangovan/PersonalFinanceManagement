package com.neo.security.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDetailDto {
	private int id;
	private String email;
	private String userName;
	private String firstName;
	private String lastName;
	private String password;
	private List<IncomeDto> incomes;
}
