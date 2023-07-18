package com.example.demo.model;

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
public class Goal {
	@Id
	private int g_id;
	private String g_source;
	private double targetAmt;
	private double savedAmt;
	private Date desiredDate;
	private String g_desc;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
	private User user;
}
