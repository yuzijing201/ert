$(function(){
	

//					下拉单

				var xl=$('body').width();
				
			$('.xcp').css({'width':xl+'px','margin-left':-xl/2+'px'})
			 
			 $(window).resize(function(){
			 	
			 	var xl=$('body').width();
			 	
			 	$('.xcp').css({'width':xl+'px','margin-left':-xl/2+'px'})
			 })


			$('.wk .zl .li').mouseenter(function(){
				
				$(this).find('.xcp').show().stop().animate({'height':'230px'},200);
				$(this).siblings('li').find('.xcp').css({'height':'230px'}).hide();
			})

			
			$('.ul').mouseleave(function(){
				
				$(this).find('.xcp').stop().animate({'height':'0px'},200);
			})

//									下拉单结束











//					轮播图开始			
//	定义一个变量
	var namb=0;



//		公用函数

			function gyhs(){

	
//		找到id为box里的所有img标签让nun号元素淡入,让img的兄弟元素淡出
		$('.bigbox .img').eq(namb).stop().fadeIn(500).siblings('.img').stop().fadeOut(500);
//		找到ul里面的所有li让num号li添加class名为do,让他所有的兄弟元素移除class do
		$('.bigbox .dk li').eq(namb).addClass('do').siblings('li').removeClass('do');
		}


//		定时器函数
		function ds(){
//		自增
		namb++;
		
		if(namb==6){
			namb=0;
		}
		
		gyhs();
}		


//	设定一个定时器
	  var time=setInterval(ds,1000);


	
		
	
	
//	添加移入事件
		$('.bigbox').mouseenter(function(){
//			清理定时器
			clearInterval(time);
		})
	
//	添加移出事件
	
		$('.bigbox').mouseleave(function(){
//			恢复定时器
			time=setInterval(ds,1000);
		})
	
	
//	给左右添加点击事件
		
		$('.bigbox .lft').click(function(){
			
			namb--;
			if(namb==-1){
				namb=5;
			}
			
			gyhs();
		})
	
	
		$('.bigbox .rat').click(function(){
			
			namb++;
			if(namb==6){
				namb=0;
			}
		
			gyhs();
		})
	
	
	
//	给li添加移入事件
		$('.bigbox .dk li').mouseenter(function(){
			
//			获得li标签的序号
			namb=$(this).index();
		
		
//		调用函数
		gyhs();
		
		})
	
	
//	轮播图结束



//明星单品

//		定义一个变量
		var doo=0;
		
//		设置一个定时器
		var sj=setInterval(tt,3000);
		
		function tt(){
			
//			自增
			doo++;
			if(doo==2){
				doo=0;
			}
			
			$('.bos').stop().animate({'left':-1226*doo+'px'})
			
			if(doo==0){
				$('#md div').eq(doo).addClass('left').siblings('div').removeClass('left');
			}else if(doo==1){
				$('#md div').eq(doo).addClass('left').siblings('div').removeClass('left');
			}
				
		}
		

		$('#jkl .gt').hover(function(){
			clearInterval(sj);
		},function(){
			sj=setInterval(tt,3000);
		})

		
		
		$('#jkl .left').click(function(){
			doo--;
			
			if(doo<=0){
				doo=0;
			}
			
			$(this).addClass('yg').siblings().removeClass('yg');
						
			$('.bos').stop().animate({'left':-1226*doo+'px'});

		})
		
		
		$('#jkl .rat').click(function(){
			doo++;
			
			if(doo>=1){
				doo=1;
			}
			
			$(this).addClass('yg').siblings().removeClass('yg');
						
			$('.bos').stop().animate({'left':-1226*doo+'px'});

		})


//家电切换

	
//	$('#box ul li')抓取 id是box里的ul 里面的 li
//				并给他们添加点击事件
				$('.wz span').mouseenter(function(){
//					获取当前点击的序号
					var num = $(this).index();
//					让.content对应的下标为num显示,他的兄弟元素隐藏
//						eq()表示下标  show()显示siblings()兄弟元素  .hide()表示隐藏
					$('.divbk .boy').eq(num).show().siblings('.divbk .boy').hide();
					
				})
				
				$('.wz span').hover(function(){
					$(this).addClass('mlel').siblings('span').removeClass('mlel');
				})

	
//	家电切换结束


		

//							智能切换


							$('.ydb li').mouseenter(function(){
								
								var hbd=$(this).index();
							
								$('.bdiv .kio').eq(hbd).show().siblings('.bdiv .kio').hide();
							})

							$('.ydb li').hover(function(){
					$(this).addClass('xhx').siblings('li').removeClass('xhx');
				})


//								智能切换结束









//					为你推荐开始
	
//					定义一个变量
					var tj=0;
					
					
				$('.zzz').click(function(){
					
					tj--;
					
					if(tj<=0){
						tj=0;
					}
					
					$(this).addClass('msl').siblings().removeClass('msl');
					
					$('.wntj .tl .bp').stop().animate({'left':-1226*tj+'px'});
				})
	
	
	
	$('.yyy').click(function(){
					
					tj++;
					
					if(tj==4){
						tj=3;
					}
					
					$(this).addClass('msl').siblings().removeClass('msl');
					
					$('.wntj .tl .bp').stop().animate({'left':-1226*tj+'px'});
				})
	
	
	
	
	
	
	
//					图书内容
					
//				定义一个变量
				var ts=0;
				
//				给右箭头添加点击事件
				$('.tuo').click(function(){
					
					var mvp=$(this).siblings('.cbk').find('.tsk').length;
					
					ts++;
					
					if(ts==mvp){
						ts=mvp-1;
					}
					
					$(this).siblings('.cbk').animate({'left':-296*ts+'px'})
					$(this).siblings('.ol').find('a').eq(ts).addClass('jfh').siblings('a').removeClass('jfh');
				})
	
	
	
	
//						给左箭头添加点击事件
				$('.jatu').click(function(){
					
					
					
					ts--;
					
					if(ts==-1){
						ts=0;
					}
					
					$(this).siblings('.cbk').animate({'left':-296*ts+'px'})
					$(this).siblings('.ol').find('a').eq(ts).addClass('jfh').siblings('a').removeClass('jfh');
				})
	
	
	
	
	
//			给小点添加点击事件
			$('.ol a').click(function(){
//				获得当前序号
				var dd=$(this).index();
				
//				变量等于序号
				ts=dd;
				
				$(this).parent().siblings('.cbk').animate({'left':-296*ts+'px'});
				$(this).addClass('jfh').siblings('a').removeClass('jfh');
			})
	
	
	
			$('#nr li').mouseenter(function(){
				
				var qf=$(this).find('.ol a').length;
				for(var tok=0;tok<qf;tok++){
					
					if($(this).find('.ol a').eq(tok).hasClass('jfh')){
						ts=tok;
						
					}
				}
			})
	
//									图书内容结束
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
