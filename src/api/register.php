<?php
    $account = isset($_GET["account"])?$_GET["account"]:null;
    $password = isset($_GET["password"])?$_GET["password"]:null;
    $register = isset($_GET["register"])?$_GET["register"]:null;
    // 1.创建连接,测试是否连接成功
    $conn = new mysqli("localhost", "root", "", "kede");
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    $res = $conn->query('select * from user where account="'.$account.'"');
    if($res->num_rows > 0){
        echo "该用户名已被注册";
    }else{
        if($register){
            $res = $conn->query('insert into user (account,password) values ("'.$account.'","'.$password.'")');
            if($res){
                echo "插入成功";
            }else{
                echo "插入失败";
            }
        }else{
            echo "该用户名可用";
        }
    }
?>