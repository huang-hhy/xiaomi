/**
 * 购物车指向下拉特效
 */
var mini_cart = document.getElementsByClassName('mini-cart')[0];
var cart_menu = document.querySelector('.cart-menu');
var cartOver = function() {
	setHeight(cart_menu, '100px');
	addClass(mini_cart, 'mini_cart_hover');
}
var cartOut = function() {
	setHeight(cart_menu, '0px');
	removeClass(mini_cart, 'mini_cart_hover');
};
addEvent(mini_cart, "mouseover", cartOver);
addEvent(cart_menu, "mouseover", cartOver);
addEvent(mini_cart, "mouseout", cartOut);
addEvent(cart_menu, "mouseout", cartOut);


/**
 * [下载APP] 选项指向下拉特效
 */
var downloadApp = document.querySelector(".downloadApp");
var appcode = document.querySelector(".appcode");
var dapptriangle = document.querySelector(".dapptriangle");
var downloadAppOver = function() {
	setHeight(appcode, '200px');
	removeClass(dapptriangle, 'displayNone');
};
var downloadAppOut = function() {
	setHeight(appcode, '0px');
	addClass(dapptriangle, 'displayNone');
};
addEvent(appcode, "mouseover", downloadAppOver);
addEvent(downloadApp, "mouseover", downloadAppOver);
addEvent(dapptriangle, "mouseover", downloadAppOver);
addEvent(appcode, "mouseout", downloadAppOut);
addEvent(downloadApp, "mouseout", downloadAppOut);
addEvent(dapptriangle, "mouseout", downloadAppOut);


/**
 * header-nav菜单渲染
 */
var item_children = document.getElementsByClassName("item-children");
var nav_item = document.getElementsByClassName("nav-item");
var header_menu = document.querySelector(".header-menu");
var nav_item_enter = function() {
	let newNode = this.querySelector(".container");
	if (newNode === null) return;
	if (header_menu.style.height === "0px" || header_menu.style.height === "") {
		setHeight(header_menu, "220px");
		header_menu.replaceChild(newNode.cloneNode(true), header_menu.firstElementChild);
	} else {
		header_menu.replaceChild(newNode.cloneNode(true), header_menu.firstElementChild);
	}
}
var nav_item_out = function() {
	if (header_menu.style.height === "220px") {
		setHeight(header_menu, "0px");
	}
}
var nav_item_data = [
	[{
			title: "小米至尊纪念版",
			figure: "./image/phone1-1.webp",
			price: "5299元起"
		},
		{
			title: "小米10 Pro",
			figure: "./image/phone1-2.webp",
			price: "4999元起"
		},
		{
			title: "小米10",
			figure: "./image/phone1-3.webp",
			price: "3799元起"
		},
		{
			title: "小米10 青春版 5G",
			figure: "./image/phone1-4.webp",
			price: "1899元起"
		},
		{
			title: "小米MIX Aipha",
			figure: "./image/phone1-5.webp",
			price: "19999元起"
		},
	],
	[{
			title: "Redmi K30 至尊纪念版",
			figure: "./image/phone2-1.webp",
			price: "1999元起"
		},
		{
			title: "Redmi K30 Pro系列",
			figure: "./image/phone2-2.webp",
			price: "2999元起"
		},
		{
			title: "Redmi K30 系列",
			figure: "./image/phone2-3.webp",
			price: "1399元起"
		},
		{
			title: "Redmi 10X",
			figure: "./image/phone2-4.webp",
			price: "999元起"
		},
		{
			title: "Redmi Note 8",
			figure: "./image/phone2-5.webp",
			price: "899元起"
		},
		{
			title: "Redmi 9",
			figure: "./image/phone2-6.webp",
			price: "799元起"
		},
	],
	[{
			title: "小米电视大师 82英寸至尊纪念版",
			figure: "./image/TV1.webp",
			price: "49999元"
		},
		{
			title: "小米电视大师 82英寸",
			figure: "./image/TV2.webp",
			price: "9999元"
		},
		{
			title: "小米透明电视",
			figure: "./image/TV3.webp",
			price: "49999元"
		},
		{
			title: "小米电视 大师 65英寸OLED",
			figure: "./image/TV4.webp",
			price: "12999元"
		},
		{
			title: "Redmi 智能电视 MAX 98\"",
			figure: "./image/TV5.webp",
			price: "19999元"
		},
		{
			title: "小米电视4A 60英寸",
			figure: "./image/TV6.webp",
			price: "2399元"
		},
	],
	[{
			title: "Redmi G 游戏本",
			figure: "./image/NoteBook1.webp",
			price: "5299元起"
		},
		{
			title: "RedmiBook 16",
			figure: "./image/NoteBook2.webp",
			price: "4699元起"
		},
		{
			title: "RedmiBook 14 Ⅱ",
			figure: "./image/NoteBook3.webp",
			price: "4299元起"
		},
		{
			title: "Pro 15.6\" 2020款",
			figure: "./image/NoteBook4.webp",
			price: "5999元起"
		},
		{
			title: "RedmiBook Air 13",
			figure: "./image/NoteBook5.webp",
			price: "4899元起"
		},
		{
			title: "显示器",
			figure: "./image/NoteBook6.webp",
			price: "2199元"
		},
	],[{
			title: "小米至尊纪念版",
			figure: "./image/phone1-1.webp",
			price: "5299元起"
		},
		{
			title: "小米10 Pro",
			figure: "./image/phone1-2.webp",
			price: "4999元起"
		},
		{
			title: "小米10",
			figure: "./image/phone1-3.webp",
			price: "3799元起"
		},
		{
			title: "小米10 青春版 5G",
			figure: "./image/phone1-4.webp",
			price: "1899元起"
		},
		{
			title: "小米MIX Aipha",
			figure: "./image/phone1-5.webp",
			price: "19999元起"
		},
	],
	[{
			title: "Redmi K30 至尊纪念版",
			figure: "./image/phone2-1.webp",
			price: "1999元起"
		},
		{
			title: "Redmi K30 Pro系列",
			figure: "./image/phone2-2.webp",
			price: "2999元起"
		},
		{
			title: "Redmi K30 系列",
			figure: "./image/phone2-3.webp",
			price: "1399元起"
		},
		{
			title: "Redmi 10X",
			figure: "./image/phone2-4.webp",
			price: "999元起"
		},
		{
			title: "Redmi Note 8",
			figure: "./image/phone2-5.webp",
			price: "899元起"
		},
		{
			title: "Redmi 9",
			figure: "./image/phone2-6.webp",
			price: "799元起"
		},
	],
	[{
			title: "小米电视大师 82英寸至尊纪念版",
			figure: "./image/TV1.webp",
			price: "49999元"
		},
		{
			title: "小米电视大师 82英寸",
			figure: "./image/TV2.webp",
			price: "9999元"
		},
		{
			title: "小米透明电视",
			figure: "./image/TV3.webp",
			price: "49999元"
		},
		{
			title: "小米电视 大师 65英寸OLED",
			figure: "./image/TV4.webp",
			price: "12999元"
		},
		{
			title: "Redmi 智能电视 MAX 98\"",
			figure: "./image/TV5.webp",
			price: "19999元"
		},
		{
			title: "小米电视4A 60英寸",
			figure: "./image/TV6.webp",
			price: "2399元"
		},
	],
]
for (let i = 0; i < item_children.length; i++) {
	let container = document.createElement("div");
	container.classList.add("container")
	let children_list = document.createElement("ul");
	children_list.classList.add("children-list");
	for (let j = 0; j < nav_item_data[i].length; j++) {
		let img = document.createElement("img");
		img.src = nav_item_data[i][j].figure;
		let figure = document.createElement("div");
		figure.appendChild(img);
		figure.classList.add("figure");
		let title = document.createElement("div");
		title.classList.add("menu_name");
		title.innerText = nav_item_data[i][j].title;
		let price = document.createElement("div");
		price.classList.add("price");
		price.innerText = nav_item_data[i][j].price;
		let a = document.createElement("a");
		a.href = "";
		a.appendChild(figure);
		a.appendChild(title);
		a.appendChild(price);
		let li = document.createElement("li");
		if (j === 0) li.classList.add("first");
		li.appendChild(a);
		children_list.appendChild(li);
	}
	container.appendChild(children_list);
	item_children[i].appendChild(container);
}
for (let i = 0; i < nav_item.length; i++) {
	addEvent(nav_item[i], "mouseenter", nav_item_enter);
	addEvent(nav_item[i], "mouseout", nav_item_out);
	addEvent(nav_item[i].children[0], "mouseenter", nav_item_enter);
	addEvent(nav_item[i].children[0], "mouseout", nav_item_out);
	addEvent(header_menu, "mouseenter", nav_item_enter);
	addEvent(header_menu, "mouseout", nav_item_out);
}


/**
 * 搜索框JS处理
 */
var search_data = ["王一博同款手机", "小米10", "Redmi K30 Pro", "卡丁车", "耳机", "全部商品", "空调", "净水器"]
var header_search = document.querySelector(".header-search");
var search_form = document.querySelector(".search-form");
var search_bg = document.querySelector(".search_bg");
var search_box = document.querySelector(".search-box");
var search_text = document.querySelector(".search-text");
var search_submit = document.querySelector(".search-submit");
var search_content = document.querySelector(".search-content");
var search_enter = function() {
	setStyle(search_box, `border: 1px solid #FF6700;`)
	setStyle(search_submit, `border: 1px solid #FF6700;`)
}
var search_out = function() {
	setStyle(search_content, `height: 0px;`)
	setStyle(search_box, `border: 1px solid #e0e0e0;`)
	setStyle(search_submit, `border: 1px solid #e0e0e0;`)
}
var search_input = function() {
	if (this.value === null || this.value === "") {
		removeClass(search_bg, "displayNone")
		setStyle(search_content, `height: 0px;`)
	} else {
		addClass(search_bg, "displayNone")
		setStyle(search_content, `height: ${40 * search_data.length}px;`)
	}
}
var search_submit_enter = function() {
	addClass(this, "search-submit-hover")
}
var search_submit_out = function() {
	removeClass(this, "search-submit-hover")
}
for (let i = 0; i < search_data.length; i++) {
	let a = document.createElement("a");
	a.href = "javascript:void(0)";
	a.innerText = search_data[i];
	search_content.appendChild(a);
}
addEvent(header_search, "mouseenter", search_enter)
addEvent(header_search, "mouseout", search_out)
addEvent(search_text, "input", search_input)
addEvent(search_submit, "mouseenter", search_submit_enter)
addEvent(search_submit, "mouseout", search_submit_out)



/**
 * 类别菜单
 */
var category_data = [{
		name: "小米至尊纪念版",
		src: "./image/phone1-1.webp"
	},
	{
		name: "小米10 Pro",
		src: "./image/phone1-2.webp"
	},
	{
		name: "小米10",
		src: "./image/phone1-3.webp"
	},
	{
		name: "小米10 青春版 5G",
		src: "./image/phone1-4.webp"
	},
	{
		name: "小米MIX Aipha",
		src: "./image/phone1-5.webp"
	},
	{
		name: "Redmi K30 至尊纪念版",
		src: "./image/phone2-1.webp"
	},
	{
		name: "Redmi K30 Pro系列",
		src: "./image/phone2-2.webp"
	},
	{
		name: "Redmi K30 系列",
		src: "./image/phone2-3.webp"
	},
	{
		name: "Redmi 10X",
		src: "./image/phone2-4.webp"
	},
	{
		name: "Redmi Note 8",
		src: "./image/phone2-5.webp"
	},
]
var site_category_ul = document.querySelector(".site-category-ul");
var site_category_ul_li = site_category_ul.children;
for (let i = 0; i < site_category_ul_li.length; i++) {
	var category_menu = document.createElement("div");
	category_menu.classList.add("category-menu");
	for (let j = 0; j < 4; j++) {
		let ul = document.createElement("ul");
		for (let k = 0; k < 6; k++) {
			let img = document.createElement("img");
			img.src = category_data[i].src;
			let span = document.createElement("span");
			span.innerText = category_data[i].name;
			let a = document.createElement("a");
			a.appendChild(img);
			a.appendChild(span);
			let li = document.createElement("li");
			li.appendChild(a);
			ul.appendChild(li)
		}
		category_menu.appendChild(ul);
	}
	site_category_ul_li[i].appendChild(category_menu);
}


// 监听滚动条
var totop = document.querySelector(".totop");
addEvent(document, "scroll", function() {
	if (window.scrollY >= 848) {
		setStyle(totop, "visibility: visible;")
	} else {
		setStyle(totop, "visibility: hidden;")
	}
})





//	注册事件
function addEvent(element, eventName, operation) {
	element.addEventListener(eventName, operation, true)
}

//	获取兄弟元素
function siblings(elm) {
	var a = [];
	var p = elm.parentNode.children;
	for (var i = 0, pl = p.length; i < pl; i++) {
		if (p[i] !== elm) a.push(p[i]);
	}
	return a;
}

//	设置样式
function setStyle(element, csstext) {
	element.style.cssText = csstext;
}

//	设置样式高度
function setHeight(element, value) {
	element.style.height = value;
}

//	添加类
function addClass(element, className) {
	if (!element.classList.contains(className)) {
		element.classList.add(className);
	}
}

//	删除类
function removeClass(element, className) {
	if (element.classList.contains(className)) {
		element.classList.remove(className);
	}
}
