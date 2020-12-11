var swiper_wrapper = document.querySelector("#swiper-wrapper");
var swiper_img = document.querySelector(".swiper-img");
var swiper_index = document.querySelector(".swiper-index");
var left_arrow = document.querySelector(".left-arrow");
var right_arrow = document.querySelector(".right-arrow");
var img_children = swiper_img.children;
var index_children = swiper_index.children;
var index = 0;
var Interval;

initEvent();
startInterval();

function initEvent() {
	swiper_wrapper.onmousemove = function() {
		clearInterval(Interval);
	}
	swiper_wrapper.onmouseout = function() {
		startInterval();
	}
	
	left_arrow.onclick = function() {
		clearInterval(Interval);
		if (index <= 0) {
			index = img_children.length-1;
		} else {
			--index;
		}
		setSelect(img_children[index]);
		setSelect(index_children[index]);
	}
	
	right_arrow.onclick = function() {
		clearInterval(Interval);
		if (index >= img_children.length-1) {
			index = 0;
		} else {
			++index;
		}
		setSelect(img_children[index]);
		setSelect(index_children[index]);
	}
	
	for (let i = 0 ; i < index_children.length ; i++) {
		index_children[i].onclick = function() {
			clearInterval(Interval);
			let inde = getIndex(this);
			if (inde !== index) {
				setSelect(img_children[inde]);
				setSelect(this);
			}
		}
	}
}

//	启动自动轮播
function startInterval() {
	swiper_img = document.querySelector(".swiper-img");
	swiper_index = document.querySelector(".swiper-index");
	img_children = swiper_img.children;
	Interval = setInterval(function() {
		index = getSelect(img_children);
		if (index >= img_children.length-1) {
			index = -1;
		}
		++index;
		setSelect(img_children[index]);
		setSelect(index_children[index]);
	}, 5000);
}

//	获取当前选中的索引值
function getSelect(children) {
	for (let i = 0 ; i < children.length ; i++) {
		if (children[i].classList.contains("select")) return i;
	}
}

//	设置选中
function setSelect(elm) {
	elm.classList.add("select");
	let sib = siblings(elm);
	for (let i = 0 ; i < sib.length ; i++) {
		sib[i].classList.remove("select");
	}
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

//	获取自身处于兄弟的位置索引值
function getIndex(elm) {
	let p = elm.parentNode.children;
	for (let i = 0 ; i < p.length ; i++) {
		if (p[i] === elm) return i;
	}
}

