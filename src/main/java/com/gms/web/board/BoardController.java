package com.gms.web.board;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IlistService;

@RestController

public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);

	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;
	
	public @ResponseBody Map<?,?> post(){
		
		return null;
	}
	
	@RequestMapping("/get/{cate}/list")
	public @ResponseBody Map<?,?> boardList(@PathVariable String cate) {
		logger.info("BoardController::::: boardDelete {}","진입");
		Map<String,Object> map=new HashMap<>();
		IlistService listSercice=null;
		switch (cate) {
		case "board": 
			cmd=null;
			listSercice=(x)->{
					return boardMapper.selectSome(cmd);
			};
			System.out.println("123123"+listSercice);
			map.put("result","성공");
			
			map.put("list",listSercice.execute(cmd));
			System.out.println("213123123"+listSercice.execute(cmd));
			break;		
		case "grade": 
			cmd=null;
			/*listSercice=(x)->{
					return gradeMapper.selectSome(cmd);
			};
			map.put("list",listSercice.execute(cmd));*/		
			break;	
		
		}
		System.out.println("보드에 들어옴");
		
		
		return map;
	}
	public @ResponseBody Map<?,?> get(){
		return null;
	}
	public @ResponseBody Map<?,?> put(){
		return null;
	}
	public @ResponseBody Map<?,?> delete(){
		return null;
	}
	
}
