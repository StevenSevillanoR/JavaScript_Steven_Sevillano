var botones = document.querySelectorAll("[class^=tecla] img");
alert(botones[0]);

var pantalla = document.getElementById("display");

var on = document.getElementById("on");

var signo = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");

var mas = document.getElementById("mas");
var menos = document.getElementById("menos");
var por = document.getElementById("por");
var dividido = document.getElementById("dividido");

var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");

function presionadas(element){
	element.setAttribute("style","transform:scale(0.9,0.9)");
	//alert("presiono")
	//document.getElementById("on").style="height:10px";
	//document.getElementById("on").style="width:10px";	
	//botones.style.backgroungColor="black";
}

function sueltas(element){
	element.setAttribute("style","transform:scale(1,1)");
	//alert("solto")
	//document.getElementById("on").style="width:22%";
	//document.getElementById("on").style="height:62.91px";
}

function presionar(element){
	element.addEventListener("mousedown", function(){
	presionadas(element);
	});
	element.addEventListener("mouseup", function(){
	sueltas(element);
	});	
}

function calculadora(element){
	presionar(element);
	mostrar(element);
	document.getElementById("display").innerHTML=;
}

function mostrar(element){
	
}

botones[0].onmouseup=function(){presionar(botones[0])};
botones[1].onmousedown=function(){calculadora(botones[1])};
botones[2].onmousedown=function(){presionar(botones[2])};
botones[3].onmousedown=function(){presionar(botones[3])};
botones[4].onmousedown=function(){presionar(botones[4])};
botones[5].onmousedown=function(){presionar(botones[5])};
botones[6].onmousedown=function(){presionar(botones[6])};
botones[7].onmousedown=function(){presionar(botones[7])};
botones[8].onmousedown=function(){presionar(botones[8])};
botones[9].onmousedown=function(){presionar(botones[9])};
botones[10].onmousedown=function(){presionar(botones[10])};
botones[11].onmousedown=function(){presionar(botones[11])};
botones[12].onmousedown=function(){presionar(botones[12])};
botones[13].onmousedown=function(){presionar(botones[13])};
botones[14].onmousedown=function(){presionar(botones[14])};
botones[15].onmouseup=function(){presionar(botones[15])};

