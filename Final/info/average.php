<?php
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;
    // Create connection
    $db = new mysqli($servername, $username, $password, $database, $dbport);
    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
    $means = array();
    $breeds = file('breeds.txt');
    foreach ($breeds as $index => $breed) {
        $total = 0;
        $trimbreed = trim($breed);
        if ($result = $db->query("SELECT rating FROM doggos WHERE breed = \"$trimbreed\";")) {
            $length = $result->num_rows;
            while ($row = $result->fetch_row()) {
                $total = $total + intval($row[0]);
            }
        }
        $means[$trimbreed] = $total/$length;
    }
    echo json_encode($means);
?>