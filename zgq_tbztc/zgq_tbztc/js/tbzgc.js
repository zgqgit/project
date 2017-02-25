
    /*二级菜单*/
    (function(){

        var get={
            byClassname:function(clsname,oParent){
                var nClsname = [];
                var Allnode = (oParent||document).getElementsByTagName("*");

                for(var i=0;i<Allnode.length;i++){
                    var Allcls = Allnode[i].className.split(" ");
                    for(var j=0;j<Allcls.length;j++){
                        if(Allcls[j]==clsname){
                            nClsname.push(Allnode[i]);
                        }
                    }
                }
                return nClsname;
            }
        }
        var oUl = document.getElementById("navul");
        var oLi = get.byClassname("navon",oUl);
        var oDiv = [];
        var timer = null;
        
        for(var k=0;k<oLi.length;k++){
            oDiv.push(get.byClassname("navb",oLi[k]));

        }
        for(var i=0;i<oLi.length;i++){

            oLi[i].onmouseover = function(){
                clearInterval(timer);
                for(var j=0;j<oDiv.length;j++){
                    oDiv[j][0].style.display = "none";
                }
                var oDivcur = get.byClassname("navb",this)[0];
                oDivcur.style.left = 0;
                oDivcur.style.display = "block";
            }
            /*oLi[i].onmouseout = function(){
                var oDivcur = this.getElementsByClassName("navb")[0];
                timer = setInterval(function(){
                    oDivcur.style.display = "none";
                },300)
            }*/
        }
    })()