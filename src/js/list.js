jQuery(function($){
    var user;
    //cookie
    document.cookie.split("; ").forEach(function(item){   //["uname=lemon","upwd=123"]
            var arr = item.split("=");
                // console.log(arr);
            if(arr[0] == "account"){
                user = arr[1];
                $(".signin").prepend($("<span/>").html(arr[1]));
                $("#denglu").hide();
                $("#zhuce").hide();
                $(".signin").append($("<span/>").attr("id","tuichu").html("[退出]"));
                // location.href="index.html";
            }
        })
    if(!user){
        $(".toolBar_gwc").children("a").on("click",function(){
            alert("请先登录");
            $(".toolBar_gwc").children("a").attr("href","html/login.html");
        })
        $("#shopcar_qty2").on("click",function(){
            alert("请先登录");
            location.href="html/login.html";
        })
        $(".pf_r_4").on("click",function(){
            alert("请先登录");
            $(this).attr("href","html/login.html");
        })
    }else{
        $("#shopcar_qty2").on("click",function(){
            location.href="html/car.html";
        })
    }


    
    $("#tuichu").css({cursor:"pointer"}).on("mouseover",function(){$(this).css({color:"#f60"})}).on("mouseout",function(){$(this).css({color:"#ccc"})}).on("click",function(){
        var d = new Date();
        d.setDate(d.getDate()-1);
        document.cookie = "account="+$("#tel").val()+"; expires="+d.toUTCString()+"; path=/";
        document.cookie = "password="+$("#psw").val()+"; expires="+d.toUTCString()+"; path=/";
        window.location.reload();
    })


    
    // 漂浮菜单
    $(window).on("scroll",function(){
        // console.log(666);
             
        if(window.scrollY>=493){
            $(".pf_l").fadeIn();
        }else{
            $(".pf_l").fadeOut();
        }
        if(window.scrollY>=555){
            $(".pf_r_5").fadeIn();
        }else{
            $(".pf_r_5").fadeOut();
        }
    });
    //回顶部
    $(".pf_r_5").on("click",function(){
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            if(window.scrollY<=0){
                clearInterval(this.timer);
            }
            window.scrollBy(0,-300);
        },30)
    })
    //menu
    $(".menu_1span").on("click",function(){
        $(this).next(".menu_2ul").slideToggle();
        $(this).toggleClass('menu_1click');
    });
    $(".menu_2span").on("click",function(){
        $(this).next(".menu_3ul").slideToggle();
        $(this).toggleClass('menu_2click');
    });
    
    //人气推荐轮播
        var $span1 = $("<span/>").html("<").css({color:"#fff",fontWeight:900,fontSize:"20px",cursor:"pointer",fontFamily:"宋体",paddingLeft:"7px",position:"absolute",display:"block",left:"0",top:"50%",transform:"translateY(-50%)",width:25,height:50,lineHeight:"50px",background:"rgba(102,102,102,.5)"}).appendTo($(".rqtj").css({position:"relative"})).hide();
        var $span2 = $("<span/>").html(">").css({color:"#fff",fontWeight:900,fontSize:"20px",cursor:"pointer",fontFamily:"宋体",paddingLeft:"7px",position:"absolute",display:"block",right:"0",top:"50%",transform:"translateY(-50%)",width:25,height:50,lineHeight:"50px",background:"rgba(102,102,102,.5)"}).appendTo($(".rqtj").css({position:"relative"})).hide();

        $span1.on("mouseover",function(){
            $(this).show();
            $span2.show();
        }).on("click",function(){
                $("#rqtj").animate({left:"-948px"},600);
        });
        $span2.on("mouseover",function(){
            $(this).show();
            $span1.show();
        }).on("click",function(){
                $("#rqtj").animate({left:"0px"},600);
        });

        $("#rqtj").on("mouseover",function(){
            $span1.show();
            $span2.show();
        }).on("mouseout",function(){
            $span1.hide();
            $span2.hide();
        });
    //ajax
    $.getJSON("api/index.php","type=yxyj",function(res){
        var str = "";
        for(var i=0;i<11;i++){
            str += `<li uid='${res[i].id}' class="rqtj_li">
                        <div class="rqtj_img">
                            <a><img src="${res[i].imgurl}" alt="" /></a>
                        </div>
                        <div class="rqtj_name">
                            <a>${res[i].name}</a>
                        </div>
                        <div class="rqtj_price">
                            ￥${res[i].price}
                        </div>
                    </li>`;
        }
        $("#rqtj").html(str);
        $(".rqtj_li").on("click",function(){
            location.href = "html/details.html?uid="+this.getAttribute("uid");
        }).find("a").css({cursor:"pointer"});
    });
    //渲染分页
    var qty = 8;
    var currentPage = 1;
    var $page = $(".page");
    
    $.getJSON("api/list.php",{"type":"yxyj","qty":qty,"currentPage":currentPage},function(res){
        var str = res.data.map(function(item){
            return `<li uid="${item.id}">
                        <img src="${item.imgurl}" alt="" />
                        <p class="con_price">￥${item.price}</p>
                        <p class="con_name"><a>${item.name}</a></p>
                        <p class="manjian">海淘商品加购每满200-20</p>
                        <p class="pingjia"><i></i><span>有${item.sales}条评论</span></p>
                        <div class="border">
                            <div class="border_btn_bg">
                                <div class="border_btn"><i></i>加入购物车</div>
                            </div>
                        </div>
                    </li>`
        }).join("");
        $(".main_con").html(str);
        // console.log(res);
        //location
        $(".main_con").children("li").on("click",function(){
            location.href = "html/details.html?uid="+this.getAttribute("uid");
        });
        var totalPage = Math.ceil(res.len/res.qty);
                        // $page.html("");
                        $page.children("span").remove();
                        for(var i=0;i<totalPage;i++){
                            var $span = $("<span/>").html(i+1);
                            // console.log($span.html());
                            // console.log(res.currentPage);
                                 
                            if($span.html() == res.currentPage){
                                // console.log(666);
                                     
                                $span.addClass("active");
                            }
                            $("#page_r").before(($span));
                        }
                        // $page.append($("<i/>").html(">").addClass('pr').css({fontFamily:"宋体"})).prepend($("<i/>").html("<").addClass('pl').css({fontFamily:"宋体"}));
                        // p = res.currentPage;
                    })
    $page.on("click","span",function(){
        $.getJSON("api/list.php",{"type":"yxyj","qty":8,"currentPage":$(this).html()},function(res){
            var str = res.data.map(function(item){
                return `<li uid="${item.id}">
                            <img src="${item.imgurl}" alt="" />
                            <p class="con_price">￥${item.price}</p>
                            <p class="con_name"><a>${item.name}</a></p>
                            <p class="manjian">海淘商品加购每满200-20</p>
                            <p class="pingjia"><i></i><span>有${item.sales}条评论</span></p>
                            <div class="border">
                                <div class="border_btn_bg">
                                    <div class="border_btn"><i></i>加入购物车</div>
                                </div>
                            </div>
                        </li>`
            }).join("");
            $(".main_con").html(str);
            //location
            $(".main_con").children("li").on("click",function(){
                location.href = "html/details.html?uid="+this.getAttribute("uid");
            });
        var totalPage = Math.ceil(res.len/res.qty);
                        // $page.html("");
                        $page.children("span").remove();
                        
                        for(var i=0;i<totalPage;i++){
                            var $span = $("<span/>").html(i+1);
                            // console.log($span.html());
                            // console.log(res.currentPage);
                                 
                            if($span.html() == res.currentPage){
                                // console.log(666);
                                     
                                $span.addClass("active");
                            }
                            // $page.append($span);
                            $("#page_r").before(($span));
                            
                        }
                        // $page.append($("<i/>").html(">").addClass('pr').css({fontFamily:"宋体"})).prepend($("<i/>").html("<").addClass('pl').css({fontFamily:"宋体"}));
                        // p = res.currentPage;

                        
        })  
        window.scrollTo(0,211);
    })
    $page.on("click","#page_l",function(){
        var p;
        if($page.find(".active").html()>1){
            p = $page.find(".active").html()-1;
        }else {
            p = $page.find(".active").html();
        }
        $.getJSON("api/list.php",{"type":"yxyj","qty":8,"currentPage":p},function(res){
            var str = res.data.map(function(item){
                return `<li uid="${item.id}">
                            <img src="${item.imgurl}" alt="" />
                            <p class="con_price">￥${item.price}</p>
                            <p class="con_name"><a>${item.name}</a></p>
                            <p class="manjian">海淘商品加购每满200-20</p>
                            <p class="pingjia"><i></i><span>有${item.sales}条评论</span></p>
                            <div class="border">
                                <div class="border_btn_bg">
                                    <div class="border_btn"><i></i>加入购物车</div>
                                </div>
                            </div>
                        </li>`
            }).join("");
            $(".main_con").html(str);
            //location
            $(".main_con").children("li").on("click",function(){
                location.href = "html/details.html?uid="+this.getAttribute("uid");
            });
        var totalPage = Math.ceil(res.len/res.qty);
                        // $page.html("");
                        $page.children("span").remove();
                        
                        for(var i=0;i<totalPage;i++){
                            var $span = $("<span/>").html(i+1);
                            // console.log($span.html());
                            // console.log(res.currentPage);
                                 
                            if($span.html() == res.currentPage){
                                // console.log(666);
                                     
                                $span.addClass("active");
                            }
                            // $page.append($span);
                            $("#page_r").before(($span));
                            
                        }
                        // $page.append($("<i/>").html(">").addClass('pr').css({fontFamily:"宋体"})).prepend($("<i/>").html("<").addClass('pl').css({fontFamily:"宋体"}));
                        // p = res.currentPage;

                        
        })  
        window.scrollTo(0,211);
    })
    $page.on("click","#page_r",function(){
        var p;
        // console.log($page.children("span").last().html());
             
        if(($page.find(".active").html())<($page.children("span").last().html())){
            p = Number($page.find(".active").html())+1;
        }else {
            p = $page.find(".active").html();
        }
        $.getJSON("api/list.php",{"type":"yxyj","qty":8,"currentPage":p},function(res){
            var str = res.data.map(function(item){
                return `<li uid="${item.id}">
                            <img src="${item.imgurl}" alt="" />
                            <p class="con_price">￥${item.price}</p>
                            <p class="con_name"><a>${item.name}</a></p>
                            <p class="manjian">海淘商品加购每满200-20</p>
                            <p class="pingjia"><i></i><span>有${item.sales}条评论</span></p>
                            <div class="border">
                                <div class="border_btn_bg">
                                    <div class="border_btn"><i></i>加入购物车</div>
                                </div>
                            </div>
                        </li>`
            }).join("");
            $(".main_con").html(str);
            //location
            $(".main_con").children("li").on("click",function(){
                location.href = "html/details.html?uid="+this.getAttribute("uid");
            });
        var totalPage = Math.ceil(res.len/res.qty);
                        // $page.html("");
                        $page.children("span").remove();
                        
                        for(var i=0;i<totalPage;i++){
                            var $span = $("<span/>").html(i+1);
                            // console.log($span.html());
                            // console.log(res.currentPage);
                                 
                            if($span.html() == res.currentPage){
                                // console.log(666);
                                     
                                $span.addClass("active");
                            }
                            // $page.append($span);
                            $("#page_r").before(($span));
                            
                        }
                        // $page.append($("<i/>").html(">").addClass('pr').css({fontFamily:"宋体"})).prepend($("<i/>").html("<").addClass('pl').css({fontFamily:"宋体"}));
                        // p = res.currentPage;

                        
        })  
        window.scrollTo(0,211);
    })
// console.log($(".pl"));
    $("#zh").on("click",function(){
        $(this).css({backgroundColor:"#f1edec"}).siblings("span").css({backgroundColor:"#fff"});
            $.getJSON("api/list.php",{"type":"yxyj","qty":8,"currentPage":currentPage},function(res){
                var str = res.data.map(function(item){
                    return `<li uid="${item.id}">
                                <img src="${item.imgurl}" alt="" />
                                <p class="con_price">￥${item.price}</p>
                                <p class="con_name"><a>${item.name}</a></p>
                                <p class="manjian">海淘商品加购每满200-20</p>
                                <p class="pingjia"><i></i><span>有${item.sales}条评论</span></p>
                                <div class="border">
                                    <div class="border_btn_bg">
                                        <div class="border_btn"><i></i>加入购物车</div>
                                    </div>
                                </div>
                            </li>`
                }).join("");
                $(".main_con").html(str);
                //location
                $(".main_con").children("li").on("click",function(){
                    location.href = "html/details.html?uid="+this.getAttribute("uid");
                });
            var totalPage = Math.ceil(res.len/res.qty);
                            // $page.html("");
                            $page.children("span").remove();
                            
                            for(var i=0;i<totalPage;i++){
                                var $span = $("<span/>").html(i+1);
                                // console.log($span.html());
                                // console.log(res.currentPage);
                                     
                                if($span.html() == res.currentPage){
                                    // console.log(666);
                                         
                                    $span.addClass("active");
                                }
                                // $page.append($span);
                            $("#page_r").before(($span));
                                
                            }
                            // $page.append($("<i/>").html(">").addClass('pr').css({fontFamily:"宋体"})).prepend($("<i/>").html("<").addClass('pl').css({fontFamily:"宋体"}));
                            // p = res.currentPage;
            })  
            window.scrollTo(0,211);
        })
        var xlclick = true;
        $("#xl").on("click",function(){
            $(this).css({backgroundColor:"#f1edec"}).siblings("span").css({backgroundColor:"#fff"});
            $(this).children("i").toggleClass('click');
            $.getJSON("api/list.php",{"type":"yxyj","qty":8,"currentPage":currentPage,"xlclick":xlclick},function(res){
                var str = res.data.map(function(item){
                    return `<li uid="${item.id}">
                                <img src="${item.imgurl}" alt="" />
                                <p class="con_price">￥${item.price}</p>
                                <p class="con_name"><a>${item.name}</a></p>
                                <p class="manjian">海淘商品加购每满200-20</p>
                                <p class="pingjia"><i></i><span>有${item.sales}条评论</span></p>
                                <div class="border">
                                    <div class="border_btn_bg">
                                        <div class="border_btn"><i></i>加入购物车</div>
                                    </div>
                                </div>
                            </li>`
                }).join("");
                $(".main_con").html(str);
                //location
                $(".main_con").children("li").on("click",function(){
                    location.href = "html/details.html?uid="+this.getAttribute("uid");
                });
            var totalPage = Math.ceil(res.len/res.qty);
                            // $page.html("");
                            $page.children("span").remove();
                            
                            for(var i=0;i<totalPage;i++){
                                var $span = $("<span/>").html(i+1);
                                // console.log($span.html());
                                // console.log(res.currentPage);
                                     
                                if($span.html() == res.currentPage){
                                    // console.log(666);
                                         
                                    $span.addClass("active");
                                }
                                // $page.append($span);
                            $("#page_r").before(($span));
                                
                            }
                            // $page.append($("<i/>").html(">").addClass('pr').css({fontFamily:"宋体"})).prepend($("<i/>").html("<").addClass('pl').css({fontFamily:"宋体"}));
                            // p = res.currentPage;
            })  
            window.scrollTo(0,211);
            xlclick=!xlclick;
        })
        var jgclick = true;
        $("#jg").on("click",function(){
            $(this).css({backgroundColor:"#f1edec"}).siblings("span").css({backgroundColor:"#fff"});
            $(this).children("i").toggleClass('click');
            $.getJSON("api/list.php",{"type":"yxyj","qty":8,"currentPage":currentPage,"jgclick":jgclick},function(res){
                var str = res.data.map(function(item){
                    return `<li uid="${item.id}">
                                <img src="${item.imgurl}" alt="" />
                                <p class="con_price">￥${item.price}</p>
                                <p class="con_name"><a>${item.name}</a></p>
                                <p class="manjian">海淘商品加购每满200-20</p>
                                <p class="pingjia"><i></i><span>有${item.sales}条评论</span></p>
                                <div class="border">
                                    <div class="border_btn_bg">
                                        <div class="border_btn"><i></i>加入购物车</div>
                                    </div>
                                </div>
                            </li>`
                }).join("");
                $(".main_con").html(str);
                //location
                $(".main_con").children("li").on("click",function(){
                    location.href = "html/details.html?uid="+this.getAttribute("uid");
                });
            var totalPage = Math.ceil(res.len/res.qty);
                            // $page.html("");
                            $page.children("span").remove();
                            
                            for(var i=0;i<totalPage;i++){
                                var $span = $("<span/>").html(i+1);
                                // console.log($span.html());
                                // console.log(res.currentPage);
                                     
                                if($span.html() == res.currentPage){
                                    // console.log(666);
                                         
                                    $span.addClass("active");
                                }
                                // $page.append($span);
                            $("#page_r").before(($span));
                                
                            }
                            // $page.append($("<i/>").html(">").addClass('pr').css({fontFamily:"宋体"})).prepend($("<i/>").html("<").addClass('pl').css({fontFamily:"宋体"}));
                            // p = res.currentPage;
            })  
            window.scrollTo(0,211);
            jgclick=!jgclick;
        })
    //ajax shopcar
    $.getJSON("api/car.php",{"account":user},function(res){
        console.log(res);
        var totalqty = 0;
        res.forEach(function(item){
            totalqty += Number(item.qty);
        })
        $("#shopcar_qty").html(totalqty);
        $("#shopcar_qty2").html(totalqty);
    });
    
})

