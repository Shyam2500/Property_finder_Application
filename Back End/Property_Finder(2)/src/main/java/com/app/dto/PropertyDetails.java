package com.app.dto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.app.pojos.BaseEntity;
import com.app.pojos.Owner;
import com.app.pojos.OwnerChoice;
import com.app.pojos.PropertyType;
import com.app.pojos.Status;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PropertyDetails {
	private Integer id;
	private String propertyName;

	private double price;

	private Owner ownerId;

	private Status status;

	private String propertyAddress;

	private Integer propertyPincode;

	private PropertyType propertyType;

	private OwnerChoice ownerChoice;

	private double sqft;

	private String propertydesc;

	@Lob
	private byte[] image;

	private String imgName;

	private Long contactNo;

	private String cityName;

	public PropertyDetails() {
		System.out.println("In ctor of" + getClass().getName());

	}

	public String getPropertyName() {
		return propertyName;
	}

	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@JsonIgnore
	public Owner getOwnerId() {
		return ownerId;
	}

	@JsonProperty
	public void setOwnerId(Owner ownerId) {
		this.ownerId = ownerId;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public String getPropertyAddress() {
		return propertyAddress;
	}

	public void setPropertyAddress(String propertyAddress) {
		this.propertyAddress = propertyAddress;
	}

	public Integer getPropertyPincode() {
		return propertyPincode;
	}

	public void setPropertyPincode(Integer propertyPincode) {
		this.propertyPincode = propertyPincode;
	}

	public PropertyType getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(PropertyType propertyType) {
		this.propertyType = propertyType;
	}

	public OwnerChoice getOwnerChoice() {
		return ownerChoice;
	}

	public void setOwnerChoice(OwnerChoice ownerChoice) {
		this.ownerChoice = ownerChoice;
	}

	public double getSqft() {
		return sqft;
	}

	public void setSqft(double sqft) {
		this.sqft = sqft;
	}

	public String getPropertydesc() {
		return propertydesc;
	}

	public void setPropertydesc(String propertydesc) {
		this.propertydesc = propertydesc;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public String getImgName() {
		return imgName;
	}

	public void setImgName(String imgName) {
		this.imgName = imgName;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

//	public boolean isApproveFlag() {
////		return approveFlag;
////	}
////
////	public void setApproveFlag(boolean approveFlag) {
////		this.approveFlag = approveFlag;
////	}

	@Override
	public String toString() {
		return "PropertyDetails [propertyName=" + propertyName + ", price=" + price + ", ownerId=" + ownerId
				+ ", status=" + status + ", propertyAddress=" + propertyAddress + ", propertyPincode=" + propertyPincode
				+ ", propertyType=" + propertyType + ", ownerChoice=" + ownerChoice + ", sqft=" + sqft
				+ ", propertydesc=" + propertydesc + ", image=" + Arrays.toString(image) + ", imgName=" + imgName
				+ ", cityName=" + cityName + "]";
	}

	// helping method

//	public void linkPropertydetails(PropertyImage pi) {
//		propertyImages.add(pi);
//		pi.setPropertyDetails(this);
//	}
//
//	public void unlinkPropertydetails(PropertyImage pi) {
//		propertyImages.remove(pi);
//		pi.setPropertyDetails(null);
//	}

}
