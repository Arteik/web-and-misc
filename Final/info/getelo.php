<?php
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;
    $id = $_REQUEST["id"];
    // Create connection
    $db = new mysqli($servername, $username, $password, $database, $dbport);
    $answer = '1200';
    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
    if ($result = $db->query("SELECT * FROM doggos WHERE id = \"$id\";")) {
        while ($row = $result->fetch_row()) {
            $answer = $row[2];
        }
    }
    echo $answer;
    exit;
?>