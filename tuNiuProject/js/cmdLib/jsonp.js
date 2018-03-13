function callback(str){
   
   
    var ul = document.querySelector('.showUl'),len = str.s.length,lis,current=0;
    ul.innerHTML = '';
    ul.style.zIndex = 10;
   
    str.s.forEach(function (val,ind) {
        
        var li = document.createElement('li');
        li.style.width = '331px';
        li.style.height = '34px';
        li.style.lineHeight = '34px';
        li.style.textAlign = 'center';
        li.style.fontSize = '12px';
        li.style.background = 'pink'
        li.onclick = function(){
            search.value = li.innerText;
            li.parentElement.innerHTML = '';
        }
        li.onmouseenter = function () {
            
            if(li.ind == 0){
                this.style.background = 'skyblue';
                // console.log(len -1);
                lis[len -1].style.background = 'pink';
                lis[1].style.background = 'pink';
            }else if(li.ind == len -1){
                this.style.background = 'skyblue';
                lis[0].style.background = 'pink';
            }
            else{
                this.style.background = 'skyblue';
                lis[this.ind - 1].style.background = 'pink';
                lis[this.ind + 1].style.background = 'pink';
            }
            current = this.ind;
            // console.log(current);
        }
       
        li.ind = ind;
        li.innerText = val;
        ul.appendChild(li);
        
    })
    lis = ul.querySelectorAll('li');
    // 
    document.querySelector('#search').onkeyup =function(e){
        
        e = e || window.event;
        var key = e.keyCode;
        switch(key){
            case 38:tabLi(current,lis,len); break;
            case 40:tabLi(current,lis,len); break;
        }
        // console.log(current,lis,len);
    }
    
}
function tabLi(current ,lis,len){
    // console.log(current);
    if(current == 0){
        lis[current].style.background = 'skyblue';
        lis[len-1].style.background = lis[0].style.background = 'pink';
    }else if(current == len -1){
        lis[current].style.background = 'skyblue';
        lis[0].style.background = lis[current -1].style.background = 'pink';
    }else{
        lis[current].style.background = 'skyblue';
        lis[current +1].style.background = lis[current -1].style.background = 'pink';
    }
}
// function ulStyle(){
//     var ul = document.createElement('ul');
//     ul.style.width = '300px';
//     ul.style.position = 'absolute';
//     ul.style.top = '34px';
//     return ul;
// }