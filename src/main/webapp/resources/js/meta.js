

var meta=meta || {};
meta.common=(function(){
  var init=function(ctx){
      
	  onCreate();
     
      meta.session.init(ctx);
      meta.index.init();
   };
   var onCreate=function(){
      setContentView();
   };
   var setContentView=function(){};
   return { init:init };
})();
meta.index=(function(){
   var $wrapper,$navbar,$container,ctx,img,js,css,
      temp,algo;
   var init=function(){
         js=$$('j');
         ctx=$$('x');
         temp=js+'/template.js';
         algo=js+'/algo.js';
         $navbar=$('#navbar');
         $container=$('#container');
         img=$$('i');
         $searchBtn=$('#searchBtn');
         $tbody=$('#tbody');
         onCreate();
      };
       /*/// 색상
      <span class="label label-default">Default</span>
      <span class="label label-primary">Primary</span>
      <span class="label label-success">Success</span>
      <span class="label label-info">Info</span>
      <span class="label label-warning">Warning</span>
      <span class="label label-danger">Danger</span>*/
      var onCreate=function(){
          $.getScript(temp,(x,y)=>{
        	 $container.append(compUI.div('content')).css({'width':'100%'});
        	 $('#content').css({'width':'50%','margin':'0 auto'}).append(compUI.image('loading',img+'/123.gif'));
        	 $('#loading').after(compUI.h1('h-btn'));
             $('#h-btn').append(compUI.span('btn')).attr('display','inline');
             $('#btn').html('알고리즘').addClass('label label-default');
             $('#h-btn').append(compUI.span('btn2')).attr('display','inline');
             $('#btn2').html('회원관리').addClass('label label-info').css({'margin-left' : '10px'});
             $('#h-btn').append(compUI.span('btn3')).attr('display','inline');
             $('#btn3').html('게시판').addClass('label label-warning').css({'margin-left' : '10px'});
             $('#btn2').click(()=>{
            	 alert('회원관리');
             });
            
             
             $('#btn3').click(()=>{
            	 alert('게시판');
            	 meta.navbar.init();
            	 
            	 //location.href=ctx+'/get/board/list';  //리스트를 조회해서 가지고옴 (get)
            	 var url=ctx+'/get/board/list';
            	 
            	 $navbar.html(introUI.navbar());
            	
            	 $.getJSON(url,data=>{
            		 alert('x msg is'+data.ddd);
            		 $container.html(introUI.board());
            		 $('#h-btn').append(compUI.span('searchBtn')).attr('display','inline');
            		 //검색버튼
            		
            	/*	 var a=[
            				{
            					a : 1,
            					b : '한국',
            					c : '안녕',
            					d : '길동',
            					e : '2017-09-17',
            					f : 10
            				},
            				{
            					a : 2,
            					b : '일본',
            					c : '곤니찌와',
            					d : '아베',
            					e : '2017-09-10',
            					f : 20
            				},
            				{
            					a : 3,
            					b : '미국',
            					c : '헬로우',
            					d : '제이슨',
            					e : '2017-09-11',
            					f : 30
            				},
            				{
            					a : 4,
            					b : '중국',
            					c : '닌하오',
            					d : '시진핑',
            					e : '2017-09-21',
            					f : 40
            				},
            				{
            					a : 5,
            					b : '태국',
            					c : '사와디탑',
            					d : '옹박',
            					e : '2017-09-23',
            					f : 50
            				}
            			];*/
            		 
            		 var tr='';
                     alert('결과:'+data.result);
                     $.each(data.list,(i,j)=>{//JSON배열 - a는 array(배열), i는 index, j는 object의 j
                     tr+='<tr style="height: 25px;">'
                        +'<td >'+j.articleSeq+'</td>'
                        +'<td >'+j.content+'</td>'
                        +'<td >'+j.title+'</td>'
                        +'<td >'+j.id+'</td>'
                        +'<td >'+j.regdate+'</td>'
                        +'<td >'+j.hitCount+'</td>'
                        +'</tr>';
                     });
                     $('#tbody').html(tr);	
            		
            	
            		
            		 
            		 
            		 $('#searchBtn').click(()=>{
            			 alert('검색');
            		 });	 
            		 $('#addBtn').click(()=>{
            			 alert('검색');
            		 });
            	 });
             });
             
             $('#btn').click(()=>{
            	
                $container.empty();
                //meta.auth.init();   
                meta.navbar.init();
                $container.html(algoUI.series());
                
            
             
             });
          });
          };
   return {init:init};
})();

meta.auth=(function(){
   var $wrapper,ctx,img,js,css,temp;
   var init=function(){
      onCreate();
      $wrapper=$('#wrapper');
      img=$$('i');
      js=$$('j');
      temp=js+'/template.js';
   };
   var onCreate=function(){setContentView();};
   var setContentView=function(){
      $.getScript(temp,(i)=>{
         $wrapper.append(intro.login(img));
         $('#login_input').after(meta.comp.input(
               {
                  type : 'button',
                  id : 'login_btn',
                  value : '로그인'
               }
            ));
            $('#login_box').append(meta.comp.input(
               {
                  type : 'button',
                  id : 'cancel_btn',
                  value : '취소'
               }
            ));
      });
      
   };
   var joinView=function(){};
   return {
      init : init
   };
})();
meta.navbar=(function(){
   var algo,js,temp,$container;
   var init=function(){
      js=$$('j');
      $container=$('#container');
      algo=js+'/algo.js';
      temp=js+'/template.js';
      onCreate();
      
      /*algo=js+'/algo.js';*/
      
   };
   var onCreate=function(){
      $.getScript(temp,function(){
         var $u1=$("#navbar_ul_stu");
         var $u2=$("#navbar_ul_grade");
         var $u3=$("#navbar_ul_board");
         $u1.addClass("dropdown-menu");
         $u2.addClass("dropdown-menu");
         $u3.addClass("dropdown-menu");
         $('#navbar').html(introUI.navbar());
         $('#container').html(algoUI.series());
         $('#start_txt').after(compUI.input('start','text'));
         $('#start').attr('placeholder','시작값');
         $('#end_txt').after(compUI.input('end','text'));
         $('#end').attr('placeholder','끝값');
         $('#result').before(compUI.input('resultBtn','button'));
         $('#resultBtn').val('결과보기');
         $('#resultBtn').click(()=>{
            $.getScript(algo,(x1,x2)=>{
               $('#result').text('결과 : '+
                     series.arithmetic(
                           $('#start').val(),
                           $('#end').val()
                     ));
            });
         });
         $('.dropdown-menu a').eq(0).on('click',function(){
            //app.controller.moveTo('member','member_add');
         });
         $('.dropdown-menu a').eq(1).on('click',function(){
            //app.member.list(1);
         });
         $('.dropdown-menu a').eq(2).on('click',function(){
            //app.controller.moveTo('member','member_detail');
         });
         $('.dropdown-menu a').eq(3).on('click',function(){
            //app.controller.deleteTarget('hong','member','member_delete');
         });
         $('.dropdown-menu a').eq(4).on('click',function(){
            //app.controller.moveTo('grade','grade_add');
         });
         $('.dropdown-menu a').eq(5).on('click',function(){
            //app.controller.moveTo('hong','grade','grade_list');
         });
         $('.dropdown-menu a').eq(6).on('click',function(){
            //app.controller.moveTo('grade','grade_detail');
         });
         $('.dropdown-menu a').eq(7).on('click',function(){
            //app.controller.deleteTarget('hong','grade','grade_delete');
         });
         $('.dropdown-menu a').eq(8).on('click',function(){
            //app.controller.moveTo('board','board_write');
         });
         $('.dropdown-menu a').eq(9).on('click',function(){
            //app.controller.moveTo('board','board_list');
         });
         $('.dropdown-menu a').eq(10).on('click',function(){
            //app.controller.moveTo('board','board_detail');
         });
         $('.dropdown-menu a').eq(11).on('click',function(){
            //app.controller.deleteTarget('hong','board','board_delete');
         });
         $('#arithBtn').on('click',function(){
            $container.html(algoUI.series());
            $('#start_txt').after(compUI.input('start','text'));
            $('#start').attr('placeholder','시작값');
            $('#end_txt').after(compUI.input('end','text'));
            $('#end').attr('placeholder','끝값');
            $('#result').before(compUI.input('resultBtn','button'));
            $('#resultBtn').val('결과보기');
            $('h1').html('등차수열의 합');
            $('#resultBtn').click(()=>{
               $.getScript(algo,(x1,x2)=>{
                  $('#result').text('결과 : '+
                        series.arithmetic(
                              $('#start').val(),
                              $('#end').val()
                        ));
               });
            });
         });
         $('#switchBtn').click(()=>{
            $container.html(algoUI.series());
            $('#start_txt').after(compUI.input('start','text'));
            $('#start').attr('placeholder','시작값');
            $('#end_txt').after(compUI.input('end','text'));
            $('#end').attr('placeholder','끝값');
            $('#result').before(compUI.input('resultBtn','button'));
            $('#resultBtn').val('결과보기');
            $('h1').html('스위치수열의 합');
            $('#start').val('1').attr('readonly','true');
            $('#end').val('100').attr('readonly','true');
            $('#resultBtn').click(()=>{
               $.getScript(algo,()=>{
                  $('#result').text('결과값'+series.switchSeries());
               });
            })
         });
         $('#geoBtn').click(()=>{
             $container.html(algoUI.series());
             $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','시작값');
             $('#end_txt').after(compUI.input('end','text'));
             $('#end').attr('placeholder','끝값');
             $('#result').before(compUI.input('resultBtn','button'));
             $('#resultBtn').val('결과보기');
             $('h1').html('등비수열의 합');
             $('#start').val('1').attr('readonly','true');
             
             $('#resultBtn').click(()=>{
                $.getScript(algo,()=>{
                   $('#result').text('결과값'+series.geo($('#end').val()));
                });
             })
          });
         $('#facBtn').click(()=>{
             $container.html(algoUI.series());
             $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','시작값');
             $('#end_txt').after(compUI.input('end','text'));
             $('#end').attr('placeholder','끝값');
             $('#result').before(compUI.input('resultBtn','button'));
             $('#resultBtn').val('결과보기');
             $('h1').html('팩토리얼의 합');
             $('#start').val('1').attr('readonly','true');
         
             $('#resultBtn').click(()=>{
                $.getScript(algo,()=>{
                   $('#result').text('결과값'+series.facth($('#end').val()));
                });
             })
          });
         $('#fiboBtn').click(()=>{
        	 $container.html(algoUI.series());
             $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','시작값');
             $('#end_txt').after(compUI.input('end','text'));
             $('#end').attr('placeholder','끝값');
             $('#result').before(compUI.input('resultBtn','button'));
             $('#resultBtn').val('결과보기');
             $('h1').html('피보나치의 합');
            
             $('#resultBtn').click(()=>{
                $.getScript(algo,()=>{
                   $('#result').text('결과값'+series.fibona());
                });
             })
          });
       //선택//
         
         $('#selBtn').click(()=>{
             
             alert('selection clicked');
             $container.html(algoUI.sort());
             $('h1').html('선택 정렬').css('font-weight','bold');
             $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','숫자를 입력하여 주세요 ');
             $('#start').after(compUI.input('submitBtn','button'));
             $('#submitBtn').val('입력');
             
             var rs = new Array();
             
             $('#submitBtn').click(()=>{
                rs.push($('#start').val());
                $('#start').val('');
             });
             $('#result').before(compUI.input('resultBtn','button'));
             $('#resultBtn').val('결과값');
             $('#resultBtn').click(()=>{
                $.getScript(algo,()=>{
                   $('#result').text('결과 값: '+sort.selection(rs));
                });
             });
          });
         
         //버블 //
         $('#burbleBtn').click(()=>{
        	 alert('버블');
        	 $container.html(algoUI.sort());
        	 $('h1').html('버블 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','숫자를 입력하여 주세요 ');
             $('#start').after(compUI.input('submitBtn','button'));
             $('#submitBtn').val('입력');
             
        	 var bbb = new Array();
        	 $('#submitBtn').click(()=>{
        		 bbb.push($('#start').val());
                 $('#start').val('');
              });
        	 $('#result').before(compUI.input('resultBtn','button'));
        	 $('#resultBtn').val('결과값');
             $('#resultBtn').click(()=>{
        	 $.getScript(algo,()=>{
                 $('#result').text('결과 값: '+sort.bubble(bbb));
              });
             });
         });
         
         //삽입//
         $('#insertBtn').click(()=>{
        	 alert('삽입');
        	 $container.html(algoUI.sort());
        	 $('h1').html('삽입 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','숫자를 입력하여 주세요 ');
             $('#start').after(compUI.input('submitBtn','button'));
             $('#submitBtn').val('입력');
             
        	 var bbb = new Array();
        	 $('#submitBtn').click(()=>{
        		 bbb.push($('#start').val());
                 $('#start').val('');
              });
        	 $('#result').before(compUI.input('resultBtn','button'));
        	 $('#resultBtn').val('결과값');
             $('#resultBtn').click(()=>{
            	 alert('tttt');
        	 $.getScript(algo,()=>{
                 $('#result').text('결과 값: '+sort.insertion(bbb));
              });
             });
         });
       
         $('#rankBtn').click(()=>{
        	 alert('랭킹');
        	 $container.html(algoUI.sort());
        	 $('h1').html('랭킹 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','숫자를 입력하여 주세요 ');
             $('#start').after(compUI.input('submitBtn','button'));
             $('#submitBtn').val('입력');
             
        	 var bbb = new Array();
        	 $('#submitBtn').click(()=>{
        		 bbb.push($('#start').val());
                 $('#start').val('');
              });
        	 $('#result').before(compUI.input('resultBtn','button'));
        	 $('#resultBtn').val('결과값');
             $('#resultBtn').click(()=>{
            	
        	 $.getScript(algo,()=>{
                 $('#result').text('결과 값: '+sort.ranking(bbb));
              });
             });
         });
         $('#binSearchBtn').click(()=>{
        	 alert('이분정렬');
        	 $container.html(algoUI.sort());
        	 $('h1').html('이분 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','숫자를 입력하여 주세요 ');
             $('#start').after(compUI.input('submitBtn','button'));
             $('#submitBtn').val('입력');
             
        	 var bbb = new Array();
        	 $('#submitBtn').click(()=>{
        		 bbb.push($('#start').val());
                 $('#start').val('');
              });
        	 $('#result').before(compUI.input('resultBtn','button'));
        	 $('#resultBtn').val('결과값');
             $('#resultBtn').click(()=>{
            	 alert('결과값');
        	 $.getScript(algo,()=>{
                 $('#result').text('결과 값: '+sort.even(bbb));
              });
             });
        	 
         });
         $('#mergeBtn').click(()=>{
        	 alert('병합');
         });
         $('#stackBtn').click(()=>{
        	 alert('스택');
         });
         $('#55Btn').click(()=>{
        	 alert('기본5행 5열');
         });
         $('#samBtn').click(()=>{
        	 alert('직각삼각형');
         });
         $('#gigoBtn').click(()=>{
        	 alert('지그재그');
         });
         $('#diaBtn').click(()=>{
        	 alert('다이아몬드');
         });
         $('#moreBtn').click(()=>{
        	 alert('모래시계');
         });
         $('#rightBtn').click(()=>{
        	 alert('오른쪽 빈삼각형');
         });
         $('#leeBtn').click(()=>{
        	 alert('이등변삼각형');
         });
         $('#90Btn').click(()=>{
        	 alert('90도 회전');
         });
         $('#dalBtn').click(()=>{
        	 alert('달팽이');
         });
         $('#degakBtn').click(()=>{
        	 alert('대각선채우기');
         });
         $('#maBtn').click(()=>{
        	 alert('마방진');
         });
         $('#hangBtn').click(()=>{
        	 alert('행렬변환');
         });
       
         
         
      });
   };

   return {init:init};
})();


meta.session=
   {
      init : (x)=>{
            sessionStorage.setItem('x',x);
            sessionStorage.setItem('j',x+'/resources/js');
            sessionStorage.setItem('c',x+'/resources/css');
            sessionStorage.setItem('i',x+'/resources/img');
              },
      getPath : (x)=>{
            return sessionStorage.getItem(x);
              }
   };
var $$= function(x){return meta.session.getPath(x);};
        
