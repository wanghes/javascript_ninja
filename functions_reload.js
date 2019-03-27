/***
用js实现 类似java c++ 之类的 函数重载的功能
函数重载就是说，基于传入的参数，调用带有不同的参数的函数
一种是根据传入的参数类型执行不同的操作
二种是通过某些参数是否存在进行判断
第三种根据传入的个数进行判断
***/

var ninja = {
	whatever: function() {
		switch (arguments.length) {
			case 0:
				console.log(0);
				break;
			case 1:
				console.log(1);
				break;
			case 2:
				console.log(2);
				break;
			default:
				console.log('no know');
		}
	}
}


/***
更优雅的实现方式，
addMethod(nijia, 'whatever', function() {// do something })
addMethod(nijia, 'whatever', function(a) {// do something else })
addMethod(nijia, 'whatever', function(a,b) {// yet something else })
***/
function addMethod(object, name, fn) {
	var old = object[name];
	object[name] = function() {
		if (fn.length == arguments.length) {
			return fn.apply(this, arguments);
		} else if (typeof  old == 'function'){
			return old.apply(this, arguments);
		}
	}
}

var ninja_new = {
	values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
};

addMethod(ninja_new, "find", function() {
	return this.values;
});

addMethod(ninja_new, 'find', function(name) {
	var ret = [];
	for(var i=0; i<this.values.length; i++) {
		if (this.values[i].indexOf(name) == 0) {
			ret.push(this.values[i]);
		}
	}
	return ret;
});

addMethod(ninja_new, 'find', function(first, last) {
	var ret = [];
	for(var i=0; i<this.values.length; i++) {
		if (this.values[i] == (first + ' ' + last)) {
			ret.push(this.values[i]);
		}
	}
	return ret;
});


console.log(ninja_new.find().length === 3);
console.log(ninja_new.find('Sam').length === 1);
console.log(ninja_new.find("Dean", "Edwards").length === 1);
console.log(ninja_new.find("Alex", "Russell", "Jr") == null);
