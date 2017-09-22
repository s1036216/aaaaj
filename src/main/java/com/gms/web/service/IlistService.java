package com.gms.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

@FunctionalInterface
public interface IlistService {
	public List<?> execute(Object o);
}
