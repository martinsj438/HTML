var x = 1;

function click(){
	if(x==1){
	document.getElementById("menu").style.display="block";
	x = 0;
	}else if(x==0){
	document.getElementById("menu").style.display="none";
	x = 0;
	}
}	