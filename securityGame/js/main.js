//var startMenu = require("./js/states/startMenu");
//var hall = require("./js/states/tutorial");
//var hall = require("./js/states/credits");
//var levelSelection = require("./js/states/levelSelection");
//var hall = require("./js/states/hall");
//var cyberspace = require("./js/states/cyberspace");
//var hall = require("./js/states/review");

var game = new Phaser.Game(600, 400, Phaser.AUTO, '');

var main = {
this.preload = function(){
	game.load.script('startMenu',  './js/states/levelSelection');
	//window.game.state.add('startMenu', require('./js/states/startMenu'));
	game.state.add("startMenu", startMenu);
	game.state.add("tutorial", tutorial);
	game.state.add("credits", credits);
	game.state.add("levelSelection", levelSelection);
	game.state.add("hall", hall);
	game.state.add("cyberspace", cyberspace);
	game.state.add("review", review);

	game.state.start("startMenu");
	}

}