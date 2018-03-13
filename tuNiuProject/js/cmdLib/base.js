function lazyImg(){
    judgeLoad();
    judgeLoad2();
}
// 尾部记载图片函数
function judgeLoad(){
    
    var div = document.getElementById('lastSer5'),
    h =div.offsetTop - document.documentElement.clientHeight,
    flag = true;
    // 1
    if( h < document.documentElement.scrollTop && flag){
    console.log(1)
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

// 滚动条事件
document.body.onscroll = function(e){
    
    judgeLoad();
    judgeLoad2();
    floor.init(e);
}

// 尾部移动信息部分
function lastPartMove(){
    var movePart = document.querySelector('.lastSer5_moveInfo>div>ul'),
    firstLiWidth = movePart.querySelector('li').offsetWidth,
    count = movePart.querySelectorAll('li').length;
    
}
//  抛出的对象
var obj = {
    "lazyImg":lazyImg,
    'lastPartMove':lastPartMove
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
// // 楼梯 监听 floorDiv_body_con  
/*
e.stopPropagation(); 阻止冒泡

document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度


div.offsetHeight 宽度
div.offsetTop 向上的距离
*/ 
class FloorNa{
    constructor(tarDiv,height){

        // 1 结构数据备份
        this.tar = tarDiv;
        this.h = height;
        this.lt = document.querySelector('.floorDiv');
        this.arrHeight = [];
        this.arrTop = [];
        this.ltS = [];
        Array.from(tarDiv.children).forEach((val,ind)=>{
            this.arrHeight.push(val.offsetHeight);
            this.arrTop.push(val.offsetTop);
            this.createFl(ind);
        })
        this.len = this.arrTop.length;
        this.top = this.arrTop[0];
        this.isFirst = true;
        this.current = 0;
        
        // console.log(this.len);
        // console.log(this.arrTop.length);
    }
    createFl(ind){
        var div = document.createElement('div');
        div.style.height = this.h + 'px';
        div.style.marginBottom = '1px';
        div.ind = ind;
        div.style.lineHeight = this.h + 'px';
        div.style.textAlign = 'center';
        div.onmousedown = function(e){
            for(var j = 0; j < this.len; j ++){
                this.ltS[j].style.background = '';
            }
            document.body.onscroll = null;
            this.ltS[e.target.ind ].style.background = 'blue';
            document.scrollingElement.scrollTop = this.arrTop[e.target.ind] ;
            console.log(this.ind);
            // document.scrollingElement.scrollTop = 
        }.bind(this);
        div.onmouseup = function(){
            document.body.onscroll = function(e){
    
                judgeLoad();
                judgeLoad2();
                floor.init(e);
            }
        }
        this.lt.appendChild(div);
        this.ltS.push(div);
    }

    init(e){
        // 1 大于一定的值 楼梯出现
        // console.log(document.scrollingElement.scrollTop);
        var curTop = document.scrollingElement.scrollTop,
        winH = document.documentElement.clientHeight/2;
        if(this.top - winH <= curTop){
            if(this.isFirst){
                this.lt.style.display = 'block';
                this.isFirst = false;
            }
           // 
           this.arrTop.push(this.arrTop[this.len-1] + winH);
           for(var i = 0 ; i < this.len  ; i++ ){
            //    console.log("this.top"+this.arrTop[i],'curTop'+curTop);
                if(curTop > this.arrTop[i] - winH && curTop < this.arrTop[i+1] - winH){
                    // alert(this.arrTop[i]);
                    if(i == 0){
                        this.ltS[this.len-1].style.background = '';
                        this.ltS[i].style.background = 'blue';
                        this.ltS[this.len>1?i+1:0].style.background = '';
                    }else if(i == this.len - 1){
                        this.ltS[0].style.background = '';
                        this.ltS[i].style.background = 'blue';
                        this.ltS[this.len>1?i-1:0].style.background = '';
                    }else{
                        this.ltS[i-1].style.background = '';
                        this.ltS[i].style.background = 'blue';
                        this.ltS[i+1].style.background = '';
                    }
                    // console.log(i,curTop,this.arrTop[i]);
                    return;
                }
           }
           //
            
        }else{
            this.lt.style.display = 'none';
            this.isFirst = true;
        }
    }
}

var floor = new FloorNa(document.querySelector('.floorDiv_body_con'),100);
// 楼梯添加数据
class addData4lt{
    constructor(dataArr,tar){
        this.init(dataArr,tar);
    }
    init(dataArr,tar){
        var divs = tar.children,
        len = dataArr.length;
        if(divs.length == len){
        }else{
            alert('数据有问题');
            return;
        }
        for(var i = 0 ;i < len;  i ++){
            divs[i].innerHTML = dataArr[i];
        }   
    }
}
new addData4lt(['凉风','秋月','无边','轩榭','伊畔'],document.querySelector('.floorDiv'));