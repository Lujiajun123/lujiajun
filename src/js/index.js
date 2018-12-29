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
    // carousel
    $(".carousel").mjCarouse({imgs:["images/banner_1.jpg","images/banner_2.jpg","images/banner_3.jpg","images/banner_4.jpg","images/banner_5.jpg","images/banner_6.jpg","images/banner_7.jpg"],width:760,height:320,type:"fade",bgColor:["rgb(144, 95, 110)","rgb(96, 87, 214)","rgb(192, 49, 75)","rgb(208, 157, 175)","rgb(220, 233, 250)","rgb(244, 208, 234)","rgb(5, 141, 138)"]});
    $("#f1_carousel0").mjCarousel2({imgs:["images/1f_left1.jpg","images/1f_left2.jpg"],width:210,height:360,seamless: false});
    
    $("#f2_carousel0").mjCarousel2({imgs:["images/2f_left1.jpg","images/2f_left2.jpg"],width:210,height:360,seamless: false});
    
    $("#f3_carousel0").mjCarousel2({imgs:["images/3f_left1g.jpg","images/3f_left2.jpg"],width:210,height:360,seamless: false});
    
    $("#f4_carousel").mjCarousel2({imgs:["images/4f_banner2.jpg","images/4f_banner3.jpg"],width:710,height:243,seamless: false});
    $("#f5_carousel").mjCarousel2({imgs:["images/5f_banner2.jpg","images/5f_banner1.jpg"],width:710,height:243,seamless: false});

    
    // tab切换
    var $adtype = $(".adver_t_r_type");
    $adtype.on("mouseover","li",function(){
        $(this).children().css({border:"0 none",backgroundColor:"#fff"});
        $(this).siblings().children().css({borderBottom:"1px solid #e9e9e9",backgroundColor:"#f4f4f4"});
        if($(this).children().html()=="促销活动"){
            $(this).parent().next().html('<li><a href="html/list.html">可得海外购，正品低价</a></li><li><a href="html.list.html">赠100元咖啡卡</a></li>');
        }else if($(this).children().html()=="最新动态"){
            $(this).parent().next().html('<li><a href="html/list.html">上海地区快递调整</a></li><li><a href="html/list.html">可得海外购，正品低价</a></li><li><a href="html/list.html">货到付款业务调整</a></li><li><a href="html/list.html">爱眼百科小知识</a></li>');
        }
    }).next().html('<li><a href="html/list.html">可得海外购，正品低价</a></li><li><a href="html/list.html">赠100元咖啡卡</a></li>');

    //tab切换2
    var $adver_b_l = $(".adver_b_l");
    var $adver_b_r = $(".adver_b_r");
    $(".adver_b_l_p2").on("mouseover",function(){
        $adver_b_l.css({backgroundPosition:"0 -182px"});
        $adver_b_r.html('<li><a href="html/list.html"><img src="images/ms1.jpg"/><p>茵洛Clalen月抛1片装<br><span><b>￥</b>29</span></p></a></li><li><a href="html/list.html"><img src="images/ms2.jpg"/><p>爱尔康视康多水润日抛30片<br><span><b>￥</b>92(赠同款5片)</span></p></a></li><li><a href="html/list.html"><img src="images/ms3.jpg"/><p>实瞳可芙蕾日抛30片装<br><span><b>￥</b>148</span></p></a></li><li><a href="html/list.html"><img src="images/ms4.jpg"/><p>纯钛半框 让轻更轻<br><span><b>￥</b>179</span></p></a></li><li><a href="html/list.html"><img src="images/ms5.jpg"/><p>进口美妆 <br><span><b></b></span></p></a></li>');
    });
    $(".adver_b_l_p1").on("mouseover",function(){
        $adver_b_l.css({backgroundPosition:"0 0"});
        $adver_b_r.html('<li><a href="html/list.html"><img src="images/zhi1.jpg"/><p>安瞳繁朵月抛2片装<br><span><b>￥</b>48</span></p></a></li><li><a href="html/list.html"><img src="images/zd2.jpg"/><p>库博幻眸日抛10片装<br><span><b>￥</b>45</span></p></a></li><li><a href="html/list.html"><img src="images/zd3.jpg"/><p>卫康X-BLUE年抛1片装<br><span><b>￥</b>18</span></p></a></li><li><a href="html/list.html"><img src="images/zd4.jpg"/><p>安瞳日式清洗器/存储盒 <br><span><b>￥</b>23.8</span></p></a></li><li><a href="html/list.html"><img src="images/zd5.jpg"/><p>超值体验 精品框架<br><span><b>￥</b>39.9</span></p></a></li>');
    });

    // 图片动画
        $adver_b_r.on("mouseover","img",function(){
            $(this).animate({marginLeft:"20px"},140);
        }).on("mouseout","img",function(){
            $(this).animate({marginLeft:"30px"},140);
        });

    
    $(".pf_r_1").on("mouseover",function(){
        $(".wx").slideDown();
    }).on("mouseout",function(){
        $(".wx").slideUp();
    });
    $(".pf_r_3").on("mouseover",function(){
        $(".yg").slideDown();
    }).on("mouseout",function(){
        $(".yg").slideUp();
    })

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

    //shop切换
    var $shop_con_l = $(".shop_con_l");
    var $shop_con_li = $("#shop_title").children();
    var $shop_img = $("#shop_img");
    $("#shop_title").on("mouseover","li",function(){
        $(this).siblings().css({backgroundColor:"#fff",color:"#666"}).attr("active","false");
        $(this).css({backgroundColor:"#94C51B",color:"#fff"}).attr("active","true");
        if($(this).html()=="桂林店"){
            if($(".shop_main_l1").attr("active")=="true"){
                $shop_img[0].src="images/shop_guiling.jpg";
            }else if($(".shop_main_l1").attr("active")=="false"){
                $shop_img[0].src="images/map_guilin.jpg";
            }
            $shop_con_l.html("桂林路店位于地铁9号线桂林路站，有100多平米的营业面积，全新的装饰风格，先进的验光设备，专业的验光师及配镜技师，更具备专业的裂隙灯检查及角膜曲率鉴定。欢迎您的光临！");
        }else if($(this).html()=="日月光店"){
            if($(".shop_main_l1").attr("active")=="true"){
                $shop_img[0].src="images/shop_riyueguang.jpg";
            }else if($(".shop_main_l1").attr("active")=="false"){
                    $shop_img[0].src="images/map_riyueguang.jpg";
            }
            $shop_con_l.html("可得旗下KD时尚品牌眼镜专营店日月光店位于日月光泰康区一楼扶手电梯对面，店内布满绿植，文艺摩登的装修，插画，涂鸦、手绘、工装时尚格局与潮酷夯款眼镜，置身于原创设计师灵感空间，享受新意世界。");
        }else if($(this).html()=="人民广场店"){
            if($(".shop_main_l1").attr("active")=="true"){
                $shop_img[0].src="images/shop_longzhimeng.jpg";
            }else if($(".shop_main_l1").attr("active")=="false"){
                $shop_img[0].src="images/map_K-MALL.jpg";
            }
            $shop_con_l.html("可得旗下KD时尚品牌眼镜专营店人民广场K-MALL做为上海著名的潮流文化聚集地，其荟萃时下最时尚、潮流、年轻的流行元素，店内文艺摩登的装修，装时尚格局与潮酷夯款眼镜，置身于原创设计师灵感空间，享受新意世界。");
        }else if($(this).html()=="唐镇店"){
            if($(".shop_main_l1").attr("active")=="true"){
                $shop_img[0].src="images/shop_tanngzhen.jpg";
            }else if($(".shop_main_l1").attr("active")=="false"){
                $shop_img[0].src="images/map_tangzhen.jpg";
            }
            $shop_con_l.html("可得旗下KD时尚品牌眼镜专营店唐镇店位于2号线唐镇站附近，是上海新型购物聚集地，其新潮、时尚风格的影响力直接辐射影响到了周边地区的发展，并为周边地区带来无限商业可能。");
        }else if($(this).html()=="中山公园"){
            if($(".shop_main_l1").attr("active")=="true"){
                $shop_img[0].src="images/shop_zhongshangongyuan.jpg";
            }else if($(".shop_main_l1").attr("active")=="false"){
                $shop_img[0].src="images/map_centerpark.jpg";
            }
            $shop_con_l.html("可得旗下KD时尚品牌眼镜专营店中山公园店位于中山公园龙之梦商场1楼，属于上海成熟的知名商圈之一，人流量集中，客流稳定，店铺位置靠近商场大门，风格时尚又货品全面，为您带来全方位的配镜体验。");
        }
    }).children("li").eq(0).css({backgroundColor:"rgb(148, 197, 27)",color:"#fff"});

     
    $(".shop_main_l1").on("mouseover",function(){
        $(this).css({backgroundPosition:" 0 top",borderRight:"0 none"}).attr("active","true");
        $(this).next().css({backgroundPosition:" 0 -136px",borderRight:"1px solid #e9e9e9"}).attr("active","false");
        for(var i=0;i<$shop_con_li.length;i++){
            if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="桂林店"){
                $shop_img[0].src="images/shop_guiling.jpg";
            }else if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="日月光店"){
                    $shop_img[0].src="images/shop_riyueguang.jpg";
            }else if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="人民广场店"){
                    $shop_img[0].src="images/shop_longzhimeng.jpg";
            }else if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="唐镇店"){
                    $shop_img[0].src="images/shop_tanngzhen.jpg";
            }else if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="中山公园"){
                    $shop_img[0].src="images/shop_zhongshangongyuan.jpg";
            }
        }
    });
    $(".shop_main_l2").on("mouseover",function(){
        $(this).css({backgroundPosition:" 0 bottom",borderRight:"0 none"}).attr("active","true");
        $(this).prev().css({backgroundPosition:" 0 -273px",borderRight:"1px solid #e9e9e9"}).attr("active","false");
        for(var i=0;i<$shop_con_li.length;i++){
            if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="桂林店"){
                $shop_img[0].src="images/map_guilin.jpg";
            }else if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="日月光店"){
                    $shop_img[0].src="images/map_riyueguang.jpg";
            }else if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="人民广场店"){
                    $shop_img[0].src="images/map_K-MALL.jpg";
            }else if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="唐镇店"){
                    $shop_img[0].src="images/map_tangzhen.jpg";
            }else if($shop_con_li.eq(i).attr("active")=="true"&&$shop_con_li[i].innerHTML=="中山公园"){
                    $shop_img[0].src="images/map_centerpark.jpg";
            }
        }
    })
    //ajaxfloor
    $.getJSON("api/index.php","type=1f",function(res){
        var str = "";
        for(var i=0;i<6;i++){
            str += `<div class="f_main_item" uid="${res[i].id}">
                            <a>
                                <img class="f_item_img" src="${res[i].imgurl}">
                                <label class="f_item_price">￥${res[i].price}</label>
                                <label href="#" class="f_item_name">${res[i].name}</label>
                                <label class="f_item_sales">直降45元</label>
                                <span class="jb999"></span>
                            </a>
                        </div>`;
            }
        str+='<div class="f_main_carousel" id="f1_carousel1"></div>';
        for(var i=6;i<10;i++){
            str += `<div class="f_main_item" uid="${res[i].id}">
                            <a>
                                <img class="f_item_img" src="${res[i].imgurl}">
                                <label class="f_item_price">￥${res[i].price}</label>
                                <label href="#" class="f_item_name">${res[i].name}</label>
                                <label class="f_item_sales">直降45元</label>
                                <span class="jb999"></span>
                            </a>
                        </div>`;
            }
        $("#f1_main_r").html(str); 
        $("#f1_carousel1").mjCarousel2({imgs:["images/1f_ban1.jpg","images/1f_ban2g.jpg"],width:490,height:240,seamless: false});
        
        $(".f_main_item").on("mouseover","img",function(){
            $(this).animate({marginLeft:"-16px"},140);
        }).on("mouseout","img",function(){
            $(this).animate({marginLeft:"0px"},140);
        }).on("click",function(){
            location.href="html/details.html?uid="+this.getAttribute("uid");
        });
        




        
     });
    $.getJSON("api/index.php","type=2f",function(res){
        var str = "";
        for(var i=0;i<6;i++){
            str += `<div class="f_main_item" uid="${res[i].id}">
                            <a>
                                <img class="f_item_img" src="${res[i].imgurl}">
                                <label class="f_item_price">￥${res[i].price}</label>
                                <label href="#" class="f_item_name">${res[i].name}</label>
                                <label class="f_item_sales">直降45元</label>
                                <span class="jb999"></span>
                            </a>
                        </div>`;
            }
        str+='<div class="f_main_carousel" id="f2_carousel1"></div>';
        for(var i=6;i<10;i++){
            str += `<div class="f_main_item" uid="${res[i].id}">
                            <a>
                                <img class="f_item_img" src="${res[i].imgurl}">
                                <label class="f_item_price">￥${res[i].price}</label>
                                <label href="#" class="f_item_name">${res[i].name}</label>
                                <label class="f_item_sales">直降45元</label>
                                <span class="jb999"></span>
                            </a>
                        </div>`;
            }
        $("#f2_main_r").html(str); 
        $("#f2_carousel1").mjCarousel2({imgs:["images/2f_ban2(1).jpg","images/2f_ban2.jpg"],width:490,height:240,seamless: false});
        $(".f_main_item").on("mouseover","img",function(){
            $(this).animate({marginLeft:"-16px"},140);
        }).on("mouseout","img",function(){
            $(this).animate({marginLeft:"0px"},140);
        }).on("click",function(){
            location.href="html/details.html?uid="+this.getAttribute("uid");
        });
    });
    $.getJSON("api/index.php","type=3f",function(res){
        var str = "";
        for(var i=0;i<6;i++){
            str += `<div class="f_main_item" uid="${res[i].id}">
                            <a>
                                <img class="f_item_img" src="${res[i].imgurl}">
                                <label class="f_item_price">￥${res[i].price}</label>
                                <label href="#" class="f_item_name">${res[i].name}</label>
                                <label class="f_item_sales">直降45元</label>
                                <span class="jb999"></span>
                            </a>
                        </div>`;
            }
        str+='<div class="f_main_carousel" id="f3_carousel1"></div>';
        for(var i=6;i<10;i++){
            str += `<div class="f_main_item" uid="${res[i].id}">
                            <a>
                                <img class="f_item_img" src="${res[i].imgurl}">
                                <label class="f_item_price">￥${res[i].price}</label>
                                <label href="#" class="f_item_name">${res[i].name}</label>
                                <label class="f_item_sales">直降45元</label>
                                <span class="jb999"></span>
                            </a>
                        </div>`;
            }
        $("#f3_main_r").html(str); 
        $("#f3_carousel1").mjCarousel2({imgs:["images/3f_ban1.jpg","images/3f_ban2.jpg"],width:490,height:240,seamless: false});
        $(".f_main_item").on("mouseover","img",function(){
            $(this).animate({marginLeft:"-16px"},140);
        }).on("mouseout","img",function(){
            $(this).animate({marginLeft:"0px"},140);
        }).on("click",function(){
            location.href="html/details.html?uid="+this.getAttribute("uid");
        });
    });
    
    $.getJSON("api/index.php","type=4f",function(res){
        var str = res.map(function(item){
            return `<li uid="${item.id}" class="f4_li">
                        <a>
                            <span class="f4_li_img"><img src="${item.imgurl}" alt=""></span>
                            <span class="f4_li_sales"></span>
                            <span class="f4_li_name">${item.name}</span>
                            <span class="f4_li_price">￥${item.price}起</span>
                        </a>
                    </li>`;
        }).join("");

        $("#f4_main").html(str); 
        $(".f4_li_img").on("mouseover","img",function(){
            $(this).animate({marginLeft:"-4px"},140);
        }).on("mouseout","img",function(){
            $(this).animate({marginLeft:"0px"},140);
        });
        $(".f4_li").on("click",function(){
            location.href="html/details.html?uid="+$(this).attr("uid");
        });

    });
    $.getJSON("api/index.php","type=5f",function(res){
        var str = res.map(function(item){
            return `<li uid="${item.id}" class="f5_li">
                        <a>
                            <span class="f4_li_img"><img src="${item.imgurl}" alt=""></span>
                            <span class="f4_li_sales"></span>
                            <span class="f4_li_name">${item.name}</span>
                            <span class="f4_li_price">￥${item.price}起</span>
                        </a>
                    </li>`;
        }).join("");

        $("#f5_main").html(str); 
        $(".f4_li_img").on("mouseover","img",function(){
            $(this).animate({marginLeft:"-4px"},140);
        }).on("mouseout","img",function(){
            $(this).animate({marginLeft:"0px"},140);
        }).children("li").on("click",function(){
            location.href="html/details.html?uid="+$(this).children("li").attr("uid");
        });
        $(".f5_li").on("click",function(){
            location.href="html/details.html?uid="+$(this).attr("uid");
        });
    });
    // 漂浮菜单
    $(window).on("scroll",function(){
        console.log(666);
             
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