function A(){
	document.getElementById('endereco').disabled = true;
	document.getElementById('cidade').disabled = true;
	document.getElementById('bairro').disabled = true;
}

function B(){
	document.getElementById('endereco').disabled = false;
	document.getElementById('cidade').disabled = false;
	document.getElementById('bairro').disabled = true;
}

function C(){
	document.getElementById('endereco').disabled = true;
	document.getElementById('cidade').disabled = true;
	document.getElementById('bairro').disabled = true;
}
function D(){
	document.getElementById('nome').disabled = true;
	document.getElementById('endereco').disabled = false;
	document.getElementById('cidade').disabled = false;
	document.getElementById('bairro').disabled = false;
}

function verifica(){
	email = document.getElementById('email').value;
	nome = document.getElementById('nome').value;
	if((email=="")||(Nome=="")){
		alert("campo(s) vazio(s)!!!");
	}else{
		if((email=="j@gmail.com")&&(nome=="jeff")){
			window.location.href = "aula110.html";
		}else{
			alert("Usuário e/ou senha Inválido(s)!!!");
			LimparCampos();
		}
	}				
}