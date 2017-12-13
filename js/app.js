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
			this.controlen += 1;
			this.stop = 1;
		}
		if(this.decimal == 1  && this.stop == 0){
			this.controlen += 1;
			this.stop = 1;
		}
		if(this.pantalla.length < this.controlen){
			if(this.pantalla != "0"){
				this.pantalla += valor;
			}else if(valor != 0){
				this.pantalla = "";
				this.pantalla += valor;
			}
			this.mostrar();
		}
	},

	/*funcion sumar*/
		mas: function(){		    
			this.press("mas");
			var num_p=Number(this.pantalla);
			/*Este if comprueba que al tocar 2 veces una operacion no se pierda el numero de pantalla*/
		    if(num_p!=0){
		    	this.num1 = Number(this.pantalla);	
		    }else{
		    	this.num1=this.auxnum;
		    }
			this.auxnum=this.num1;
			this.pantalla = "";
			this.opcion = 1;
			this.decimal= 0;
			this.signo = 0;
			this.estado = 0;
			this.mostrar();
		},
	/*funcion restar*/
		menos: function(){
			this.press("menos");
			var num_p=Number(this.pantalla);
		    if(num_p!=0){
		    	this.num1 = Number(this.pantalla);	
		    }else{
		    	this.num1=this.auxnum;
		    }
			this.auxnum=this.num1;
			this.pantalla = "";
			this.opcion = 2;
			this.decimal= 0;
			this.signo = 0;
			this.estado = 0;
			this.mostrar();
		},
	/*funcion multiplica*/

		por: function(){
			this.press("por");
			var num_p = Number(this.pantalla);
		    if(num_p == 0){
		    	this.num1=this.auxnum;
		    }else{
		    	this.num1 = Number(this.pantalla);	
		    }
			this.auxnum=this.num1;	
			this.pantalla = "";
			this.opcion = 3;
			this.decimal= 0;
			this.signo = 0;
			this.estado = 0;
			this.mostrar();
		},
	/*funcion dividir*/

		dividido: function(){
			this.press("dividido");
			var num_p=Number(this.pantalla);
		    if(num_p!=0){
		    	this.num1 = Number(this.pantalla);	
		    }else{
		    	this.num1=this.auxnum;
		    }
			this.auxnum=this.num1;
			this.pantalla = "";
			this.opcion = 4;
			this.decimal= 0;
			this.signo = 0;
			this.estado = 0;
			this.mostrar();
		},

	/*función igual*/
	igual: function(){

		this.press("igual");
		switch(this.opcion){
			case 1:
				if(this.estado==0){
					this.auxnum = Number(this.pantalla);
					this.pantalla = this.num1 + Number(this.pantalla);
					this.estado = 1;
					this.num1 = 0;
				}else{
					this.pantalla = Number(this.pantalla)+this.auxnum;
				}
				break;
			case 2:
				if(this.estado == 0){
					this.auxnum = Number(this.pantalla);
					this.pantalla = this.num1 - Number(this.pantalla);
					this.estado = 1;
					this.num1 = 0;
				}else{
					this.pantalla = Number(this.pantalla)-this.auxnum;
				}
				break;
			case 3:
				if(this.estado == 0){
					this.auxnum = Number(this.pantalla);
					this.pantalla = this.num1 * Number(this.pantalla);
					this.estado = 1;
					this.num1 = 0;
				}else{
					this.pantalla = Number(this.pantalla)*this.auxnum;
				}
				break;
			case 4:
				if(this.estado == 0){
					this.auxnum = Number(this.pantalla);
					this.pantalla = this.num1 / Number(this.pantalla);
					this.estado = 1;
					this.num1 = 0;
				}else{
					this.pantalla = Number(this.pantalla)/this.auxnum;
				}
				break;
			default:
				break;
		}
		this.mostrar();
	},
	/* función estado negativo o positivo*/
	sign: function(){
		this.press("sign");
		if(this.pantalla != 0){
			if(this.signo == 0){
				this.pantalla = "-" + this.pantalla;
				this.signo = 1;
			}else{
				this.pantalla = this.pantalla.slice(1);
				this.signo = 0;
			}
		}
		this.mostrar();
	},
	/*función decimal*/
	punto: function(){
		this.press("punto");
		if(this.decimal == 0){
			this.pantalla += ".";
		}
		this.decimal = 1;
		this.mostrar();
	},
	/* funcion limpieza*/
	on: function(){
		this.press("on");
		this.pantalla = "0";
		this.decimal = 0;
		this.signo = 0;
		this.stop = 0;
		this.controlen = 8;
		this.num1 = 0;
		this.estado = 0;
		this.auxnum = 0;
		this.opcion = 0;
		this.auxresultado = 0;
		this.mostrar();
	},

	/*imprime en pantalla*/
		mostrar: function(){

			var res= this.pantalla;
			if (res > 99999999 || res.length>this.controlen){
				res = 'Off Limits';
			}else if(res.toString().indexOf('.') != -1 && res.toString().indexOf('-') != -1){
				res = res.toString().slice(0,10);
			}else if(res.toString().indexOf('.') != -1 || res.toString().indexOf('-') != -1){
				res = res.toString().slice(0,9);
			}else{
				res = res.toString().slice(0,8);
			}

			document.getElementById("display").innerHTML = res;
		}
	
};

window.onload = function(){
	Calculadora.init();
}