class Swiper {
  #flag = false;

  constructor({
    width = 800,
    height = 400,
    seconds = 3000,
    images = 4,
  } = {}) {
    this.width = width; // 轮播图框架的宽度
    this.height = height; // 轮播图框架的高度
    this.seconds = seconds; // 轮播图切图的时间冷却
    this.images = images; // 轮播图图片的数量
    this.swiper; // 定义轮播图div框架dom元素
    this.ul; // 定义轮播图ul框架dom元素
    this.lis; // 定义轮播图li图片的dom元素
    this.leftBtn; // 定义轮播图左按钮
    this.rightBtn; // 定义轮播图右按钮
    this.liStyle; // 定义li样式
    this.spanStyle; // 定义span样式
    this.init(); // 初始化
  }

  // 初始化启动s
  init() {
    this.getDom(); // 获取dom元素
    this.startSwiper(); // 启动轮播图功能
  }

  // 启动轮播图功能
  startSwiper() {
    const seconds = this.seconds;
    const lis = this.lis;
    const leftBtn = this.leftBtn;
    const rightBtn = this.rightBtn;
    let interval;
    let count = 0;
    let oldCount = 0;
    startInternal();

    function startInternal() {
      interval = setTimeout(() => {
        oldCount = count;
        count = (count >= lis.length - 1) ? 0 : ++count;
        framework(count, oldCount);
        startInternal();
      }, seconds)
    }

    function framework(count, oldCount) {
      lis[count].style.zIndex = 2;
      lis[oldCount].style.zIndex = 3;
      let oldLis = lis[oldCount].children;
      let time = 100;
      for (let li of oldLis) {
        setTimeout(() => {
          li.style.transitionDuration = '1500ms';
          li.style.transform = 'rotateY(90deg)';
        }, time)
        time += 1;
      }
    }

    // 鼠标进入轮播图触发事件
    this.swiper.onmouseenter = ()=> {
      clearInterval(interval);
      leftBtn.style.color = 'white';
      rightBtn.style.color = 'white';
    }

    // 鼠标离开轮播图触发事件
    this.swiper.onmouseleave = ()=> {
      startInternal();
      leftBtn.style.color = 'rgba(0,0,0,.1)';
      rightBtn.style.color = 'rgba(0,0,0,.1)';
    }

    // 鼠标点击事件
    this.swiper.onclick = ()=> {
      if (event.target.id === 'leftBtn') {
        if (this.#flag) return false;
        this.#flag = true;
        count = oldCount;
        oldCount = (oldCount <= 0) ? lis.length - 1 : --oldCount;
        framework(count, oldCount);
      } else if (event.target.id === 'rightBtn') {
        if (this.#flag) return false;
        this.#flag = true;
        oldCount = count;
        count = (count >= lis.length - 1) ? 0 : ++count;
        framework(count, oldCount);
      }
    }

    // 修复界面最小化会导致轮播图动画出错
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        clearInterval(interval);
      } else {
        startInternal();
      }
    });
  }

  // 获取dom元素
  getDom() {
    this.swiper = document.getElementById('swiper-wrapper');
    this.ul = this.swiper.children[0];
    for (let i = 0; i < this.images; i++) {
      let li = document.createElement('li');
      this.ul.appendChild(li);
    }
    this.lis = this.ul.children;

    // 创建左点击按钮
    this.leftBtn = document.createElement('div');
    this.leftBtn.innerHTML = '&lt';
    this.leftBtn.id = 'leftBtn';
    this.swiper.appendChild(this.leftBtn);

    // 创建右点击按钮
    this.rightBtn = document.createElement('div');
    this.rightBtn.innerHTML = '&gt';
    this.rightBtn.id = 'rightBtn';
    this.swiper.appendChild(this.rightBtn);

    this.initStyle(); // 初始化样式
  }

  // 初始化样式
  initStyle() {
    this.swiper.style.cssText = `width: ${this.width}px; height: ${this.height}px; margin: 0 auto; position: relative; overflow: hidden;`;
    this.ul.style.cssText = `width: 100%; height: 100%; position: relative; list-style-type: none; margin: 0; padding:0;`;
    this.leftBtn.style.cssText = 'width: 40px; height: 40px; color: rgba(0,0,0,.1); text-align: center; font-size: 28px; font-weight: 900; position: absolute; top: 50%; left: 235px; z-index: 3; cursor: pointer;';
    this.rightBtn.style.cssText = 'width: 40px; height: 40px; color: rgba(0,0,0,.1); text-align: center; font-size: 28px; font-weight: 900; position: absolute; top: 50%; right: 0; z-index: 3; cursor: pointer;';
    this.liStyle = `width: 100%; height: 100%; position: absolute; list-style: none; left: 0; z-index: 1; cursor: pointer;`;
    this.spanStyle = `display: block; width: 1%; height: 100%; float: left;`;
    for (let i = 0, ii = 1; i < this.lis.length; i++, ii++) {
      this.lis[i].style.cssText = this.liStyle;
      if (i == 0) {
        this.lis[i].style.zIndex = 3;
      }
      for (let j = 1; j <= 100; j++) {
        let span = document.createElement('span');
        span.style.cssText = this.spanStyle;
        span.style.backgroundImage = `url(./image/swiper${ii}.jpg)`;
        span.style.backgroundSize = `${this.width}px ${this.height}px`;
        span.style.backgroundPositionX = `${j}%`;
        this.lis[i].appendChild(span);
        span.ontransitionend = ()=> {
          if (event.target.style.backgroundPositionX === '100%') {
            let parentLi = event.target.parentNode;
            parentLi.style.zIndex = 1;
            this.#flag = false;
            let lis = parentLi.children;
            for (let li of lis) {
              li.style.transitionDuration = '0ms';
              li.style.transform = 'rotateY(0deg)';
            }
          }
        }
      }
    }
  }
}