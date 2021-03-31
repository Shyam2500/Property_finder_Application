package com.app.service.interfaces;

import java.util.List;

//import com.app.pojos.Area;
import com.app.pojos.Owner;
import com.app.pojos.OwnerChoice;
import com.app.pojos.PropertyDetails;
import com.app.pojos.PropertyType;
import com.app.pojos.User;

public interface IPropertyDetailsService {
	
	public List<PropertyDetails> getAllPropertyDetails();
	
	public PropertyDetails registerNewPropertyDetails(PropertyDetails propertyDetails);
	
	public PropertyDetails deletePropertyDetailsById(int id);
	
	public PropertyDetails getPropertyDetailsById(int pId);
	
	//public List<PropertyDetails> getPropertydetailsByCity(City city);
	
//	public List<PropertyDetails> getPropertyDetailsByArea(Area area);
	
	public List<PropertyDetails> getPropertyDetailsByPropertyType(PropertyType propertyType);
	
	//public List<PropertyDetails> getPropertydetailsByOwnerChoiceAndCity(OwnerChoice ownerChoice,City city);
	
	public List<PropertyDetails> getPropertyDetailsByOwnerChoice(OwnerChoice ownerchoice);

//	public List<PropertyDetails> getPropertyDetailsByOwnerChoiceAndArea(OwnerChoice ownerChoice,Area area);
	
	public List<PropertyDetails> getPropertydetailsByOwner(Owner owner);
	
	//public List<PropertyDetails> getPropertyDetailsByPropertyType(PropertyType propertyType); 
	
	//public List<PropertyDetails> getPropertyDetailsByAreaAndCity(String cityName);
	
	public PropertyDetails updateOwnerNameAndId(int id,Owner owner);

	public List<PropertyDetails> getPropertydetailsByCity(String cityName);
}
