package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
public class Budget {
	@Id
	private int b_id;
	private double b_amt;
	private String b_source;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
//	@JoinColumn(name="id",referencedColumnName="id")
	private User user;
	
}
