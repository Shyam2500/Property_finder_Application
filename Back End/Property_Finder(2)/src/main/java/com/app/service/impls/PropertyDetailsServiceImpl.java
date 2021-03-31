package com.app.service.impls;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IPropertyDetailsDao;
import com.app.exception.NotFoundException;
//import com.app.pojos.Area;
import com.app.pojos.Owner;
import com.app.pojos.OwnerChoice;
import com.app.pojos.PropertyDetails;
import com.app.pojos.PropertyType;
import com.app.service.interfaces.IPropertyDetailsService;
@Service
@Transactional
public class PropertyDetailsServiceImpl implements IPropertyDetailsService {
	@Autowired
	private IPropertyDetailsDao propertyDetailsDao;
	
	public PropertyDetailsServiceImpl() {
		System.out.println("In ctor of "+getClass().getName());
	}

	@Override
	public List<PropertyDetails> getAllPropertyDetails() {
		System.out.println("In getAllProperty");
		List<PropertyDetails>lst=propertyDetailsDao.findAll();
	System.out.println("lst_________________________"+lst);
		return lst;
	}

	@Override
	public PropertyDetails getPropertyDetailsById(int id) {
		System.out.println("In getPropertyDetailsById");
		Optional<PropertyDetails>optionalOwner=propertyDetailsDao.findById(id);
		PropertyDetails propertyDetails=optionalOwner.orElseThrow(()->new NotFoundException("Id is Invalid Owner Not Found"));
		return propertyDetails;
		
	}

	@Override
	public PropertyDetails registerNewPropertyDetails(PropertyDetails propertyDetails) {
		System.out.println("In registerNewPropertyDetails"+propertyDetails);
		return propertyDetailsDao.save(propertyDetails);
	}

	@Override
	public PropertyDetails deletePropertyDetailsById(int id) {
		System.out.println("In deletePropertyDetailsById");
		Optional<PropertyDetails>optionalOwner=propertyDetailsDao.findById(id);
		PropertyDetails propertyDetails=optionalOwner.orElseThrow(()->new NotFoundException("Id is Invalid Owner Not Found"));
		propertyDetailsDao.deleteById(id);
		return propertyDetails;
	}

//	@Override
//	public List<PropertyDetails> getPropertydetailsByCity(City city) {
//		System.out.println("In getPropertydetailsByCity");
//		
//		return propertyDetailsDao.findByCityId(city);
//	}
//	@Override
//	public List<PropertyDetails> getPropertydetailsByArea(List<Area> area) {
//		System.out.println("In getPropertydetailsByArea");
//		return propertyDetailsDao.findByAreaId(area);
//	}
	
//	@Override
//	public List<PropertyDetails> getPropertydetailsByOwnerChoiceAndCity(OwnerChoice ownerChoice, City city) {
//		System.out.println("In getPropertydetailsByOwnerChoiceAndCity");
//		
//		return propertyDetailsDao.findByOwnerChoiceAndCityId(ownerChoice, city);
//	}

	@Override
	public List<PropertyDetails> getPropertyDetailsByOwnerChoice(OwnerChoice ownerchoice) {
		System.out.println("In getPropertyDetailsByOwnerChoice");
		return propertyDetailsDao.findByOwnerChoice(ownerchoice);
		
	}

//	@Override
//	public List<PropertyDetails> getPropertyDetailsByOwnerChoiceAndArea(OwnerChoice ownerChoice, Area area) {
//		System.out.println("In getPropertyDetailsByOwnerChoiceAndArea");
//		return propertyDetailsDao.findByOwnerChoiceAndAreaId(ownerChoice, area);
//	}
//
//	@Override
//	public List<PropertyDetails> getPropertyDetailsByArea(Area area) {
//		System.out.println("In getPropertyDetailsByArea");
//		
//		return propertyDetailsDao.findByAreaId(area);
//	}

	@Override
	public List<PropertyDetails> getPropertydetailsByOwner(Owner owner) {
		System.out.println("In getPropertydetailsByOwner");
		return propertyDetailsDao.findByOwnerId(owner);
	}
//
//	@Override
//	public List<PropertyDetails> getPropertyDetailsByPropertyType(PropertyType propertyType) {
//		System.out.println("In getPropertyDetailsByPropertyType");
//		return propertyDetailsDao.findByPropertyType(propertyType);
//	}

//	@Override
//	public List<PropertyDetails> getPropertyDetailsByAreaAndCity(String cityName) {
//	
//		return propertyDetailsDao.findByAreaCity(cityName);
//	}

	@Override
	public List<PropertyDetails> getPropertyDetailsByPropertyType(PropertyType propertyType) {
		System.out.println("In getPropertyDetailsByPropertyType ");
		return propertyDetailsDao.findByPropertyType(propertyType);
	}

	@Override
	public PropertyDetails updateOwnerNameAndId(int id, Owner owner) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PropertyDetails> getPropertydetailsByCity(String cityName) {
		// TODO Auto-generated method stub
		return propertyDetailsDao.findByCityName(cityName);
	}

//	@Override
//	public PropertyDetails updateOwnerNameAndId(int id, Owner owner) {
//		System.out.println("updateOwnerNameAndId");
//		return propertyDetailsDao.;
//	}

	
	


	
}
