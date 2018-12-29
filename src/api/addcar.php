<?php
    $qty = isset($_GET["qty"])?$_GET["qty"]:null;
    $uid = isset($_GET["uid"])?$_GET["uid"]:null;
    $name = isset($_GET["name"])?$_GET["name"]:null;
    $price = isset($_GET["price"])?$_GET["price"]:null;
    $imgurl = isset($_GET["imgurl"])?$_GET["imgurl"]:null;
    $account = isset($_GET["account"])?$_GET["account"]:null;

    // 1.创建连接,测试是否连接成功
    $conn = new mysqli("localhost","root","","kede");
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    // var_dump($qty);
    // var_dump($uid);
    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    $res = $conn->query('select qty from car where id="'.$uid.'" and account="'.$account.'"');
    if($res->num_rows > 0){
        $qtyp = $res->fetch_all(MYSQLI_ASSOC);
        $qtyn = $qty+$qtyp[0]["qty"];
        $res2 = $conn->query('update car set qty = "'.$qtyn.'" where id = '.$uid.' and account="'.$account.'"');
    }else{
        $res2 = $conn->query('insert into car ( id, qty, name, imgurl, price,account) values ('.$uid.','.$qty.',"'.$name.'","'.$imgurl.'","'.$price.'","'.$account.'")');
    }
    if($res2){
        echo "添加成功";
    }else{
        echo "添加失败";
    }


// INSERT INTO table_name ( field1, field2,...fieldN ) VALUES ( value1, value2,...valueN );

    







?>