jQuery(function($){
    //ajax shopcar
    $.getJSON("api/car.php",function(res){
        console.log(res);
        var totalqty = 0;
        res.forEach(function(item){
            totalqty += Number(item.qty);
        })
        $("#shopcar_qty").html(totalqty);
    });
    //cookie
    document.cookie.split("; ").forEach(function(item){   //["uname=lemon","upwd=123"]
            var arr = item.split("=");
                // console.log(arr);
            if(arr[0] == "account"){
                location.href="index.html";
            }
        })
    //login
    $("#btn").on("click",function(){
        $.get("api/login.php",{"account":$("#tel").val(),"password":$("#psw").val()},function(res){
            // console.log(res);
            if(res=="用户名或密码错误"){
                $("#tips").html(res);
            }else if(res=="登陆成功"){
                if($("#auto")[0].checked){
                    var d = new Date();
                    d.setDate(d.getDate()+7);
                    document.cookie = "account="+$("#tel").val()+"; expires="+d.toUTCString()+"; path=/";
                    document.cookie = "password="+$("#psw").val()+"; expires="+d.toUTCString()+"; path=/";
                }else {
                    document.cookie = "account="+$("#tel").val()+"; path=/";
                    document.cookie = "password="+$("#psw").val()+"; path=/";
                }
                location.href="index.html";
            }
        })
    })
    


})