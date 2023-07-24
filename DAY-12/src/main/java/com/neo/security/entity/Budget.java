package com.neo.security.entity;

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
public class Budget {
	@Id
	private int bId;
	private double bAmt;
	private String bSource;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
//	@JoinColumn(name="id",referencedColumnName="id")
	private User user;
	
}
