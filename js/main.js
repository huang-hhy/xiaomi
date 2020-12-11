/**
 * 倒计时计算
 */
(function() {
	var count_down = document.querySelector(".count-down");
	var hour = document.querySelector(".hour");
	var minute = document.querySelector(".minute");
	var second = document.querySelector(".second");
	var flash_sale_time = document.querySelector(".flash-sale-time");
	setInterval(() => {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		hour.innerText = 0;
		minute.innerText = 60 - date.getMinutes();
		second.innerText = 60 - date.getSeconds();
		flash_sale_time.innerText = ((hours + 1) > 24 ? 1 : (hours + 1)) + ":00 场";
	}, 500)
}())


let interval;
let count = 0;
let children = 0;
let size = 0;
let remainder = 0;
let look = false;
let leftButton = document.querySelector(".leftButton");
let rightButton = document.querySelector(".rightButton");
sale_list();
/**
 * 渲染秒杀清单列表
 */
function sale_list() {
	let sale_data = {
		title: "米家风冷对开门冰箱 483L",
		info: "风冷无霜不结冰",
		sale_price: "2299",
		old_price: "2499",
		src: "./image/flash-sale.png",
	}
	var sale_list_ul = document.querySelector(".sale-list-ul");
	for (let i = 0; i < 30; i++) {
		let li = document.createElement("li");
		li.style.transform = `translate3d(${248*i}px,0,0)`;
		let a = document.createElement("a");
		a.href = "";

		let img = document.createElement("img");
		img.src = sale_data.src;
		let name = document.createElement("p");
		name.classList.add("name");
		name.innerText = sale_data.title;
		let info = document.createElement("p");
		info.classList.add("info");
		info.innerText = sale_data.info;

		let p = document.createElement("p");
		let span = document.createElement("span");
		span.innerText = sale_data.sale_price + "元";
		let del = document.createElement("del");
		del.innerText = sale_data.old_price + "元";
		p.appendChild(span);
		p.appendChild(del);
		a.appendChild(img);
		a.appendChild(name);
		a.appendChild(info);
		a.appendChild(p);
		li.appendChild(a);
		sale_list_ul.appendChild(li);
	}
	start_sale_interval();
}
/**
 * 启动秒杀清单自动轮播
 */
function start_sale_interval() {
	children = document.querySelector(".sale-list-ul").children;
	size = Math.floor(children.length / 4);
	remainder = children.length % 4;
	interval = setInterval(() => {
		++count;
		for (let j = 0; j < children.length; j++) {
			let move = getTranslate(children[j].style.transform);
			if (count % size === 0) {
				children[j].style.transform = `translate3d(${move-248*remainder}px,0,0)`;
				clearInterval(interval);
				if (j === 0) {
					count = 0;
					setTimeout(function() {
						//	初始化
						for (let k = 0; k < children.length; k++) {
							children[k].style.transform = `translate3d(${248*k}px,0,0)`;
						}
						start_sale_interval();
						leftButton.classList.add("select");
						rightButton.classList.remove("select");
					}, 5000);
				}
			} else {
				children[j].style.transform = `translate3d(${move-248*4}px,0,0)`;
			}
		}
		if (count % size === 0) {
			rightButton.classList.add("select");
		} else {
			leftButton.classList.remove("select");
			rightButton.classList.remove("select");
		}
	}, 5000);
}
/**
 * 点击左右按钮事件
 */
addEvent(leftButton, "click", function() {
	if (!this.classList.contains("select")) {
		clearInterval(interval);
		if (count >= 1) {
			--count;
			if (count <= 0) leftButton.classList.add("select");
			rightButton.classList.remove("select");
			for (let i = 0 ; i < children.length ; i++) {
				let move = getTranslate(children[i].style.transform);
				if (look) {
					children[i].style.transform = `translate3d(${move+(248*remainder)}px,0,0)`;
				} else {
					children[i].style.transform = `translate3d(${move+(248*4)}px,0,0)`;
				}
			}
			if (look) look = false;
		}
	}
}, true);
addEvent(rightButton, "click", function() {
	if (!this.classList.contains("select")) {
		clearInterval(interval);
		if (count < size) {
			++count;
			if (count >= size) rightButton.classList.add("select");
			leftButton.classList.remove("select");
			for (let i = 0 ; i < children.length ; i++) {
				let move = getTranslate(children[i].style.transform);
				if (count % size === 0) {
					children[i].style.transform = `translate3d(${move-(248*remainder)}px,0,0)`;
					look = true;
				} else {
					children[i].style.transform = `translate3d(${move-(248*4)}px,0,0)`;
				}
			}
		}
	}
}, true);

/**
 * 获取translate3d属性的X轴
 */
function getTranslate(translate) {
	let start = translate.indexOf("(");
	let end = translate.indexOf("px");
	return Number(translate.substring(++start, end));
}

/**
 * 修复界面最小化会导致动画出错
 */
document.addEventListener('visibilitychange', function() {
	if (document.visibilityState === 'hidden') {
		clearInterval(interval);
	} else {
		start_sale_interval();
	}
});



/**
 * 控制brick模块中的tab菜单栏
 */
(function() {
	var brick_box_ul = document.getElementsByClassName("brick-box-ul");
	for (let i = 0; i < brick_box_ul.length; i++) {
		let tab_column = brick_box_ul[i].getElementsByClassName("tab-column");
		for (let j = 0; j < tab_column.length; j++) {
			addEvent(tab_column[j].children[0], "mouseenter", function() {
				if (!this.classList.contains("brick-tab-colum-select")) {
					this.classList.add("brick-tab-colum-select");
					siblings(this.parentNode).forEach(function(item, index) {
						item.children[0].classList.remove("brick-tab-colum-select");
					})
				}
			}, true)
		}
	}
}())


//	注册事件
function addEvent(element, eventName, operation, bool) {
	element.addEventListener(eventName, operation, bool)
}

//	获取兄弟元素
function siblings(elm) {
	let a = [];
	let p = elm.parentNode.children;
	for (let i = 0 ; i < p.length ; i++) {
		if (p[i] !== elm) a.push(p[i]);
	}
	return a;
}

//	设置样式
function setStyle(element, csstext) {
	element.style.cssText = csstext;
}
