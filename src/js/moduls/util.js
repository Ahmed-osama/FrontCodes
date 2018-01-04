import Velocity from 'velocity-animate'
let util ={};

	
	/*
		#mini modernizer
		some yub nope functions
	*/
		let html = document.querySelector('html')
		let htmlClassList=[]
		let touchClass = ('ontouchstart' in window)? 'touch ' :'no-touch ';
		htmlClassList.push(touchClass)
		let firefox = navigator.userAgent.includes('Firefox' || 'firefox')?'firefox ':'';
		htmlClassList.push(firefox)
		let Chrome = !!window.chrome?' Chrome ':'';
		htmlClassList.push(Chrome)
		let safari =(navigator.userAgent.indexOf('Safari') != -1 && !window.chrome ) ?'safari':'';
		htmlClassList.push(safari)
		let rtl = (html.getAttribute('dir') == 'rtl')?'rtl ':'ltr '
		htmlClassList.push(rtl)
		let ios =(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)?'ios ':'';
		htmlClassList.push(ios)
		let android = navigator.userAgent.toLowerCase().includes("android" || "Android")?"android ":"";
		htmlClassList.push(android)
		html.className += htmlClassList.join("")
			
		//getters
			util.safary = ()=>{return safari == 'safari'};
			util.lang = ()=>{return rtl};
			util.ltr = ()=>{return rtl == 'ltr '};
			util.chrome = () =>{return !!window.chrome};
			util.firefox = () =>{return navigator.userAgent.includes('Firefox' || 'firefox')};
			util.touch = () =>{return 'ontouchstart' in window};
			util.ios = () =>{return ios.trim() == 'ios'};
			util.android = () =>{return ios.trim() == 'android'};
	/*	
		# debounce
		david walash debounce includeed
	*/	
		util.debounce = function(func, wait, immediate) {
			var timeout;
			return function() {
				var wait    = wait || 200
				var context = this, args = arguments;
				var later   = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};

	/*
		# trueDo
		Checks if a statemnt is tru or an elment length is more than i
		then excutes a sucess call back else faliure callback.
	*/
		util.trueDo = function(statment, action, i, alt) {
			var i   = i || 0;
			var alt = alt || function(){};
			var action = action || function(){};
			if (statment.length > i || statment) {
				action();
			}else{
				alt()
			}
		}

	/*
		#toggle
		works like this
		$widget
			$widget__head
			$widget__body
	*/
		util.toggle = function(e) {
			var head = e.target,
				body = head.nextElementSibling
				parent = head.parentNode

			if (!parent.classList.contains('active')) {
				Velocity(
					body,
					'slideDown', {
						duration: 100,
						easing: "ease-in-out"
					}
				)
				parent.classList.add('active')
				head.classList.add('active')
			} else {
				Velocity(
					body,
					'slideUp', {
						duration: 100,
						easing: "ease-in-out"
					}
				)
				parent.classList.remove('active')
				head.classList.remove('active')
			}
		}
	//document ready
		util.domReady = function (fn) {
			if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
				fn();
			} else {
				document.addEventListener('DOMContentLoaded', fn);
			}
		}
//Export utils
export default util