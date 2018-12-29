<?php
    $account = isset($_GET["account"])?$_GET["account"]:null;
    $password = isset($_GET["password"])?$_GET["password"]:null;
    $con = new mysqli("localhost","root","","kede");
    if($con->connect_error){
        var_dump($con->connect_error);
    }
    $con->set_charset('utf8');
    $res = $con->query('select * from user where account="'.$account.'"');
    if($res->num_rows>0){
        $content = $res->fetch_all(MYSQLI_ASSOC);
        if($content[0]["password"]==$password){
            echo "登陆成功";
        }else {
            echo "用户名或密码错误";
        }
    } else {
        echo "用户名或密码错误";
    }
?>