package com.app.service.impls;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IOwnerDao;
import com.app.exception.NotFoundException;
import com.app.pojos.Owner;
import com.app.pojos.User;
import com.app.service.interfaces.IOwnerService;
@Service
@Transactional
public class OwnerServiceImpl implements IOwnerService {
	@Autowired
	private IOwnerDao ownerDao;
	
	public OwnerServiceImpl() {
		System.out.println("in ctor of"+getClass().getName());
	}

	@Override
	public List<Owner> getAllOwnerDetails() {
		System.out.println("In getAllOwnerDetails");
		return ownerDao.findAll();
	}

	@Override
	public Owner getOwnerById(int id) {
		System.out.println("In getOwnerById");
		Optional<Owner>optionalOwner=ownerDao.findById(id);
		Owner owner=optionalOwner.orElseThrow(()->new NotFoundException("Id is Invalid Owner Not Found"));
		return owner;
	}

	@Override
	public Owner deleteOwnerById(int id) {
		System.out.println("In deleteOwnerById");
		Optional<Owner>optionalOwner=ownerDao.findById(id);
		Owner owner=optionalOwner.orElseThrow(()->new NotFoundException("Id is Invalid Owner Not Found"));
	ownerDao.deleteById(id);
		return owner;
	}

	@Override
	public Owner registerNewOwner(Owner owner) {
		System.out.println("In registerNewOwner");
		return ownerDao.save(owner);
	}

	@Override
	public Owner authenticationOfOwner(String email, String password) {
		System.out.println("In authentication Of Owner ");
		
		return ownerDao.findByEmailAndPassword(email, password);
	}

	@Override
	public Owner getByOwnerName(String ownerName) {
		System.out.println("In getByOwnerName");
		return ownerDao.findByOwnerName(ownerName);
	}

	@Override
	public Owner updateOwnerById(int id, Owner newOwner) {
		System.out.println("In updateOwnerById");
		Optional<Owner>optionalUser=ownerDao.findById(id);
		Owner oldOwner=optionalUser.orElseThrow(()->new NotFoundException("Id is Invalid "));
		Owner u1=ownerDao.save(newOwner);
		System.out.println("-------------"+u1);
		return u1;
	}

	

}
