package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

//import com.app.pojos.Area;
import com.app.pojos.Owner;
import com.app.pojos.OwnerChoice;
import com.app.pojos.PropertyDetails;
import com.app.pojos.PropertyType;
//import com.app.service.interfaces.IAreaService;
//import com.app.service.interfaces.ICityService;
import com.app.service.interfaces.IOwnerService;
import com.app.service.interfaces.IPropertyDetailsService;
import com.fasterxml.jackson.databind.DeserializationConfig;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/property_details")
@CrossOrigin
public class PropertyDetailsController {
	@Autowired
	private IPropertyDetailsService propertyDetailsService;
	
//	@Autowired
//	private ICityService cityService;
//	
//	@Autowired
//	private IAreaService areaService;
//	
	@Autowired
	private IOwnerService ownerService;
	
//	@Autowired
//	private IPropertyTypeService propertyTypeService;
	
	public PropertyDetailsController() {
		System.out.println("In ctor of"+getClass().getName());
	}
	@GetMapping("/show_all")
	public List<PropertyDetails>getAllPropertyDetails(){
		System.out.println("in controller");
		return propertyDetailsService.getAllPropertyDetails();
	}

	@GetMapping("/{id}")
	public PropertyDetails getPropertyDetailsById(@PathVariable int id) {
		return propertyDetailsService.getPropertyDetailsById(id);
	}
	@PostMapping("/register")
	public ResponseEntity<?>registerNewPropertyDetails( @RequestParam MultipartFile image,@RequestParam String property){
		//@PathVariable int ownerId,
		try {
//			Owner o1=ownerService.getOwnerById(ownerId);
//			o1.linkPropertyDetails(propertyDetails);
//			Area a1=areaService.
			PropertyDetails detail = new ObjectMapper().readValue(property, PropertyDetails.class);
			//ObjectMapper
			//detail.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
			// detail.configure(DeserializationConfig.Feature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true)
			System.out.println(detail   );
			byte[] pimage = image.getBytes();
			detail.setImage(pimage);
			detail.setImgName(image.getOriginalFilename());
			return new ResponseEntity<>(propertyDetailsService.registerNewPropertyDetails(detail),HttpStatus.CREATED);
		}catch (Exception e) {
			System.out.println(e.getMessage()+"------------");
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?>deletePropertyDetailsById(@PathVariable int id){
		try {
			return new ResponseEntity<>(propertyDetailsService.deletePropertyDetailsById(id),HttpStatus.OK);
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
		
	}
	
//	@GetMapping("/detailsByCity/{id}")
//	public ResponseEntity<?>detailsByCity(@PathVariable int id){
//		try {
//			return new ResponseEntity<>(propertyDetailsService.findByCityId(id),HttpStatus.OK);
//		}catch (RuntimeException e) {
//			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//			}
//		
//	}
//	@GetMapping("/detailsByCity/{cityName}")
//public ResponseEntity<?>getPropertydetailsByCity(@PathVariable String cityName){
//	try {
//		City city=cityService.getByCityName(cityName);
//		return new ResponseEntity<>(propertyDetailsService.getPropertydetailsByCity(city),HttpStatus.OK);
//	}catch (RuntimeException e) {
//		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//	
//	@GetMapping("/detailsByArea/{areaName}")
//	public ResponseEntity<?>getPropertydetailsByArea(@PathVariable String areaName){
//		try {
//			Area area=areaService.getAreaByAreaName(areaName);
//			return new ResponseEntity<>(propertyDetailsService.getPropertyDetailsByArea(area),HttpStatus.OK);
//		}catch (RuntimeException e) {
//			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//			}
	//	}
//	@GetMapping("/detailsByArea/{areaName}")
//	public ResponseEntity<?>getPropertydetailsByArea(@PathVariable String areaName){
//		try {
//			List<Area>area=areaService.getAreaByAreaName(areaName);
//			return new ResponseEntity<>(propertyDetailsService.getPropertydetailsByArea(area),HttpStatus.OK);
//		}catch (RuntimeException e) {
//			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//			}
//		}
//	
	
//	@GetMapping("/detailsByOwnerChoice&City/{ownerChoice}/{cityName}")
//	public ResponseEntity<?>getPropertydetailsByOwnerChoiceAndCity(@PathVariable OwnerChoice ownerChoice,@PathVariable String cityName){
//		try {
//			System.out.println("in methos");
//			City city=cityService.getByCityName(cityName);
//			return new ResponseEntity<>(propertyDetailsService.getPropertydetailsByOwnerChoiceAndCity(ownerChoice, city),HttpStatus.OK);
//		}catch (RuntimeException e) {
//	  		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//			}
//		}
	
//	@GetMapping("/detailsByOwnerChoice&Area/{ownerChoice}/{areaName}")
//	public ResponseEntity<?>getPropertydetailsByOwnerChoiceAndArea(@PathVariable OwnerChoice ownerChoice,@PathVariable String areaName){
//		try {
//			System.out.println("in getPropertydetailsByOwnerChoiceAndArea");
//			Area area=areaService.getAreaByAreaName(areaName);
//			return new ResponseEntity<>(propertyDetailsService.getPropertyDetailsByOwnerChoiceAndArea(ownerChoice, area),HttpStatus.OK);
//		}catch (RuntimeException e) {
//	  		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//			}
//		}
	
@GetMapping("/detailsByOwnerChoice/{ownerChoice}")
	public ResponseEntity<?> getPropertyDetailsByOwnerChoice(@PathVariable OwnerChoice ownerChoice){
		try {
			
			return new ResponseEntity<>(propertyDetailsService.getPropertyDetailsByOwnerChoice(ownerChoice),HttpStatus.OK);
		}catch (RuntimeException e) {
	  		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	
@GetMapping("/detailsByOwner/{ownerName}")
public ResponseEntity<?> getPropertyDetailsByOwner(@PathVariable String ownerName){
	try {
		Owner owner=ownerService.getByOwnerName(ownerName);
		List<PropertyDetails> props = owner.getDetails();
		return new ResponseEntity<>(props,HttpStatus.OK);
	}catch (RuntimeException e) {
  		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
}

@GetMapping("/detailsByPropertyType/{propertyTypeName}")
public ResponseEntity<?> getPropertyDetailsByPropertyType(@PathVariable PropertyType propertyTypeName){
	try {

		return new ResponseEntity<>(propertyDetailsService.getPropertyDetailsByPropertyType(propertyTypeName),HttpStatus.OK);
	}catch (RuntimeException e) {
  		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
}

//@GetMapping("/detailsByCity/{cityName}")
//public ResponseEntity<?> getPropertyDetailsByCity(@PathVariable String cityName){
//	try {
//		
//		return new ResponseEntity<>(propertyDetailsService.getPropertyDetailsByAreaAndCity(cityName),HttpStatus.OK);
//	}catch (RuntimeException e) {
//  		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//}
@GetMapping("/images/{id}")
public ResponseEntity<byte[]> getFile(@PathVariable Integer id) {
	System.out.println("in get file " + id);
	PropertyDetails p = propertyDetailsService.getPropertyDetailsById(id);

	return ResponseEntity.ok()
			.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + p.getImgName() + "\"")
			.body(p.getImage());
}

@GetMapping("/detailsByCity/{cityName}")
public ResponseEntity<?>getPropertydetailsByCity(@PathVariable String cityName){
try {
	
	return new ResponseEntity<>(propertyDetailsService.getPropertydetailsByCity(cityName),HttpStatus.OK);
}catch (RuntimeException e) {
	return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
	}
}




}