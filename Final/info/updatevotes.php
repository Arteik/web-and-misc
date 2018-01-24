<?php
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;
    $id = $_REQUEST["id"];
    // Create connection
    $db = new mysqli($servername, $username, $password, $database, $dbport);
    $votes = '0';
    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
    if ($result = $db->query("SELECT * FROM doggos WHERE id = \"$id\";")) {
        while ($row = $result->fetch_row()) {
            $votes = $row[3];
        }
    }
    $votes = intval($votes) + 1;
    if ($result = $db->query("UPDATE doggos SET votes=\"$votes\" WHERE id = \"$id\";")) {
        echo $votes;
    }
?>