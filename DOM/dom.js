/**
	 * @description 查找上下兄弟元素节点
	 * @param {Number} n   负数向前查找/正数向后查找
	 */
	Element.prototype.retsibling = function(n) {
		var a = this;
		while (n) {
			if (n > 0) {
				// if(n&&this.nextElementSibling){   /* 下一个兄弟节点，ie不兼容*/
				//  a=this.nextElementSibling;// }else{/* ie兼容*/
				if (!a) {
					a = null;
					n = 0;
					return a;
				}
				/* 1.找到一次，取反跳出，次数--，不是0继续*/
				/* 2.a老是找不到dom,直到a为false也跳出 */
				for (a = a.nextSibling; a && a.nodeType != 1; a = a.nextSibling);
				n--;
				// }
			} else {
				/* 1.找到一次，取反跳出，次数--，不是0继续*/
				/* 2.a老是找不到dom,直到a为false也跳出 */
				if (!a) {
					a = null;
					n = 0;
					return a;
				}
				for (a = a.previousSibling; a && a.nodeType != 1; a = a.previousSibling);
				n++;
			}
		}
		return a;
	}
	/**
	 * @description div.在元素后面插入元素(放到谁后面,要插入的元素放到后面) 
	 * @param {Node} a  放到谁后面
	 * @param {Node} b  要插入的元素
	 */
	HTMLElement.prototype.insertAfter = function(a, b) {
		/* 还要判断a是否在dom中存在,不然为null，执行div.appendChild(b);了*/
		var _that = this.children;
		var children_bool = false;
		for (var i = 0; i < _that.length; i++) {
			if (_that[i] == a) {
				children_bool = true;
			}
		}
		if (!children_bool) {
			console.log(a)
			return "元素不存在,上下文档中.";
		}

		var a = a.retsibling(1);
		if (!a) {
			this.appendChild(b);
		} else {
			this.insertBefore(b, a);
		}
		return b;
	}
	/**
	 * @description 返回滚动条x,y
	 */
	function getScrollOffset() {
		if (window.pageXOffset) {
			return {
				x: window.pageXOffset,
				y: window.pageYOffset
			}
		} else {
			return {
				x: document.body.scrollLeft || document.documentElement.scrollLeft,
				y: document.body.scrollTop || document.documentElement.scrollTop,
			}
		}
	}
	/** 
	 * @description 返回视口尺寸
	 */
	function getViewproyOffset() {
		if (window.innerWidth) {
			return {
				w: window.innerWidth,
				h: window.innerHeight
			}
		} else {
			if (document.compatMode === "BackCompat") {
				return {
					w: document.body.clientWidth,
					h: document.body.clientHeight
				}
			} else {
				return {
					w: document.documentElement.clientWidth,
					h: document.documentElement.clientHeight,
				}
			}
		}
	}
	/** 
	 * @description 封装注册事件 
	 */
	function addEvent(elem, type, handle) {
		if (elem.addEventListenter) {
			/*不支持IE9下）*/
			elem.addEventListenter(type, handle, false);

		} else if (elem.attachEvent) {
			elem.attachEvent("on" + type, function() { /* IE独有*/
				handle.call(elem);
			})
		} else {
			elem['on' + type] = handle;
		}
	}
	/* -------封装取消冒泡 ------ */
	function stopBubble(event) {
		if (event.stopPropagation) {
			event.stopPropagation(); /*1.取消冒泡 （不支持IE9下）*/
		} else {
			event.cancelBubble = true; /* 2.原来是IE独有*/
		}
	}
	/* 封装阻止默认事件 */
	function cancelHandler(event) {
		if (event.preventDefault) {
			event.preventDefault(); /* 不支持IE9下）*/
		} else {
			event.returnValue = false; /* IE9*/
		}
	}
	/* 封装兼容script。onload */
	function script_onload(url, callBack) {
		var script = document.createElement("script");
		script.style = "text/javascript";


		if (script.readyState) {
			/* IE有状态码script.redyState="loading/complete/losded" */
			script.onreadystatechange = function() {
				if (script.readyState == "complete" || script, readyState == "loaded") {
					console.log("IE加载createELement.js成功")
					callBack();
				}
			}
		} else {
			/* w3c */
			script.onload = function() {
				console.log("W3C加载createELement.js完成")
				callBack();
			}
		}
		/* 防止没有触发onreadystatechange */
		script.src = url;
		document.body.appendChild(script);
	}
	/**       
 * 对Date的扩展，将 Date 转化为指定格式的String       
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符       
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)       
 * eg:       
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423       
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04       
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04       
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04       
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18       
 */          
Date.prototype.pattern=function(fmt) {           
    var o = {           
    "M+" : this.getMonth()+1, //月份           
    "d+" : this.getDate(), //日           
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时           
    "H+" : this.getHours(), //小时           
    "m+" : this.getMinutes(), //分           
    "s+" : this.getSeconds(), //秒           
    "q+" : Math.floor((this.getMonth()+3)/3), //季度           
    "S" : this.getMilliseconds() //毫秒           
    };           
    var week = {           
    "0" : "/u65e5",           
    "1" : "/u4e00",           
    "2" : "/u4e8c",           
    "3" : "/u4e09",           
    "4" : "/u56db",           
    "5" : "/u4e94",           
    "6" : "/u516d"          
    };           
    if(/(y+)/.test(fmt)){           
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));           
    }           
    if(/(E+)/.test(fmt)){           
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);           
    }           
    for(var k in o){           
        if(new RegExp("("+ k +")").test(fmt)){           
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));           
        }           
    }           
    return fmt;           
}