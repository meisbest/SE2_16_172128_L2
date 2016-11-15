/*Maximum number of items in the warehouse*/
var maxi = 30;

/* Shows the form for the insertion of new items and autofocuses on the first field */
function showModulo() {
	document.getElementById("modulo").style.display = "block";
	document.getElementById("nome").focus();
}

/* Adds a row in the table based on the user's input */
function addCose() {
	var nome = document.getElementById("nome").value.toLowerCase();
	var qta = document.getElementById("qta").valueAsNumber;
	var row = document.createElement("DIV");
	var col1 = document.createElement("DIV");
	var col2 = document.createElement("DIV");
	var text1 = document.createTextNode(nome);
	var text2 = document.createTextNode(qta);
	col1.appendChild(text1);
	col2.appendChild(text2);
	row.appendChild(col1);
	row.appendChild(col2);
	document.getElementById("mainTable").appendChild(row);
}

/* Regulates the max number of items */
function modMax() {
	var newmax = document.getElementById("new_max").value;
	document.getElementById("old_max").textContent = newmax;
	maxi = newmax;
}