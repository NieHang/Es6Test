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

function setScreenAnimate(screenCls){
	var screen = document.querySelector(screenCls);
	var animateElements = screenAnimateElements[screenCls];
	var isSetAnimateClass = false;
	var isAnimateDone = false;

	screen.onclick = function (){
		if (isSetAnimateClass === false) {
			for (var i = 0; i < animateElements.length; i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls + " " + animateElements[i].substr(1)+"_animate_init");
			}
			isSetAnimateClass = true;
			return;
		}
		if (isAnimateDone === false) {
			for (var i = 0; i < animateElements.length; i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls.replace("_animate_init","_animate_done"));
			}
			isAnimateDone = true;
			return;
		}
		if(isAnimateDone === true){
	        for(var i=0;i<animateElements.length;i++){
	          var element = document.querySelector(animateElements[i]);
	          var baseCls = element.getAttribute('class');
	          element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
	        }
	        isAnimateDone = false;
	        return ;
	    }
	}
}
for (k in screenAnimateElements){
	setScreenAnimate(k);
}