<?php
    $uid = isset($_GET["uid"])?$_GET["uid"]:null;
    $conn = new mysqli("localhost","root","","kede");
    $account = isset($_GET["account"])?$_GET["account"]:null;

    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    $conn->set_charset('utf8');
    $res = $conn->query('delete from car where id='.$uid.' and account = "'.$account.'"');

    $result = $conn->query('select * from car where account = "'.$account.'"');

    if($result){
        if($result->num_rows > 0){
            $content = $result->fetch_all(MYSQLI_ASSOC);
            // var_dump($content);
            // echo json_encode($content,JSON_UNESCAPED_UNICODE);
            echo "delete";
        }else{
            echo "shopcar all clear,please click here to continue shopping";
        }   
    }
        
    $result->close();
    $conn->close();
    // delete from h5user where opid
    
?>