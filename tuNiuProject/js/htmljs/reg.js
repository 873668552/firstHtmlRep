// 基础的url
var baseUrl = "http://localhost:8010/tuNiuProject/PHP/reg.php?user=",user,password,keyArr;
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
get('http://localhost:8010/tuNiuProject/PHP/reg/removeSame.php',function(res){
    // alert(res);
   
    var arr = res.split(','),key=[],valueArr=[],
    set = new Set(),
    str = '',
    set4rem = new Set(),
    arr1 = [];
    arr.forEach(function(val){
        set4rem.add(val);
    })
    arr1 = Array.from(set4rem);
    // console.log(arr1);
    arr1.forEach(function(val,ind){
        set.add(val.split('_')[0]);
        valueArr.push(val.split("_")[1]);
    })
    // 
    // console.log(set,valueArr);
    key = Array.from(set);
   for(var i = 1 ,len = valueArr.length;i < len; i++){
        str += key[i] + '_' + valueArr[i];
   }
   keyArr = key;
})





// 提示input父元素 phone_reg_li_divr>span

// 手机号码验证 phone_btn       

// 手机号码 输入框 phone_text
// 验证码 check_text point_span
// 动态码 dy_input
// 邀请码 invite_input

function inputEvent(){
    var showSpan = document.querySelectorAll('.phone_reg_li_divr>div>.pr_span1'),
    showI = document.querySelectorAll('.phone_reg_li_divr>div>.pr_span2'),
    pointSpan = document.querySelector('.point_span'),
    checkInp = document.querySelector('.check_text'),flag = false;
    // 1 手机号码 phone_text
   
    showSpan[0].innerHTML = '<i class="iconfont">&#xe6e1;</i>';
    showI[0].innerHTML = '请输入手机号码'
    // console.log();
    showI[0].inp=document.querySelector('.phone_reg_li_divl .phone_text');
    showI[0].flag = true;
    // showI[0].inp.focus();
    document.querySelector('.phone_reg_li_divl .phone_text').onkeyup = function(){
        
        if( /^\d{11}$/.test(this.value+"") ){
            console.log(showSpan[0].innerHTML);
            showSpan[0].innerHTML = '';
            showSpan[0].innerHTML = '<i class="iconfont" style= "color:' + "green !important" +'">&#xe6e1;</i>';
            showI[0].innerText = '有效..';
        }else{
            showSpan[0].innerHTML = '<i class="iconfont" style= "color:' + "green !important" +'">&#xe6e1;</i>';
            showI[0].innerText = '输入中..';
        }
        if(this.value == ''){
            
            showSpan[0].innerText = '';
            showI[0].innerHTML = ""
        }
        keyArr.forEach(function(val){
            if(val == this.value){
                showSpan[0].innerHTML = '<i class="iconfont" style= "color:' + "green !important" +'">&#xe6e1;</i>';
                showI[0].innerText = '已经注册，请登录';
                flag = false;
                showI[0].flag = true;
            }
        },this)
    }
    document.querySelector('.phone_text').onblur = function(){

        if( /^\d{11}$/.test(this.value+"") && (this.value+"").length == 11 ){
            showSpan[0].innerHTML = '<i class="iconfont" style= "color:' + "green !important" +'">&#xe603;</i>';
            showI[0].innerHTML = '和法';
            flag = true;
            showI[0].flag = false;
        }else{
            showSpan[0].innerHTML = '<i class="iconfont" style= "color:' + "red !important" +'">&#xe622;</i>';
            showI[0].innerHTML = '不和法';
            flag = false;
            showI[0].flag = true;
            showI[0].inp = this;
        }
        keyArr.forEach(function(val){
            if(val == this.value){
                showSpan[0].innerHTML = '<i class="iconfont" style= "color:' + "green !important" +'">&#xe6e1;</i>';
                showI[0].innerText = '已经注册，请登录';
                flag = false;
                showI[0].flag = true;
            }
        },this)
    }
    // point_span 点击换图片
    showI[1].flag = true;
    showI[1].inp = checkInp
    pointSpan.onmousedown = function(){
        pointSpan.innerHTML = ranNumber();
    }
    checkInp.onkeyup = function(){
        if(checkInp.value == pointSpan.innerHTML){
            showSpan[1].innerHTML = '<i class="iconfont" style= "color:' + "green !important" +'">&#xe603;</i>';
            showI[1].innerHTML = '正确';
        }else{
            showSpan[1].innerHTML = '<i class="iconfont" style= "color:' + "green !important" +'">&#xe6e1;</i>';
            showI[1].innerText = '输入中..';
        }
    }
    checkInp.onblur = function(){
        if(checkInp.value == pointSpan.innerHTML){
            showSpan[1].innerHTML = '<i class="iconfont" style= "color:' + "green !important" +'">&#xe603;</i>';
            showI[1].innerHTML = '输入正确';
            flag = true;
            showI[1].flag = false
        }else{
            showSpan[1].innerHTML = '<i class="iconfont" style= "color:' + "red !important" +'">&#xe622;</i>';
            showI[1].innerHTML = '输入有误验证码';
            flag = false;
            showI[1].flag = true;
            showI[1].inp = this;
        }
    }
    // 动态码  "http://localhost:8010/tuNiuProject/PHP/reg.php?user=";
    var dyStr = '';
    showI[2].inp = document.querySelector('.dyspan');
    showI[2].flag = true;
    document.querySelector('.dyspan').onmousedown = function(){
        get('http://localhost:8010/tuNiuProject/PHP/reg/dt.php?data='+dyMunber(),function(res){
            dyStr = res;
            alert(res);
        })
    }
    document.querySelector('.dy_input').onblur = function(){
        if(this.value == dyStr){
            showI[2].innerHTML = '输入正确';
            flag = true;
            showI[2].flag = false;
        }else{
            showI[2].innerHTML = '输入有误，请重新获取';
            flag = false;
            dyStr = '';
        }
        if(this.value == ''){
            showI[2].innerHTML = '输入有误，请重新获取';
            flag = false;
        }
    }
    document.querySelector('.dy_input').onfocus = function(){
        this.value = '';
    }
    // phone_btn 下一步
    // 初始化为空，所以提示信息都为真
    showI[0].flag = true;
    showI[1].flag = true;
    showI[2].flag = true;
    document.querySelector('.phone_btn').onmouseenter = function(){
        if(flag && !showI[0].flag && !showI[0].flag  && !showI[0].flag  ){
            flag = false;
            this.onclick = GotoPW;
            // 获取账号
            user = document.querySelector('.phone_reg_li_divl .phone_text').value;
        }else{
            this.onclick = function(){
                if(document.querySelector('.dy_input').value == ''){
                    showI[2].innerHTML = '输入有误，请重新获取'
                    document.querySelector('.dy_input').focus();return;
                }
                for(let i = 0,len = showI.length; i < len ; i++ ){
                    if(showI[i].flag && i == 0){
                        document.querySelector('.phone_reg_li_divl .phone_text').focus();
                        break;
                    }else if(showI[i].flag && i == 1){
                        checkInp.focus();
                        break;
                    }else if(showI[i].flag && i == 2){
                        document.querySelector('.dy_input').focus();
                        break;
                    }
                }
            }
        }
    }
    // phone_btn2 密码 pw_inp repw_inp phone_pw_span
    var pwFlag = false,
    pwInp = document.querySelector('.pw_inp'),
    repwInp = document.querySelector('.repw_inp'),
    showWPinfos = document.querySelectorAll('.phone_pw_span>i'),
    showPWinfo = document.querySelectorAll('.phone_pw_span');
    // console.log(showWPinfos);
    // 第一个密码框
    pwInp.onkeyup = function(e){
        var e = e ||window.event,
        tar = e.target||e.srcElement,
        key = e.keyCode;
        showPWinfo.innerHTML = '';
        if(key == 8 || key == 13){
            alert('不能输入空格或者回车');return
        }else{
            judgePw(tar.value,showWPinfos);
        }
        
    }
    // 重复确认
    repwInp.onkeyup = function(){
        showPWinfo[1].innerHTML = '';
    }
    repwInp.onblur = function(){
        if(this.value == pwInp.value){
            pwFlag = true;
            showPWinfo[1].innerHTML = '输入正确'
        }else{
            pwFlag = false;
            showPWinfo[1].innerHTML = '输入两次密码不一样'
        }
    }
    document.querySelector('.phone_btn2').onmouseenter = function(){
        this.onclick = function(){
            if(pwFlag){
                pwFlag = false;
                // 获取密码
                password =  document.querySelector('.pw_inp').value;
                GotoSucc()
            }else{
                pwInp.focus();
            }
        }
    }
}
// 密码界面
function GotoPW(){
    // firstCon conCon2
    document.querySelector('.firstCon').style.display = 'none';
    document.querySelector('.conCon2').style.display = 'block';
}
// 强度判断
function judgePw(str,lis){
    if(str == ''){
        return;
    }
    // console.log(lis);
    Array.from(lis).forEach(function(val){
        val.style.background = '';
    })
    var arr = str.split(''),a=b=c=0;
    Array.from(arr).forEach(function(val,ind){
        if( val.charCodeAt()>=65 && val.charCodeAt()<=90 ){
            a=1;
            console.log('a',a);
        }else if( val.charCodeAt()>=97 && val.charCodeAt()<=122 ){
            b=1;
            console.log('b',b);
        }else{
            c=1;
            console.log('c',c);
        }
    })
    // console.log(a+b+c);
    lis[a+b+c-1].style.background = 'orange';
}
// 成功界面
function GotoSucc(){
    // firstCon conCon2
    document.querySelector('.conCon2').style.display = 'none';
    document.querySelector('.conCon3').style.display = 'block';
}

//////// 登录 /////////////////////////////////////////////////////////////////////////
document.querySelector('.phone_btn3').onclick = function(){
    // "http://localhost:8010/tuNiuProject/PHP/reg.php?user="
    var data = user + '_' + password;
    get("http://localhost:8010/tuNiuProject/PHP/reg.php?user="+data,function(res){
        setCookie('get_pw',{
            "name":user,
            'pw':password
        },0);
        user = password = '';
        window.location.href = 'model.html'
    })
}
/////////////////////////////////////////////////////////////////////////
// 随机生成数字
function ranNumber(){
    return  '' + String.fromCharCode( parseInt( (Math.random()*26)+65 ) ) + parseInt( Math.random()*10 ) +
    String.fromCharCode( parseInt( (Math.random()*26)+97 ) ) + parseInt( Math.random()*10 );
}
function dyMunber(){
    return "" + parseInt( Math.random()*10 ) + parseInt( Math.random()*10 ) + parseInt( Math.random()*10 )
    + parseInt( Math.random()*10 ) + parseInt( Math.random()*10 ) + parseInt( Math.random()*10 ) ;
}
function getFocus(res){
    console.log(res);
    res.focus();
}

/////// 号码归属地点击事件
function showContryInfo(){
    //phone_info_btn
    var tar = document.querySelector('.phone_info_btn'),
    pDiv = document.querySelector('.phone_first');
    tar.flag = true;
    tar.onclick = function(){
        if(this.flag){
            this.flag = false;
            // alert(1);
            pDiv.style.display = 'block';
        }else{
            this.flag = true;
            // alert('no')
            pDiv.style.display = 'none';
        }
    }
}
function phoneDivShow(){
    //phone_first phone_first_title
    var tar = document.querySelector('.phone_first_title'),
    ULS=document.querySelectorAll('.phone_first_show'),
    showDiv = document.querySelector('.phone_info_div');
    Array.from(tar.children).forEach(function(val,ind){
        val.ind = ind;
        ULS[ind].onclick = function(e){
            e = e || window.event;
            var li = e.target || srcElement;
            showDiv.innerHTML = li.innerHTML;
            tar.parentElement.style.display = 'none';
        }
    })
    // console.log(tar);
    tar.onclick = function(e){
        // console.log(this);
        e = e || window.event;
        var li = e.target || srcElement;
        // console.log(li);
        Array.from(tar.children).forEach(function(val,ind){
            val.id = '';
            ULS[ind].style.display = 'none';
        })
        li.id = 'firstLi';
        ULS[li.ind].style.display = 'block';
    }

}
phoneDivShow();
showContryInfo();
inputEvent();
function setCookie(_name, _value, _date, _path){
	
	// 支持所有类型的数据
	var obj = {
		"value" : _value	// 把cookie内容放到obj对象中
	}
	// 对象转字符串
	var objstr = JSON.stringify(obj);
	
	var str = _name+"="+objstr;

	if( _date ){	// 如果参数_date有设置的话，隐式转换为布尔值时，为真；如果参数_date没有设置，转换为布尔值时为假。
		//判断第三个参数是过期时间还是有权范围
		switch( typeof(_date) ){	// 这个参数的数据类型是什么
			case "number":// 为过期时间
				var d = new Date();
				d.setDate( d.getDate()+_date );	// 过期时间为：当前的日期加几天
				str += ";expires="+d.toGMTString();
				break;
			case "object":// 为过期时间
				str += ";expires="+_date.toGMTString();
				break;
			case "string":// 为path
				str += ";path="+_date;
				break;
		}
	}
	// 如果第四个参数存在，并且第三个参数不是字符串的话，根据第四个参数来设置path属性
	// 原因：第三个参数如果是字符串的话，就以第三个参数设置path属性了
	if( _path && typeof(_date)!="string" ){//setCookie("a", "123", "x", "abc")
		str += ";path="+_path;
	}
	//console.log( str );
	// 真正的设置cookie
	document.cookie = str;
}