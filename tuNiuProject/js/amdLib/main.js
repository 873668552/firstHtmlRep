
require.config({
	'paths' : {
		'jquery' : 'jq',
		'base' : '../cmdLib/base',
		'header':'../cmdLib/header',
		'jsonp':'../cmdLib/jsonp',
		'cmdCookie':'../cmdLib/cmdCookie'
		// 'jianfa' : 'lib/jianfa' cmdCookie.js
	},
	shim: {
		'base':{
			exports: 'obj'// 注意：exports只会输出某一个方法或变量
		},
		'header':{
			exports:'headObj'
		},
		'jsonp':{
			exports:'callback'
		},
		'cmdCookie':{
			exports:'cookieObj'
		}
	}

});

require(['jquery','base','header','jsonp','cmdCookie'],function(JQ,base,header,jsonp,cookieObj){
	// 登录ul处理
	function loginUL(){
		// 1 获取cookie  navTop_left

		var getPW = cookieObj.getCookie('get_pw'),// 其他登录
		twoWeek = cookieObj.getCookie('two_pw'),// 两周登录
		LoginLis =  JQ('.navTop_left');
		console.log(LoginLis);
		if(getPW != undefined){// 正常登录
			// console.log();
			JQ(LoginLis).html(
				'<li><a href="">' + "hello" + '</a> |</li>' +
				'<li><a href="">'+ getPW['name'] +'</a></li>' +
				'<li><a href="first.html"><img src="http://img4.tuniucdn.com/img/2017020818/common/oldtonew_v2.gif" alt=""></a></li>'
			);
			// JQ(LoginLis[1]).html(getPW['name']+1234455);
			// cookieObj.removeCookie('get_pw');

		}else if(twoWeek != undefined){// 两周登录
			JQ(LoginLis).html(
				'<li><a href="">' + "hello" + '</a> |</li>' +
				'<li><a href="">'+ twoWeek['name'] +'</a></li>' +
				'<li><a href="first.html"><img src="http://img4.tuniucdn.com/img/2017020818/common/oldtonew_v2.gif" alt=""></a></li>'
			);
			
		}
	}
	// 
	// alert(123);
	// 头部其他函数
	
	/// 1 头部轮播函数
	var ind = 0,len = JQ('.banDivImgsCon').children().length -1,ul,timer,
	ul2 = JQ('.banDiv_con_ul'),ul =JQ('.banDivImgsCon');
	JQ('.banDiv_con_ul').bind('mousemove',function(e){
			e.stopPropagation();
			clearInterval(timer);
	})
	JQ('.banDiv_con_ul').bind('mouseleave',function(e){
		e.stopPropagation();
		next();
	})
	JQ('.banDiv_con_ul').bind('click',function(e){
		ind = $(e.target||e.srcElement).index();
		e.stopPropagation();
		change(ind);
	})
	
	function change(ind){
		ul.children().css('display','none')
		ul.children()[ind].style.display = 'block';
		ul2.children().css('background','orange')
		ul2.children()[ind].style.background = 'black';
	}
	function tab(ind,len){
		ul = JQ('.banDivImgsCon');
		
		// console.log(ul.children()[ind],ind,len);
		if(ind >= len){
			ul.children()[len].style.display = 'none';
			ul.children()[0].style.display = 'block';
			ul2.children()[len].style.background = 'orange';
			ul2.children()[0].style.background = 'black';
			ind = 0;
			return;
		}else{
			ul2.children()[ind].style.background = 'orange';
			ul.children()[ind].style.display = 'none';
			ul2.children()[++ind].style.background = 'black';
			ul.children()[ind].style.display = 'block';
			// console.log(ind);
		}
	}
	function next(){
		timer = setInterval(function(){
			ul = JQ('.banDivImgsCon');
			// console.log(ul.children()[ind],ind,len);
			if(ind >= len){
				ul.children()[len].style.display = 'none';
				ul.children()[0].style.display = 'block';
				ul2.children()[len].style.background = 'orange';
				ul2.children()[0].style.background = 'black';
				ind = 0;
				return;
			}else{
				ul2.children()[ind].style.background = 'orange';
				ul.children()[ind].style.display = 'none';
				ul2.children()[++ind].style.background = 'black';
				ul.children()[ind].style.display = 'block';
				// console.log(ind);
			}
			// tab(ind,len);
		},3000)
	}
	
	/// 2头部搜索函数
	var serchInd =  -1;
	JQ('.search_ul').click(function(){
		JQ(this).children('li').css('display','none');
		// 搜索函数
		JQ(this).children('input').css({
			'color':"black",
			'font-size':'14px',
			'z-index':1
		}).focus().keyup(function(e){
			e = e || window.event;
			
			var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=callback&wd=",
			tar = url + this.value;
			jsonp(tar);
			
		})
		
	})
    // "?cb=callback&wd="
    function jsonp(str){
		var script = document.getElementById('jsonp');
        if(script){
            script.parentElement.removeChild(script);
        }
        script = document.createElement('script');
        script.id = 'jsonp'
        document.body.appendChild(script);
        script.src = str;
	}
	
	// 尾部其他函数
	/// 2 尾部友情链接
	function lastDivClick(){
		JQ('#show_tab>div>a').click(function(){
			JQ('#show_tab').css('display','none');
			JQ('#unshow_tab').css('display','block')
		})
		JQ('#unshow_tab>div').click(function(){
			JQ('#unshow_tab').css('display','none');
			JQ('#show_tab').css('display','block')
		})
	}
	/// 2 尾部移动信息
	obj.lastPartMove();
	/// 3 mnue_show 导航动态添加数据
	function createNav(json,nav){
		
		// for(var key in json){
		// 	for(let i = 0 ;i < nav.length; i++){
		// 		console.log(nav[i].parentElement.innerText == key,i);
		// 		if(nav[i].parentElement.innerText == key ){
		// 			nav[i].arr = json[key];
		// 			console.log(nav[i].arr);
		// 			break;
		// 		}
		// 	}
		// 	// console.log(key);
		// }
		for(var i = 0 ,len = nav.length;i<len;i++){
			JQ(nav[i]).children().css({
				'color':'black',
				'font-size':'16px',
				'padding':'0 20px',
				'line-height':'40px',
				'text-align':'center',
				// 'background':'#2dbb55'
			}).mouseenter(function(){
				// $(this).animate({
				// 	'color':'red',
				// 	'background':'#2dbb55'
				// },1000,function(){
				// 	alert();
				// })
				$(this).css({
						'color':'red',
					'background':'#2dbb55'
				})
			}).mouseleave(function(){
				$(this).css({
					'color':'black',
					'background':''
				})
			})
			
		}
		// console.log(nav[1].arr);
		// console.log(nav[0].arr);
	}
	
	function navData(){
		$.ajax({
			'url' : 'http://localhost:8010/tuNiuProject/PHP/nav.json',
			'data' : {'a':4,'b':5},
			'type' : 'post',
			'dataType':'json',
			'success' : function(response, status, xhr){
				// console.log(response);
				createNav(response,document.querySelectorAll('.mnue_show'));
			},
			'error' : function(e){
				console.log('程序出错啦',e)	
			}
		});
	}
	navData();
	// jq load函数
	
	JQ(function(){
		// 登录
		loginUL();
		// 主页轮播图banDivImgsCon
		tab(ind,len);
		next();
		// top
		headObj.logFn();
		// 尾部网络图片（判断是不是加载图片）
		obj.lazyImg();
		// show_tab unshow_tab
		lastDivClick();
		// 添加楼梯右边的内容
		addRightInfo('http://localhost:8010/tuNiuProject/PHP/Floor/right.json',function(res){
			var arr = JQ('.floorDiv_body_con_show_right');
			Object.keys(res).forEach(function(key,ind){
				var data = res[key],ul;
				JQ(arr[ind]).children('h3').html(data.title);
				ul =JQ(arr[ind]).children('ul')
				Array.from(data.ul).forEach(function(li,liInd){
					ul.append('<li>'+ li +'</li>');
				})
			})
		})
	})
	// floorDiv_body_con_show_right 展示区加载内容函数
	function addRightInfo(url,fn){
		$.ajax({
			'url' : url,
			'data' : {'a':4,'b':5},
			'type' : 'post',
			'dataType':'json',
			'success' : function(response, status, xhr){
				// console.log(response);
				fn(response)
			},
			'error' : function(e){
				console.log('程序出错啦',e)	
			}
		});
	}
	/// fixedDiv处理
	// 元素点击跳转事件
	function addTop(elem,src){
		JQ(elem).bind('click',elem,function(){
			document.documentElement.scrollTop = 0;
		})
		JQ(elem).parent().bind('click',JQ(elem).parent(),function(){
			document.documentElement.scrollTop = 0;
		})
	}
	function addClick(elem,src){
		JQ(elem).bind('click',elem,function(){
			window.location = src;
		})
		JQ(elem).parent().bind('click',JQ(elem).parent(),function(){
			window.location = src;
		})
	}
	function addHidden(faDiv,sonDiv,interval){
		JQ(faDiv).mouseenter(function(){
			console.log(JQ(this).children('span').text());
			JQ(this).children('span').css("color","orange")
			JQ(sonDiv).stop().fadeIn(interval);
			
		}).mouseleave(function(){
			JQ(this).children('span').css("color","white")
			JQ(sonDiv).stop().fadeOut(interval);
		})
	}
	/////////////////////// 右边fixed事件 //////////////////////////////
	// top div
	addHidden( JQ('.f_r_t'),JQ('.f_r_t>div') ,500);
	// app
	addHidden( JQ('.f_r_app'),JQ('.f_r_app>img') ,500);
	// addClick( JQ('.f_r_app>img'),'first.html' );
	// 我的关注
	addHidden( JQ('.f_r_my'),JQ('.f_r_my>div') ,500 )
	addClick( JQ('.f_r_my>div'),'first.html' );
	// 我的订单
	addHidden( JQ('.f_r_Order'),JQ('.f_r_Order>div'), 500 )
	addClick( JQ('.f_r_Order>div'),'first.html' );
	// 卷
	addHidden( JQ('.f_r_roll'),JQ('.f_r_roll>div'), 500 )
	addClick( JQ('.f_r_roll>div'),'first.html' );
	// 消息
	addHidden( JQ('.f_r_info'),JQ('.f_r_info>div'), 500 )
	addClick( JQ('.f_r_info>div'),'first.html' );
	// 问卷调查
	addHidden( JQ('.f_r_search'),JQ('.f_r_search>div'), 500 )
	addClick( JQ('.f_r_search>div'),'first.html' );
	// 建议
	addHidden( JQ('.f_r_succ'),JQ('.f_r_succ>div'), 500 )
	addClick( JQ('.f_r_succ>div'),'first.html' );
	// 顶部
	addHidden( JQ('.f_r_top'),JQ('.f_r_top>div'), 500 )
	addTop( JQ('.f_r_top>div'),'first.html' );
	// 在线
	addHidden( JQ('.f_r_online'),JQ('.f_r_online>div'), 500 )
	addClick( JQ('.f_r_online>div'),'first.html' );

	// ///////// fixed bottom
	JQ('.x_div').click(function(){
		JQ(this).parent().parent().animate({
			'left':'-100%'
		},500)
		JQ('#fixedSma').animate({
			'left':'0'
		},1000)
		
		
	})
	JQ('')
	JQ('#fixedSma').click(function(){
		JQ(this).animate({
			'left':'-100%'
		},500)
		JQ('.x_div').parent().parent().animate({
			'left':'0'
		},1000)
	})
})
////

