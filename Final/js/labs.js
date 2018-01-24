// grid dummy data
var count = 1;
var labs = {
	"Vote for Puppers":`
		<div class='container' id="wrapper">
			<h2>Pupper Voting Central</h2>
			<p>Cast your vote here to help determine once and for all which breed of doggo is cutest. Simply upper the pupper you like more to participate! Check the side tabs to see past votes and the leaderboard!</p>
			
			<div class="row">
				<div class="grid">
					<figure class="effect-lily dog" onclick="main('1')">
						<img src="info/beagles/1o516k.jpg" id="dog1" alt="Dog 1" data-breed="beagles"/>
						<figcaption>
							<div>
								<h2><i class="fa fa-thumbs-up fa-3x" aria-hidden="true"></i></h2>
								<p>Upper this <span>Pupper</span></p>
							</div>
						</figcaption>			
					</figure>
					<figure class="effect-lily dog" onclick="main('2')">
						<img src="info/pugs/1t0hu6.jpg" id="dog2" alt="Dog 2" data-breed="pugs"/>
						<figcaption>
							<div>
								<h2><i class="fa fa-thumbs-up fa-3x" aria-hidden="true"></i></h2>
								<p>Upper this <span>Pupper</span></p>
							</div>
						</figcaption>			
					</figure>
				</div>
			</div>
			
			<div class="row" id="votelog">
			</div>
			
			<footer>
				<p>Faulty, poor quality Doggo? Not a doggo at all? Click <a href="#" data-toggle="modal" data-target="#flag">here</a> to flag it for removal</p>
			</footer>
		</div>
		
		<div id="flag" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" style="text-color:black;"><i class="fa fa-paw fa-2x" aria-hidden="true"></i>  Flagged for Removal</h4>
              </div>
              <div class="modal-body">
        		<p>These images were retrieved from the highest rated posts of Reddit. We understand not all of them meet the UpperPupper quality standards and have groomed the collection to ensure only the best doggos are included. However, we might have missed a couple. Thank you for taking the time to report these images, their id numbers have been logged and will be reviewed.
				</i>              
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
	
	`,
	"Pupper Leader Board":`
		<div class='container' id="wrapper">
			<h2 onclick=leaderboard()><i class="fa fa-paw fa-lg" aria-hidden="true"></i> Pupper Leaderboard</h2>
			<p>This board reflects the current standings of the breeds with respect to one another. Just click the paw for the most recent rankings!</p>
			
			<div class="row">
				<div class="list-group">
					<div class="container" id="board">
					<div>
				</div>
			</div>
			
        </div>
	
	
	
	
	`

	

};

function getElo(id) {
	var elo = 0;
	$.ajax({
		url: "info/getelo.php",
		data: {"id": id},
		dataType: 'text',
		type: "POST",
		async: false,
		success: function(response) {
			elo = response;
		}
	});
	return elo;
}

function updateVotes(id) {
	var votes = 0;
	$.ajax({
		url: "info/updatevotes.php",
		data: {"id": id},
		dataType: 'text',
		type: "POST",
		async: false,
		success: function(response) {
			votes = response;
		}
	});
	return votes;
}

function updateElo(id1, id2, elo1, elo2) {
	$.ajax({
		url: "info/updateelo.php",
		data: {
			"id1": id1,
			"id2": id2,
			"elo1": elo1,
			"elo2": elo2
		},
		dataType: 'text',
		type: "POST",
		async: false,
		success: function(response) {
			console.log(response);
		}
	});
}

function main(winner){
	var id = $("#dog1").attr("src");
	var id = id.substring(id.lastIndexOf('/') + 1, id.indexOf('.'));
	console.log("getElo:" + getElo(id));
	update(winner);
	swap(winner);
}

function display(values){
	$("#board").empty();
	$.each(values, function(i, val){
		var color = i%2==0 ? " list-group-item-warning" : " list-group-item-info";
		$("#board").prepend('<div class="list-group-item' + color + '"><b>' + (values.length-i) + '</b>: ' + name_correct(val) + '</div>');
	});
	
}

function leaderboard(){
	var list = getAverages();
	var sorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
	display(sorted);
}

function update(winner){
	var id1 = $("#dog1").attr("src");
	var id1 = id1.substring(id1.lastIndexOf('/') + 1, id1.indexOf('.'));
	var id2 = $("#dog2").attr("src");
	var id2 = id2.substring(id2.lastIndexOf('/') + 1, id2.indexOf('.'));
	var elo1 = parseInt(getElo(id1));
	var elo2 = parseInt(getElo(id2));
	if (winner == '1') {
		var newelo1 = Elo.getNewRating(elo1, elo2, 1);
		var newelo2 = Elo.getNewRating(elo2, elo1, 0);
		updateVotes(id1);
	}
	else {
		var newelo1 = Elo.getNewRating(elo1, elo2, 0);
		var newelo2 = Elo.getNewRating(elo2, elo1, 1);
		updateVotes(id2);
	}
	updateElo(id1, id2, newelo1, newelo2);
	console.log(elo1, getElo(id1));
	console.log(elo2, getElo(id2));
	log(count++, winner);
}

function log(turn, winner){
	if(turn == 1){
		$("#votelog").append(`
			<h3 class="img--top-border">Recent Pupper Votes</h3>
			<p>To ensure you pupper preferences remain private recent votes are cleared every session!</p>
			<div class="list-group" id="recent" style="max-height: 200px; overflow-y:hidden"></div>
		`);
	}
	var color = turn%2==0 ? " list-group-item-warning" : " list-group-item-info";
	var breed_win = winner==1 ? $("#dog1").attr("data-breed") : $("#dog2").attr("data-breed");
	var breed_lose = winner==2 ?$("#dog1").attr("data-breed") : $("#dog2").attr("data-breed");
	$("#recent").prepend('<div class="list-group-item' + color + '"><b>' + turn + '</b>: The ' + name_correct(breed_win) + " was picked over the " + name_correct(breed_lose) + '</div>');
}

function name_correct(dog){
	switch(dog.trim()){
		case "beagles":
			return "Beagle";
		case "pugs":
			return "Pug";
		case "poodles":
			return "Poodle";
		case "shiba":
			return "Shiba Inu";
		case "huskies":
			return "Husky";
		case "labs":
			return "Labrador";
		case "corgi":
			return "Corgi";
		case "retriever":
			return "Golden Retriever";
		case "boxer":
			return "Boxer";
		case "shepard":
			return "German Shepard";
		case "bulldog":
			return "Bulldog";
		case "chihuahua":
			return "Chihuahua";
	}
}

function swap(winner){
	$.get("info/breeds.txt", function(data){
		var breeds = data.split("\n");	
		var numbreeds = breeds.length;
		var new_1 = Math.floor((Math.random() * numbreeds));
		var new_2 = Math.floor((Math.random() * numbreeds));
		while(new_1 == new_2)
			new_2 = Math.floor((Math.random() * numbreeds));
		setdoggo(1, breeds[new_1]);
		setdoggo(2, breeds[new_2]);
		
	});
}

function setdoggo(num, breed){
	$.get("info/"+ breed + "/list.txt", function(data){
		var dogs = data.split("\n");	
		var numdogs = dogs.length;
		var new_dog = Math.floor((Math.random() * numdogs));
		$("#dog" + num).attr("src", "info/" + breed + "/" + dogs[new_dog]);
		$("#dog" + num).attr("data-breed", breed);
	});
}

function getAverages() {
	var means = new Array();
	$.ajax({
		url: "info/average.php",
		dataType: 'json',
		type: "POST",
		async: false,
		success: function(response) {
			means = response;
		}
	});
	return means;
}