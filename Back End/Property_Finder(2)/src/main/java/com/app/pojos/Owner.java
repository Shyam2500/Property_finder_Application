package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "owner")

public class Owner extends BaseEntity {
	@NotNull
	@Column(name = "owner_name", length = 20, nullable = false)
	private String ownerName;

	@NotNull
	@Column(length = 12, unique = true, nullable = false)
	private Long mob;

	@NotNull
	@Column(length = 40, unique = true, nullable = false)
	private String email;

	@Column(length = 20, nullable = false)
	private String password;
	@NotNull
	@Column(length = 60, nullable = false)
	private String address;

	@OneToMany(targetEntity = PropertyDetails.class, mappedBy = "ownerId", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	//@JsonIgnoreProperties("ownerId")
	@JsonIgnore
	private List<PropertyDetails> details = new ArrayList<>();

	public Owner() {
		System.out.println("In ctor of " + getClass().getName());

	}

	public Owner(@NotNull String name, @NotNull Long mob, @NotNull String email, @NotNull String password,
			@NotNull String add) {
		super();
		this.ownerName = name;
		this.mob = mob;
		this.email = email;
		this.password = password;
		this.address = add;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<PropertyDetails> getDetails() {
		return details;
	}

	public void setDetails(List<PropertyDetails> details) {
		this.details = details;
	}

	@Override
	public String toString() {
		return "Owner [ownerName=" + ownerName + ", mob=" + mob + ", email=" + email + ", password=" + password
				+ ", address=" + address + "]";
	}

	//helping 
	public void linkPropertyDetails(PropertyDetails pd) {
		details.add(pd);
		pd.setOwnerId(this);
	}
	public void unlinkPropertyDetails(PropertyDetails pd) {
		details.remove(pd);
		pd.setOwnerId(null);
	}
}
