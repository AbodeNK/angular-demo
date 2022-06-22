function welcome(){
	var name = prompt('Enter your name')
	document.getElementById('div_text').innerHTML = "welcome  "+name;
	document.getElementById('welcome').style.display="block";
}


	function msg_close(){
		document.getElementById('welcome').style.display="none";
}