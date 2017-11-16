function startMenu(){
	this.preload = function(){
		//load images...
		game.load.image("startMenu", "./assers/images/arrow.png");
	}
	
	this.create = function(){
		this.add.button(0, 0, "startMenu", this.start, this);
	}
	
	this.update = function(){
		
	}
	
	function start()	//click on start game
	{
		this.state.start("scenarioSelction");
	}
}