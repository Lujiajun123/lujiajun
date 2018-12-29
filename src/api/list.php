<?php
    $currentPage = isset($_GET["currentPage"])?$_GET["currentPage"]:1;
    $qty = isset($_GET["qty"])?$_GET["qty"]:8;
    $type = isset($_GET["type"])?$_GET["type"]:null;
    $xlclick = isset($_GET["xlclick"])?$_GET["xlclick"]:null;
    $jgclick = isset($_GET["jgclick"])?$_GET["jgclick"]:null;

    $conn = new mysqli("localhost", "root", "", "kede");
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    $conn->set_charset('utf8');

    $res = $conn->query('select * from goods where type="'.$type.'"');
    if($xlclick=="true"){
        $res = $conn->query('select * from goods where type="'.$type.'" order by sales');
    }else if($xlclick=="false"){
        $res = $conn->query('select * from goods where type="'.$type.'" order by sales desc');
    }
    if($jgclick=="true"){
        $res = $conn->query('select * from goods where type="'.$type.'" order by price');
    }else if($jgclick=="false"){
        $res = $conn->query('select * from goods where type="'.$type.'" order by price desc');
    }
    if($res->num_rows > 0){
        $c = $res->fetch_all(MYSQLI_ASSOC);
        $c = json_encode($c,JSON_UNESCAPED_UNICODE);
        $c = json_decode($c,true);
        $len = count($c);
        $data = array_slice($c,($currentPage-1)*$qty,$qty);
        $res = array(
            "data"=>$data,
            "len"=>$len,
            "qty"=>$qty,
            "currentPage"=>$currentPage
            );
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }
?>