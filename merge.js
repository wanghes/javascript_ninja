function merge(root) {
	for(var i = 0; i < arguments.length; i++) {
		for (var key in arguments[i]) {
			root[key] = arguments[i][key];
		}
	}
	return root;
}
