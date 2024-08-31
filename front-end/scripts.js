function post(){
	let xhttp = new XMLHttpRequest();
	
	xhttp.open("POST", "http://localhost:8091/cliente", true);
	xhttp.setRequestHeader("Accept", "application/json");
	xhttp.setRequestHeader("Content-Type", "application/json");
	
	let cliente = {
		nome: document.getElementById("nome").value,
		sobrenome: document.getElementById("sobrenome").value,
		documento: document.getElementById("documento").value
	};
	
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == "200"){
			alert("Cliente cadastrado com sucesso!");
		} else {
			alert(xhttp.responseText);
		}		
	}
	
	xhttp.send(JSON.stringify(cliente));
}






