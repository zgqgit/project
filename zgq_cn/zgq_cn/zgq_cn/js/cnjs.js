
    /*头部轮播*/
    (function(){
        var oUp = document.getElementById("showu");
        var oDown = document.getElementById("showd");
        var oSpanl = document.getElementById("cnshowl");
        var oSpanr = document.getElementById("cnshowr");
        var oCnshow = document.getElementsByClassName("cnshow")[0];
        var oLi = oCnshow.getElementsByTagName("li");
        var now = 0;
        
        oSpanl.onmouseover = function(){
            oUp.style.display = "block";
        }
        oSpanl.onmouseout = function(){
            oUp.style.display = "none";
        }
        oSpanr.onmouseover = function(){
            oDown.style.display = "block";
        }
        oSpanr.onmouseout = function(){
            oDown.style.display = "none";
        }
        function Xh(){
                for(var i=0;i<oLi.length;i++){
                    oLi[i].style.display = "none";
                    oLi[now].style.display = "block";
                    }
            }
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
        var oReg = document.getElementsByClassName("reg")[0];
        var oClose = document.getElementById("regclo");

        oUser.onfocus = function(){
           oUser.value = null;
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
                if(obj.offsetLeft == target){
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
        var oDis = document.getElementsByClassName("cndisplay")[0];
        var oLi = oDis.getElementsByTagName("li");

        oBtnl.onclick = function(){
            for(var i=0;i<oLi.length;i++){
               
            }
        }
    })()