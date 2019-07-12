var x = 1;

function MudaImagem(){
	ApagaDivs();
	ApagaBola();
	if(x<5){
		document.getElementById('d'+x).style.display = "block";
		document.getElementById('b'+x).style.background = "blue";
		x++;
	}else{
		document.getElementById('d1').style.display = "block";
		document.getElementById('b1').style.background = "blue";
		x = 2;
	}
}

function ApagaDivs(){	
	document.getElementById('d1').style.display = "none";
	document.getElementById('d2').style.display = "none";
	document.getElementById('d3').style.display = "none";
	document.getElementById('d4').style.display = "none";
}

function ApagaBola(){	
	document.getElementById('b1').style.background = "#ccc";
	document.getElementById('b2').style.background = "#ccc";
	document.getElementById('b3').style.background = "#ccc";
	document.getElementById('b4').style.background = "#ccc";
}

function Clique1(){
	document.getElementById('d1').style.display = "block";
	document.getElementById('d2').style.display = "none";
	document.getElementById('d3').style.display = "none";
	document.getElementById('d4').style.display = "none";
	document.getElementById('b1').style.background = "#blue";
	document.getElementById('b2').style.background = "#ccc";
	document.getElementById('b3').style.background = "#ccc";
	document.getElementById('b4').style.background = "#ccc";
	x = 2;
}

function Clique2(){
	document.getElementById('d1').style.display = "none";
	document.getElementById('d2').style.display = "block";
	document.getElementById('d3').style.display = "none";
	document.getElementById('d4').style.display = "none";
	document.getElementById('b1').style.background = "#ccc";
	document.getElementById('b2').style.background = "#blue";
	document.getElementById('b3').style.background = "#ccc";
	document.getElementById('b4').style.background = "#ccc";
	x = 3;
}

function Clique3(){
	document.getElementById('d1').style.display = "none";
	document.getElementById('d2').style.display = "none";
	document.getElementById('d3').style.display = "block";
	document.getElementById('d4').style.display = "none";
	document.getElementById('b1').style.background = "#ccc";
	document.getElementById('b2').style.background = "#ccc";
	document.getElementById('b3').style.background = "#blue";
	document.getElementById('b4').style.background = "#ccc";
	x = 4;
}

function Clique4(){
	document.getElementById('d1').style.display = "none";
	document.getElementById('d2').style.display = "none";
	document.getElementById('d3').style.display = "none";
	document.getElementById('d4').style.display = "block";
	document.getElementById('b1').style.background = "#ccc";
	document.getElementById('b2').style.background = "#ccc";
	document.getElementById('b3').style.background = "#ccc";
	document.getElementById('b4').style.background = "#blue";
	x = 1;
}
