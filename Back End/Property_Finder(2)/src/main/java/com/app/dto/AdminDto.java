package com.app.dto;

public class AdminDto {
private Integer id;
private String email;
private String password;

public AdminDto() {
	System.out.println("In ctor of"+ getClass().getName());

}

public AdminDto(Integer id, String email, String password) {
	super();
	this.id = id;
	this.email = email;
	this.password = password;
}

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
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
	return "AdminDto [id=" + id + ", email=" + email + ", password=" + password + "]";
}


}
