package com.app;

import java.util.List;

import javax.persistence.EntityManager;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.PropertyDetails;

@SpringBootTest
class PropertyFinderApplicationTests {
@Autowired
private EntityManager manager;

	@Test
	void contextLoads() {
		String jpql="select p from PropertyDetails p where p.areaId.cityId.cityName=:name";
		List<PropertyDetails>pd=manager.createQuery(jpql,PropertyDetails.class)
				.setParameter("name", "mumbai").getResultList();
		pd.forEach(System.out::println);
	}

}
