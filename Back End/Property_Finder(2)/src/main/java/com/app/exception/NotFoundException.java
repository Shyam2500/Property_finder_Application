package com.app.exception;

@SuppressWarnings("serial")
public class NotFoundException extends RuntimeException {
public NotFoundException(String msg) {
	super(msg);
}
}
