/*Maximum number of items in the warehouse*/
var maxi = 30;

/* Array of the actual objects */
var objs = ["bulloni", "chiodi"];

/* Shows the form for the insertion of new items and autofocuses on the first field */
function showModulo() {
	document.getElementById("modulo").style.display = "block";
	document.getElementById("nome").focus();
}

/* Adds a row in the table based on the user's input, or updates the quantity. Then resets and closes the form. */
function addCose() {
	var nome = document.getElementById("nome").value.toLowerCase();
	var qta = document.getElementById("qta").valueAsNumber;
	var index = objs.indexOf(nome);
	if(index < 0) {
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
		objs.push(nome);
	}
	else {
		var table = document.getElementById("mainTable");
		var qta_old = table.getElementsByTagName("div")[index*3+5];
		var qta_new = parseInt(qta_old.innerHTML) + qta;
		qta_old.innerHTML = qta_new;
	}
	
	document.getElementById("modulo").style.display = "none";
	document.getElementById("nome").value = "";
	document.getElementById("qta").value = "";
}

/* Regulates the max number of items */
function modMax() {
	var newmax = document.getElementById("new_max").value;
	document.getElementById("old_max").textContent = newmax;
	maxi = newmax;
}