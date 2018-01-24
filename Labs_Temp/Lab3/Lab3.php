<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Name</th>
          <th>Zip</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
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
        
        $sql = "CREATE TABLE IF NOT EXISTS info (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(30) NOT NULL,
            date TIMESTAMP,
            zip INT(6),
            city VARCHAR(10),
            state VARCHAR(2),
            genre VARCHAR(10),
            sub VARCHAR(10),
            comments VARCHAR(20)
        )";
        
        // if ($db->query($sql) === TRUE) {
        //     echo "Table info created successfully";
        // } else {
        //     echo "Error creating table: " . $db->error;
        // }
        
        $name = $_POST["name"];
        $zip = $_POST["zip"]; 
        $city = $_POST["city"]; 
        $state = $_POST["state"]; 
        $genre = $_POST["genre"];
        $sub = $_POST["sub"]; 
        $comments = $_POST["comments"];
        
        $sql = "INSERT INTO info(name, zip, city, state, genre, sub, comments)
                VALUES ('" . $name . "', '" . $zip . "', '" . $city . "', '" . $state . "', '" . $genre . "', '" . $sub . "', '" . $comments . " ')";
        
        
        $db->query($sql);
        
        $sql = "SELECT id, name FROM info";
        $result = $db->query($sql);
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<tr><th scope='row'>" . $row["id"] . "</th><td>" . $row["name"] . "</td><td>" . $row["zip"] . "</td><td>" . $row["city"] . "</td><td>" . $row["state"] . "</td></tr>";
            }
        } else {
            echo "0 results";
        }
        
        $db->close();
        
    
        
    ?>
        </tbody>
    </table>
</div>
</body>
</html>