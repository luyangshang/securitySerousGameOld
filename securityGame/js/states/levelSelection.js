function scenarioSelection(){
	this.preload = function(){
		//load images...
	}
	
	this.create = function(){
		this.add.button(0, 0, "selectLevel", this.level1, this);	//need to pass a parameter to distinguish among levels
		this.add.button(0, 5, "selectLevel", this.level2, this);		//need to pass a parameter to distinguish among levels
	}
	
	this.update = function(){
		
	}
	
	function selectLevel(levelNumber)
	{
		this.state.start("hall",levelNumber);
	}

}