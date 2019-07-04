(function(){
	var results = document.querySelector('body');
	this.assert = function(value, desc) {
		var li = document.createElement("li");
		li.className = value ? "pass" : "fail";
		li.appendChild(document.createTextNode(desc));

		if (value) {
			li.style = "color:green;"
		} else {
			li.style="color:red"
		}
		var ul = document.createElement("ul");
		ul.style="list-style:none"
		ul.appendChild(li);
		results.appendChild(ul);
	}

})();

