var Fred = function(){
  this.$node = $('<img class="playerOne" src="src/images/fredboxer.gif"/>');
  this.name = ".playerOne";
  this.image = "src/images/fredboxer.gif";
  this.attackImage = "src/images/fredattack.gif";
  this.victoryImage = "src/images/victoryfred.gif"; 
  this.tko = "src/images/fredhurt.gif";
  this.exists = "Fred"

  PlayerOne.call(this);

};

Fred.prototype = Object.create(PlayerOne.prototype);
Fred.prototype.identity = "PlayerOne"

var Allen = function(){
  this.$node = $('<img class="playerTwo flipped" src="src/images/allenboxer.gif"/>');
  this.name = ".playerTwo";
  this.image = 'src/images/allenboxer.gif';
  this.attackImage = "src/images/allenattack.gif";
  this.victoryImage = "src/images/victoryallen.gif"; 
  this.tko = "src/images/allenhurt.gif";
  this.exists = 'Allen'
  PlayerTwo.call(this);



};


Allen.prototype = Object.create(PlayerTwo.prototype);
Allen.prototype.identity = "PlayerTwo";



