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

import com.app.pojos.Admin;
import com.app.pojos.Owner;
import com.app.pojos.PropertyDetails;
import com.app.pojos.User;
import com.app.service.interfaces.IOwnerService;
import com.app.service.interfaces.IPropertyDetailsService;

@RestController
@RequestMapping("/owner")
@CrossOrigin
public class OwnerController {
	@Autowired
	private IOwnerService ownerService;
	
	@Autowired 
	private IPropertyDetailsService propertyDetailsService;
	
	public OwnerController() {
		System.out.println("In ctor of"+getClass().getName());
	}
	
	@GetMapping("/show_all")
	public List<Owner>getAllOwnerDetails(){
		return ownerService.getAllOwnerDetails();
	}
	
	@GetMapping("/{id}")
	public Owner getOwnerById(@PathVariable int id) {
		return ownerService.getOwnerById(id);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerNewOwner(@RequestBody Owner owner){
		try {
		//	PropertyDetails pd=propertyDetailsService.getPropertyDetailsById(propertyDetailsId);
			
			return new ResponseEntity<>(ownerService.registerNewOwner(owner),HttpStatus.CREATED);
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?>deleteOwnerById(@PathVariable int id){
		try {
			return new ResponseEntity<>(ownerService.deleteOwnerById(id),HttpStatus.OK);
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
		
	}
	
	@PostMapping("/login")
	public  ResponseEntity<?> authenticateAdmin(@RequestParam String email,@RequestParam String password) {
	
		try {
			//return new ResponseEntity<>(userService.authenticationOfUser(user.getEmail(),user.getPassword()),HttpStatus.OK);
			//Owner owner1 = ownerService.authenticationOfOwner(owner.getEmail(), owner.getPassword());
			Owner owner1 = ownerService.authenticationOfOwner(email,password);
			if(owner1 !=null)
			{
				return new ResponseEntity<> (owner1,HttpStatus.OK);
			}else
			{
				 return new ResponseEntity<>("Invalid User",HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<?>updateUserById(@PathVariable int id,@RequestBody Owner user){
	try {
		return new ResponseEntity<>(ownerService.updateOwnerById(id, user),HttpStatus.CREATED);
	}catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
	}
	
		
	}
	
	


