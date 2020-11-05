//Block.EMPTY=0;
//Block.BLOCK=1;
//Block.WALL=2;
//Block.NOBLOCK==99;

var aBlock={};
aBlock.totalX=13;
aBlock.totalY=25;
aBlock.displayX=5;
aBlock.displayY=2;

aBlock.nowX=0;
aBlock.nowY=0;
aBlock.nowBlock=Block.NOBLOCK;
aBlock.nowRotate=0;
aBlock.isMove=function (x,y){
	
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
				if(Block.BlockType[this.nowBlock][this.nowRotate][i][j]!=0&&this.array[x+i][y+j]!=0){
			return false;

			}
		}
	}
	
    return true;
	
	
	
}
aBlock.newArrayBlock=function(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
				if(Block.BlockType[this.nowBlock][this.nowRotate][i][j]!=0){
					this.array[this.nowX+i][this.nowY+j]=1;

			}
		}
	}
	
    
	
}
aBlock.newMadeBlock=function(){
	this.nowX=Math.round(this.totalX/2)-2;
	this.nowY=1;
	this.nowBlock=Math.round(Math.random()*6)//0.95*6 0,6 조금적게
}
aBlock.nowDrowBlock=function(){
	for(var i=0;i<4;i++){
	for(var j=0;j<4;j++){
		if(Block.BlockType[this.nowBlock][this.nowRotate][i][j]==0){
			
					//Board.changeColor(this.displayX+i+this.nowX,this.displayY+j+this.nowY,"white");
		}else if(Block.BlockType[this.nowBlock][this.nowRotate][i][j]==1){

					Board.changeColor(this.displayX+i+this.nowX,this.displayY+j+this.nowY,"red");
		}
	}
	}
}
aBlock.nowDeleteBlock=function(){
	for(var i=0;i<4;i++){
	for(var j=0;j<4;j++){
		if(Block.BlockType[this.nowBlock][this.nowRotate][i][j]==0){
			
					//Board.changeColor(this.displayX+i+this.nowX,this.displayY+j+this.nowY,"white");
		}else if(Block.BlockType[this.nowBlock][this.nowRotate][i][j]==1){

					Board.changeColor(this.displayX+i+this.nowX,this.displayY+j+this.nowY,"white");
		}
	}
	}
}

aBlock.array=new Array();
aBlock.arrayInit=function(){

	for(var i=0;i<this.totalX;i++){
			aBlock.array.push(new Array());
		for(var j=0;j<this.totalY;j++){
			aBlock.array[i].push(new Array());
		}
	}

	for(var i=0;i<this.totalX;i++){
			for(var j=0;j<this.totalY;j++){
				
					this.array[i][j]=Block.EMPTY;
					

				if(i==0||j==0||i==this.totalX-1||j==this.totalY-1){
					this.array[i][j]=Block.WALL;
				}

			}
	}

	for(var i=0;i<this.totalX;i++){
			for(var j=0;j<this.totalY;j++){
				
Board.changeBlockColor(this.displayX+i,this.displayY+j,this.array[i][j]);

			}
	}
	






};