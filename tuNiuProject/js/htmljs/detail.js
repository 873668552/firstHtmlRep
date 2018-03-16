function test(){
    // // console.log(  dateDiff( new Date(), new Date().setDate(new Date().getDate()+1), 'Y' ) );
    // var d1 = new Date(),
    // // d2 = d1.setTime( d1.getTime() +1 );
    // d2 = new Date(d1.getDate() + 1);
    // console.log(d1,new Date(d2));
    // console.log(dateDiff(d1,d2,'D'));
    // setCookie('g1',{
    //     "id":1
    // })
}
// test();

// 调用
// 1 添加商品
addGood(document.querySelector('.goodDiv'));
// 2 城市按钮事件
cityBtn();
// 3 创建cookie
// 接口
// 添加商品

function addGood(elem){
    var arr = [
        ["1月","1000￥",1000],
        ["2月","2000￥",2000],
        ["3月","3000￥",3000],
    ],
    arr2 = ["日","一","二","三","四","五","六",]
    // 1 初始化结构
/* <div class="goodDiv">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <ul>
    <ol></ol>
    <ol></ol>
    <ol></ol>
</div> */
    var div = elem.querySelector('div'),
    uls = elem.querySelectorAll('ul'),
    ol3 = elem.querySelectorAll('ol');
    ///
    addStyle(elem,500,0,0);
    addStyle(uls[0],450,40,0);
    uls[0].style.padding = '0 25px';
    uls[0].style.borderTop = '1px solid #dedede';
    uls[1].style.background = 'black';
    addStyle(uls[1],500,0,0);
    // ul1 
    addLi(uls[0],150,40,3,'#fff','left',arr,0,ol3);
    // ul2
    addLi(uls[1],71,26,7,'#fff','left',0,arr2,0);
    // ol
    olAddLi(ol3,arr);
}
function olAddLi(arr,arr2){
    // 接受容器 
    var showSpan = document.querySelector('.show_I');
    for(var i = 0,len = arr.length; i < len;i++){
        arr[i].ind = i;

        var tar = document.createDocumentFragment();
        // arr[i].style.border = '1px solid #dedede';
        // arr[i].style.borderTop = 'none';
        addStyle(arr[i],500,0,0);
        arr[i].style.position = 'absolute';
        arr[i].style.top = '407px';
        arr[i].style.left = '0px';
        // arr[i].style.background = 'blue';
        for(var j = 1 ; j < 43; j ++ ){
            var li = document.createElement('li'),
            p1 = document.createElement('p'),
            p2;
            p1.style.height = '35px';
            p1.style.lineHeight = '35px';
            p2 = p1.cloneNode(true);
            p2.innerHTML = arr2[i][1];
            addStyle(li,70,70,'left');
            if(parseInt(arr2[i][0]) == 2 ){
                
                if(j <= 28){
                    p1.innerHTML = j;
                }else{
                    p1.innerHTML = j - 28;
                }
            }else{
                if(j <= 31){
                    p1.innerHTML = j;
                }else{
                    p1.innerHTML = j - 31;
                }
            }
            li.good = arr2[i][0] + '：途牛优惠价' + j ;
            li.cookie = arr2[i][0] + j;
            li.price = arr2[i][2];
            // li.style.lineHeight = '70px';
            li.style.position = 'relative';
            li.appendChild(p1);
            li.appendChild(p2);
            li.style.textAlign = 'center';

            /// 添加传递内容点击事件
            li.onclick = function(e){
                // console.log(showSpan,this.cookie,this.price);
                move(this,showSpan);
                e.stopPropagation();
            }
            li.onmouseenter = function(e){
                var show = document.createElement('div');
                addStyle(show,200,200,0);
                this.son = show;
                show.style.position = 'absolute';
                show.style.lineHeight = '200px';
                show.style.textAlign = 'center';
                show.style.fontSize = '16px';
                show.style.color = '#fff';
                show.style.background = '#999'
                show.innerHTML = this.good;
                this.appendChild(show);
                // console.log(this.good,this.cookie,this.price);
                e.stopPropagation();
            }
            li.onmouseleave = function(e){
                this.removeChild(this.son);
                e.stopPropagation();
            }

            tar.appendChild(li);
            if(j % 7 == 0 ){
                li.style.borderBottom = '1px solid #dedede';
            }else{
                li.style.borderBottom = '1px solid #dedede';
                li.style.borderRight = '1px solid #dedede';
            }

        }
        arr[i].appendChild(tar);
        // arr[i].style.background = 'red';
    }
}
// 抛出
function move(li,show){
    // 1 offsetTop  offsetLeft
    // var tarLi = li.cloneNode(true);   上下 86 左右  640
    var div = document.createElement('div');
    div.style.width = '70px';
    div.style.height = '70px';
    div.style.position = 'absolute';
    div.style.top = 0;
    div.style.left = 0;
    div.style.background = 'red';
    li.appendChild(div);
    
    startMove(div,{
        'left':640 - li.offsetLeft,
        'top':110 -  li.offsetTop ,
        "width":19,
        'height':19
    },function(){
        li.removeChild(div);
        show.price = li.price;
        show.cookie = li.cookie;
        show.innerHTML = li.cookie+ ' 开封happy 7日游！！';
        addTotal();
        // console.log(show.price,show.cookie);
    })
}
function addStyle(elem,w,h,f){
    if(h){ elem.style.height = h + 'px';} 
    if(w) elem.style.width = w + 'px';
    if(f) elem.style.cssFloat = f;
}
function addLi(ul,w,h,n,c,f,parr,data,ols){
    if(f){ul.style.overflow = 'hidden';}
    var liArr = [],
    cur=0;
    for(var i = 0 ;i < n; i++){
        var li = document.createElement('li');
        liArr.push(li);
        // 添加事件
        if(ols){
            li.ind = i;
            li.onclick = function(){
                e = arguments[0] || window.event;
                liArr[cur].style.background = '';
                liArr[cur].p.style.color = 'black';
                this.style.background = 'black';
                this.p.style.color = '#fff';
                cur = this.ind;
                Array.from(ols).forEach(function(val){
                    val.style.display = 'none';
                })
                ols[this.ind].style.display = 'block';
                e.stopPropagation();
            }
            // li.onmouseleave = function(e){
            //     this.style.background = '';
            //     this.style.color = 'black'
            //     e.stopPropagation();
            // }
        }
        if(parr){
            var p1 = document.createElement('p'),
            p2;
            p1.style.height = (h/2) + 'px';
            p1.innerHTML = parr[i][0];
            p1.style.textAlign = 'center';
            p2 = p1.cloneNode(true);
            p2.innerHTML = parr[i][1];
            p1.style.color = 'black';
            p2.style.color = 'red';
            li.appendChild(p1);
            li.appendChild(p2);
            li.p = p1;
        }
        if(data){
            li.innerHTML = data[i];
            li.style.lineHeight = h + 'px';
            li.style.textAlign = 'center';
        }
        // li.style.background = 'red'
        li.style.width = w + 'px';
        li.style.height = h + 'px';
        li.style.cssFloat = f;
        li.style.color = c;
        ul.appendChild(li);
    }
    // liArr[0].onclick();
    liArr[0].style.background = 'black';
}
//////////////////////////////////
var son = document.querySelector('.son_inp'),
fa = document.querySelector('.pa_inp'),
detail = document.querySelector('.detail_li'),
showInfo = document.querySelector('.show_I'),
total = document.querySelector('.total_i'),
sigleP = parseInt(showInfo.price),
cityInp = document.querySelector('.cityInp');
showInfo.price = 0;
// 提交商品事件
document.querySelector('.setGood').onmousedown = function(e){
    // var div = document.getElementById();div.onblur;div.onfocus
    this.style.boxShadow = 'none';
    // cookie 
    // total.price = showInfo.price;
    // total.faCount = parseInt(fa.value);
    // total.sonCount = parseInt(son.value);
    // show.cookie = li.cookie;
        // show.innerHTML = li.cookie+ 
    if(total.price == 0){
        // alert(123)
    }else{
        // alert(showInfo.cookie)
        // alert(showInfo.innerHTML);
        var d = new Date();
        time =  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
        var obj = {
            "name":showInfo.cookie,
            "price":total.price,
            "fa":total.faCount,
            "son":total.sonCount,
            'sum':showInfo.innerHTML,
            "city":cityInp.value,
            "time":time,
            "order":getOrderNumber()
        }
        console.log(obj.order);
        // console.log(obj);
        var getPW = getCookie('get_pw'),// 其他登录
        twoWeek = getCookie('two_pw')// 两周登录
        if(getPW || twoWeek){
            // alert(123)
            setCookie('o' + showInfo.cookie,obj,7);
            window.location.href = 'total.html';
        }else{
            // alert('没有登录');
            localStorage.setItem('flag',true);
            window.location.href = 'login.html';
        }
        // window.location.href = "total.html";
        // window.location.href = 'model.html';
        // alert();
    }
    e.stopPropagation();
}
document.querySelector('.setGood').onmouseup = function(e){
    this.style.boxShadow = '0 0 5px #888888';
    e.stopPropagation();
}
document.querySelector('.setGood').onmouseenter = function(e){
    this.style.boxShadow = '0 0 5px #888888';
    addTotal();
    e.stopPropagation();
}
// 

fa.onkeyup = son.onkeyup = function(){
    if(parseInt(this.value) == NaN){
        if(this == fa){
            this.value = 1;
        }else{
            this.value = 0;
        }
    }
    if(this == fa){
        if(parseInt(this.value) == 0){
            this.value = 1;
        }
    }
}
fa.onblur = function(){
    // detail_li
    addTotal();
} 
son.onblur = function(){
    // detail_li
    // alert(showInfo.price);
    addTotal();
}

// 加
document.querySelector('.fa_btn_jia').onclick = function(){
    fa.value = parseInt(fa.value) + 1;
    addTotal();
}
document.querySelector('.son_btn_jia').onclick = function(){
    son.value = parseInt(son.value) + 1;
    addTotal();
}
// 减
document.querySelector('.fa_btn_jian').onclick = function(){
    fa.value = parseInt(fa.value) - 1;
    if(parseInt(fa.value) <= 0){
        fa.value = 1;
    }
    addTotal();
}
document.querySelector('.son_btn_jian').onclick = function(){
    son.value = parseInt(son.value) -1;
    if(parseInt(son.value) < 0){
        son.value = 0;
    }
    addTotal();
}
///////////////////////////////
function addTotal(){
    if(parseInt(son.value) == 0){
        if(parseInt(son.value) == 0){
            detail.innerHTML = showInfo.innerHTML + " 成人："+
            fa.value +  '。';
            total.innerHTML = " 总价:" + (fa.value * showInfo.price );
        }
    }else{
        detail.innerHTML = showInfo.innerHTML + " 成人："+
        fa.value + ',' + "儿童" + son.value + '。';
        total.innerHTML = " 总价:" + (fa.value*showInfo.price + son.value * showInfo.price * 0.5);
    }
    total.price = showInfo.price;
    total.faCount = parseInt(fa.value);
    total.sonCount = parseInt(son.value);
}

// 城市按钮事件
function cityBtn(){
    // 1` 
    var btn = document.querySelector('.changeCity'),
    div = document.querySelector('.cityDiv'),
    flag = true,
    cityInp = document.querySelector('.cityInp'),
    ols = document.querySelectorAll('.cityDiv>ol'),
    ul = document.querySelector('.cityDiv>ul'),
    lis = document.querySelectorAll('.cityDiv>ul>li'),
    cur = 0;
    Array.from(lis).forEach(function(val,ind){
        val.ind = ind;
        val.style.position = 'relative';
        val.style.background = '#fff';
        
    })
    // console.log(ols[0]);
    ols[cur].style.display = 'block';
    lis[cur].style.border = '1px solid #dedede';
    lis[cur].style.borderTop = '1px solid red';
    lis[cur].style.borderBottom = '';
    lis[cur].style.top = '1px';

    btn.onclick = function(){
        if(flag){
            div.style.display = 'block';
            this.parentElement.style.borderRight = '1px solid #dedede';
            cityInp.style.borderLeft = '1px solid #dedede';
            flag = false;
        }else{
            div.style.display = 'none';
            cityInp.style.border = 'none';
            this.parentElement.style.border = 'none';
            flag = true;
        }
    }
    // 2 ul 点击事件
    
    ul.onclick = function(e){
        e =e || window.event;
        var tar = e.target || e.srcElement;
        // tar.style.height = '50px'
        lis[cur].style.border = 'none';
        lis[cur].style.top = 0;
        ols[cur].style.display = 'none';
        console.log(cur);
        //
        cur = tar.ind;
        tar.style.border = '1px solid #dedede';
        tar.style.borderTop = '1px solid red';
        tar.style.top = '1px';
        // tar.style.height = '51px'
        tar.style.borderBottom = 'none';
        // console.log(cur);
        ols[cur].style.display = 'block';
    }
    // 3 ol 
    Array.from(ols).forEach(function(val){

        val.onclick =function(e){
            e =e || window.event;
            var tar = e.target || e.srcElement;
            cityInp.value = tar.innerHTML;
            val.parentElement.style.display = 'none';
            cityInp.style.border = 'none';
            btn.parentElement.style.border = 'none';
        }
    })
    cityInp.style.border = 'none';
    btn.parentElement.style.border = 'none';
}

function getOrderNumber(){
    return '' + 123 + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) ;
}
// imgs点击事件
function imgClick(num){
    if(num>=174 && num < 282){
        return 37;
    }
    if(num>=282 && num < 390){
        return 145;
    }
    if(num>=390 && num < 498){
        return 253;
    }
    if(num>=498 && num <= 606){
        return 361;
    }
}
/// 添加轮播事件
function addlunboEvent(){
    // 1 结构 left_lunbo 轮播ol  border_div 遮罩 左边按钮 left_btn_lunbo 右边按钮 right_btn_lunbo
    // srcimg 108 src
    var ols = document.querySelector('.left_lunbo'),// 展示区
    showLs = document.querySelectorAll('.left_lunbo>li>img');
    left = document.querySelector('.left_btn_lunbo'),
    right = document.querySelector('.right_btn_lunbo'),
    divTop = document.querySelector('.border_div'),
    smallul = document.querySelector('.small_ul'),
    glassDiv = document.querySelector('.glass_div'),
    imgs = document.querySelectorAll('.small_ul>li>img'),
    len = imgs.length,
    cur =0;
    // img点击事件
    
    Array.from(imgs).forEach(function(val,ind){
        val.ind = ind;
        var leftShow_one = showLs[0],
        showObj = showLs[1];
        
        val.onclick = function(e){
        //     console.log(val.offsetLeft);
        console.log(divTop.parentElement.offsetLeft)
        console.log(e.pageX)
            // 
            cur = this.ind;
            // leftShow = this.src;
            leftShow_one.src = imgs[cur].src;;
            if(cur>=0&& cur <len-1){
                startMove(divTop,{
                    "left":imgClick(e.pageX)
                },function(){
                    startMove(ols,{
                        "left":0
                    },function(){
                        showObj.src = imgs[cur].src;;
                        ols.style.left = '-500px';
                    })
                })
            }
            new Glass(glassDiv,3,150,150,imgs[cur].src);
        }
    })
    //
    Array.from(imgs).forEach(function(val,ind){
        val.ind = ind;
    })
    // 2 逻辑
    
    var  olsShow = showLs[1],
    leftshow = showLs[2],
    rigthShow = showLs[0];
    // 右边
    right.onclick = function(){
        cur ++;
        if(cur >=0 && cur <=3){
            // console.log(cur)
            leftshow.src = imgs[cur].src;
            //borderdiv 
            // divTop.style.left = cur * 108 + 37 + 'px';
            startMove(divTop,{
                "left":cur*108 + 37
            },function(){
                startMove(ols,{
                    "left":-1000
                },function(){
                    // console.log(imgs,cur,imgs[cur].src);
                    showLs[1].src = imgs[cur].src;
                    ols.style.left = '-500px';
                })
            })
        }else if( cur == len-1){
            console.log(cur);
            console.log(leftshow.src,imgs[cur].src)
            leftshow.src = imgs[cur].src;
            startMove(smallul,{
                "left":-71
            },function(){
                startMove(ols,{
                    "left":-1000
                },function(){
                    // console.log(imgs,cur,imgs[cur].src);
                    showLs[1].src = imgs[cur].src;
                    ols.style.left = '-500px';
                })
            })
        }else{
            cur = 0;
            leftshow.src = imgs[cur].src;
            //borderdiv 
            // divTop.style.left = cur * 108 + 37 + 'px';
            smallul.style.left = '37px';
            startMove(divTop,{
                "left":cur*108 + 37
            },function(){
                startMove(ols,{
                    "left":-1000
                },function(){
                    // console.log(imgs,cur,imgs[cur].src);
                    showLs[1].src = imgs[cur].src;
                    ols.style.left = '-500px';
                })
            })
        }
        new Glass(glassDiv,3,150,150,imgs[cur].src)
    }
    // 左边
    left.onclick =function(){
        
        if(cur == len-1){
            rigthShow.src = imgs[cur].src;
            // smallul.style.left = '37px';
            
            startMove(smallul,{
                'left':37
            },function(){
                startMove(ols,{
                    "left":0
                },function(){
                    // console.log(imgs,cur,imgs[cur].src);
                    showLs[1].src = imgs[cur].src;
                    ols.style.left = '-500px';
                })
            })
        }
        cur--;
        if(cur<=3&& cur>=0){
            rigthShow.src = imgs[cur].src;
            // console.log(cur);
            //borderdiv 
            // divTop.style.left = cur * 108 + 37 + 'px';
            startMove(divTop,{
                "left":cur*108 + 37
            },function(){
                startMove(ols,{
                    "left":0
                },function(){
                    // console.log(imgs,cur,imgs[cur].src);
                    showLs[1].src = imgs[cur].src;
                    ols.style.left = '-500px';
                })
            })
        }else if(cur < 0){
            cur = len -1;
            rigthShow.src = imgs[cur].src;
            smallul.style.left = '-71px';
            startMove(divTop,{
                "left":3*108 + 37
            },function(){
                startMove(ols,{
                    "left":0
                },function(){
                    // console.log(imgs,cur,imgs[cur].src);
                    showLs[1].src = imgs[cur].src;
                    ols.style.left = '-500px';
                })
            })
        }
        // 添加div glassDiv
        new Glass(glassDiv,3,150,150,imgs[cur].src)
    }
}   
addlunboEvent();

// 原生js 封装放大镜 
// new Glass(div,2,200,200,'img/8.jpg')
class Glass{
    constructor(elem,b,w,h,src){
        if(typeof(elem) == 'string'){
            this.elem = document.getElementById(elem);
        }else{
            this.elem = elem;
        }
        this.elem.innerHTML = '';
        this.parent = elem.parentNode;
        this.w = w;
        this.h = h;
        this. b = b;
        this.src = src;
        this.init();
    }
    // 1 构造
    init(){
        // 基本结构
        this.base();
        // 逻辑
        this.logic();
    }
    // 2 基本结构
    base(){
        
        this.bigDiv = document.createElement('div');
        this.smallDiv = document.createElement('div');
        this.midDiv = document.createElement('div');
        this.img = document.createElement('img');
        this.bigImg = document.createElement('img');
        this.smallImg = document.createElement('img');
        // 布局
        var elem = this.elem;
        elem.appendChild(this.img);
        elem.appendChild(this.midDiv);
        elem.appendChild(this.smallDiv);
        this.smallDiv.appendChild(this.smallImg);
        this.parent.insertBefore(this.bigDiv,elem.nextSibling);
        this.bigDiv.appendChild(this.bigImg);
        this.smallDiv.style.cursor = 'pointer';

        this.img.src = this.bigImg.src = this.smallImg.src = this.src;
        // this.bigDiv.style.width = this.midDiv.style.width = this.img.style.width = this.smallImg.style.width = this.w + 'px';
        // this.bigDiv.style.height = this.midDiv.style.height = this.img.style.height = this.smallImg.style.height = this.h + 'px';
        // this.bigImg.style.width = this.w * this.b + 'px';
        // this.bigImg.style.height = this.h * this.b + 'px';

        this.baseStyle(this.elem,{
            'width':this.w,
            'height':this.h,
            'position':'relative',
            'overflow':'hidden'
        })
        this.baseStyle(this.midDiv,{
            'width':this.w,
            'height':this.h,
            'position':'absolute',
            // 'background':'rgba(0,0,0,1)'
        })
        this.baseStyle(this.smallDiv,{
            'width':this.w/this.b,
            'height':this.h/this.b,
            'position':'absolute',
            'overflow':'hidden',
            'display':'none'
        })
        this.baseStyle(this.img,{
            'width':this.w,
            'height':this.h,
            'position':'absolute'
        })
        this.baseStyle(this.smallImg,{
            'width':this.w,
            'height':this.h,
            'position':'absolute'
        })

        this.baseStyle(this.bigImg,{
            'width':this.w*this.b,
            'height':this.h*this.b,
            'position':'relative'
        })
        this.baseStyle(this.bigDiv,{
            'width':this.w,
            'height':this.h,
            'float':'left',
            'marginLeft':this.w+1,
            'marginTop':-this.h,
            'overflow':'hidden',
            'display':'none'
        })
    }
    // 3 逻辑
    logic(){
        var first =0,
        isFirst = true;
        var that = this,
        l = this.elem.offsetLeft,t = this.elem.offsetTop, 
        w = parseInt(this.smallDiv.style.width)/2,h = parseInt(this.smallDiv.style.height)/2;
        this.elem.onmouseleave = function(e){
            this.smallDiv.style.display = 'none';
            this.bigDiv.style.display = 'none';
            this.midDiv.style.background = '';
            isFirst = true;
        }.bind(this);
        this.elem.onmouseenter = function(e){
            this.smallDiv.style.display = 'block';
            this.bigDiv.style.display = 'block';
            this.midDiv.style.background = 'rgba(0,0,0,0.5)';
            if(isFirst){
                isFirst = false;
                first = e.clientY;
            }
        }.bind(this);
        this.elem.onmousemove = function(e){
            
            var x = e.pageX - l - w;
            var y = e.pageY - h - t ;
            if(x < 0){x = 0}
            if(y < 0){y = 0}
            // console.log(x,this.w - l - w);
            if(x > this.w -w*2){x = this.w -w*2}
            if(y > this.h - h*2){y = this.h - h*2}
        //   console.log(this.elem.offsetTop,e.clientY)

            this.moveStyle(this.smallDiv,x,y);
            // console.log(this.smallDiv);
            this.moveStyle(this.smallImg,-x,-y);
            this.moveStyle(this.bigImg,-x*that.b,-y*that.b);
           
        }.bind(this)
    }
    moveStyle(elem,x,y){
       
        elem.style.left = x +'px';
        elem.style.top = y +'px';
    }
    baseStyle(elem,json){
        // console.log("--------" ,elem,json);
        var div = elem;
        div.style.width = json.width +'px';
        div.style.height = json.height +'px';
        if(json.background){div.style.background = json.background;}
        if(json.overflow){div.style.overflow = json.overflow;}
        if(json.position){div.style.position = json.position;}
        if(json.float){div.style.float = json.float;}
        if(json.marginTop){div.style.marginTop = json.marginTop  +'px';}
        if(json.marginLeft){div.style.marginLeft = json.marginLeft  +'px';}
        if(json.display){div.style.display = json.display;}
    }
}
new Glass(document.querySelector('.glass_div'),3,150,150,'../img/detail/1.jpg');