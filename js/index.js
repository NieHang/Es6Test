// 获取元素
var getElem = function (selector){
	return document.querySelector(selector);
};
var getAllElem = function (selector){
	return document.querySelectorAll(selector);
};
// 获取元素的样式
var getCls = function (element){
	return element.getAttribute("class");
};
// 设置元素的样式
var setCls = function (element,cls){
	return element.setAttribute("class",cls);
};
// 为元素添加样式
var addCls = function (element,cls){
	var baseCls = getCls(element);
	if (baseCls.indexOf(cls) === -1) {
		setCls(element,baseCls + " " + cls);
	}
};
// 为元素删除样式
var delCls = function (element,cls){
	var baseCls = getCls(element);
	if (baseCls.indexOf(cls) > -1) {
		setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
	}
	return;
};

var screenAnimateElements = {
	".screen-1":[
		".screen-1__heading",
		".screen-1__subheading",
	],
	".screen-2":[
		".screen-2__heading",
		".screen-2__subheading",
		".screen-2__BAT",
	],
	".screen-3":[
		".screen-3__picture",
		".screen-3__heading",
		".screen-3__subheading",
		".screen-3__program",
	],
	".screen-4":[
		".screen-4__heading",
		".screen-4__subheading",
		".screen-4__type",
	],
	".screen-5":[
		".screen-5__heading",
		".screen-5__subheading",
		".screen-5__brain",
	]
};

function setScreenAnimateInit(screenCls) {
    var screen = document.querySelector(screenCls); // 获取当前屏的元素
    var animateElements =  screenAnimateElements[screenCls]; // 需要设置动画的元素
    for(var i=0;i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_animate_init');
    }
}
// 初始化设置
window.onload = function (){
	for (k in screenAnimateElements){
		if (k == ".screen-1") continue;
		setScreenAnimateInit(k);
	}
};
// 滚动条设置
function playScreenAnimateDone(screenCls){
    var screen = document.querySelector(screenCls); // 获取当前屏的元素
    var animateElements =  screenAnimateElements[screenCls]; // 需要设置动画的元素
    for(var i=0;i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));    
    }
}

setTimeout(function(){playScreenAnimateDone('.screen-1');},100);

var navItems = getAllElem(".header__nav-item");
var outLineItems = getAllElem(".outline__item");

var switchNavItemsActive = function (idx){
	for (var i = 0; i < navItems.length; i++){
		delCls(navItems[i],"header__nav-item_status_active");
		navTip.style.left = 0 + "px";
	}
	addCls(navItems[idx],"header__nav-item_status_active");
	navTip.style.left = 90*idx + "px";

	for (var i = 0; i < outLineItems.length; i++){
		delCls(outLineItems[i],"outline__item_status_active");
	}
	addCls(outLineItems[idx],"outline__item_status_active");
}

window.onscroll = function (){
	var top = document.documentElement.scrollTop;
	if (top > 100) {
		addCls(getElem(".header"),"header_status_black");
	}else {
		delCls(getElem(".header"),"header_status_black");
		switchNavItemsActive(0);
	}
	if (top > 640*1 - 100) {
		playScreenAnimateDone('.screen-2');
		switchNavItemsActive(1);
	}
	if (top > 640*2 - 100) {
		playScreenAnimateDone('.screen-3');
		switchNavItemsActive(2);
	}
	if (top > 640*3 - 100) {
		playScreenAnimateDone('.screen-4');
		switchNavItemsActive(3);
	}
	if (top > 640*4 - 100) {
		playScreenAnimateDone('.screen-5');
		switchNavItemsActive(4);
	}
}

/*双向定位*/
// 导航条跳转
var setNavJump = function (i,lib){
	var elem = lib[i];
	elem.onclick = function (){
		document.documentElement.scrollTop = i*640 + 1;
	}
}

for(var i=0;i<navItems.length;i++){
  setNavJump(i,navItems);
}

// 大纲跳转
for(var i=0;i<outLineItems.length;i++){
  setNavJump(i,outLineItems);
}
// 滑动门
var navTip = getElem(".header__nav-tip");
var setTip = function(idx,lib){
  lib[idx].onmouseover =function(){
    navTip.style.left = ( idx * 90 )+"px";
  }
  var currentIdx = 0;
  lib[idx].onmouseout = function(){
    for(var i=0;i<lib.length;i++){
        if( getCls( lib[i] ).indexOf("header__nav-item_status_active") > -1  ){
          currentIdx = i;
          break;
        }
    }
    navTip.style.left = ( currentIdx * 90 )+'px';
  }
}

for(var i=0;i<navItems.length;i++){
  setTip(i,navItems);
}