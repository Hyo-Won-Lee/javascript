window.onload=function(){
	var myPhotos=new Array("slidesb/img/a.jpg",
		"slidesb/img/b.jpg","slidesb/img/c.jpg");
	var index=0;
	document.getElementById("btnPrev").onclick=function(){
		if(index==0){
			index=myPhotos.length;
		}
		document.getElementById("imgPlaceHolder").src=myPhotos[--index];
		return false;
	}
	document.getElementById("btnNext").onclick=function(){
		if(++index==myPhotos.length){
			index=0;
		}
		document.getElementById("imgPlaceHolder").src=myPhotos[index];
	}
	
}