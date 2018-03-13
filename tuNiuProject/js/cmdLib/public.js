function lazyImg(){
    judgeLoad();
    judgeLoad2();
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

// 尾部移动信息部分
function lastPartMove(){
    var movePart = document.querySelector('.lastSer5_moveInfo>div>ul'),
    firstLiWidth = movePart.querySelector('li').offsetWidth,
    count = movePart.querySelectorAll('li').length;
    
}
