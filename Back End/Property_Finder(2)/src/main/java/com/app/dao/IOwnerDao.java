package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Owner;

public interface IOwnerDao extends JpaRepository<Owner, Integer> {

	Owner findByEmailAndPassword(String email,String password);
	
	Owner findByOwnerName(String ownerName);
	
}
