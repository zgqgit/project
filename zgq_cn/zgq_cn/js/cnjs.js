
    /*头部轮播*/
    (function(){
        var oUp = document.getElementById("showu");
        var oDown = document.getElementById("showd");
        var oSpanl = document.getElementById("cnshowl");
        var oSpanr = document.getElementById("cnshowr");
        var oCnshow = document.getElementById("cnshow");
        var oLi = oCnshow.getElementsByTagName("li");
        var now = 0;
        var timer = null;

        oSpanl.onmouseover = oUp.onmouseover = function(){
            oUp.style.display = "block";
            clearInterval(timer);
        }
        oSpanl.onmouseout = oUp.onmouseout = function(){
            oUp.style.display = "none";
            Auto();
        }
        oSpanr.onmouseover = oDown.onmouseover = function(){
            oDown.style.display = "block";
            clearInterval(timer);
        }
        oSpanr.onmouseout = oDown.onmouseout = function(){
            oDown.style.display = "none";
            Auto();
        }
        function Xh(){
                for(var i=0;i<oLi.length;i++){
                    oLi[i].style.display = "none";
                    oLi[now].style.display = "block";
                    }
            }
        function Auto(){
            timer = setInterval(function(){
                now =now+1;
                if(now<3&&-1<now){
                    Xh();
                }else{
                    now = 0;
                    Xh();
                }
            },2000)
        }
        Auto();
        oUp.onclick = function(){
            now = now+1;
            if(now<3&&-1<now){
                Xh();
            }else{
                now = 0;
                Xh();
            }
        }
        oDown.onclick = function(){
            now = now-1;
            if(-1<now&&now<3){
                Xh();
            }else{
                now = 2;
                Xh();
            }
        }
    })();
    /*用户*/
    (function(){
        var oUser = document.getElementById("loginusr");
        var oA = document.getElementById("reg");
        var oReg = document.getElementById("regshow");
        var oClose = document.getElementById("regclo");

        oUser.onfocus = function(){
           oUser.value = " ";
        }
        oUser.onblur = function(){
            oUser.value = "请输入用户名"
        }
        oA.onclick = function(){
            oReg.style.display = "block";
        }
        oClose.onclick = function(){
            oReg.style.display = "none";
        }
    })();
    /*分享*/
    (function(){
        var oDl = document.getElementsByTagName("dl")[0];
        var timer = null;

        oDl.onmouseover = function(){
            dlmove(this,730);
        }
        oDl.onmouseout = function(){
            dlmove(this,960);
        }
        function dlmove(obj,target){
            clearInterval(timer);
            timer = setInterval(function(){
                if(target<960){
                    speed = -10;
                }else{
                    speed = 10;
                }
                if(obj.offsetLeft==target){
                    clearInterval(timer);
                    obj.style.left = target + "px";
                }else{
                    obj.style.left = obj.offsetLeft + speed + "px";
                }
            },20)
        }
    })();
    /*产品展示轮播*/
    (function(){
        var oBtnl = document.getElementById("disbtnl");
        var oBtnr = document.getElementById("disbtnr");
        var oDis = document.getElementById("cndisplay");
        var oLi = oDis.getElementsByTagName("li");
        var oUl = oDis.getElementsByTagName("ul")[0];
        var timer = null;
        var time = null;
        var speedl = -5;
        var speedr = 5;

        function Auto(){
            time = setInterval(function(){
                if(oUl.offsetLeft==-195){
                    oUl.appendChild(oLi[0]);
                    oUl.style.left = 0 + "px";
                }else{
                    oUl.style.left = oUl.offsetLeft + -5 + "px";
                }
            },50)
        }
        Auto();
        oBtnl.onmouseover = oBtnr.onmouseover = function(){
            clearInterval(time);
        }
        oBtnl.onmouseout = oBtnr.onmouseout = function(){
            Auto();
        }
        oBtnl.onclick = function(){
            clearInterval(timer);
            timer = setInterval(function(){
                if(oUl.offsetLeft==-195){
                    clearInterval(timer);
                    oUl.appendChild(oLi[0]);
                    oUl.style.left = 0 + "px";
                }else{
                    oUl.style.left = oUl.offsetLeft + speedl + "px";
                }
            },20)
        }
        oBtnr.onclick = function(){
            clearInterval(timer);
            oUl.insertBefore(oLi[6],oLi[0]);
            oUl.style.left = "-195px";
            timer = setInterval(function(){
                if(oUl.offsetLeft==0){
                    clearInterval(timer);
                    oUl.style.left = 0 + "px";
                }else{
                    oUl.style.left = oUl.offsetLeft + speedr + "px";
                }
            },20)
        }
    })();