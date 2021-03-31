package com.app.dto;

public class UserDto {
	private Integer id;
	private String email;
	private String password;
	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserDto(Integer id, String email, String password) {
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
		return "UserDto [id=" + id + ", email=" + email + ", password=" + password + "]";
	}
	
	

}
