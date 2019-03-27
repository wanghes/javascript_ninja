/***

由于 arguments 是类数组对象 所以需要变为真正的数组
***/
function multiMax_error(multi) {
	return multi * Math.max.apply(Math, arguments.slice(1))
}

function multiMax(multi) {
	var slice = Array.prototype.slice;
	// console.log(slice.call(arguments, 1))
	return multi * Math.max.apply(Math, slice.call(arguments, 1));
}