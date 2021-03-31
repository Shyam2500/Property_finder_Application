package com.app.service.interfaces;

import java.util.List;

import com.app.pojos.User;

public interface IUserService {
	
	public List<User> getAllUserDetails();
	
	public User getUserById(int id);
	
	public User registerNewUser(User user);
	
	public User deleteUserById(int id);
	
	public User authenticationOfUser(String email,String password);
	
	public User updateUserById(int id,User user);
	

}
