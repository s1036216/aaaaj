package com.gms.web.mapper;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.gms.web.board.Article;
import com.gms.web.command.Command;
@Repository 
public interface BoardMapper {
	public void insert(Command cmd);
	public String countArticles(Command cmd);
	public List<Article> selectSome(Command cmd); 
	public Article selectOne(Command cmd);
	public void update(Command cmd);
	public void delete(Command cmd);
}
