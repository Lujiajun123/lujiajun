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

    // console.log(user);



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

    //加减
    var $qty = $("#qty");
    $("#qty_jian").on("click",function(){
        if($qty.val()>1){
            $qty.val($qty.val()-1);
        }
    });
    $("#qty_jia").on("click",function(){
        $qty.val(Number($qty.val())+1);
    })
    //ajax
    var uid = decodeURI(location.search.slice(1)).split("=")[1];
    $.getJSON("api/details.php","uid="+uid,function(res){
        // console.log(res);
        $("#goods_name").html(res[0].name);
        $("#goods_price").html("￥"+res[0].price);
        $("#goods_pric2").html("￥"+Number(res[0].price)*1.5);
        $(".goods_img").attr("src",res[0].imgurl);



        //加入购物车
        $("#appendCart").on("click",function(){
            if(!user){
                alert("请登录");
                location.href="html/login.html";
            }else{
            $("<img>").attr("src",res[0].imgurl).css({position:"absolute",left:-400,top:-360}).appendTo($(".details_btn")).animate({left:window.innerWidth-$(this).offset().left+100,width:60,height:60},1000,function(){$(this).animate({top:50},300,function(){$(this).remove();})});
            // console.log(res[0].id);
            $.get("api/addcar.php",{"uid":res[0].id,"qty":$("#qty").val(),"name":res[0].name,"price":res[0].price,"imgurl":res[0].imgurl,"account":user},function(res){
                console.log(res);
                // console.log($("#qty").val())
            })
            $.getJSON("api/car.php",{"account":user},function(res){
                console.log(res);
                var qty = 0;
                res.forEach(function(item){
                    qty += Number(item.qty);                         
                })
                // console.log(qty);
                $("#shopcar_qty").html(qty);
                $("#shopcar_qty2").html(qty);

            })
            $("#qty").val(1);
            }
        })
        //立即购买
        $("#buy").on("click",function(){
            // console.log(666);
            if(!user){
                alert("请登录");
                location.href="html/login.html";
            }else{
            $.get("api/addcar.php",{"uid":res[0].id,"qty":$("#qty").val(),"name":res[0].name,"price":res[0].price,"imgurl":res[0].imgurl,"account":user},function(res){
                console.log(res);
                // console.log($("#qty").val())
                location.href="html/car.html";
            })
            }
        })


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