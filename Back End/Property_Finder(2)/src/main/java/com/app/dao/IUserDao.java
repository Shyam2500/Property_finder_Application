package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;

public interface IUserDao extends JpaRepository<User, Integer>{

User findByEmailAndPassword(String email,String password);
}
