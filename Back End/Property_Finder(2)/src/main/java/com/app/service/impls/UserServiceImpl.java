package com.app.service.impls;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IAdminDao;
import com.app.dao.IUserDao;
import com.app.exception.NotFoundException;
import com.app.exception.UserException;
import com.app.pojos.User;
import com.app.service.interfaces.IUserService;

@Service
@Transactional
public class UserServiceImpl implements IUserService{
	@Autowired
	private IUserDao userDao;
	@Autowired

	public UserServiceImpl() {
		System.out.println("in ctor of"+getClass().getName());
	}
	@Override
	public List<User> getAllUserDetails() {
		System.out.println("in getAllUserDetails");
		
		return userDao.findAll();
	}
	@Override
	public User getUserById(int id) {
		System.out.println("in getUserById");
		Optional<User> optionalUser=userDao.findById(id);
		User user=optionalUser.orElseThrow(()->new 
				UserException("Id is Invalid User Not Found"));
		return user;
	}
	@Override
	public User registerNewUser(User user) {
		System.out.println("in registerNewUser");
		return userDao.save(user) ;
	}
	@Override
	public User deleteUserById(int id) {
		System.out.println("in deleteUser");
		Optional<User>optionalUser=userDao.findById(id);
		User user=optionalUser.orElseThrow(()->new 
				UserException("Id is Invalid User Not Found"));
		userDao.deleteById(id);
		return user;
	}
	@Override
	public User authenticationOfUser(String email, String password) {
		System.out.println("In authentication of user");
		return userDao.findByEmailAndPassword(email, password);
	}
	@Override
	public User updateUserById(int id,User newuser) {
		System.out.println("In Update User BY ID");
		Optional<User>optionalUser=userDao.findById(id);
		User oldUser=optionalUser.orElseThrow(()->new NotFoundException("Id is Invalid "));
		System.out.println("-------------"+oldUser);
		newuser.setId(id);
		User u1=userDao.save(newuser);
		System.out.println("-------------"+u1);
		return u1;
	}
	
		
	
}
