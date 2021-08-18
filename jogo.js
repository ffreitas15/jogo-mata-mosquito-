var altura = 0
var largura = 0	
var vidas = 1
var tempo = 5
function ajudaTamanhoPalcoJogo(){	
	 altura = window.innerHeight
	 largura = window.innerWidth	

	console.log(largura,altura)
}


ajudaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

tempo -= 1

if (tempo<0) {
	clearInterval(cronometro)
	clearInterval(criaMosca)
	window.location.href = 'vitoria.html'
}else{

document.getElementById('cronometro').innerHTML= tempo

}

}, 1000)


function posicaoRandomica(){

	if(document.getElementById('mosca')) {
			document.getElementById('mosca').remove()


			if (vidas>3) {

				window.location.href = 'fim_de_jogo.html'
			}
			else{
			document.getElementById('v'+ vidas).src="coracao_vazio.png"
			vidas ++
			}
	}

	var posicaoX = Math.floor(Math.random()*largura) -90

	var posicaoY = Math.floor(Math.random()*altura) -90
	


	console.log (posicaoX,posicaoY)

	var mosca = document.createElement("img")
	mosca.src = "mosca.png"
	mosca.className = tamanhoAleatorio()
	mosca.style.left = posicaoX + "px"
	mosca.style.top = posicaoY + "px"
	mosca.style.position ="absolute"
	mosca.id = 'mosca'
	mosca.onclick = function(){
		this.remove()
	}

	

	document.body.appendChild(mosca)

	console.log(ladoAleatorio())

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random()*3)
	switch(classe){
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'

		case 2:
			return 'mosca3'
	}
}



