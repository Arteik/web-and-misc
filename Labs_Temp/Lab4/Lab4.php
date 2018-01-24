<?php
  
   $countries = array("Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon", "Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States Of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands"
	,"Yemen","Zambia","Zimbabwe");

    $w = $_REQUEST["word"];

    echo in_array($w, $countries);
    
    

	
?>

<!doctype html>

<html lang = "en-US">
	<head>
		<title>Lab4</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
  		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	</head>

	<body id="back">
		<div id="header">
			<a href="../index.html" id="home">SG</a>
		</div>
	
  <script type="text/javascript">
  var used = [];
  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon", "Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States Of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands"
	,"Yemen","Zambia","Zimbabwe"];
    var target = '';
    var turn = 1;
    var found;
    
    function country(string){
      $.ajax({url: 'Lab4.php',
              data: {"word": capitalize(string)},
              type: 'post',
              success: function(output) {
                          if(output[0] != "1"){
                            $("#error").html('"' + capitalize(string) + '" isn\'t a real country, is not the full country name or is spelled incorrectly').css("color", "#c0392b");
                            $("#input").val('');
                          }
                          else{
                            $("#error").html("Blue is player one, Yellow is player two").css("color", "black");
                          }
                      },
            });
      

    }

    function capitalize(string){
      return string.replace(/\w\S*/g, function(str){
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
      });
    }
    
    function bold(string){
      string = capitalize(string);
      if(turn == 1){
        return string.replace(/(.)$/i, '<b><u>$1</u></b>');
      }  
      else{
        return string.replace(/(.)$/i, '<b><u>$1</u></b>').replace(/^(.)/i, '<b><u>$1</u></b>');
      }
    }
    
    function update(string){
      target = /.$/.exec(string);
      turn++;
      $("#player").html(turn%2==0 ? "Player 2" : "Player 1");
      $("#input").val('');
      if(turn == 5){
        $("#playlog").html('Play Log <small><a href="#" data-toggle="modal" data-target="#win">It\'s turn 5, how do I win?!</a></small>');
        $("#alter").append("<p><b>Note:</b> To win, simply outlast your opponent; no breaks for the bathroom or food. Fisticuffs is fully permitted, maces are not.</p>");
      }
    }
    
    function validate(string){
      if(string.length < 3){
        var text = '';
        switch(string.length){
          case 0: 
            text = 'Enter a country name, stupid';
            break;
          case 1:  
            text = '"' + capitalize(string) + '?!" What kind of country name has 1 letter?';
            break;
          default:
            text = '"' + capitalize(string) + '?!" What kind of country name has ' + string.length + ' letters?';
        }
        $("#error").html(text).css("color", "#c0392b");
        $("#input").val('');
        return false;
      }
      if(turn != 1){
        if((/^./.exec(string)).toString().toLowerCase() != target){
          $("#error").html('The next country name must begin with "' + capitalize(target.toString()) + '"').css("color", "#c0392b");
          $("#input").val('');
          return false;
        }
      }
      country(string);
      if(countries.indexOf(capitalize(string)) < 0){
        return false;
      }
      if(used.indexOf(capitalize(string)) > 0){
        $("#error").html('You\'ve Used "' + capitalize(string) + '"').css("color", "#c0392b");
        $("#input").val('');
        return false;
      }
      used.push(capitalize(string));
      return true;
      
    }
    
    $(function() {
        $("#submit").click(function(e){
          var response = $("#input").val();
          if(validate(response)){
            if(turn == 1){
              $("#playlog").html("Play Log");
              $("#entries").append('<div class="list-group-item list-group-item-info">' + turn + ':' + bold(response) + '</div>');
              update(response);
            }
            else{
              var color = turn%2==0 ? " list-group-item-warning" : " list-group-item-info";
              $("#entries").prepend('<div class="list-group-item' + color + '">' + turn + ':' + bold(response) + '</div>');
              update(response);
            }
          }
        });
        
    });

  </script>
  
  	<div class="container">
    	<div class="jumbotron">
          <h1>The Country Game! <small><a href="#" data-toggle="modal" data-target="#rules">Don't know how to play?</a></small></h1>
          <p id="error">Two players, because it's not like you have friends anyways</p>

            <div class="input-group input-group-lg">
              <span class="input-group-addon" id="player" style="background:white">Player 1</span>

              <input type="text" class="form-control" id="input" placeholder="Enter a country!" aria-label="Type a country!" onkeydown = "if (event.keyCode == 13) {$('#submit').click() }" autofocus>

              <span class="input-group-btn">
                <button class="btn btn-default" id="submit" type="button" onclick="submit()">Go</button>
              </span>
            </div>
        </div>
        
        <h1 id="playlog"></div>
        <div class="list-group" style="max-height: 450px; overflow-y:auto">
          <div class="container" id="entries">
            
          </div>
        </div>

        <div id="rules" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Rules!</h4>
              </div>
              <div class="modal-body" id="alter">
                <p>
                  Each player will take turns entering the <b>full names</b> of countries, starting with Player 1.
                  For every entry after the first, the next country must start with the same letter that the previous country ended with. <br><br>
                  <i>For instance:</i>
               </p>
               <div class="well well-sm">1. Estoni<b>a</b></div>
               <div class="well well-sm">2. <b>A</b>zerbaija<b>n</b></div>
               <div class="well well-sm">3. <b>N</b>igera</div>
               <p>
                  Good luck and have fun! :)<br>
               </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
        
        <div id="win" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">???</h4>
              </div>
              <div class="modal-body">
                <h4>What do you mean how do you win? Go read the rules!</h4>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>

  	</div>


	</body>

	

</html>