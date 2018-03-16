// 1 order_span get_span sum_span  

function refreshInfo(){
    var orderArr = [],
    waitArr = [],
    sumArr = [];
    // "cookieName" : col[0],
    // "cookieValue" : obj.value
    orderArr = getCookieAll(/^o/,function(name,objs){ 
    })
    waitArr = getCookieAll(/^w/,function(name,objs){ 
    })
    sumArr = getCookieAll(/^s/,function(name,objs){ 
    })
    document.querySelector('.order_span').innerHTML = orderArr.length;
    document.querySelector('.get_span').innerHTML = waitArr.length;
    document.querySelector('.sum_span').innerHTML = sumArr.length;
    return [orderArr,waitArr,sumArr];
}
// 第一次加载


// 订单
function addOrder(arr){
// "cookieName" : col[0],
        // 		"cookieValue" : obj.value
        console.log('order',arr);
        var faDiv = document.querySelector('.content_div');
        for(var i = 0 ,len = arr.length; i < len; i++){
            var div = document.createElement('div'),
            obj = arr[i];
            div.orderName = obj.cookieName;
            div.obj = obj.cookieValue;
           // var obj = {
            //     "name":showInfo.cookie,
            //     "price":total.price,
            //     "fa":total.faCount,
            //     "son":total.sonCount,
            //     'sum':showInfo.innerHTML,
            //     "city":cityInp.value,
            //     "time":time
            // }
            div.innerHTML =   '<ul class="show_goods_ul">'+
            '<li style="height:20px;line-height:20px;font-size:12px;color:#333;padding:0 0 10px 20px;">'+
            '<span>下单时间: <i class="order_time_i">'+ obj.cookieValue.time +'</i></span><span style="padding-left:35px;" >订单号: <i class="order_number">'+ getOrderNumber() +'</i></span>'+
            '</li >'+
            '<li style="height:54px;font-size:14px;color:#333;padding:0 0 10px 20px;">'+
            '<div style="float: left; height:54px;line-height:54px;width:295px;">'+
            '<img src="../img/total/tree.png" alt="" style="float: left;">'+
            '<p style="float: left;padding-left:20px">'+ obj.cookieValue.sum +'</p>'+// 描述
            '</div>'+
            '<div style="float: left; height:54px;line-height:54px;width:104px;">'+ obj.cookieValue.name +'</div>'+ //名称
            '<div style="float: left;height:54px;line-height:54px;width:95px;">'+ ( parseInt(obj.cookieValue.fa) + parseInt(obj.cookieValue.son) ) +'</div>'+ // 数量
            '<div style="float: left;height:54px;line-height:54px;width:123px;">' + obj.cookieValue.city + '</div>'+ // 时间
            '<div style="float: left;height:54px;line-height:54px;width:95px;">'+ obj.cookieValue.price +'</div>'+// 定金
            '<div style="float: left;height:54px;line-height:54px;width:123px;">"待付款"</div>'+// 状态
            '<div class="option_div" style="float: left;height:54px;line-height:27px;width:95px;text-align:center;">'+
            '<p style="cursor: pointer;background:#dedede">删除</p>'+
            '<p style="cursor: pointer;background:#dedede">付款</p>'+
            '</div>'+
            '</li>'+
            '</ul>';
            faDiv.appendChild(div);
        }
}
function addWait(arr){
        // "cookieName" : col[0],
        // 		"cookieValue" : obj.value
        console.log('wait',arr);
        var faDiv = document.querySelector('.content_div');
        for(var i = 0 ,len = arr.length; i < len; i++){
            var div = document.createElement('div'),
            obj = arr[i];
            div.orderName = obj.cookieName;
            div.obj = obj.cookieValue;
          
            div.innerHTML =   '<ul class="show_goods_ul">'+
            '<li style="height:20px;line-height:20px;font-size:12px;color:#333;padding:0 0 10px 20px;">'+
            '<span>下单时间: <i class="order_time_i">'+ obj.cookieValue.time +'</i></span><span style="padding-left:35px;" >订单号: <i class="order_number">'+ getOrderNumber() +'</i></span>'+
            '</li >'+
            '<li style="height:54px;font-size:14px;color:#333;padding:0 0 10px 20px;">'+
            '<div style="float: left; height:54px;line-height:54px;width:295px;">'+
            '<img src="../img/total/tree.png" alt="" style="float: left;">'+
            '<p style="float: left;padding-left:20px">'+ obj.cookieValue.sum +'</p>'+// 描述
            '</div>'+
            '<div style="float: left; height:54px;line-height:54px;width:104px;">'+ obj.cookieValue.name +'</div>'+ //名称
            '<div style="float: left;height:54px;line-height:54px;width:95px;">'+ ( parseInt(obj.cookieValue.fa) + parseInt(obj.cookieValue.son) ) +'</div>'+ // 数量
            '<div style="float: left;height:54px;line-height:54px;width:123px;">' + obj.cookieValue.city + '</div>'+ // 时间
            '<div style="float: left;height:54px;line-height:54px;width:95px;">'+ obj.cookieValue.price +'</div>'+// 定金
            '<div style="float: left;height:54px;line-height:54px;width:123px;">"待收货"</div>'+// 状态
            '<div class="option_div_w" style="float: left;height:54px;line-height:54px;width:95px;text-align:center;">'+
            '<p style="cursor: pointer;background:#dedede;height:54px;">收货</p>'+
            '</div>'+
            '</li>'+
            '</ul>';
            faDiv.appendChild(div);
        }
}
function addSum(arr){
    // "cookieName" : col[0],
    // 		"cookieValue" : obj.value
    console.log('sum',arr);
    var faDiv = document.querySelector('.content_div');
    for(var i = 0 ,len = arr.length; i < len; i++){
        var div = document.createElement('div'),
        obj = arr[i];
        div.orderName = obj.cookieName;
        div.obj = obj.cookieValue;
       
        div.innerHTML =   '<ul class="show_goods_ul">'+
        '<li style="height:20px;line-height:20px;font-size:12px;color:#333;padding:0 0 10px 20px;">'+
        '<span>下单时间: <i class="order_time_i">'+ obj.cookieValue.time +'</i></span><span style="padding-left:35px;" >订单号: <i class="order_number">'+ getOrderNumber() +'</i></span>'+
        '</li >'+
        '<li style="height:54px;font-size:14px;color:#333;padding:0 0 10px 20px;">'+
        '<div style="float: left; height:54px;line-height:54px;width:295px;">'+
        '<img src="../img/total/tree.png" alt="" style="float: left;">'+
        '<p style="float: left;padding-left:20px">'+ obj.cookieValue.sum +'</p>'+// 描述
        '</div>'+
        '<div style="float: left; height:54px;line-height:54px;width:104px;">'+ obj.cookieValue.name +'</div>'+ //名称
        '<div style="float: left;height:54px;line-height:54px;width:95px;">'+ ( parseInt(obj.cookieValue.fa) + parseInt(obj.cookieValue.son) ) +'</div>'+ // 数量
        '<div style="float: left;height:54px;line-height:54px;width:123px;">' + obj.cookieValue.city + '</div>'+ // 时间
        '<div style="float: left;height:54px;line-height:54px;width:95px;">'+ obj.cookieValue.price +'</div>'+// 定金
        '<div style="float: left;height:54px;line-height:54px;width:123px;">"评价"</div>'+// 状态
        '<div class="option_div_sum" style="float: left;height:54px;line-height:54px;width:95px;text-align:center;">'+
        '<p style="cursor: pointer;background:#dedede;height:54px;">评价</p>'+
        '</div>'+
        '</li>'+
        '</ul>';
        faDiv.appendChild(div);
    }
}
// 功能函数
function addUl(arr,type){
    // 1 添加订单
    if(type == 1){
        addOrder(arr);
    }
    // 2 添加等待
    if(type == 2){
        addWait(arr);
    }
    // 3 添加订单
    if(type == 3){
        addSum(arr)
    }
}
var allArr = refreshInfo();
addUl(allArr[0],1);
addUl(allArr[1],2);
addUl(allArr[2],3);

orderFn();
waitFunction();
sumFn();

function getOrderNumber(){
    return '' + 123 + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) ;
}
// 1 事件

document.querySelector('.title_ul>li').style.borderBottom = '3px solid #37c249';
document.querySelector('.title_ul>li>i').style.color = '#37c249';

document.querySelector('.title_ul').onclick = function(e){
    
    e = e || window.event;
    var tar = e.target || e.srcElement;
    if(tar.nodeName.toUpperCase() == 'I'){
        tar.parentElement.style.borderBottom = '3px solid #37c249';
        tar.style.color = '#37c249';
        if(this.cur){
            this.cur.parentElement.style.border = 'none';
            this.cur.style.color = '#666';
        }else{
            document.querySelector('.title_ul>li').style.borderBottom = 'none';
            document.querySelector('.title_ul>li>i').style.color = '#666';
        }
        this.cur = tar;
    }
    e.stopPropagation();
}
// 结构
var allLIS = document.querySelectorAll('.title_ul>li');
Array.from(allLIS).forEach(function(val,ind){
    val.ind = ind;
    val.onmouseup = function(){
        if(this.ind == 0){
            var allArr = refreshInfo();
            var faDiv = document.querySelector('.content_div');
            faDiv.innerHTML = '';
            addUl(allArr[0],1);
            addUl(allArr[1],2);
            addUl(allArr[2],3);
             //刷新
             sumFn();
             waitFunction();
             orderFn();
        }else if(this.ind == 1){// 待付款
            var allArr = refreshInfo();
            var faDiv = document.querySelector('.content_div');
            faDiv.innerHTML = '';

            addUl(allArr[0],1);
             //刷新
            //  sumFn();
            //  waitFunction();
             orderFn2();
        }else if( this.ind == 2){
            var allArr = refreshInfo();
            var faDiv = document.querySelector('.content_div');
            faDiv.innerHTML = '';
            addUl(allArr[1],2);
             //刷新
            //  sumFn();
             waitFunction2();
            //  orderFn();
        }else{
            var allArr = refreshInfo();
            var faDiv = document.querySelector('.content_div');
            faDiv.innerHTML = '';
            addUl(allArr[2],3);
             //刷新
             sumFn2();
            //  waitFunction();
            //  orderFn();
        }
    }
})



// 2 
///////// option_div

function orderFn(){
    var delePs = document.querySelectorAll('.option_div');
    if(delePs.length == 0){

    }else{

        for(var i = 0 ,len = delePs.length;i < len; i++){
                // 删除
            var deleP = delePs[i].querySelectorAll('p');
            // console.log(deleP);
            deleP[0].onclick =function(){
                var tarArr = refreshInfo(),ordername;
                ordername = this.parentElement.parentElement.parentElement.parentElement.orderName;
                var faDiv = document.querySelector('.content_div');
                faDiv.innerHTML = '';
                removeCookie(ordername);
                addInfo();
                //刷新
                sumFn();
                waitFunction();
                orderFn();
            }
            // 付款
            deleP[1].onclick =function(){
                
                var tarArr = refreshInfo(),ordername,objvalue;
                ordername = this.parentElement.parentElement.parentElement.parentElement.orderName;
                objvalue = this.parentElement.parentElement.parentElement.parentElement.obj;
                var faDiv = document.querySelector('.content_div');
                faDiv.innerHTML = '';

                setCookie( 'w' + ordername,objvalue);
                removeCookie(ordername);
                addInfo();
                
                //刷新
                sumFn();
                waitFunction();
                orderFn();
            }
        }
    }
}

// 收货
function waitFunction(){
    /// 收货
    var deleSpan = document.querySelectorAll('.option_div_w>p');
    console.log('收货',deleSpan);
    if(deleSpan.length == 0){

    }else{
        // alert(deleSpan)
        for(var i = 0 ,len = deleSpan.length; i < len; i++){
            deleSpan[i].onclick = function(){
                var tarArr = refreshInfo(),ordername,objvalue;
                ordername = this.parentElement.parentElement.parentElement.parentElement.orderName;
                objvalue = this.parentElement.parentElement.parentElement.parentElement.obj;
                var faDiv = document.querySelector('.content_div');
                faDiv.innerHTML = '';
    
                setCookie( 's' + ordername,objvalue);
                removeCookie(ordername);
                addInfo();
                
                //刷新
                sumFn();
                waitFunction();
                orderFn();
                // 
            }
        }

    }
}


// 评价
function sumFn(){
    /// 评价
    var sumspans = document.querySelectorAll('.option_div_sum>p');
    console.log('评价',sumspans);
    if(sumspans.length == 0){
        // alert('评价');
    }else{
        deleSpan = sumspans;
        for(var i = 0 , len = deleSpan.length; i < len; i++){
            deleSpan[i].onclick = function(){
                // alert(123)
            var tarArr = refreshInfo(),ordername,objvalue;
            ordername = this.parentElement.parentElement.parentElement.parentElement.orderName;
            objvalue = this.parentElement.parentElement.parentElement.parentElement.obj;
            var faDiv = document.querySelector('.content_div');
            faDiv.innerHTML = '';
            removeCookie(ordername);
            addInfo();

            sumFn();
            waitFunction();
            orderFn();
            }
        }
    }
}

// 加载页面
function addInfo(){
    var allArr = refreshInfo();
    addUl(allArr[0],1);
    addUl(allArr[1],2);
    addUl(allArr[2],3);
}


function orderFn2(){
    var delePs = document.querySelectorAll('.option_div');
    if(delePs.length == 0){

    }else{

        for(var i = 0 ,len = delePs.length;i < len; i++){
                // 删除
            var deleP = delePs[i].querySelectorAll('p');
            // console.log(deleP);
            deleP[0].onclick =function(){
                var tarArr = refreshInfo(),ordername;
                ordername = this.parentElement.parentElement.parentElement.parentElement.orderName;
                var faDiv = document.querySelector('.content_div');
                faDiv.innerHTML = '';
                removeCookie(ordername);
                // addInfo();
                var allArr = refreshInfo();
                addUl(allArr[0],1);
                //刷新
                // sumFn();
                // waitFunction();
                orderFn2();
            }
            // 付款
            deleP[1].onclick =function(){
                
                var tarArr = refreshInfo(),ordername,objvalue;
                ordername = this.parentElement.parentElement.parentElement.parentElement.orderName;
                objvalue = this.parentElement.parentElement.parentElement.parentElement.obj;
                var faDiv = document.querySelector('.content_div');
                faDiv.innerHTML = '';

                setCookie( 'w' + ordername,objvalue);
                removeCookie(ordername);
                // addInfo();
                var allArr = refreshInfo();
                addUl(allArr[0],1);
                
                //刷新
                // sumFn();
                // waitFunction();
                orderFn2();
            }
        }
    }
}

// 收货
function waitFunction2(){
    /// 收货
    var deleSpan = document.querySelectorAll('.option_div_w>p');
    console.log('收货',deleSpan);
    if(deleSpan.length == 0){

    }else{
        // alert(deleSpan)
        for(var i = 0 ,len = deleSpan.length; i < len; i++){
            deleSpan[i].onclick = function(){
                var tarArr = refreshInfo(),ordername,objvalue;
                ordername = this.parentElement.parentElement.parentElement.parentElement.orderName;
                objvalue = this.parentElement.parentElement.parentElement.parentElement.obj;
                var faDiv = document.querySelector('.content_div');
                faDiv.innerHTML = '';
    
                setCookie( 's' + ordername,objvalue);
                removeCookie(ordername);

                var allArr = refreshInfo();
                addUl(allArr[1],2);
                //刷新
                // sumFn();
                waitFunction2();
                // orderFn();
                // 
            }
        }

    }
}


// 评价
function sumFn2(){
    /// 评价
    var sumspans = document.querySelectorAll('.option_div_sum>p');
    console.log('评价',sumspans);
    if(sumspans.length == 0){
        // alert('评价');
    }else{
        deleSpan = sumspans;
        for(var i = 0 , len = deleSpan.length; i < len; i++){
            deleSpan[i].onclick = function(){
                // alert(123)
            var tarArr = refreshInfo(),ordername,objvalue;
            ordername = this.parentElement.parentElement.parentElement.parentElement.orderName;
            objvalue = this.parentElement.parentElement.parentElement.parentElement.obj;
            var faDiv = document.querySelector('.content_div');
            faDiv.innerHTML = '';
            removeCookie(ordername);
            var allArr = refreshInfo();
            addUl(allArr[2],3);
            sumFn2();
            // waitFunction();
            // orderFn();
            }
        }
    }
}