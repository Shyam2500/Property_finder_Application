package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user")
public class User extends BaseEntity {
	@NotNull
	@Column(name = "user_name", length = 20, nullable = false)
	private String userName;
	@NotNull
	@Column(length = 12, unique = true, nullable = false)
	private Long mob;
	@NotNull
	@Column(length = 40, unique = true, nullable = false)
	private String email;
	@NotNull
	@Column(length = 20, nullable = false)
	private String password;

	public User() {
		System.out.println("In ctor of" + getClass().getName());
	}

	public User(@NotNull String name, @NotNull Long mob, @NotNull String email, @NotNull String password) {
		super();
		this.userName = name;
		this.mob = mob;
		this.email = email;
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Long getMob() {
		return mob;
	}

	public void setMob(Long mob) {
		this.mob = mob;
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
		return "User ["+super.getId()+"   " +"userName=" + userName + ", mob=" + mob + ", email=" + email + ", password=" + password + "]";
	}

}
