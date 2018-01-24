var pages = {
	"Instructions":`
		<div class='container' id="wrapper">
					<h1>Nine Reactions Instructions</h1>
					<h4>Welcome to the online Nine Reactions Lab!</h4>
					<br>
			<div class="row">
				<p>You will be presented with nine different colorless aqueous solutions in test tubes, numbered one through nine.  Your task is to identify each of these nine solutions. <br><br>
				
				In order to do so, you may mix the various solutions in any manner you choose. To conduct a mixing, select the numbers corresponding to the two test tubes whose solutions you wish to mix and press mix.  The result of the mixing will appear in the reaction history below. Up to 36 different combinations are possible.  The least imaginative plan is to carry out all 36 mixings, record the results on the Data Sheet, and compare the Data Sheet to your predictions.  A better approach is to analyze the various interactions between the solutions as you go along and try to minimize the total steps. <br><br> 
			
				Once you have identified all 9 solutions, click Submit in the left hand navigation bar.  On this screen, enter the number of the test tube that corresponds with the solution it contains.  Check your work carefully, once you submit, you cannot go back and change your answers. If you refresh the page or otherwise attempt to start again once you have begun, you will recieve a new scenario and need to start over! <br><br>
			
				Click <b>Solution Mixer</b> in the navigation bar to begin. Good luck!</p>
			</div>
		</div>`,
			
	"Solution Mixer":`
		<div class='container' id='wrapper'>
			<h1>Solution Mixer</h1>
			<h4>Select two solutions and get mixing!</h4>
			<br>
			
			<div class="row d-flex align-items-center">
				<div class="col-5 text-left">
					<h4>Solution #1</h4>
					<div id="myButtons" class="btn-group" data-toggle="buttons">
					  <label class="btn btn-primary btn-lg active" onclick="sync(1, 1)">
					    <input type="radio" name="sol1" id="1_1" autocomplete="off" checked> 1
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(2, 1)">
					    <input type="radio" name="sol1" id="1_2" autocomplete="off"> 2
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(3, 1)">
					    <input type="radio" name="sol1" id="1_3" autocomplete="off"> 3
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(4, 1)">
					    <input type="radio" name="sol1" id="1_4" autocomplete="off"> 4
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(5, 1)">
					    <input type="radio" name="sol1" id="1_5" autocomplete="off"> 5
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(6, 1)">
					    <input type="radio" name="sol1" id="1_6" autocomplete="off"> 6
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(7, 1)">
					    <input type="radio" name="sol1" id="1_7" autocomplete="off"> 7
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(8, 1)">
					    <input type="radio" name="sol1" id="1_8" autocomplete="off"> 8
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(9, 1)">
					    <input type="radio" name="sol1" id="1_9" autocomplete="off"> 9
					  </label>
					</div>
					<p id="label1">Solution 1 Currently Selected</p>
				</div>
				<div class="col-2">
					<button type="button" class="btn btn-success btn-lg" id="mix" style="margin-top: -5%" onclick="update()"><i class="fa fa-tint" aria-hidden="true"></i> Mix!</button>
				</div>
				<div class="col-5 text-right">
					<h4>Solution #2</h4>
					<div class="btn-group" data-toggle="buttons">
					  <label class="btn btn-primary btn-lg active" onclick="sync(1, 2)">
					    <input type="radio" name="sol2" id="2_1" autocomplete="off" checked> 1
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(2, 2)">
					    <input type="radio" name="sol2" id="2_2" autocomplete="off"> 2
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(3, 2)">
					    <input type="radio" name="sol2" id="2_3" autocomplete="off"> 3
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(4, 2)">
					    <input type="radio" name="sol2" id="2_4" autocomplete="off"> 4
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(5, 2)">
					    <input type="radio" name="sol2" id="2_5" autocomplete="off"> 5
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(6, 2)">
					    <input type="radio" name="sol2" id="2_6" autocomplete="off"> 6
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(7, 2)">
					    <input type="radio" name="sol2" id="2_7" autocomplete="off"> 7
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(8, 2)">
					    <input type="radio" name="sol2" id="2_8" autocomplete="off"> 8
					  </label>
					  <label class="btn btn-primary btn-lg" onclick="sync(9, 2)">
					    <input type="radio" name="sol2" id="2_9" autocomplete="off"> 9
					  </label>
					</div>
					<p id="label2">Solution 1 Currently Selected</p>
				</div>
			</div>
			
			<div id="votelog">
			</div>
			
		</div>
	`,
	
	"Submit!":`
	<div class="container" id="wrapper">
		<h1>Submission</h1>
		<h4>Enter your information and hit submit when you're ready</h4>

  	<form id="main">
      <br>
      
      <div class="row">
            <fieldset class="form-group col-md-6">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" class="form-control" required />
            </fieldset>
            <fieldset class="form-group col-md-6">
                <label for="today">Current Date</label>
                <input type="date" id="date" name="date" class="form-control" required />
            </fieldset>
      </div>
      <div class="row">
            <fieldset class="form-group  col-md-6">
                <label for="zip">TA Name</label>
                <input type="text" id="ta" name="ta" class="form-control" required />
            </fieldset>
            <fieldset class="form-group  col-md-6">
                <label for="city">Section Number</label>
                <input type="text" id="section" name="section" class="form-control" required />
            </fieldset>
      </div>         
  		<br>
  	
		  <div class="table-responsive row">
		    <table>
		      <thead>
		        <th> NaBr                         </th>
		        <th> NaOH                         </th>
		        <th> Na<sub>2</sub>S              </th>
		        <th> Na<sub>2</sub>SO<sub>4</sub> </th>
		        <th> KClO<sub>3</sub>             </th>
		        <th> KIO<sub>3</sub>              </th>
		        <th> NH<sub>4</sub>Cl             </th>
		        <th> BaCl<sub>2</sub>             </th>
		        <th> AgNO<sub>3</sub>             </th>
		      </thead>
		      <tbody>
		        <tr>
		          <td><input type="text" class="form-control" name="NaBr" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		          <td><input type="text" class="form-control" name="NaOH" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		          <td><input type="text" class="form-control" name="Na2S" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		          <td><input type="text" class="form-control" name="Na2SO4" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		          <td><input type="text" class="form-control" name="KClO3" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		          <td><input type="text" class="form-control" name="KIO3" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		          <td><input type="text" class="form-control" name="NH4Cl" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		          <td><input type="text" class="form-control" name="BaCl2" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		          <td><input type="text" class="form-control" name="AgNO3" pattern="[1-9]{1}" placeholder="#" required title="Enter a number 1 through 9"/></td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br>
		  <div class="row">    
		  	<div class = "col-md-2"></div>
        <fieldset class="form-group col-md-8">
            <label for="comments">If you have any comments questions or concerns, please place them here!</label>
            <textarea id="comments" name="comments" class="form-control"></textarea>
        </fieldset>
        <div class = "col-md-2"></div>
      </div>
      
      <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
		    <input type="checkbox" class="custom-control-input" required >
		    <span class="custom-control-indicator"></span>
		    <span class="custom-control-description">I have neither given nor recieved unauthorized aid on this assignment</span>
		  </label>
			<br>
            
    
      <input type="submit" value="Submit!" class="btn btn-primary btn-lg"></input>
		</form>
		
	</div>
	`

	

};



var current1 = 1;
var current2 = 1;
var turn = 1;
var matrix = [];
var key = "";
var base = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SWAPS = 18;

class Reaction{
	constructor(description, abbreviation){
		this.description = description;
		this.abbreviation = abbreviation;
	}

}
	

$(function(){
	//Story Time!
	//
	//So I was originally going to make the reaction engine a proper PHP blackbox to prevent nosy students like you from simply using the magic of inspect element to determine the answers. 
	//However, fortunately for both of us, the slim build of JQuery I'm using for some reason decided to exclude AJAX requests, and I can't be bothered to use a serverside Node.js server.
	//If you're actually here, you either got here by the sheer luck of clicking around randomly in the source files, or you actually know what you're doing and found this js file despite the dumb, unintuitive structure I used to create the excessive effects.
	//I actually made this webapp version because I realized I could just decompile the old jar file they gave us and solved the lab by finding the file the answers.
	//
	//Regardless, below all of this is my own implementation of the famous Mersenne Twister, the section that generates the answers, it's not simple or pretty, but if you know what you're doing, you should be able to reverse engineer it. Alternatively, there's a way way easier solution, but you can figure that out yourself.
	//
	//Let me know if you find any bugs or just want to talk about life. My email is sg3tq@virginia.edu
	//
	//Good Luck!

	for(var n = 0; n < 9; n++){matrix[n]= new Array(9);}
	
  matrix[0][2] = new Reaction("Copious white precipitate", "CWP");
  matrix[0][3] = new Reaction("Heavy white crystalline precipitate", "WCP");
  matrix[0][4] = new Reaction("Sparse white precipitate", "SWP");
  matrix[0][5] = new Reaction("Heavy white crystalline precipitate", "WCP");
  matrix[0][8] = new Reaction("Copious white precipitate", "CWP");
  matrix[2][3] = new Reaction("Intense yellow-colored precipitate", "IYP");
  matrix[2][6] = new Reaction("Noxious smelling gas with astringent overtones", "NG");
  matrix[2][8] = new Reaction("Compact black precipitate", "BP");
  matrix[3][8] = new Reaction("Copious white precipitate", "CWP");
  matrix[4][6] = new Reaction("Astringent smelling gas", "AG");
  matrix[4][8] = new Reaction("Dirty brown globular precipitate", "DBGP");
  matrix[5][8] = new Reaction("Off-white flaky precipitate", "WFP");
  matrix[6][8] = new Reaction("Copious white precipitate", "CWP");
  matrix[7][8] = new Reaction("Copious cream-colored precipitate", "CP");

	$.get("https://ipinfo.io", function(response) {
	    key = response.ip;
	    
	    var m = new MersenneTwister();
			var ar = new Array(SWAPS);
			for(var n = 0; n < SWAPS; n++){
				var a = Math.floor(9*m.random());
				var b = Math.floor(9*m.random());
				var temp;
				temp = base[a];
				base[a] = base[b];
				base[b] = temp;
			}
			console.log(base);
	}, "jsonp");
	
  

	
});



window.onbeforeunload = function() { return "Exiting this tab will not save any of your reaction progress, are you sure you want to exit?"; };

function update(){
	var result = react(current1, current2);
	history(current1, current2, result);
	display();
	turn++;
	
}

function sync(pressed, set){
	var label = "label" + set;
	set == 1 ? current1 = pressed : current2 = pressed;
	$("#" + label).text("Solution " + pressed + " Currently Selected")
}

function react(sol1, sol2){
	console.log(sol1 + " " + sol2);
	console.log(base[sol1-1] + " " + base[sol2-1]);
	console.log(matrix[base[sol1-1]-1][base[sol2-1]-1] + " " + matrix[base[sol2-1]-1][base[sol1-1]-1]);
	return base[sol1-1] < base[sol2-1] ? matrix[base[sol1-1]-1][base[sol2-1]-1] : matrix[base[sol2-1]-1][base[sol1-1]-1];
}

function history(sol1, sol2, result){
	if(turn == 1){
		$("#votelog").append(`
			<h3 class="img--top-border">Reaction History</h3>
			<p>Scroll up and down to view all the reactions you have performed so far</p>
   
			<div style='overflow:hidden; width:100%;'>
			<div class="list-group" id="recent" style="max-height: 200px; overflow-y: scroll; width:102%"></div>
			</div>
		`);
	}
	var color = turn%2==0 ? " list-group-item-warning" : " list-group-item-info";
	console.log(result);
	var output = result != undefined ? result.description : "No Reaction";
	$("#recent").prepend('<div class="list-group-item' + color + '"><b>' + turn + '</b>: Mixing solutions ' + sol1 + " with " + sol2 + " produced: " + " <i>" + output +"</i></div>");
}

function display(){
	
}

var MersenneTwister = function(seed) {
	  if (seed == undefined) {
	    seed = new Date().getTime();
	  } 
	  /* Period parameters */  
	  this.N = 624;
	  this.M = 397;
	  this.MATRIX_A = 0x9908b0df;   /* constant vector a */
	  this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
	  this.LOWER_MASK = 0x7fffffff; /* least significant r bits */
	 
	  this.mt = new Array(this.N); /* the array for the state vector */
	  this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */
	
	  this.init_genrand(seed);
	  
	  function getSeed(){
	  	return seed;
	  }
}  
	 
/* initializes mt[N] with a seed */
MersenneTwister.prototype.init_genrand = function(s) {
  this.mt[0] = s >>> 0;
  for (this.mti=1; this.mti<this.N; this.mti++) {
      var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
   this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
  + this.mti;
      /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
      /* In the previous versions, MSBs of the seed affect   */
      /* only MSBs of the array mt[].                        */
      /* 2002/01/09 modified by Makoto Matsumoto             */
      this.mt[this.mti] >>>= 0;
      /* for >32 bit machines */
  }
};
 
/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
  var i, j, k;
  this.init_genrand(19650218);
  i=1; j=0;
  k = (this.N>key_length ? this.N : key_length);
  for (; k; k--) {
    var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
    this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
      + init_key[j] + j; /* non linear */
    this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
    i++; j++;
    if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
    if (j>=key_length) j=0;
  }
  for (k=this.N-1; k; k--) {
    var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30)
    this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
      - i; /* non linear */
    this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
    i++;
    if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
  }

  this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */ 
};
 
/* generates a random number on [0,0xffffffff]-interval */
MersenneTwister.prototype.genrand_int32 = function() {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  /* mag01[x] = x * MATRIX_A  for x=0,1 */

  if (this.mti >= this.N) { /* generate N words at one time */
    var kk;

    if (this.mti == this.N+1)   /* if init_genrand() has not been called, */
      this.init_genrand(5489); /* a default initial seed is used */

    for (kk=0;kk<this.N-this.M;kk++) {
      y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
      this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    for (;kk<this.N-1;kk++) {
      y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
      this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
    this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

    this.mti = 0;
  }

  y = this.mt[this.mti++];

  /* Tempering */
  y ^= (y >>> 11);
  y ^= (y << 7) & 0x9d2c5680;
  y ^= (y << 15) & 0xefc60000;
  y ^= (y >>> 18);

  return y >>> 0;
};
 
/* generates a random number on [0,0x7fffffff]-interval */
MersenneTwister.prototype.genrand_int31 = function() {
  return (this.genrand_int32()>>>1);
};
 
/* generates a random number on [0,1]-real-interval */
MersenneTwister.prototype.genrand_real1 = function() {
  return this.genrand_int32()*(1.0/4294967295.0); 
  /* divided by 2^32-1 */ 
};

/* generates a random number on [0,1)-real-interval */
MersenneTwister.prototype.random = function() {
  return this.genrand_int32()*(1.0/4294967296.0); 
  /* divided by 2^32 */
};
 
/* generates a random number on (0,1)-real-interval */
MersenneTwister.prototype.genrand_real3 = function() {
  return (this.genrand_int32() + 0.5)*(1.0/4294967296.0); 
  /* divided by 2^32 */
};
 
/* generates a random number on [0,1) with 53-bit resolution*/
MersenneTwister.prototype.genrand_res53 = function() { 
  var a=this.genrand_int32()>>>5, b=this.genrand_int32()>>>6; 
  return(a*67108864.0+b)*(1.0/9007199254740992.0); 
};
	
