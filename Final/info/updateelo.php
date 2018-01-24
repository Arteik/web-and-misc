<?php
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;
    $id1 = $_REQUEST["id1"];
    $id2 = $_REQUEST["id2"];
    $elo1 = $_REQUEST["elo1"];
    $elo2 = $_REQUEST["elo2"];
    // Create connection
    $db = new mysqli($servername, $username, $password, $database, $dbport);
    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
    if ($result = $db->query("UPDATE doggos SET rating=\"$elo1\" WHERE id = \"$id1\";")) {
        echo "Dog 1 updated";
    }
    if ($result = $db->query("UPDATE doggos SET rating=\"$elo2\" WHERE id = \"$id2\";")) {
        echo "Dog 2 updated";
    }
?>