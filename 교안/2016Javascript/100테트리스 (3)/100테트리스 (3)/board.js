/*
 TotalX,TotalY 를 넣으면 크기만큼 테이블을 만들어리턴해주는
 함수를 구현
 <table id=TTable>
 <tr><td id='x0y0' width='30' height='30'/><td id='x1y0' width='30' height='30'/></tr>
  <tr><td id='x0y1' width='30' height='30'/><td id='x1y1' width='30' height='30'/></tr>
 </table>
 */

 //상수
 var Board={};
 Board.totalX=30;
 Board.totalY=30;
 Board.blockWidth=15;
 Board.blockHeight=15;
 Board.madeBoard=function(){
	var htmlOutput="";
	htmlOutput+="<table id='TTable' border='1'>"			
	for(var i=0;i<this.totalY;i++){
	 	 htmlOutput+="<tr>";
		 for(var j=0;j<this.totalX;j++){
			htmlOutput+="<td id='x"+j+"y"+i+"' width='"+this.blockWidth+"' height='"+this.blockHeight+"'/>";
		 }
		htmlOutput+="</tr>";
	}
	htmlOutput+="</table>"			
	return htmlOutput;
 };
Board.changeColor=function(x,y,color){
	document.getElementById("x"+x+"y"+y+"").bgColor=color;
};

Board.changeBlockColor=function(x,y,block){
	if(block==Block.EMPTY){
		this.changeColor(x,y,'white');
	}else if(block==Block.BLOCK){
		this.changeColor(x,y,'red');
	}else if(block==Block.WALL){
		this.changeColor(x,y,'blue');
	}
};