package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminDto;
import com.app.dto.LoginDto;
import com.app.pojos.Admin;
import com.app.pojos.Owner;
import com.app.pojos.PropertyDetails;
import com.app.service.interfaces.IAdminService;
import com.app.service.interfaces.IPropertyDetailsService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	@Autowired
	private IPropertyDetailsService propertyDetailsService;
	@Autowired
	private IAdminService adminService;
	public AdminController() {
		System.out.println("In ctor of"+getClass().getName());
	}
	
//	@GetMapping("/approve/{pid}")
//	void approveProperty(@PathVariable int pId)
//	{
//		PropertyDetails property=propertyDetailsService.getPropertyDetailsById(pId);
////		property.setApproveFlag(true);
//	}
	
	@PostMapping("/login")
	public  ResponseEntity<?> authenticateAdmin( @RequestParam String email,@RequestParam String password) {
	System.out.println("in authenticateAdmin email: "+email+" password: "+password);
		try {
			Admin authenticateAdmin =adminService.authenticateAdmin(email,password);
			//return new ResponseEntity<>(userService.authenticationOfUser(user.getEmail(),user.getPassword()),HttpStatus.OK);
			//Admin newAdmin = adminService.authenticateAdmin(admin.getEmail(),admin.getPassword());
			
				//	System.out.println("-----------------------------------"+newAdmin);
			return new ResponseEntity<>(authenticateAdmin,HttpStatus.OK);
//			if(newAdmin !=null)
//			{
//				return new ResponseEntity<> (newAdmin,HttpStatus.OK);
//			}else
//			{
//				 return new ResponseEntity<>("Invalid User",HttpStatus.INTERNAL_SERVER_ERROR);
//			}
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	
}
