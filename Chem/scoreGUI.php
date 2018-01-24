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
          <th>Name</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody>
    <?php
        
        $dir    = 'responses';
        $files = scandir($dir, 1);

        function debug_to_console( $data ) {
            $output = $data;
            if ( is_array( $output ) )
                $output = implode( ',', $output);
        
            echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
        }
        
        debug_to_console( $files );
        if (sizeof($files) > 0) {
            foreach ($files as $file) {
                if (preg_match('/.+.txt/', $file))
               echo "<tr><th scope='row'>" . split("_", $file)[1]  . "</th><td><a href=responses/" . $file .  ">" . $file . "</a></td></tr>";
            }
        } else {
            echo "0 results";
        }
        
        
    ?>
        </tbody>
    </table>
</div>
</body>
</html>

<?php



?>