function hall(scenarioNumber){
	this.preload = function(){
		//load images...
		//load levelX_hall.json, X depending on parameter
		//game.load.json('levelHall', './levels/level2_hall.json');
	}
	
	this.create = function(){
		//var phaserJSON = game.cache.getJSON('levelHall');
		this.add.spirit(0, 0, "boss", this.npc, this);	//just a sample here. real creation depends on the level file

	}
	
	this.update = function(){
		
	}
	
	function npc()
	{
		//some conversations, which could change states in the progress of talking
		
		//at the final state of boss, go to the cyberspace to fight
		this.state.start("cyberspace", levelNumber);
	}
	
}