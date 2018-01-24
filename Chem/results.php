<?php
    $name     = $_REQUEST['name'];
    $date     = $_REQUEST['date'];
    $ta       = $_REQUEST['ta'];
    $section  = $_REQUEST['section'];
    $comments = $_REQUEST['comments'];
    $input    = array($_REQUEST['NaBr'], $_REQUEST['NaOH'], $_REQUEST['Na2S'], $_REQUEST['Na2SO4'], $_REQUEST['KClO3'], $_REQUEST['KIO3'], $_REQUEST['NH4Cl'], $_REQUEST['BaCl2'], $_REQUEST['AgNO3']);
    $base     = $_REQUEST['base'];
    $sol      = array(1, 5, 8, 4, 9, 2, 6, 7, 3);
    $ip       = $_SERVER['REMOTE_ADDR'];
    $correct  = 0;
    $file     = fopen("responses/" . $ip . "_" . $name . ".txt", "a");
    
    foreach($input as $val){
        $val = $base[$val];
    }
    
    for($i = 0; $i < sizeof($input); $i++){
        if($input[$i] == $sol[$i]){ $correct++; }        
    }
    
    
    $write = 
    
"--------------------------------------

Name: "      . $name    . "
IP Address:" . $ip      . " This number should be unique to each student. Multiple entries under the same IP indicate multiple submissions from the same device.
Date: "      . $date    . "
TA: "        . $ta      . "
Section: "   . $section . "
Correct IDs:". $correct . "/9

Offered Solution: " . print_r($input, TRUE) . "
Solution: " . print_r($sol, TRUE) . "

Additional comments: " . $comments . "

";

    fwrite($file, $write);
    fclose($file);
    
    exit; 
    
?>