package com.neo.security.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IncomeDto {
	private int userId;
	private int incomeId;
	private double incomeAmt;
	private String incomeSource;
	private String incomeDesc;
	private String incomeDate;

}


