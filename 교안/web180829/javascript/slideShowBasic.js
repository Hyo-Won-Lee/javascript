window.onload=function(){
    var myPhotos=new Array('img/1.jpg','img/2.jpg','img/3.jpg');
    var index=0;

    document.getElementById("btnPrev").onclick=function(){
        if(--index<0){
            index=myPhotos.length-1;
        }
        document.getElementById("imgPlaceHolder").src=myPhotos[index];
    }

    document.getElementById("btnNext").onclick=function(){
        index=++index%myPhotos.length;
        document.getElementById("imgPlaceHolder").src=myPhotos[index];
        
    }
}