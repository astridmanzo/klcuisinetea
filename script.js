$( document ).ready(function() {
	var text = ["ANYWHERE", "TO THE TOP"];
	var counter = 0;
	var elem = document.getElementById("italic-hero");
	setInterval(change, 3000);

	function change() {
	  elem.innerHTML = text[counter];
	  counter++;
	  if (counter >= text.length) {
	    counter = 0;
	  }
	}

});