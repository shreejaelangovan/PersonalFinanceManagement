package com.neo.security.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Debt {
	@Id
	private int dId;
	
//	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@OneToOne(targetEntity=User.class)
	private User user;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="debt")
	private List<Borrow> borrow; 
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="debt")
	private List<Lend> lend; 

}
