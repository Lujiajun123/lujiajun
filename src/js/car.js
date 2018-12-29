jQuery(function($){

    var user;
    //cookie
    var cookie = document.cookie.split("; ");
    for(var i =0;i<cookie.length;i++){   //["uname=lemon","upwd=123"]
            var arr = cookie[i].split("=");
                // console.log(arr);
            if(arr[0] == "account"){
                user = arr[1];
                $(".signin").html(`<span>${arr[1]}</span>
                    您好，欢迎光临可得眼镜网！
                    <a id="denglu" href="html/login.html" style="display: none;">登录</a><a id="zhuce" href="html/register.html" style="display: none;">[免费注册]</a>
                <span id="tuichu" style="cursor: pointer;">[退出]</span>`);
                // location.href="index.html";
            }
        }
    $("#tuichu").css({cursor:"pointer"}).on("mouseover",function(){$(this).css({color:"#f60"})}).on("mouseout",function(){$(this).css({color:"#ccc"})}).on("click",function(){
        var d = new Date();
        d.setDate(d.getDate()-1);
        document.cookie = "account="+$("#tel").val()+"; expires="+d.toUTCString()+"; path=/";
        document.cookie = "password="+$("#psw").val()+"; expires="+d.toUTCString()+"; path=/";
        window.location.reload();
    })


    // console.log(user);
    
    
    //ajax
    $.getJSON("api/car.php",{"account":user},function(res){
        var totalprice = 0;
        var totalcount = 0;
        var str = res.map(function(item){
            totalprice += item.price*item.qty;
            totalcount += Number(item.qty);
            return `<li uid="${item.id}">
                    <div class="img_name">
                        <img class="goods_img" src="${item.imgurl}"><label class="goods_name">${item.name}</label>
                    </div>
                    <div class="qty">
                        <div class="qty_jian">-</div><input class="goods_qty" value="${item.qty}" type="text"><div class="qty_jia">+</div>
                    </div>
                    <div class="goods_price">￥${item.price}</div>
                    <div class="goods_totalprice">￥${(item.price*item.qty).toFixed(2)}</div>
                    <div class="delete"><button class="goods_delete">&times;</button></div>
                </li>`
        }).join("");
        $("#goods").html(str);

        //totalprice
        $("#finalprice").html(totalprice.toFixed(2));
        $("#totalprice").html("￥"+(totalprice*1.5).toFixed(2));
        $("#cxyh").html("-￥"+(totalprice*0.5).toFixed(2));
        $("#totalqty").html(totalcount);
             
        

             
        //jian
        $(".qty_jian").on("click",function(){
            if($(this).next().val()>1){
                $(this).next().val($(this).next().val()-1);
            }
            $.getJSON("api/addcar2.php",{"account":user,"uid":$(this).closest("li").attr("uid"),"qty":$(this).next().val()},(res)=>{
                console.log(res.content[0]);
                $(this).closest('li').find(".goods_img").attr("src",res.content[0].imgurl);
                $(this).closest('li').find(".goods_name").html(res.content[0].name);
                $(this).closest('li').find(".goods_qty").val(res.content[0].qty);
                $(this).closest('li').find(".goods_price").html("￥"+res.content[0].price);
                $(this).closest('li').find(".goods_totalprice").html("￥"+(res.content[0].price*res.content[0].qty).toFixed(2));
                var totalprice = 0;
                var totalcount = 0;
                res.conall.forEach(function(item){
                    totalprice += item.price*item.qty;
                    totalcount += Number(item.qty);
                })
                $("#finalprice").html(totalprice.toFixed(2));
                $("#totalprice").html("￥"+(totalprice*1.5).toFixed(2));
                $("#cxyh").html("-￥"+(totalprice*0.5).toFixed(2));
                $("#totalqty").html(totalcount);
                $("#shopcar_qty").html(totalcount);
            })
        })

        //jia
        $(".qty_jia").on("click",function(){
            $(this).prev().val(Number($(this).prev().val())+1);
            $.getJSON("api/addcar2.php",{"account":user,"uid":$(this).closest("li").attr("uid"),"qty":$(this).prev().val()},(res)=>{
                console.log(res);
                $(this).closest('li').find(".goods_img").attr("src",res.content[0].imgurl);
                $(this).closest('li').find(".goods_name").html(res.content[0].name);
                $(this).closest('li').find(".goods_qty").val(res.content[0].qty);
                $(this).closest('li').find(".goods_price").html("￥"+res.content[0].price);
                $(this).closest('li').find(".goods_totalprice").html("￥"+(res.content[0].price*res.content[0].qty).toFixed(2));
                var totalprice = 0;
                var totalcount = 0;
                res.conall.forEach(function(item){
                    totalprice += item.price*item.qty;
                    totalcount += Number(item.qty);
                })
                $("#finalprice").html(totalprice.toFixed(2));
                $("#totalprice").html("￥"+(totalprice*1.5).toFixed(2));
                $("#cxyh").html("-￥"+(totalprice*0.5).toFixed(2));
                $("#totalqty").html(totalcount);
                $("#shopcar_qty").html(totalcount);

            })
        })

        //self
        $(".goods_qty").on("input",function(){
            $.getJSON("api/addcar2.php",{"account":user,"uid":$(this).closest("li").attr("uid"),"qty":$(this).val()},(res)=>{console.log(res);
                $(this).closest('li').find(".goods_img").attr("src",res.content[0].imgurl);
                $(this).closest('li').find(".goods_name").html(res.content[0].name);
                $(this).closest('li').find(".goods_qty").val(res.content[0].qty);
                $(this).closest('li').find(".goods_price").html("￥"+res.content[0].price);
                $(this).closest('li').find(".goods_totalprice").html("￥"+(res.content[0].price*res.content[0].qty).toFixed(2));
                var totalprice = 0;
                var totalcount = 0;
                res.conall.forEach(function(item){
                    totalprice += item.price*item.qty;
                    totalcount += Number(item.qty);
                })
                $("#finalprice").html(totalprice.toFixed(2));
                $("#totalprice").html("￥"+(totalprice*1.5).toFixed(2));
                $("#cxyh").html("-￥"+(totalprice*0.5).toFixed(2));
                $("#totalqty").html(totalcount);
                $("#shopcar_qty").html(totalcount);

            })
        
        })
        //delete
        $(".goods_delete").on("click",function(){
            new Confirm({
                    title:"确认删除",
                    titleColor:"deeppink",
                    content:"你确定删除该商品吗?",
                    width:300,
                    height:200,
                    draggable:true,
                    overlay:0.9,
                    overlaybgc1:"pink",
                    overlaybgc2:"skyblue",
                    confirm:function(){
                            $.get("api/deletecar.php",{"account":user,"uid":$(".goods_delete").closest("li").attr("uid")},(res)=>{
                                    console.log(res);
                                    if(res=="delete"){
                                        window.location.reload();
                                    }else if(res=="shopcar all clear,please click here to continue shopping"){
                                        $("#qujiesuan").hide();
                                        $("#goods").html("").append($("<span/>").html(res).css({fontSize:"20px",color:"#f60"}));
                                        $("#finalprice").html(0.00);
                                        $("#totalprice").html("￥0.00");
                                        $("#cxyh").html("-￥0.00");
                                        $("#totalqty").html(0);
                                        $("#shopcar_qty").html(0);

                                    }
                            
                            })
                         }

                    
                    });

      })

        

    })
    
    //ajax shopcar

        $.get("api/car.php",{"account":user},function(res){
            console.log(res);
            if(res=="no match"){
                    $("#goods").html("").append($("<span/>").html("当前购物车为空").css({fontSize:"20px",color:"#f60"}));
                    $("#qujiesuan").hide();
            }else{
                var totalqty = 0;
                JSON.parse(res).forEach(function(item){
                    totalqty += Number(item.qty);
                })
                $("#shopcar_qty").html(totalqty);
                console.log($("#shopcar_qty").html());
            }
        });
        // 
         
    
    //jiesuan
    $("#qujiesuan").css({cursor:"pointer"}).on("click",function(){
        new Confirm({
                    title:"丝袜",
                    titleColor:"deeppink",
                    content:"你确定撕我丝袜吗?",
                    width:300,
                    height:200,
                    draggable:true,
                    overlay:0.9,
                    overlaybgc1:"deeppink",
                    overlaybgc2:"purple",
                    confirm:function(){
                        $.get("api/deletecarall.php",{"account":user},function(res){
                            
                        })
                        location.href="index.html";
                         },
                    cancel:function(){
                         }
                    });
        
    })

    //function siwa
        function Popover(opts){
            var defaults = {
                title : "弹窗标题",
                content : "内容",
                width : 200,
                height : 200,
                draggable : true,
                overlay : 0.3,
                titleColor : "#000",
                overlaybgc1 : "#fff",
                overlaybgc2 : "#000"
            }
            var obj = Object.assign({},defaults,opts);
            this.init(obj);
            this.show();
        }
        Popover.prototype = {
            constructor : Popover,
            init : function(obj){
                this.popover = document.createElement("div");
                this.popover.classList.add("popover");
                this.popover.style.width = obj.width + "px";
                if(typeof obj.height=="number"){
                    this.popover.style.height = obj.height + "px";
                }

                this.title = document.createElement("h3");
                this.title.classList.add("title");
                this.title.innerHTML = obj.title;
                this.title.style.background = obj.titleColor;
                
                

                this.popover.appendChild(this.title);

                this.content = document.createElement("p");
                this.content.classList.add("content");
                this.content.innerHTML = obj.content;
                this.popover.appendChild(this.content);

                this.closeBtn = document.createElement("span");
                this.closeBtn.classList.add("btn-close");
                this.closeBtn.innerHTML = "&times;";
                this.popover.appendChild(this.closeBtn);

                this.closeBtn.onclick = ()=> {
                    this.delete();
                }

                if(typeof obj.overlay == "number"){
                    this.overlay = document.createElement("div");
                    this.overlay.classList.add("overlay");
                    this.overlay.style.opacity = obj.overlay;
                    this.overlay.style.background = "linear-gradient("+obj.overlaybgc1+","+obj.overlaybgc2+")";
                    document.body.appendChild(this.overlay);
                }
                document.body.appendChild(this.popover);
                if(obj.draggable){
                    this.drag();
                }
            },
            hide : function(){
                this.popover.display = "none";
                if(this.overlay){
                    this.overlay.display = "none";
                }
            },
            delete : function(){
                document.body.removeChild(this.popover);
                if(this.overlay){
                    document.body.removeChild(this.overlay);
                }
            },
            show : function(){
                this.popover.style.display = "block";
                if(this.overlay){
                    this.overlay.style.display = "block";
                }
            },
            drag : function(){
                var popover = this.popover;
                console.log(popover);
                
                var title = popover.children[0];
                console.log(title);
                
                this.title.onmousedown = function(e){
                    var x = e.pageX - popover.offsetLeft;
                    var y = e.pageY - popover.offsetTop;
                    document.onmousemove = function(ev){
                        popover.style.left = ev.pageX -x + 'px';
                        popover.style.top = ev.pageY -y + 'px';
                        ev.preventDefault();
                    }
                }
                this.title.onmouseup = function(evt){
                    document.onmousemove = null;
                }
            }
        }

        function Confirm(opts){
            var defaults = {
                title : "弹窗标题",
                content : "内容",
                width : 200,
                height : 200,
                draggable : true,
                overlay : 0.3,
                titleColor : "#000",
                overlaybgc1 : "#fff",
                overlaybgc2 : "#000",
                confirm : function(){},
                cancel : function(){}
            }
            var obj = Object.assign({},defaults,opts);
            Popover.call(this,obj);
            this.init2(obj);
        }
        Confirm.prototype = object(Popover.prototype);
        Confirm.prototype.init2 = function(obj){
            this.footer = document.createElement("div");
            this.footer.classList.add("footer");

            this.confirmBtn = document.createElement("button");
            this.confirmBtn.innerHTML = "确认";
            this.footer.appendChild(this.confirmBtn);

            this.cancelBtn = document.createElement("button");
            this.cancelBtn.innerHTML = "取消";
            this.footer.appendChild(this.cancelBtn);
                 
            this.popover.appendChild(this.footer);
            this.confirmBtn.onclick = ()=>{
                this.delete();
                obj.confirm();
            }
            this.cancelBtn.onclick = ()=>{
                this.delete();
                obj.cancel();
            }
        }
        
        function object(o){
            function F(){}
            F.prototype = o;
            return new F();
        }
            
            



})