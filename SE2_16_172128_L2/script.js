var maxi = 30;

function showModulo() {
	document.getElementById("modulo").style.display = "block";
	document.getElementById("nome").focus();
}

function modMax() {
	var newmax = document.getElementById("new_max").value;
	document.getElementById("old_max").textContent = newmax;
	maxi = newmax;
}