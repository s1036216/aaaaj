var introUI={
		board : ()=>{
	        var tbl='<table id="tbl" border=1 class=" width-80pro border-collapse margin-center">'
	              +'<thead><tr style="height: 25px;">';
	        var a=[{width:'20%',txt:'NO'},
	              {width:'36%',txt:'제 목'},
	               {width:'15%',txt:'내 용'},
	               {width:'15%',txt:'글쓴이'},
	               {width:'15%', txt:'작성일'},
	               {width:'9%',txt:'조회수'}];
	        $.each(a,(i,j)=>{
	           tbl+='<th style="width: '+j.width+'; text-align: center;">'+j.txt+'</th>'
	        });
	        tbl+='</tr></thead><tbody id="tbody">';
	        tbl+='</tbody></table></div>'
	           return tbl;
	},
		     
   navbar : ()=>{
      return '<nav class="navbar navbar-inverse">'
      +'  <div class="container-fluid">'
      +'    <div class="navbar-header">'
      +'      <a class="navbar-brand" href="#">GMS</a>'
      +'    </div>'
      +'    <ul class="nav navbar-nav">'
      +'      <li class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">회원관리 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_stu" class="dropdown-menu">'
      +'            <li><a>학생추가</a></li>'
      +'            <li><a>학생목록</a></li>'
      +'            <li><a>학생조회</a></li>'
      +'            <li></li>'
      +'            <li><a>학생삭제</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_grade" class="dropdown-menu">'
      +'            <li><a>성적추가</a></li>'
      +'            <li><a>성적목록</a></li>'
      +'            <li><a>성적조회</a></li>'
      +'            <li></li>'
      +'            <li><a>성적삭제</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_board" class="dropdown-menu">'
      +'           <li><a>게시글추가</a></li>'
      +'            <li><a>게시글목록</a></li>'
      +'            <li><a>게시글조회</a></li>'
      +'            <li></li>'
      +'            <li><a>게시글삭제</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_board" class="dropdown-menu">'
      +'           <li><a id="arithBtn">등차수열</a></li>'
      +'            <li><a id="switchBtn">스위치수열</a></li>'
      +'            <li><a id="geoBtn">등비수열</a></li>'
      +'            <li><a id="facBtn">팩토리얼</a></li>'
      +'            <li><a id="fiboBtn">피보나치</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배 열 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_board" class="dropdown-menu">'
      +'           <li><a id="selBtn">선택 정렬</a></li>'
      +'            <li><a id="burbleBtn">버블 정렬</a></li>'
      +'            <li><a id="insertBtn">삽입 정렬</a></li>'
      +'            <li><a id="rankBtn">석차 정렬</a></li>'
      +'            <li><a id="binSearchBtn">이분검색</a></li>'
      +'            <li><a id="mergeBtn">병합</a></li>'
      +'            <li><a id="stackBtn">스택</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">행 렬<span class="caret"></span></a>'
      +'          <ul id="navbar_ul_board" class="dropdown-menu">'
      +'           <li><a id="55Btn">기본5행 5열</a></li>'
      +'            <li><a id="samBtn">직각삼각형</a></li>'
      +'            <li><a id="gigoBtn">지그재그</a></li>'
      +'            <li><a id="diaBtn">다이아몬드</a></li>'
      +'            <li><a id="moreBtn">모래시계</a></li>'
      +'            <li><a id="rightBtn">오른쪽 빈삼각형</a></li>'
      +'            <li><a id="leeBtn">이등변삼각형</a></li>'
      +'            <li><a id="90Btn">90도 회전</a></li>'
      +'            <li><a id="dalBtn">달팽이</a></li>'
      +'            <li><a id="degakBtn">대각선채우기</a></li>'
      +'            <li><a id="maBtn">마방진</a></li>'
      +'            <li><a id="hangBtn">행렬변환</a></li>'
      +'          </ul>'
      +'        </li>'
      +'    </ul>'
      +'    <span class="float-right">${user.name} &nbsp;'
      +'       <a id="logout" >로그아웃</a></span>'
      +'  </div>'
      +'</nav>';
   }
};
var compUI={
		br : x=>{return $('<br/>')},
		div : x=>{return $('<div/>',{id:x});},  //돔방식 리턴 받을때 append, after..
		div11 : ()=>{return '';},   // 스트링방식     리턴 받을때 html.
		image : (x,y)=>{return $('<img/>',{id : x, src : y});},
		input : (x,y)=>{return $('<input/>',{id : x, type : y});},
		h1 : x=>{return $('<h1/>',{id:x});},
		h2 : x=>{return $('<h2/>',{id:x});},
		h3 : x=>{return $('<h3/>',{id:x});},
		span : x=>{return $('<span/>',{id:x});},
		iTxt : x=>{return $('<input/>',{id:x ,type :'text'});},
		aBtn : x=>{return $('<a/>',{href:'#' , role :'button' , id:x });},
		}
var algoUI={
   series : ()=>{
      return '<div id="content">'
         +'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
         +'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
         +'<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>'
         +'<div id="result"></div>';
   } ,
  
	   sort : ()=>{
		      return '<div id="content">'
		       +'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
		       +'<span id="start_txt">숫자 입력: &nbsp;&nbsp;</span>'
		      
		       +'<div id="result"></div>';
		   }
		
};

		  