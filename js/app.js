var Calculadora ={

	/* Declaración de variable*/

	pantalla: document.getElementById("display").innerHTML,
	ids: {'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','.':'punto',
	's':'sign','+':'mas','-':'menos','*':'por','/':'dividido','r':'raiz','Enter':'igual','Escape':'on'},

	init: (
		function(){
			this.EventosClick();
			document.onmousedown = this.manejadorMouseDown;
			document.onmouseup = this.manejadorMouseUp;
			document.onkeydown = this.manejadorKeyDown;
			document.onkeyup = this.manejadorKeyUp;
		}
	),

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
	viewnum: function(x){
		console.log(x);
	},
	manejadorMouseDown: function(e){
		if(e.target.classList[0] == 'tecla'){
			document.getElementById(e.target.id).style.transform = 'scale(0.9,0.9)';
			setTimeout(function() {document.getElementById(e.target.id).style.transform="scale(1)";}, 1000);
		}
	},
	manejadorMouseUp: function(e){
		document.getElementById(e.target.id).style.transform = 'scale(1)';
	},

	manejadorKeyDown: function(e) {
		console.log(e);
		document.getElementById(Calculadora.ids[e.key]).style.transform = 'scale(0.9,0.9)';
		setTimeout(function() {document.getElementById(Calculadora.ids[e.key]).style.transform="scale(1)";}, 200);
	},

	manejadorKeyUp: function(e) {
		document.getElementById(Calculadora.keys[e.key]).style.transform = 'scale(1)';
	},
};

window.onload = function(){

	Calculadora.init();

	console.log('Calculadora inicianda')

}