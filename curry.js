// 偏函数应用  以prototype.js为原理
// 假设我们想把一个字符串分割成csv(逗号分隔),并忽略多余的空格，我们可以很容易通过一个正则表达式，使用String的split()方法做到这一点
var elements = "val1, val2, val3".split(/,\s*/);

console.log(elements);


// 柯里化 函数 （来自于prototype.js）
Function.prototype.curry = function() {
	var fn = this;
	var args = Array.prototype.slice.call(arguments);
	return function() {
		return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
		// 返回的的新函数（这里的this参数不会存在于任何闭包中，每个函数调用的时候都有自己的this）
	}
};

function add(a, b) {
	return a + b;
}

var add_prev = add.curry(1);
var result1 = add_prev(2);
console.log(result1);

assert(result1 == 3, "柯里化后 result1=3");


// 该实现类本质类似于 Prototype.js的 curry() 方法
Function.prototype.partial = function() {
	var fn = this; 
	var args = Array.prototype.slice.call(arguments);
	return function() {	
		var arg = 0;
		for(var i = 0; i < args.length && arg < arguments.length; i++) {
			if (args[i] === undefined) {
				args[i] = arguments[arg++];
			}
		}
		return fn.apply(this, args);
	};
}


String.prototype.csv = String.prototype.split.partial(/,\s*/);
var result2 = ('val1, val2, val3').csv();

console.log(result2);


// 遗漏参数的值  设置
var delay = setTimeout.partial(undefined, 1000);

delay(function(){
	console.log('A call to this function will be delayed 1000 ms');
});

// 函数用于事件绑定
var bindClick = document.getElementById('div').addEventListener.partial('click', undefined, false);
// console.log(bindClick)
bindClick(function() {
	console.log('Click event bound via curried function');
});


var obj = {};
var fn = function() {}



assert(obj && fn, "Both the object and function exist");

