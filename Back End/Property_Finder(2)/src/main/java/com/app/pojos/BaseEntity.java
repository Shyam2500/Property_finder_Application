package com.app.pojos;

import javax.persistence.*;
;

@MappedSuperclass
public class BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column(name = "id", unique = true, nullable = false, updatable = false)
	private Integer id;
	
	public BaseEntity() {
	}

	public Integer getId() {
		return id;
	}
	 public void setId(Integer id) {
		this.id = id;
	}
}
