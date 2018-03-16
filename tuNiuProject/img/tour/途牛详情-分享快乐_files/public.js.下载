function lazyImg(){
    judgeLoad();
    judgeLoad2();
}


//  抛出的对象
var obj = {
    "lazyImg":lazyImg,
    'lastPartMove':lastPartMove,
    'addli':addli,
    'addCircle':addCircle,
    'addContent':addContent
}


/////// 功能函数区域////////////
var moveConstant = (elem,len,count)=>{
    
    elem.timer =setInterval(function(){
        if(count == 0){
            addLen(elem,len);
            elem.style.left = 0;
        }else{
            addLen(elem,len);
        }
    },50)
}
function addLen(elem,len){
    var curent = len;
   
    elem.timer = setInterval(function(){
        var dist = curent/10;
        curent -= dist;
        elem.style.left = elem.offsetLeft - dist + 'px';
        if(curent >= 0){
            clearInterval(elem.timer );
        }
    },50)
}
// 尾部记载图片函数
function judgeLoad(){
    
    var div = document.getElementById('lastSer5'),
    h =div.offsetTop - document.documentElement.clientHeight,
    flag = true;
    // 1
    if( h < document.documentElement.scrollTop && flag){
    // console.log(1)
        flag = false;
        var imgs = div.querySelectorAll('.lastSer5_imgs img'),len = imgs.length,i=0;
        imgs[0].style.height = '41px';
        for(; i<len;i++){
            imgs[i].src = imgs[i].getAttribute('imgSrc');
        }
    }
}
function judgeLoad2(){
    
    var div = document.getElementById('lastSer3'),
    h =div.offsetTop - document.documentElement.clientHeight,
    flag = true;
    // 1
    if( h < document.documentElement.scrollTop && flag){
    // console.log(1)
        flag = false;
        var imgs = div.querySelectorAll('#lastSer3 img'),len = imgs.length,i=0;
        
        for(; i<len;i++){
            imgs[i].style.height = '60px';
            imgs[i].src = imgs[i].getAttribute('imgSrc');
        }
    }
}

// 尾部移动信息部分
function lastPartMove(){
    var movePart = document.querySelector('.lastSer5_moveInfo>div>ul'),
    firstLiWidth = movePart.querySelector('li').offsetWidth,
    count = movePart.querySelectorAll('li').length;
}
function get(url, fn){
	var xhr;
	if ( window.XMLHttpRequest ){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}	
	xhr.open("get", url, true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			if( fn ){
				fn(xhr.responseText);
			}
		}
	}
}
// var div = document.getElementById();
// 轮播
// 图片s 按钮 小按钮
function addCircle(elem,url){
    // 1 父元素定位 371 990
    elem.style.position = 'relative';
    // 2 图片事件
    get(url,function(res){
        res = JSON.parse(res);
        var div1 = createDiv(res.img1),
        div2 = createDiv(res.img2),
        div3 = div1.cloneNode(true),
        div4 = div2.cloneNode(true),
        div = document.createElement('div'),
        radiu1 =document.createElement('div'),
        radiu2 = document.createElement('div'),
        leftDiv = document.createElement('div'),
        rightDiv = document.createElement('div'),
        timer;
        radiu1.style.position = radiu2.style.position= leftDiv.style.position = rightDiv.style.position = 'absolute' ;
        radiu2.style.background= '#999' ;       
        radiu1.style.background = 'red';
        leftDiv.style.background = rightDiv.style.background = '';
        // leftDiv.style.color = rightDiv.style.color = 'black';
        elem.style.overflow = 'hidden';
        div.style.width = '990px';
        div.style.height = '371px';
        div.style.position = 'absolute';
        div.appendChild(div4);
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        
        div1.style.top = div2.style.top =div3.style.top =div4.style.top =0;
        div4.style.left = '-990px'; div1.style.left = '0px';div2.style.left = '990px';div3.style.left = '1980px';
        
        div.style.left = '0px';
        elem.appendChild(div);

        elem.appendChild(radiu1);
        elem.appendChild(radiu2);
        elem.appendChild(leftDiv);
        elem.appendChild(rightDiv);
        

        // 
        radiu1.style.width = radiu2.style.width =  '15px';
        radiu1.style.height = radiu2.style.height =  '15px';
        radiu1.style.borderRadius = radiu2.style.borderRadius =  '15px';
        rightDiv.style.cursor = leftDiv.style.cursor = radiu1.style.cursor = radiu2.style.cursor =  'pointer';
        radiu1.style.top = radiu2.style.top =  '324px';
        radiu1.style.left = '470px';
        radiu2.style.right = '470px';
        //&#xe693;
        rightDiv.style.width = leftDiv.style.width =  '100px';
        rightDiv.className = leftDiv.className =  'iconfont';
        // rightDiv.style.fontSize = leftDiv.style.fontSize =  "50px !important";
        leftDiv.innerHTML =  '<span class="iconfont" style="font-size:50px !important; color : red;">&#xe693;</span>'
        rightDiv.innerHTML = '<span class="iconfont" style="font-size:50px !important;color : red;">&#xe694;</span>';
        rightDiv.style.height = leftDiv.style.height =  '100px';
        rightDiv.style.top = leftDiv.style.top =  '150px';
        rightDiv.style.right = '10px';
        leftDiv.style.left = '10px';
        // 事件處理 startMove(elem, json, cb)
        radiu1.onclick = function(){
            startMove(div,{
                'left':0
            },function(){
                radiu2.style.background = '#999';
                radiu1.style.background = 'red';
            });
        }
        radiu2.onclick = function(){
            startMove(div,{
                'left':-990
            },function(){
                radiu2.style.background = 'red';
                radiu1.style.background = '#999';
            })
        }
        leftDiv.onclick = function(){
            if(div.offsetLeft == 0){
                startMove(div,{
                    'left':-990
                },function(){
                    radiu2.style.background = 'red';
                    radiu1.style.background = '#999';
                });
            }if(div.offsetLeft == -990){
                startMove(div,{
                    'left':-1980
                },function(){
                    div.style.left = 0;
                    radiu2.style.background = '#999';
                    radiu1.style.background = 'red';
                })
            }
        }
        rightDiv.onclick = function(){
            if(div.offsetLeft == 0){
                startMove(div,{
                    'left':990
                },function(){
                    div.style.left = '-990px';
                    radiu2.style.background = 'red';
                    radiu1.style.background = '#999';
                });
            }if(div.offsetLeft == -990){
                startMove(div,{
                    'left':0
                },function(){
                    radiu2.style.background = '#999';
                    radiu1.style.background = 'red';
                })
            }
        }
        // 设置初始化事件
        timer = setInterval(function(){
            rightDiv.onclick();
        },3000);
        leftDiv.style.display = rightDiv.style.display = 'none';
        // 
        elem.onmouseenter = function(){
            clearInterval(timer);
            leftDiv.style.display = rightDiv.style.display = 'block';
        }
        elem.onmouseleave = function(){
            leftDiv.style.display = rightDiv.style.display = 'none';
            timer = setInterval(function(){
                rightDiv.onclick();
            },3000);
        }
    })
}
function createDiv(imgArr){
    var div = document.createElement('div');
    // 1 容器
    div.style.width = '990px';
    div.style.height = '371px';
    div.style.position = 'absolute';
    
    imgArr.forEach(function(val,ind){
        // 1 0   2 l 495   3 r 0   4 l 0   5 l 248 
        var a = document.createElement('a'),
        img = document.createElement('img');
        img.src = val;
        a.appendChild(img);
        a.href = 'detail.html';
        a.style.display  = 'inline-block';
        a.style.position = 'absolute';

        if(ind < 3){
            a.style.top = 0;
            if(0 == ind){
                a.style.left = 0;
            }else if(1 == ind){
                a.style.left =  '495px';
            }else{
                a.style.right = 0;
            }
        }else{
            a.style.bottom = 0;
            if(3 == ind){
                a.style.left = 0;
            }else{
                a.style.left = '248px';
            }
        }
        a.onmouseleave = function(e){
            e = e || window.event;
            this.style.boxShadow = 'none';
            this.style.opacity = 1;
            e.stopPropagation()
        }
        a.onmousemove = function(e){
            e = e || window.event;
            this.style.boxShadow = '0,0,20px,#888888';
            this.style.opacity = 0.5;
            e.stopPropagation()
        }
        div.appendChild(a);
    })
    // 代理事件
    // div.onmousemove = function(e){
    //     e = e || window.event;
    //     var tar = e.target || e.srcElement;
    //     if(tar.nodeName.toUpperCase() == 'A'){
    //         tar.style.opacity = 0.5;
    //         tar.style.boxShadow = '0,0,20px,#888888';
    //      }
    //      e.stopPropagation();
    // }
    return div;
}
// 左边
function addli(elem,url){
// ul > li 
// li > h2  li> p p>a
 // 1 data 
 get(url,function(res){
     // 1 添加data
     var fobj = document.createDocumentFragment(),li,
     res = JSON.parse(res);
     Array.from(Object.keys(res)).forEach(function(val,ind){
        // li
        li = document.createElement('li');
        liAddChild( li ,res[val],res[val][0]);
        fobj.appendChild(li);
     })
     elem.appendChild(fobj);
     elem.onmousemove = function(e){
         e = e || window.event;
         var tar = e.target || e.srcElement;
         if(tar.nodeName.toUpperCase() == 'A'){
            tar.style.color = '#f60';
         }
         e.stopPropagation();
     }
    
 })
}

function liAddChild(li,aArr,h2text){
    li.onmouseenter = function(e){
        li.style.background = 'black';
        e.stopPropagation();
    }
     li.onmouseleave = function(e){
        li.style.background = '';
        e.stopPropagation();
    }
    var h2 = document.createElement('h2'),
    a = document.createElement('a');
    a.href = 'detail.html';
    h2.style.height = '22px';
    h2.style.lineHeight = '22px';
    // h2.style.color = '#fff';
    h2.style.padding = '0 5px 5px';
    h2.style.fontSize = '16px';

    a.style.fontSize = '12px';
    
    a.style.display  = 'inline-block';
    a.style.padding = '0 5px';
    a.style.height = '20px';
    h2.style.color = '#fff';
    a.style.color = '#bbb';
    a.style.cursor = 'pointer';
    h2.innerHTML = h2text;
    li.appendChild(h2);
    
    aArr.forEach(function(atext){
        var cloneA = a.cloneNode(true);
        cloneA.onmouseleave = function(e){
            cloneA.style.color = '#bbb';
            e.stopPropagation();
        }
        cloneA.innerHTML = atext;
        li.appendChild(cloneA);
    })
}
/////// 内容区域的添加
// "data1":{
//     "title1":["三亚","东北","河南"],

//     "price":[1000,2000,3000],
//     "left":["马来西亚","乌龙木齐","嵩山少林","济南","泰山","云南"],
//     "img":"../img/tour/con1.png"
// },
function addContent(elem,url){

    get(url,function(res){
        res = JSON.parse(res);
        // 1 遍历创建容器div 单个容器高度527px
        Object.keys(res).forEach(function(data,ind){
            var div = document.createElement('div'),
            divLeft = document.createElement('div'),
            divRight = document.createElement('div');
            addContentInfo(divLeft,divRight,res[data]);
            addDivStyle(div,1190,527,false,'10px 0 0 0',false,false);
            addDivStyle(divLeft,180,527,'left','0 20px 0 0',false,false);
            addDivStyle(divRight,980,527,'right',false,false,false);
            div.appendChild(divLeft);
            div.appendChild(divRight);
            elem.appendChild(div);
        })
    })

}



// 功能函数
function addContentInfo(leftDiv,rightDiv,json){
    leftDiv.style.position =rightDiv.style.position = 'relative';
    var  h3 = document.createElement('h3'),
    ul = document.createElement('ul'),
    img = document.createElement('img');
    // leftDiv
    // h3  35 "tar":"境外旅游",
    addWH(h3,180,35,json.tar);
    
    h3.style.paddingLeft = '15px';
    h3.style.color = 'black';
    h3.style.textAlign = 'left';
    h3.style.fontSize = '18px';
    h3.style.lineHeight = '35px';
    h3.style.background = 'url(' + "../img/tour/bg.png"+ ') no-repeat';
    h3.style.backgroundPosition = '0 -66px';
    leftDiv.appendChild(h3);
    // img 
    img.style.position = 'absolute';
    img.style.top = '35px';
    img.style.right = '20px';
    img.src = json.img;
    leftDiv.appendChild(img);
    // ul 
    ul.style.position = 'absolute';
    
    json.left.forEach(function(val){
        var li = document.createElement('a');
        li.href = 'detail.html';
        li.style.display = 'block';
        li.style.height = '35px';
        li.style.width = '160px';
        li.style.lineHeight = '35px';
        li.style.textAlign = 'center';
        li.style.fontSize = '14px';
        li.style.opacity = 0.9;
        li.style.color = 'black'
        // li.style.padding = '10px 0 10px 0px';
        li.style.margin = '10px';
        li.style.background = '#fff';
        li.innerHTML = '<span>' + val + ' </span> <span class="iconfont">&#xe628;</span>  123456';
        li.onmousemove = function(e){
            startMove(this,{
                'marginLeft':0
            })
            e.stopPropagation();
        }
        li.onmouseleave = function(e){
            startMove(this,{
                'marginLeft':10
            })
            e.stopPropagation();
        }
        ul.appendChild(li);
    })

    leftDiv.appendChild(ul);


    // right
    var rul = document.createElement('ul'),
    divArr = [];
    // ul  35  980 "title":["三亚","东北","河南"],
    rul.style.borderBottom = '2px solid #e694a6';
    rul.style.overflow = 'hidden';
    rightDiv.appendChild(rul);
    addWH(rul,980,33);

    json.title.forEach(function(val,ind){
        // div
        var div = document.createElement('div');
        divArr.push(div)
        div.ind = ind;
        div.className = 'con_rightDiv';
        div.style.overflow = 'hidden';
        div.style.display = 'none';
        addWH(div,980,false);
        if(ind == 0){div.style.display = 'block';}
        complateDiv(div,json.good[ind],json.price[ind],json.left);
        rightDiv.appendChild(div);
        // ul 
        var li = document.createElement('li'),
        lia = document.createElement('a');
        li.style.cssFloat= 'left';
        lia.style.lineHeight = '22px';
        lia.style.padding = '5px';
        lia.style.href = 'detail.html';
        lia.innerHTML = val;
        lia.style.color = '#333';
        li.appendChild(lia);
        li.ind = ind;
        li.onmouseenter = function(e){
            lia.style.color = 'orange';
            displayDiv(divArr);
            divArr[this.ind].style.display = 'block';
            e.stopPropagation();
        }
        li.onmouseleave = function(e){
            lia.style.color = '#333';
            e.stopPropagation();
        }
        rul.appendChild(li);
    })
    // jump事件
    jumpD();
}
function displayDiv(arr){
    arr.forEach(function(val){
        val.style.display = 'none';
    })
}
function complateDiv(fa,imgSrc,price,strArr){
    console.log(price,imgSrc);
    strArr.forEach(function(str){
        var div = document.createElement('div');
        div.price = price;
        div.title = str;
        div.style.cssFloat = 'left';
        div.style.margin = '5px 3px';
        div.innerHTML = 
            '<a p='+ price + "_" + str +' class="jump_d_a" style="position:relative;display:block;width:320px;height:230px;" >'+
                '<img style="width:100%;height:100%" src="'+ imgSrc +'" alt="">'+
                '<p style="position:absolute;bottom:0;left:0;background:#fff; width:320px;height:60px;"><span>'+ str +':<i style="font-size:20px;color:orange">' + price +  '￥</i></span></p>'+
            '</a>';
        fa.appendChild(div);
    })
}
function jumpD(){
    var arr = document.querySelectorAll('.jump_d_a');
    Array.from(arr).forEach(function(val){
        val.onmousedown = function(e){
            //
            document.cookie = 'A='+ this.getAttribute('p') +';';
            window.location.href = 'detail.html';
            e.stopPropagation();
        }
    })
}

function addWH(elem,w,h,text){
    elem.style.width = w + 'px';
    elem.style.height = h + 'px';
    if(text){
        elem.innerHTML = text;
    }
}
function addDivStyle(elem,w,h,f,pad,mar,over){
    if(f){
        elem.style.cssFloat = f;
    }
    if(w){
        elem.style.width = w + 'px';
    }
    if(h){
        elem.style.height = h + 'px';
    }
    if(pad){
        elem.style.padding = pad;
    }
    if(mar){
        elem.style.margin = mar;
    }
    if(over){
        elem.style.overflow = over;
    }
}

function startMove(elem, json, cb){
	clearInterval(elem.timer);	// 无论之前的运动是否执行完，把之前的运动结束掉
	elem.timer = setInterval(function(){
		// 所有的属性是不是都执行到了终点
		var flag = true;	// 假设所有的属性都已经到达了终点
		// 对json进行循环，因为json保存的是运动时，所涉及到的所有的属性
		// json = {"width":500}
		for( var attr in json ){	// attr="width"
			// 起点（获取被操作的元素的当前属性值）
			var v = getStyle(elem, attr);
			// 判断是否为透明度运动
			if( attr == "opacity" ){
				v = Math.round(v*100);
			}else{
				v = parseInt(v);
			}
			// 终点（startMove函数中的一个参数）
			var target = json[attr];	// json["width"]==500
			// 终点减起点的间距
			var dist = target-v;			
			// 取其六分之一
			var speed = dist/6;	// 即速度，也可以理解成是步长值，元素每一次更新的值
			
			if(speed>0){	// 从左到右运动时，最后的几个数，可能是0.5  0.4等等之类的这种值，所以需要向上取整，得到+1
				speed = Math.ceil(speed);
			}else{		// 从右到左，最后的几个数，可能是-0.5  -0.4等等之类的这种值，所以需要向下取整，得到-1
				speed = Math.floor(speed);
			}
			//
			// 重新给元素定位
			if( attr == "opacity" ){
				elem.style[attr] = (v+speed)/100;
				if(/MSIE/.test(navigator.userAgent)){// 如果当前浏览器为IE浏览器
					elem.style.filter = "alpha(opacity="+(v+speed)+")";// 用IE兼容的写法，实现透明度
				}
			}else{
				elem.style[attr] = v+speed+"px";
			}
			// 关闭定时器
			//if( v == target ){	// 如果元素已经到达目标点，则停止定时器
			//	clearInterval(elem.timer);
			//}
			// 判断当前属性是否走到了终点
			if( v != target ){
				flag = false;	// 只要有一个属性没有走到终点，flag就为false
			}
		}
		// 如果所有的属性都达到了终点，再停止定时器
		if(flag){
			clearInterval(elem.timer);
			// 所有属性，都执行到终点之后，再触发回调函数
			// 如果存在第三个参数（回调函数）
			if( cb ){
				cb();
			}
		}
	}, 50);
}

function getStyle( elem, attr ){
	if( window.getComputedStyle ){	// W3C标准：获取非行间样式
		return getComputedStyle(elem, null)[attr];
	}else{							// IE标准：获取非行间样式
		return elem.currentStyle[attr];
	}
}