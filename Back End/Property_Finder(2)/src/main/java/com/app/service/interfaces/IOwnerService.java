package com.app.service.interfaces;

import java.util.List;

import com.app.pojos.Owner;
import com.app.pojos.User;

public interface IOwnerService {
	
   public List<Owner> getAllOwnerDetails();
	
	public Owner getOwnerById(int id);
	
	public Owner registerNewOwner(Owner user);
	
	public Owner deleteOwnerById(int id);
	
	public Owner authenticationOfOwner(String email,String password);
	
	public Owner getByOwnerName(String owner);
	
	public Owner updateOwnerById(int id,Owner owner);
	
	
}
