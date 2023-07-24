package com.neo.security.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Lend {
	@Id
	private int lId;
	private String lName;
	private double lAmt;
	private Date lDate;
	private Date lDuedate;
	private String lDesc;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private Debt debt;

}
