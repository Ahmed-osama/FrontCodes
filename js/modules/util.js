
	util = {};

	/*
		#mini modernizer
		some yub nope functions
	*/
		touchClass = ('ontouchstart' in window)? 'touch' :'no-touch';
		$('html').addClass(touchClass)
		

	/*	
		# debounce
		david walash debounce includeed
	*/	
		util.debounce = function debounce(func, wait, immediate) {
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
		#loader
		depends on true do and load items
	*/
		util.load = function(statment, callback) {
		    var callback = callback || function(){};
		    app.util.trueDo(
		      statment,
		      callback()
		    )
		}

	/*
		#Expand & Collabse - widget
	*/
        util.collabse       = function(){


            function action(head, holder, parent, callback){

                callback          = callback ||function(){};
                var widget        = head.parent().closest(parent);
                holderString      = holder
                var holder        = widget.find(holder);
                var parentsidemnu = head.parent('.fixedSideMenu').length > 0

                // collabse 
                function collabse(){
                    holder.stop().slideUp(100);
                    widget.removeClass("is-active");
                }

                // expand
                function expand(){
                   
                    holder.stop().slideDown(100);
                    widget.addClass("is-active");
                }

                //Check Visbility
                if( holder.is(":visible") ){
                    
                    collabse();
                }else{
                    expand();
                    callback()
                }
            }

            // Common collabse and expand
            $(document).on("click", "[data-collabse-widget-header]", function(e) {
                console.log($(this))
                e.preventDefault();
                e.stopPropagation();
                action($(this), "[data-collabse-widget-holder]", "[data-collabse-widget]")
                setTimeout(function(){
                	$(window).trigger('expanded')
                },200)
            });
        } 
		util.collabse( )
	/*
		#IMG REPLACEMENT
		saves source in data atrr the replace it as background img
	*/

		$('[data-bg-img]').each(function(){
			bgImgeDiv = $(this)
			url       = bgImgeDiv.data('bg-img')
			bg        = 'url(' + url + ')';
			bgBolean  = bgImgeDiv.data('bg')
			if(url.indexOf('https://www.youtube.com/embed/') > -1 ){
				template = '<iframe class="youtubevideo" width="" height="" src="'+url+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'
				bgImgeDiv.append(template)
			}else{

				if(bgBolean){
					bgImgeDiv.css("background-image",bg)
				}else{
					replacedImage = bgImgeDiv.find('[data-replacedimg ]')
					if(replacedImage.length > 0){
						replacedImage.attr('src',url )
					}else{
						bgImgeDiv.append('<img data-replacedimg src='+url+'>')
					}
				}
			}
		})

	/*
		#Ticker
		shows tect pone by one
	*/
		$.fn.writeText= function(content) {
			elem             = this;
			if(elem.length == 0) return false
			var content      = content || $(this).data('newsticker'),
				contentArray = content.split(""),		
				current      = 0;
			var	action       = setInterval(function() {
				if(current < contentArray.length) {
					elem.text(elem.text() + contentArray[current++]);
				}else{
					clearInterval(action)
					elem.removeClass('active')
				}
			}, 100);
		};
		$('[data-newsticker]').writeText();


	/*
		#featured section
		counts elemnts the add class
	*/
		$('[data-featured]').each(function(){

			items   = $(this).find('>*').length
			items   = (items>5)? 5 : items
			clsname = 'featured-section--'+items
			$(this).addClass(clsname)

		})