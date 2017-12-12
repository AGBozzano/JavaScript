var Calculadora ={

	/* Declaración de variable*/
	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	signo: 0,
	controlen: 8,
	stop: 0,
	num1: 0,
	opcion: 0,
	auxnum: 0,
	estado: 0,
	auxresultado: 0,


	/*Declaracion de inicio*/
	init: (
		function(){
			this.EventosClick();
		}
	),
	/*Captando el evento click de los elementos en el dom*/
	EventosClick: function(){
		document.getElementById("0").addEventListener("click",function(){Calculadora.viewnum("0")});
		document.getElementById("1").addEventListener("click",function(){Calculadora.viewnum("1")});
		document.getElementById("2").addEventListener("click",function(){Calculadora.viewnum("2")});
		document.getElementById("3").addEventListener("click",function(){Calculadora.viewnum("3")});
		document.getElementById("4").addEventListener("click",function(){Calculadora.viewnum("4")});
		document.getElementById("5").addEventListener("click",function(){Calculadora.viewnum("5")});
		document.getElementById("6").addEventListener("click",function(){Calculadora.viewnum("6")});
		document.getElementById("7").addEventListener("click",function(){Calculadora.viewnum("7")});
		document.getElementById("8").addEventListener("click",function(){Calculadora.viewnum("8")});
		document.getElementById("9").addEventListener("click",function(){Calculadora.viewnum("9")});
		document.getElementById("on").addEventListener("click",function(){Calculadora.on()});
		document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
		document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
		document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
		document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
		document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
		document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
		document.getElementById("por").addEventListener("click",function(){Calculadora.por()});
	},

	/*Efecto de tecla presionada*/
	press: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},

	/*Control de numeros y su visualizacion*/
	viewnum: function(valor){
		this.press(valor)
		if(this.signo == 1 && this.stop == 0){
			this.controlen += 1,
			this.stop = 1;
		}
		if(this.decimal == 1  && this.stop == 0){
			this.controlen += 1,
			this.stop = 1;
		}
		if(this.pantalla.length < this.controlen){
			if(this.pantalla != "0"){
				this.pantalla += valor;
			}else if(valor != 0){
				this.pantalla = "",
				this.pantalla += valor;
			}
			this.viewdisplay();
		}
	},

		/*funcion restar*/
			menos: function(){
			    this.press("menos");
				this.num1 = Number(this.pantalla);
				console.log(this.num1),
				this.pantalla = "",
				this.opcion = 2,
				this.viewdisplay();
		},

		/*funcion multiplica*/

			por: function(){
			    this.press("por");
				this.num1 = Number(this.pantalla),
				console.log(this.num1),
				this.pantalla = "",
				this.opcion = 3,
				this.viewdisplay();

		},

		/*funcion dividir*/

			dividido: function(){
			    this.press("dividido");
				this.num1 = Number(this.pantalla),
				console.log(this.num1),
				this.pantalla = "",
				this.opcion = 4,
				this.viewdisplay();
		},

		/*funcion sumar*/

		mas: function(){
			    this.press("mas");
				this.num1 = Number(this.pantalla),
				console.log(this.num1),
				this.pantalla = "",
				this.opcion = 1,
				this.viewdisplay();
		},


	/* funcion limpieza*/
	on: function(){
		this.press("on");
		this.pantalla = "0",
		this.decimal = 0,
		this.signo = 0,
		this.stop = 0,
		this.controlen = 8,
		this.num1 = 0,
		this.estado = 0,
		this.auxnum = 0,
		this.opcion = 0,
		this.auxresultado = 0,
		this.viewdisplay();
	},

	/*imprime en pantalla*/
		viewdisplay: function(){
			if(this.pantalla.toString().length > this.controlen){
				this.pantalla = this.pantalla.toString().substring(0,8);
			}
			document.getElementById("display").innerHTML = this.pantalla;
		}
	


};

window.onload = function(){
	Calculadora.init();
	console.log('Calculadora iniciada')
}