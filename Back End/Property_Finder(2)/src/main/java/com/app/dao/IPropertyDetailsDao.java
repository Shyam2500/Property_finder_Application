package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

//import com.app.pojos.Area;
import com.app.pojos.Owner;
import com.app.pojos.OwnerChoice;
import com.app.pojos.PropertyDetails;
import com.app.pojos.PropertyType;

@Repository
public interface IPropertyDetailsDao extends JpaRepository<PropertyDetails, Integer>{
	
//List<PropertyDetails> findByCityId(City city);

//List<PropertyDetails> findByOwnerChoiceAndCityId(OwnerChoice ownerChoice,City city);

List<PropertyDetails> findByOwnerChoice(OwnerChoice ownerChoice);
//
//List<PropertyDetails>findByAreaId(Area area);
//
//List<PropertyDetails>findByOwnerChoiceAndAreaId(OwnerChoice ownerChoice,Area area);

List<PropertyDetails>findByOwnerId(Owner owner);

//List<PropertyDetails>findByPropertyType(PropertyType propertyType);

List<PropertyDetails>findByPropertyType(PropertyType propertyType);

List<PropertyDetails>findByCityName(String cityName);

//@Query("select p from PropertyDetails p where p.areaId.cityId.cityName=:name")
//List<PropertyDetails>findByAreaCity(@Param("name")String cityName);

//PropertyDetails findBy



//@Query("select p from PropertyDetails p where p.areaId=:area  and p.area.cityName=:city")
//List<PropertyDetails> findByAreaCity(String city,String area);

}
