// 抛出去的对象
var headObj = {
    'logFn':logDele
}

// 1 top 登录
function logDele(){
   
    elemMosemove(document.getElementById('navDiv').querySelector('.navTop_left'),'black','red');
    // elemMosemove(document.getElementById('navDiv').querySelector('.navTop_rightA'),'green','#404040');
    FatherHover(document.getElementById('navDiv').querySelector('.navTop_right li:nth-last-child(2)'),'.navTop_rightWechat');
}

function removeColor(elems,color){
    Array.from(elems).forEach(function(elem){
        elem.style.color = color;
    })
}
function elemMosemove(elem,originColor,showColor){
    
    elem.onmousemove=function(e){
        // 1
        e = e || window.event;
        var tar = e.target || srcElement;
        removeColor(this.getElementsByTagName('a'),originColor);
        
        if(tar.nodeName.toUpperCase() == 'A'){
            // console.log(tar);
            tar.style.color = showColor;
        }
    }
    
    elem.onmouseleave=function(){
        removeColor(this.getElementsByTagName('a'),originColor);
    }
}
function FatherHover(faElem,sonStr){
    faElem.onmouseover = function(){
        this.querySelector(sonStr).style.display = 'block';
    }
    faElem.onmouseleave = function(){
        this.querySelector(sonStr).style.display = 'none';
    }
    
    // faElem.querySelector(sonStr).onmouseover = function(){
    //     this.parentElement.style.background = 'white';
    // }
    // faElem.querySelector(sonStr).onmouseleave = function(){
    //     this.parentElement.style.background = '#f8f8f8';
    // }
}