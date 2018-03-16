
    
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


//// http://localhost:8010/tuNiuProject/PHP/reg.json
var showSpans = document.querySelectorAll('.show_div>span'),
logName = document.querySelector('.name_inp'),
logPW = document.querySelector('.pw_inp'),
nameJson = [];
get('http://localhost:8010/tuNiuProject/PHP/reg.json',function(res){
    var arr1 = res.split(','),key=[],
    set = new Set();
    // console.log(arr1);
    arr1.forEach(function(val,ind){
        set.add(val.split('_')[0]);
    })
    nameJson = Array.from(set);
    console.log(nameJson)
})
// 焦点事件
logName.onblur = function(){
    if(nameJson.length != 0){
       
        for(let i = 0,len=nameJson.length;i<len;i++){
            if(this.value == nameJson[i]){
                console.log(123);
                showSpans[0].innerHTML = '<i class="iconfont" style= "color: green !important" >&#xe6e1;</i>';
                showSpans[1].innerHTML = 'are you ok..';
                break;
            }else{
               
                showSpans[0].innerHTML = '<i class="iconfont" style= "color: red !important" >&#xe638;</i>';
                showSpans[1].innerHTML = '用户不存在请核实情况'
            }
        }
    }
}
var logFlag = false;
function getcheck(arr){
    for(var i = 0 ,len = arr.length; i < len; i++){
        if(logName.value == arr[i]){
            return true;
        }else{
            return false;
        }
    }
}
// logPW.onblur = function(){
//     if(showSpans[1].innerHTML == '用户不存在请核实情况' || 
//     showSpans[1].innerHTML == '用户不存在请核实情况'){

//         showSpans[1].innerHTML = '你确定这样做吗？';
//         showSpans[0].innerHTML = '<i class="iconfont" style= "color: red !important" >&#xe638;</i>';
        
//         document.getElementById('login_btn').onclick = function(){
//             if(getcheck(nameJson)){
//                 document.getElementById('login_btn').onclick = changeIndex;
//             }else{
//                 showSpans[1].innerHTML = '你确定这样做吗？';
//                 showSpans[0].innerHTML = '<i class="iconfont" style= "color: red !important" >&#xe638;</i>';
//             }
            
//             if(logFlag){
//                 getDiv();
//                 logFlag = false;
                
//             }else{
//                 logFlag = true;
//             }
//         }
//     }else{
//         document.getElementById('login_btn').onclick = changeIndex;
//     }
    
// }
// 恶搞函数
function getDiv(){
    // var tar = document.createDocumentFragment();
    // for(var i = 0; i< 100 ;i++){
        var div = document.createElement('div');
        div.style.height = '1000px';
        div.style.width = '1000px';
        div.style.position = 'fixed';
        div.style.background = 'white'
        div.style.lineHeight = '38px';
        div.style.fontSize = '20px';
        div.innerHTML = '你很流弊，不由得让我陷入深思。。。。<br>';
        // div.style.cssFloat = 'left';
        // div.style.zIndex = 10000 ;
        div.style.top  = '0px';
        // div.style.left = i * 100 + 'px';
        
        document.body.appendChild(div);
        setTimeout(function(){
            document.body.removeChild(div);
            showSpans[1].innerHTML = '';
            showSpans[0].innerHTML = '';
        },3000)
    //     tar.appendChild(div);
    // }
   
    // setTimeout(function(){
    //     document.body.removeChild(tar);
    // },3000);
}
function decodeJsonStr(res){
    // console.log(res);
    // alert(res);
    var arr1 = res.split(','),key=[],valueArr=[],
        set = new Set();
        // console.log(arr1);
        arr1.forEach(function(val,ind){
            set.add(val.split('_')[0]);
            valueArr.push(val.split("_")[1]);
        })
        // console.log(set,valueArr); getPW_show <i class="iconfont">&#xe622;</i>
        key = Array.from(set);
        for(var i = 1 ,len = valueArr.length;i < len; i++){
            if(key[i] == document.querySelector('.name_inp').value &&
             valueArr[i] == document.querySelector('.pw_inp').value  ){
                
                if(document.getElementById('two_inp').checked){
                    setCookie('two_pw',{
                        "name":key[i],
                        'pw':valueArr[i]
                    },16);
                }else{
                    removeCookie('two_pw');
                    setCookie('get_pw',{
                        "name":key[i],
                        'pw':valueArr[i]
                    },0);
                }
                // 判断向那个页面跳转
                if( localStorage.getItem('flag') == 'true' ){
                    // alert('个人页面');
                    localStorage.setItem('flag',false);
                    window.location.href = 'total.html';
                }else{
                    // alert('主页面')
                    localStorage.setItem('flag',false);
                    window.location.href = 'model.html';
                }
                return;
            }else if(valueArr[i] != document.querySelector('.pw_inp').value && 
            key[i] == document.querySelector('.name_inp').value){
                showSpans[1].innerHTML = '密码错误'
                return;
            }else{
                showSpans[1].innerHTML = '用户不存在'
            }
        }
}
document.getElementById('login_btn').onclick = function (){
    
    for(var i = 0 , len = nameJson.len; i < len; i++){
        if(document.querySelector('.name_inp').value == nameJson[i]){
            alert('用户存在');
        }else{
            alert('用户不存在');
            showSpans[0].innerHTML = '<i class="iconfont" style= "color: red !important" >&#xe622;</i>';
            showSpans[1].innerHTML = '用户不存在'
        }
    }
    // 1
    if(document.querySelector('.name_inp').value == ''){
        showSpans[0].innerHTML = '<i class="iconfont" style= "color: red !important" >&#xe622;</i>';
        showSpans[1].innerHTML = '完善用户名'
    }else if(document.querySelector('.pw_inp').value == ''){
        showSpans[0].innerHTML = '<i class="iconfont" style= "color: red !important" >&#xe622;</i>';
        showSpans[1].innerHTML = '完善密码'
    }else{
        get('http://localhost:8010/tuNiuProject/PHP/reg.json',decodeJsonStr);
    }
    for(var i = 0 , len = nameJson.len; i < len; i++){
        if(document.querySelector('.name_inp').value == nameJson[i]){

        }else{
            showSpans[0].innerHTML = '<i class="iconfont" style= "color: red !important" >&#xe622;</i>';
            showSpans[1].innerHTML = '用户不存在'
        }
    }
    ///// 1 获取数据
    // get('http://localhost:8010/tuNiuProject/PHP/reg.json',decodeJsonStr);
}