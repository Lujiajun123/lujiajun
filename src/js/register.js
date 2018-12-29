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
    //register
    $("#tel").on("blur",function(){
        if(!(/^1[34578]\d{9}$/.test(this.value))){
            $(".tips").html("请输入正确手机号码");
            $(".tel").css({borderColor:"#90c31f"});
        }else{
            $(".tel").css({borderColor:"#999"});
            $(".tips").html("");
            $.get("api/register.php",{"account":$("#tel")[0].value},function(res){
                if(res=="该用户名可用"){
                    $(".tips").html(res);
                }else if(res=="该用户名已被注册"){
                    $(".tips").html(res);
                }
            })
        }
    });
    $("#psw").on("blur",function(){
        if(!(/ ^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{6,15}$/.test(this.value))){
            $(".tips").html("密码需同时含有数字和字母,长度要在6-15位");
            $(".psw").css({borderColor:"#90c31f"});
        }else{
            $(".psw").css({borderColor:"#999"});
            $(".tips").html("");
        }
    });
    $("#yzmbtn").html(""+parseInt(Math.random()*9)+parseInt(Math.random()*9)+parseInt(Math.random()*9)+parseInt(Math.random()*9));
    $(".btn").on("click",function(){
        var register = true;
        if($("#check")[0].checked){
            // console.log($("#tel"));
                 
            if(!(/^1[34578]\d{9}$/.test($("#tel")[0].value))){
                $(".tips").html("请输入正确手机号码");
                $(".tel").css({borderColor:"#90c31f"});
            }else{
                $(".tel").css({borderColor:"#999"});
                $(".tips").html("");
                if($("#yzm").val()==$("#yzmbtn").html()){
                    $.get("api/register.php",{"account":$("#tel")[0].value},function(res){
                        console.log(res);
                        if(res=="该用户名可用"){
                            // $(".tips").html(res);
                            if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{6,15}$/.test($("#psw")[0].value))){
                                $(".tips").html("密码需同时含有数字和字母,长度为6-15位");
                                $(".psw").css({borderColor:"#90c31f"});
                            }else{
                                $(".psw").css({borderColor:"#999"});
                                // $(".tips").html("插入");
                                $.get("api/register.php",{"account":$("#tel")[0].value,"password":$("#psw")[0].value,"register":register},function(res){
                                    // console.log(res);
                                    if(res=="插入成功"){
                                        alert("注册成功");
                                        location.href="html/login.html";
                                    }
                                })
                            }
                        }else if(res=="该用户名已被注册"){
                            $(".tips").html(res);
                            alert(res);
                            window.location.reload();
                        }
                    })
                }else{
                    alert("请输入正确验证码");
                    $("#yzmbtn").html(""+parseInt(Math.random()*9)+parseInt(Math.random()*9)+parseInt(Math.random()*9)+parseInt(Math.random()*9));
                }
            }
        }else {
            alert("请先同意可得网用户注册协议。");
            // window.location.reload();
        }
        // $.get("api/register.php",{"account":$("#tel").value,"password":$("#psw").value,"register":register},function(res){
        //     console.log(res);
        // })
    })

})