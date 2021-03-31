package com.app.service.impls;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IAdminDao;
import com.app.pojos.Admin;
import com.app.pojos.User;
import com.app.service.interfaces.IAdminService;
@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
@Autowired
private IAdminDao adminDao;

public AdminServiceImpl() {
	System.out.println("In ctor of"+getClass().getName());
}

	@Override
	public Admin authenticateAdmin(String email, String password) {
		System.out.println("In authenticateAdmin");

		return adminDao.findByEmailAndPassword(email, password);
		
	}

	



}
