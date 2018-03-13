// 轮播图跳转 banDivImgsCon
class  CarouselLink{
    constructor(ul){
        Array.from(ul.children).forEach(function(val){
            val.onclick = function(){
                window.location.href = this.tarHref;
            }
        })
    }
}
new CarouselLink(document.querySelector('.banDivImgsCon'))
// 手风琴 ban_organ
class HandChange{
    constructor(ul){
        //设计的对象
        this.ul = ul;
        this.lis = this.ul.children;
        this.init();

    }
    // 构造逻辑
    init(){
        Array.from(this.lis).forEach(function(val){
            
            val.onmouseenter = function(){
                this.change();
                val.style.width = '120px';
                val.querySelector('img').style.left = '-100px';
            }.bind(this)
        },this)
        // console.log(this.lis);
    }
    change(){
        Array.from(this.lis).forEach(function(val){
            val.style.width = '100px';
            val.querySelector('img').style.left = '0px';
        })
    }
}
new  HandChange(document.querySelector('.ban_organ'));

// floor头部改变商品li  floorDiv_top_left_ul floorDiv_top_left_show_ul
class GoodsChange{
    constructor(ul1,ul2){
        this.ul1 = ul1;
        this.ul2 = ul2;
    }
    init(){
       
        // 1 涉及的对象
        var lis1 = this.ul1.querySelectorAll('li'),tar,cur = 0,
        lis2 = this.ul2.querySelectorAll('li');// 给ul1下的li添加下标

        Array.from(lis1).forEach(function(val,ind){
            val.ind = ind;
            // console.log(ind);
            // console.log(val);
        })
        // console.log('<br>',lis2)
        // 2 logic
        this.ul1.onmousemove = function(e){
            
            e = e || window.event;
            tar = e.target || e.srcElement;
            // console.log(lis2);
            // console.log(tar.ind);
            if(tar.ind == cur ){
            }else if(tar.ind == undefined){
            }else{
                // console.log(tar.ind)
                lis2[cur].className = 'floorDiv_top_left_showli';
                // console.log(lis2[tar.ind]);
                lis2[tar.ind].className = 'floorDiv_topshowDiv floorDiv_top_left_showli';
                cur = tar.ind;
            }
                // 事件冒泡
            e.stopPropagation();
        }
    }
}
var goods = new GoodsChange(document.querySelector('.floorDiv_top_left_ul'),
document.querySelector('.floorDiv_top_left_show_ul'));
goods.init();

// banDiv_leftDiv banDivLeftBG 轮播图区域的点击事件
// banDiv_left 父元素
// banDiv_leftDiv  banDivLeftBG  document.querySelector();
class Banleft{
    constructor(div1,fadiv){
        // 1 结构
        this.div1 = div1;
        this.fadiv = fadiv;
        this.divs = fadiv.children;
        // console.log(this.div1,this.divs);
        this.init();
    }
    init(){
        var that = this;
        Array.from(this.divs).forEach(function(val,ind){
            val.onclick = function () {
                that.clearBG();
                this.className = 'banDiv_leftDiv banDivLeftBG';
                this.children[1].style.display = 'block';
            }
            val.onmouseenter = function () {
                // this.className = 'banDiv_leftDiv banDivLeftBG';
                this.style.background = '#fff'
            }
            val.onmouseleave = function () {
                // this.className = 'banDiv_leftDiv';
                this.style.background = ''
            }
        })
        // this.fadiv.onmousemove = function(e){
        //     e = e || window.event;
        //     that.clearBG();
        //     (e.target?e.target:e.srcElement).className = 'banDiv_leftDiv banDivLeftBG';
        // }
    }
    clearBG(){
        Array.from(this.divs).forEach((val)=>{
            val.className = 'banDiv_leftDiv';
            // val.style.color = '#fff'
            val.children[1].style.display = 'none';
        })
    }
}
var banLeft = new Banleft(document.querySelector('.banDiv_leftDiv'),
document.querySelector('#banDiv_left'));
// 内容区的尾部
/// 尾部信息滚动 floorDiv_bottom_infoUl 高度 90px
class FloorBottomUl{
   
    constructor(ul,offset){
        this.ul = ul;
        this.h = ul.offsetHeight;
        this.offset = offset;
        this.tar = this.offset*3 - parseInt(this.h);
        this.init();
    }
    init(){
        console.log(this.h);
        setInterval(function(){
            
            if(this.ul.offsetTop == this.tar){
                this.ul.style.top = 0;
            }else{
                this.ul.style.top = this.ul.offsetTop - this.offset + 'px';
            }
           
        }.bind(this) ,3000)
    }
}
var one = new FloorBottomUl(document.querySelector('.floorDiv_bottom_infoUl'),90);
//banR_show
class banR{
    constructor(moveUl){
        this.moveUl = moveUl;
        this.len = this.moveUl.children.length;
        this.h = this.moveUl.children[0].offsetHeight;
        this.init();
    }
    init(){
        var n = 1,h = this.h;
        setInterval(function(){
            // if(n = this.len){
            //     this.move(0);
            //     this.move(h);
            // }else{
            //     this.move(n*h);
            // }
            // n++;
            if(n == this.len -2){
                n = 0;
                this.moveUl.style.top = -n*h + 'px';
            }else{
                this.moveUl.style.top = -n*h + 'px';
            }            
            n++;
        }.bind(this),1000)
    }
    move(len){
        
    //    this.timer = setInterval(function(){
    //         if(len == 0){
    //             this.moveUl.style.top  = 0;
    //             clearInterval(this.timer);
    //         }else{
    //             var dis = this.moveUl.offsetTop;
    //             this.moveUl.style.top = ++dis + 'px';
    //             console.log(dis);
    //             if(dis == len){
    //                 clearInterval(this.timer);
    //             }
    //         }
    //     }.bind(this),50)
    }
}
new banR(document.querySelector('.banR_show'));
// floorDiv_body_info_div
class FloorRightInfo{
    constructor(divs){
        this.divs = divs;
        console.log(this.divs);
        this.div_a1 = [];
        this.div_a2 = [];
        this.arrA = document.querySelectorAll('.topic_ul>li>a>img');
        console.log(this.arrA);
        // this.data = {};
        this.init();
    }
    init(){
        // 1 得到添加图片的目标
        this.div_a1 = this.divs[0].querySelectorAll('a');
        this.div_a2 = this.divs[1].querySelectorAll('a');
        this.addStyle();
        // 2 请求数据 http://localhost:8010/tuNiuProject/PHP/1.php
        get("http://localhost:8010/tuNiuProject/PHP/1.php",function(res){
            // this.data = res;
            this.addImg(res);
        }.bind(this))
    }
    addStyle(){
        Array.from(this.div_a1).forEach(function(val){
            val.style.display = 'block';
            val.style.width = '225px';
            val.style.height = '90px';
            val.style.overflow = 'hidden';
        })
        Array.from(this.div_a2).forEach(function(val){
            val.style.display = 'block';
            val.style.width = '225px';
            val.style.height = '90px';
            val.style.overflow = 'hidden';
        })
    }
    addImg(data){
        // console.log(data);
        data = JSON.parse(data);
        data['data1'].forEach(function(str,ind){
            // console.log(str);
            // console.log(this.div_a1[ind]);
            // var img = document.createElement('img');
            // img.url = str;
            // this.div_a1[ind].appendChild(img);
            this.div_a1[ind].innerHTML = "<img src="+str+" style=" + 'width:100%;height:100% ' +" />";
        }.bind(this))
        
        data['data2'].forEach(function(str,ind){
            this.div_a2[ind].innerHTML = "<img src="+str+" style=" + 'width:100%;height:100% ' +"/>";
        }.bind(this))
        Array.from(this.divs).forEach(function(val){
            val.style.margin = "10px auto";
            val.style.overflow = 'hidden'
        })
        data.data3.forEach(function(val,ind){
            var img = this.arrA[ind];
            img.src = val;
            img.style.width = "100%";
            img.style.height = "100%";
        }.bind(this))
    }
}
new FloorRightInfo(document.querySelectorAll('.floorDiv_body_info_div'));
///// ajax 
function get(url,fn){
    // 1 请求头部
    var xhr = window.XMLHttpRequest? new XMLHttpRequest():new ActiveXObject('Msxml2.XMLHTTP');
    // 2 open
    xhr.open('get',url,true);
    // 3 send
    xhr.send();
    // 4 回调
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            if(fn){
                fn(xhr.responseText)
            }
        }
    }
}
//f_d_b_i_n_u1
class Ul2ul{
    constructor(ul1,ul2){
        // 1 获取目标
        this.lis1 = ul1.children;
        this.ul2 = ul2.children;
        // console.log(this.lis1,this.ul2); changeul_dis
        this.init();
    }
    init(){
        var that = this;
        Array.from(this.lis1).forEach(function(tar,ind){
            tar.ind = ind;
            tar.onclick = function(){
                that.clearName();
                this.className = 'changeUL_f_d_b';
                that.ul2[this.ind].style.display = 'block';
            }
        })
        // 
        this.lis1[0].onclick();
    }
    clearName(){
        Array.from(this.lis1).forEach(function(tar){
                tar.className = '';
        })
        Array.from(this.ul2).forEach(function(tar){
            tar.style.display = 'none';
        })
    }
}
new Ul2ul(document.querySelector('.f_d_b_i_n_u1'),
document.querySelector('.f_d_b_i_n_u2'));
// class TopUl{
//     constructor(){
//         this.arrA = document.querySelectorAll('.topic_ul>li>a')
//         console.log(this.arrA);
//     }
// }
// new TopUl();
class AddData{
    constructor(){
        // 1 得到数据
        this.data = get('http://localhost:8010/tuNiuProject/PHP/homeBodyData.json',function(res){
            console.log(this);
            
            this.data = JSON.parse(res);
        }.bind(this) )
    }
    init(data){
        // console.log(data)
        
        this.create(data);
    }
    create(data){
        var divs = document.querySelectorAll('.floorDiv_body_con>div');
        for(var i = 0,len = divs.length; i < len ;i++){

            divs[i].querySelector('h3>p').innerHTML = Object.keys(data)[i];
            // a
            this.arrA = data[ Object.keys(data)[i] ] [0].p;
            Array.from(divs[i].querySelectorAll('h3>ul a')).forEach(function(va,ind){
                va.innerHTML = this.arrA[ind];
                // console.log(this.arrA);
            },this)
            // img
            this.arrImg = data[Object.keys(data)[i] ][0].img;
            Array.from(divs[i].querySelectorAll('.floorDiv_body_con_show>ul img')).forEach(function(va,ind){
                va.src = this.arrImg
                // console.log(this.arrA);
            },this)
            // price 
            this.arrPrice = data[Object.keys(data)[i] ][0].price;
            Array.from(divs[i].querySelectorAll('.floorDiv_body_con_show>ul p')).forEach(function(va,ind){
                va.innerHTML = this.arrPrice[ind] + '￥'
                // console.log(this.arrA);
            },this)

        }
        
    }
}
var d = new AddData();
// 数据简单加密 监听属性变化
var data ;
Object.defineProperty(d,'data',{
    set:function(val){
        data = val;
        d.init(data);
    },
    get:function(){
        return data;
    }
})
