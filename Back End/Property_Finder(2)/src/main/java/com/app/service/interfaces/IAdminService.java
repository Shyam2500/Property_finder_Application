package com.app.service.interfaces;

import com.app.pojos.Admin;

public interface IAdminService {
	
 Admin authenticateAdmin(String email, String password);
 
}
