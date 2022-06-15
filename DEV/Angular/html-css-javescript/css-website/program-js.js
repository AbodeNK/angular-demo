   zahle1=0;
	zahle2=0;
	Rart="";
	ergebnis=0;
	
function zahle0(){
	var zahle1=0;
	document.getElementById('div_text').innerHTML += zahle1;
}	
function zahle11(){
	var zahle1=1;
	document.getElementById('div_text').innerHTML += zahle1;
}
function zahle22(){
	var zahle1=2;
	document.getElementById('div_text').innerHTML += zahle1;
}
function zahle3(){
	var zahle1=3;
	document.getElementById('div_text').innerHTML += zahle1;
}
function zahle4(){
	var zahle1=4;
	document.getElementById('div_text').innerHTML += zahle1;
}
function zahle5(){
	var zahle1=5;
	document.getElementById('div_text').innerHTML += zahle1;
}
function zahle6(){
	var zahle1=6;
	document.getElementById('div_text').innerHTML += zahle1;
}
function zahle7(){
	var zahle1=7;
	document.getElementById('div_text').innerHTML += zahle1;
}
function zahle8(){
	var zahle1=8;
	document.getElementById('div_text').innerHTML += zahle1;
}
function zahle9(){
	var zahle1=9;
	document.getElementById('div_text').innerHTML += zahle1;
	return zahle1;
}
function Rart1(){
	var Rart="+";
	document.getElementById('div_text').innerHTML += Rart;
	return Rart;
}
function Rart2(){
	var Rart="-";
	document.getElementById('div_text').innerHTML += Rart;
	return Rart;
}
function Rart3(){
	var Rart="*";
	document.getElementById('div_text').innerHTML += Rart;
	return Rart;
}
function Rart4(){
	var Rart="/";
	document.getElementById('div_text').innerHTML += Rart;
	return Rart;
}

function zahle(){
	zahlex=prompt("place  number 1")
	zahley=prompt("place  number 2")
	Rart=prompt("place  mathematical calculations")
    zahle1=zahlex-0;
	zahle2=zahley-0;
}

	
function Tr(){
	
    if(Rart=="+"){
		ergebnis=(zahle1+zahle2);
		
	} 	
	 if(Rart=="-"){
		ergebnis=(zahle1-zahle2);
		
	}
	 if(Rart=="*"){
		ergebnis=(zahle1*zahle2);
		
	}
	 if(Rart=="/"){
		ergebnis= (zahle1/zahle2);
		
	}
	 if(Rart=="="){
		ergebnis;
		return ergebnis;
	}

	return ergebnis;
}






function berechcnen()
{
	var toxes = document.getElementById('div_text').innerHTML;
	var zahl1  = toxes.substring(0,toxes.indexOf("+"));
	var zahl2  = toxes.substring(toxes.indexOf("+")+1);
	return parseInt(zahl1) + parseInt(zahl2);
}



function msg(){
	document.getElementById('div_text').innerHTML = berechcnen();
	
}	