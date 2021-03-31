package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.service.interfaces.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	private IUserService userService;
	
	@GetMapping("/show_all")
	public List<User> getAllUserDetails(){
		return userService.getAllUserDetails();
		
	}
	@GetMapping("/{id}")
	public User getUserById(@PathVariable int id){
		return userService.getUserById(id);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?>registerNewUser(@RequestBody User user){
	try {
		return new ResponseEntity<>(userService.registerNewUser(user),HttpStatus.CREATED);
	}catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?>deleteUserById(@PathVariable int id){
		try {
			return new ResponseEntity<>(userService.deleteUserById(id),HttpStatus.OK);
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
		
	}
	@PostMapping("/login")
	public ResponseEntity<?>authByEmail(@RequestParam String email,@RequestParam String password){
		try {
			//return new ResponseEntity<>(userService.authenticationOfUser(user.getEmail(),user.getPassword()),HttpStatus.OK);
			//User user1=userService.authenticationOfUser(user.getEmail(), user.getPassword());
			User user1=userService.authenticationOfUser(email,password);
			if(user1 !=null)
			{
				return new ResponseEntity<> (user1,HttpStatus.OK);
			}else
			{
				 return new ResponseEntity<>("Invalid User",HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<?>updateUserById(@PathVariable int id,@RequestBody User user){
	try {
		return new ResponseEntity<>(userService.updateUserById(id, user),HttpStatus.OK);
	}catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	
	
}
