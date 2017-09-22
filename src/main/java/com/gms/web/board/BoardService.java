package com.gms.web.board;
import java.util.List;

import org.springframework.stereotype.Component;

import com.gms.web.board.Article;
@Component
public interface BoardService {
	public void post(Object O);
	public List<?> list(Object O);
	public Object get(Object O); 
	public void put(Object O);
	public void delete(Object O);
}
