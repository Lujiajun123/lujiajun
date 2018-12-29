<?php
    $account = isset($_GET["account"])?$_GET["account"]:null;
    $conn = new mysqli("localhost", "root", "", "kede");
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    $conn->set_charset('utf8');
    // $res = $conn->query('select * from car');
    // if($res->num_rows > 0){
        // $con = $res->fetch_all(MYSQLI_ASSOC);
        // $arr=array();
        // for($i=0;$i<count($con);$i++){
        //     array_push($arr,$con[$i]["id"]);
        // }
        // $strid = join(',', $qty);
        // $strqty = join(',', $arr)
        // $result = $conn->query('update goods set qty = ('.join(',', $arrqty).') where id in ('.join(',', $arrid).')');
        // $c = $result->fetch_all(MYSQLI_ASSOC);
        // var_dump($c);
        // echo json_encode($c,JSON_UNESCAPED_UNICODE);
    $result = $conn->query('select * from car where account="'.$account.'"');
    if($result->num_rows > 0){
        $content = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($content,JSON_UNESCAPED_UNICODE);
        // $result->close();
        // $conn->close();
    }else {
        echo "no match";
    }
        
    
    


// var_dump($con[0]["id"]);
// array_push($arr, e1, e2 ... en);
// $result = $conn->query('select * from goods where id in ('.join(',', $arr).')');

// $res = $conn->query('update car set qty = "'.$qtyn.'" where id = '.$uid);
?>
