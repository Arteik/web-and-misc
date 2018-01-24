<?php
    // A simple PHP script demonstrating how to connect to MySQL.
    // Press the 'Run' button on the top to start the web server,
    // then click the URL that is emitted to the Output tab of the console.

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
    echo "Connected successfully (".$db->host_info.")";
    $breeds = file('breeds.txt');
    foreach ($breeds as $index => $breed) {
        $names = file(trim($breed) . "/list.txt");
        foreach ($names as $meme => $name) {
            echo $breed . ": " . substr($name, 0, strpos($name, ".")) . "\n";
            $id = substr($name, 0, strpos($name, "."));
            $breedtrim = trim($breed);
            if ($db->query("INSERT INTO doggos VALUES (\"$id\", \"$breedtrim\", \"1200\", \"0\");") === TRUE) {
                printf("$breed added!");
            }
        }
    }
?>