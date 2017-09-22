//수열
var series = {
				   arithmetic : (s,e) =>{
				      var sum = 0;
				      var start = s * 1;
				      var end = e * 1;
				      for (var i = start; i <= end; i++) {
				         sum += i;
				      }
				      return sum;
				   },
				   switchSeries : ()=>{
				      var sum = 0;
				      var i=0;
				      var sw = 0;
				      do{
				         i++;
				         if(sw==0){
				            sum+=i;
				            sw=1;
				         }else{
				            sum-=i;
				            sw=0;
				         }
				      }while(i<100);
				      return sum;   
				   },
				   geo : x=>{
					   var  i=0;
					   var  j=0;
					   var  k=0;
					  
					   do{	i++;
					   		j+=i;
					   		k+=j;
						   
					   }while(i<x*1);
					   
					   return k;
					 },
					 facth : x=>{
						 var i,j,k;
						 i=1;
						 k=1;
						j=1;
						 
						 do{
							 i++;
					            j*=i;
					            k+=j;
						 }while(i<x*1);
						 return k;
					 },
					 fibona : ()=>{
						 
						 var a,b,y,n,k,c;
						 a=1;
						 b=1;
						 y=2;
						 x=20;
						 for(k=3;k<=x;k++)
							 {
							 c=a+b;
							 y +=c;
							 a=b;
							 b=c;
							 }

								return y;
					 }
			};
// 배열
var sort={ 
		selection :(x)=>{
	         var arr = new Array();
	         arr = x;
	         alert('선택정렬-----> '+arr.length);
	         var temp=0, min=0;
	       for(var i=0; i<arr.length-1; i++){
	            min = i;
	            for(var j=i+1; j<=arr.length-1; j++){
	               if(arr[min]*1>arr[j]*1){
	                 min = j;
	               };
	            };
	            temp = arr[min];
	            arr[min]=arr[i];
	            arr[i]=temp;
	         };
	       return arr;
	     },
		
	    bubble : (x)=>{
	         alert('버블정렬-----> '+x);
	         var arr = new Array();
	         arr = x;
	         alert('버블정렬-----> '+arr.length);
	         var temp=0;
	         
	         for(var i=0; i<arr.length; i++){
	            for(var j=0; j<arr.length; j++){
	               if(arr[j]>arr[j+1]){
	                  temp = arr[j];
	                  arr[j]=arr[j+1];
	                  arr[j+1]=temp;
	               };
	            };
	         };
	         return arr;
	      },
		insertion : (items)=>{
			 for (i=0; i < items.length; i++) {
			        var value = items[i];
			        var j;
			        for (j=i-1; j > -1 && items[j] > value; j--) 
			            items[j+1] = items[j];
			            
			        items[j+1] = value;
			    }
			    
			    return items;
			},
			ranking : (x)=>{
		         alert('석차구하기-----> '+x);
		         var arr = new Array();
		         var rank = new Array();
		         arr = x;
		              
		         for(var i=0; i<arr.length; i++){
		            rank[i] = 1;
		         };
		         alert('랭킹-----> '+rank);
		         for(var i=0; i<arr.length; i++){
		            for(var j=0; j<arr.length; j++){
		               if(arr[i]<arr[j]){
		                  rank[i]++;
		               };
		            };
		         };
		         return rank;
		      },
		      even : (x)=>{
		    	  
		      }
			
}

var mtx={
		55:()=>{
			
		},
		sam : ()=>{
			
		},
		gigo : ()=>{
			
		},
		dia : ()=>{
			
		},
		more : ()=>{
			
		},
		right : ()=>{
			
		},
		lee : ()=>{
			
		},
		90 : ()=>{
			
		},
		dal : ()=>{
			
		},
		degak : ()=>{
			
		},
		ma : ()=>{
			
		},
		hang : ()=>{
			
		}
	
		
				
}
var math={}
var appl={}