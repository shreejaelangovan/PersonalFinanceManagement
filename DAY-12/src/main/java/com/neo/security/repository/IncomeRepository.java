package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Income;

public interface IncomeRepository extends JpaRepository<Income, Integer> {

}
