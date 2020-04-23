/* 测试 */

	var script = document.createElement("script");
	script.style = "text/javascript";
	if (script.readyState) {
		
		function script_load_test() {
			let em = document.createElement("em");
			em.innerText = "createELement.js IE加载";
			var body = document.getElementsByTagName("body")[0];
			body.appendChild(em);
		}
	} else {
		
		function script_load_test() {
			let em = document.createElement("em");
			em.innerText = "createELement.js  W3C加载";
			var body = document.getElementsByTagName("body")[0];
			body.appendChild(em);
		}
	}
