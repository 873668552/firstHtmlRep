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
            "time":time
        }
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