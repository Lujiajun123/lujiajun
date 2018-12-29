<?php
    $conn = new mysqli("localhost","root","","kede");
    $account = isset($_GET["account"])?$_GET["account"]:null;

    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    $conn->set_charset('utf8');
    $res = $conn->query('delete from car where account = "'.$account.'"');

    
    if($res->num_rows > 0){
        // $content = $result->fetch_all(MYSQLI_ASSOC);
        echo "delete";
    }
        
    $result->close();
    $conn->close();
    // delete from h5user where opid
    
?>