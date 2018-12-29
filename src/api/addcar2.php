<?php
    $qty = isset($_GET["qty"])?$_GET["qty"]:null;
    $uid = isset($_GET["uid"])?$_GET["uid"]:null;
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
    $res = $conn->query('update car set qty = "'.$qty.'" where id = '.$uid.' and account = "'.$account.'"');
    // if($res->num_rows > 0){
    //     $c = $res->fetch_all(MYSQLI_ASSOC);
    //     // var_dump($c);
    //     // $res2 = $conn->query('update car set qty = "'.$qtyn.'" where id = '.$uid);
    // }
    // if($res){
    //     echo "添加成功";
    // }else{
    //     echo "添加失败";
    // }
    $result = $conn->query('select * from car where id = '.$uid.' and account="'.$account.'"');
    if($result->num_rows > 0){
        $content = $result->fetch_all(MYSQLI_ASSOC);
        // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    $all = $conn->query('select * from car where account = "'.$account.'"');
    if($all->num_rows > 0){
        $conall = $all->fetch_all(MYSQLI_ASSOC);
        // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    $res = array(
        "content" => $content,
        "conall" => $conall
    );
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
    // $content = json_decode($content,true);
    // $res = array(
    //     "data" => $data,
    //     "len" => $len,
    //     "qty" => $qty,
    //     "currentPage" => $currentPage
    // );
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
        
?>