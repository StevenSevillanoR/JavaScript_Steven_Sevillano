var botones = document.querySelectorAll("[class^=tecla] img");

botones[0].onmousedown=function(){calculadora(botones[0])};
botones[1].onmousedown=function(){calculadora(botones[1])};
botones[2].onmousedown=function(){calculadora(botones[2])};
botones[3].onmousedown=function(){calculadora(botones[3])};
botones[4].onmousedown=function(){calculadora(botones[4])};
botones[5].onmousedown=function(){calculadora(botones[5])};
botones[6].onmousedown=function(){calculadora(botones[6])};
botones[7].onmousedown=function(){calculadora(botones[7])};
botones[8].onmousedown=function(){calculadora(botones[8])};
botones[9].onmousedown=function(){calculadora(botones[9])};
botones[10].onmousedown=function(){calculadora(botones[10])};
botones[11].onmousedown=function(){calculadora(botones[11])};
botones[12].onmousedown=function(){calculadora(botones[12])};
botones[13].onmousedown=function(){calculadora(botones[13])};
botones[14].onmousedown=function(){calculadora(botones[14])};
botones[15].onmousedown=function(){calculadora(botones[15])};
botones[16].onmousedown=function(){calculadora(botones[16])};
botones[17].onmousedown=function(){calculadora(botones[17])};
botones[18].onmousedown=function(){calculadora(botones[18])};

var pantalla = document.getElementById("display");

//alert(pantalla.innerHTML);

var coma=0; //Estado de la coma
var oper="no";
var num1;
var num2;
var num3=0;
var on = botones[0].value = "0";
var suma = botones[18].value = "+";
var resta = botones[11].value = "-";
var multi = botones[7].value = "*";
var division = botones[3].value = "/";
var cero = botones[15].value = "0";
var uno = botones[12].value = "1";
var dos = botones[13].value = "2";
var tres = botones[14].value = "3";
var cuatro = botones[8].value= "4";
var cinco = botones[9].value= "5";
var seis = botones[10].value = "6";
var siete = botones[4].value = "7";
var ocho = botones[5].value = "8";
var nueve = botones[6].value = "9";
var punto = botones[16].value = ".";
var ig = botones[17].value = "";
var menos = botones[1].value = "";
var raiz = botones[2].value = "";

//alert(num1);
//alert(num3);

function presionadas(element){
	element.setAttribute("style","transform:scale(0.9,0.9)");
}

function sueltas(element){
	element.setAttribute("style","transform:scale(1,1)");	
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
	operar(element);
}

function operar(element){
	if(element===botones[18] || element===botones[3] || element===botones[7] || element===botones[11]){
		operacion(element)
	}
	
	if(element===botones[17]){
		igual(element);
	}

	if(element===botones[1] && pantalla.innerHTML.charAt(0)!="-" && pantalla.innerHTML.charAt(0)!="0" && pantalla.innerHTML.charAt(0)!=""){
		pantalla.innerHTML = "-"+pantalla.innerHTML;
	}else if(element===botones[1] && pantalla.innerHTML.charAt(0)=="-"){
		pantalla.innerHTML = pantalla.innerHTML.substr(1);
	}else if(element===botones[1] && pantalla.innerHTML.charAt(0)==""){
		pantalla.innerHTML="0";
	}

	if(element===botones[2] && pantalla.innerHTML!==""){
		num1 = pantalla.innerHTML;
		num1=eval(num1);
		resultado = Math.sqrt(num1);
		if(resultado.toString().length>8){
			resultado = resultado.toPrecision(8);
			pantalla.innerHTML=resultado;
			//alert(resultado);
			num1 = resultado;
		}else{
			pantalla.innerHTML=resultado;
			num1 = resultado;
			//alert(resultado);
		}
	}else if(element===botones[2] && pantalla.innerHTML===""){
		pantalla.innerHTML = "0";
	}
}

function mostrar(element){

	//Poner el cero si no se ingresa otro numero o quitarlo si se ingresa otro numero
	for(var i=0; i<botones.length;i++){
			
		if(pantalla.innerHTML==="0" && element===botones[i]){
			pantalla.innerHTML=botones[i].value;
			pantalla.innerHTML=pantalla.innerHTML.substr(1);
			coma=0;
		}else if(pantalla.innerHTML==="0" && element===botones[15]){
			pantalla.innerHTML=botones[15].value;
			//alert("pongo cero" + pantalla.innerHTML);
			coma=0;
		}
		else if(pantalla.innerHTML==="0" && element===botones[16]){
			pantalla.innerHTML="0.";
			coma=1;
		}/*else if(pantalla.innerHTML==="0" && oper!="no"){
			alert("que paso");
			pantalla.innerHTML="0";
			coma=0;
		}*/
	}

	//Escribir cualquier numero en la pantalla
	if(pantalla.innerHTML.length<8){
		if(element===botones[16] && coma===0){
				pantalla.innerHTML+=element.value;
				if(oper=="no"){
					num1 = pantalla.innerHTML;
				}else if(oper!="no" && num1==0){
					//alert("ingrese1")
					num1 = 0+element.value;
				}else{
					//alert("entre");
					num2 = pantalla.innerHTML;
				}
				coma=1;
		}else{
			if(element!==botones[16]){
				pantalla.innerHTML+=element.value;
				if(oper=="no"){
					num1 = pantalla.innerHTML;
				}else if(oper!="no" && num1==0){
					//alert("ingrese2")
					num1 = 0+element.value;
				}else{
					if(num2=="0" || num2==""){
						//alert("estoy1");
						num2=0;
					}else{
						//alert("estoy2");
						num2 = pantalla.innerHTML;
						//alert(num2);	
					}
					
				}
			}
		}
	}

	//Mostrar cero si se presiona ON/C
	if(element===botones[0]){
		num1=0;
		num3=0;
		pantalla.innerHTML=num1;		
		//alert(num3);
	}/*else if(element===botones[0] && oper=="/"){

	}*/

}

function operacion(element){
	//alert(num1);
	//alert(num3);
	//alert(num2);
	//Evaluando si se ingresan 2 o más signos de seguido
	if(isNaN(pantalla.innerHTML.substr(-2, 1)) && num3!="0"){
		num3=num3.substr(0, [num3.length-1]);
		//alert("yupi")
		//alert(num3);
		//alert(pantalla.innerHTML);
		num3=num3+pantalla.innerHTML;
		num1=num3;
		//alert("num1: "+num1);
	}else if(num1==="0" && pantalla.innerHTML===""){
		//alert("ajaja");
		num1 = 0+element.value;
		//alert(num1);
	}else{
		num1 = pantalla.innerHTML;
		//alert("num1: "+num1);	
	}
	num3 = num1;
	//alert("num1: " +num1+" num2: "+num2+" num3: "+num3);
	oper = element.value;
	pantalla.innerHTML = "";
	//igual();
	//alert(num1);
	coma=0;
}

function igual(element){
	var resultado;

	if(oper==="no"){
		pantalla.innerHTML = num1;	
	}else if(oper!="no"){
		//alert(num1);
		num2 = pantalla.innerHTML;
		//alert("num2: "+num2);
		//alert(typeof(num1));
		if(isNaN(num1.charAt(0))){
			num1 = 0 + num1;
			//alert(num1);
		}

		if(isNaN(num1.charAt(0)) && pantalla.innerHTML=="0"){
			var res = 0+oper+0;
			resultado = res;
			//alert("es 0(oper)0 "+res);
		}else{
			if(isNaN(num1.substr(-1))){
				num1=num1.substr(0, [num1.length-1]);
				//alert(num1);	
			}
			var res = num1+oper+num2;
			//alert(num1+oper+num2);
			resultado = eval(res);
			//alert("no es 0/0 "+res);
		}		
				
		if(resultado.toString().length>8){
			//alert(resultado);
			resultado = resultado.toPrecision(8);
			//alert("uno "+resultado);
			pantalla.innerHTML = resultado;

		}else{
			pantalla.innerHTML = resultado;
			//alert(resultado);
		}
	}
}




