
/* 通过科里化实现加法 */
//这个函数叫科里化的工具函数
function curry(_fn) {
	//获取固定参数
	var arg = [];
	var fn = _fn;
	return function() {
		//判断参数列表长度
		if (arguments.length > 0) {
			//合并go参数
			arg = arg.concat(Array.prototype.slice.call(arguments));
			return;
		}else if(arguments.length === 1){
			if(arguments[1] == 0){
				return fn.apply(null, arg);
			}
		} else {
			return fn.apply(null, arg);
		}

	}

}
//科里化的使用
function getSum(){
	var arr =Array.prototype.slice.call(arguments);
	return arr.reduce(function (p1,p2){ return p1+p2;})
}

var fn= curry(getSum);
fn(2);
fn(2,5);
console.log(fn());
