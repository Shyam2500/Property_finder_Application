package com.app.pojos;

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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.DeserializationFeature;

@Entity
@Table(name = "property_details")

public class PropertyDetails extends BaseEntity {
	@NotNull
	@Column(name = "property_name", length = 20, nullable = false)
	private String propertyName;
	@NotNull
	@Column(nullable = false)
	private double price;

//	@ManyToOne(targetEntity = PropertyType.class)
//	@JoinColumn(name = "property_type", referencedColumnName = "id")
//	@JsonIgnoreProperties("details")
//	private PropertyType propertyType;

//	@ManyToOne(targetEntity = City.class)
//	@JoinColumn(name = "city_id",referencedColumnName = "id")
//	@JsonIgnoreProperties("propertyDetails")
//	private City cityId;

//	@ManyToOne(targetEntity = Area.class)
//	@JsonIgnoreProperties("details")//rel
//	@JsonIgnore
//	@JoinColumn(name = "area_id", referencedColumnName = "id")
//	private Area areaId;

	@ManyToOne(targetEntity = Owner.class)
	@JoinColumn(name = "owner_id")
	@JsonIgnore
	private Owner ownerId;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Status status;

	@NotNull
	@Column(name = "property_address", length = 60, nullable = false)
	private String propertyAddress;
	@NotNull
	@Column(name = "property_pincode", length = 10, nullable = false)
	private Integer propertyPincode;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	@Column(name = "property_type")
	private PropertyType propertyType ;

	@NotNull
	@Enumerated(EnumType.STRING)
	@Column(name = "owner_choice")
	private OwnerChoice ownerChoice;

	@NotNull
	@Column(name = "sq_ft", length = 10)
	private double sqft;

	
	@NotNull
	@Column(name = "property_desc", length = 60)
	private String propertydesc;

	@Lob
	private byte[] image;
	
	@Column
	private String imgName;
	
	
	@Column
	private Long contactNo;
	
	@NotNull
	@Column(name = "city_name", length = 20,  nullable = false)
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
	//@JsonIgnore
	public Owner getOwnerId() {
		return ownerId;
	}
	//@JsonProperty
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

	public PropertyDetails(@NotNull String propertyName, @NotNull double price, Status status,
			@NotNull String propertyAddress, @NotNull Integer propertyPincode, @NotNull PropertyType propertyType,
			@NotNull OwnerChoice ownerChoice, @NotNull double sqft, @NotNull String propertydesc, byte[] image,
			String imgName, Long contactNo, @NotNull String cityName) {
		super();
		this.propertyName = propertyName;
		this.price = price;
		this.status = status;
		this.propertyAddress = propertyAddress;
		this.propertyPincode = propertyPincode;
		this.propertyType = propertyType;
		this.ownerChoice = ownerChoice;
		this.sqft = sqft;
		this.propertydesc = propertydesc;
		this.image = image;
		this.imgName = imgName;
		this.contactNo = contactNo;
		this.cityName = cityName;
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
	public Long getContactNo() {
		return contactNo;
	}

	public void setContactNo(Long contactNo) {
		this.contactNo = contactNo;
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
		return "PropertyDetails [propertyName=" + propertyName + ", price=" + price
				+ ", status=" + status + ", propertyAddress=" + propertyAddress + ", propertyPincode=" + propertyPincode
				+ ", propertyType=" + propertyType + ", ownerChoice=" + ownerChoice + ", sqft=" + sqft
				+ ", propertydesc=" + propertydesc + ", image=" + Arrays.toString(image) + ", imgName=" + imgName
				+ ", cityName=" + cityName + "]";
	}

	public void enable(DeserializationFeature acceptEmptyStringAsNullObject) {
		// TODO Auto-generated method stub
		
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
