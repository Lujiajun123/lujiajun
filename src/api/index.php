<?php
    $type = isset($_GET["type"])?$_GET["type"]:null;
    $conn = new mysqli("localhost", "root", "", "kede");
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    $conn->set_charset('utf8');
    $res = $conn->query('select * from goods where type="'.$type.'"');
    if($res->num_rows > 0){
        $content = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    $res->close();
    $conn->close();



?>