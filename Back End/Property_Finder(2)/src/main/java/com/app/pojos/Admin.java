package com.app.pojos;

import javax.persistence.*;

@Entity
@Table(name = "admin")
public class Admin extends BaseEntity {

	@Column(length = 40, unique = true, nullable = false)
	private String email;
	@Column(length = 20, unique = true, nullable = false)
	private String password;

	public Admin() {
		System.out.println("In ctor of " + getClass().getName());
	}

	public Admin(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Admin [email=" + email + ", password=" + password + "]";
	}

}
