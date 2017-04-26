var win     = $(window);
var plugins = {};

//[1] - waves
  plugins.wave = function(){
      Waves.init()
      Waves.attach('[data-wave]', ['waves-button', 'waves-float']);
  } 

//[2] - lazyload
  plugins.lazyload = function(){
      configx = {
        effect         : "fadeIn",
        failure_limit  : 200,
        skip_invisible : true,
        threshold      : 200,
        load           : function() {
            $(this).removeAttr('data-original').removeClass('lazy');
        }
      }
      $("img.lazy").lazyload(configx);
      win.on('ajaxdone activeslide', function(){
        $("img.lazy").lazyload(configx);
      })
  }
     
//[3] - masonry
  plugins.masonry = function(){
    var masonContainer    = $('.masonry');
    var masonactive;
    function action(){
      if(masonContainer.length > 0 && $(window).width() >= 1024){
        masonContainer.masonry({
          itemSelector    : ".masonary-item",
          isOriginLeft    : false,
          isFitWidth      : true,
          percentPosition : true,
          columnWidth     : '.masonary-item',
          gutter          : 0,
        })
        masonactive = true
      }else{
        if(masonactive){
          masonContainer.masonry('destroy');
          masonactive = false;
        }
      }
    }
    action();
    $(window).on('resize',function(){
      util.debounce(action())
    })
  }

//[3] - theia
  plugins.theia = function(){
    var contentHeight = $('.content-sticky').height();
    var sideHeight    = $('.sidebar-sticky').height();
    var selector      = $('.content-sticky, .sidebar-sticky');
    var theiaFlaginit = false;
    var activeTheia   = ($(".sticky-container").data('theia') == false )? false : true;
    var theiaFlag;
    console.log($(".sticky-container").data('theia') , activeTheia)
    function action() {
      if (selector.length > 0 && $(window).width() >= 1024 && activeTheia){
        if(!theiaFlaginit){
          selector.theiaStickySidebar({
            updateSidebarHeight: true,
            additionalMarginTop: 120
          })
          theiaFlaginit = true
        }
        theiaFlag = true
      } else {
        if (theiaFlag) {
          selector.find('.theiaStickySidebar').removeAttr('style')
          theiaFlag = false
        }
      }
    }
    action();
    $(window).on('resize', function() {
        util.debounce(action())
    })
  }

// - [4] owel carousel
  plugins.owel = function(){
    //vars
      var featuredSection = $(".featured-section"),
          owlactive       = false;
    //DESTROY
      function owldestroy(selector){
        $(selector)
          .trigger('destroy.owl.carousel')
          .removeClass('owl-carousel owl-loaded owl-carousel');
        $(selector)
          .find('.owl-stage-outer')
          .children()
          .unwrap()
      }
    //ACTION
      function action() {
        if (featuredSection.length >0 && $(window).width() <= 480 && featuredSection.children().length > 1) {
            featuredSliderConfig = {
              touchDrag: true,
              lazyLoad:true,
              rtl:true,
              responsive:{
                0:{
                  items:1
                },
                480:{
                  items:2
                }
              }
            }

            featuredSection.addClass('owl-carousel').owlCarousel(featuredSliderConfig);
            featuredSection.on('changed.owl.carousel', function(event) {
              win.trigger('activeslide')
            })
            owlactive = true
        }else{
          if (owlactive) {
            owldestroy('.featured-section')
            owlactive = false
          }
        }

      }
    //init
      action();
      $(window).on('resize', function() {
          util.debounce(action())
      })

    // index slider
    $('.index-slider').owlCarousel({
      touchDrag: true,
      lazyLoad:true,
      rtl:true,
      items:1,
      nav:false
    })
    $('.index-slider').on('changed.owl.carousel', function(event) {
      win.trigger('activeslide')
    })
  }
// - [5] AJAX
  plugins.ajax = function(axios){
    $(document).on('click', '[data-async]',function(e){
      e.preventDefault()
      that   = $(this)
      url    = that.data('endpoint')
      target = $(that.data('target'))
       axios.get(url)
        .then(function (response) {
          target.append(response.data)
          win.trigger('ajaxdone')
        })
        .catch(function (error) {
          console.log(error);
        });
    })  
  }

// - [6] focus search
  plugins.syles = function(){


    var scrollaction = $('.scrollaction');

    scrollaction.each(function() {
        that = $(this)
        if (!that.attr('data-scroll')) {
            that.attr('data-scroll', that.offset().top)
        }
    })

    function action(that) {

        val = parseInt(that.data('scroll')) || that.offset().top
        active = that.data('active') || null
        revrse = that.data('revrse') || null

        if ($(window).scrollTop() > val) {
            that.addClass('active-scroll')
            if (active != null) {
                all.styles.scrolloffset.methods[active]()
            }

        } else {
            that.removeClass('active-scroll')
            if (revrse != null) {
                all.styles.scrolloffset.methods[revrse]()
            }
        }
    }

    $(window).on('scroll startup', function() {
        scrollaction.each(function() {
            that = $(this)
            action(that)

        })
    })



    $('#headerSearchToggle').on('click', function(){
      search = $(this).parent()
      search.toggleClass('main-header__search--active')
      if(search.hasClass('main-header__search--active')){
        $('#headerinput').focus()
      }else{
        $('#headerinput').blur()
      }
    })
    // index search
    var introSection = $('#introSection')
    var introSection__title = $('#introSection__title')
    var introSection__close = $('#introSection__close')
    var introSection__searchInput = $('#introSection__searchInput')
    introSection__title.on('click', function(){
      tx = $(this).text()
      introSection.addClass('introSection--search')
      setTimeout(function(){

        introSection__searchInput.focus();
      },200)
    })
    introSection__close.on('click', function(){
      introSection.removeClass('introSection--search')

    })

    function guideFix (){
     var container       = $('#guideContainer .container')
      var guide           = $('#guide')
      var containerOffset = container.offset()
      var guideOfsset     = guide.offset()
      var max             = container.height() + guideOfsset.top
      var title           = $('#guideContainer ').find('.singlePageCard')
      var maxOffset       = guideOfsset.top < containerOffset.top ? containerOffset.top:guideOfsset.top
      var headerHeight    = parseInt($('.main-header').css('height'))
      var deltaHeights    = headerHeight + containerOffset.top + container.height() - guideOfsset.top - guide.height()
      $(window).on('expanded',function(){
        container       = $('#guideContainer .container')
        guide           = $('#guide')
        containerOffset = container.offset()
        guideOfsset     = guide.offset()
        max             = container.height() + guideOfsset.top
        title           = $('#guideContainer ').find('.singlePageCard')
        maxOffset       = guideOfsset.top < containerOffset.top ? containerOffset.top:guideOfsset.top
        headerHeight    = parseInt($('.main-header').css('height'))
        deltaHeights    = headerHeight + containerOffset.top + container.height() - guideOfsset.top - guide.height()
      })


      function action (){
        var windowScroll    = $(window).scrollTop()
        if(

          (windowScroll >= (maxOffset - headerHeight)) && (windowScroll < (container.height() + maxOffset ))

        ){
          val =  windowScroll - maxOffset + headerHeight
          val = val > deltaHeights ? deltaHeights -30 : val
          $('#guide').css({top:val + 'px'})
        
        }else{
          $('#guide').css({top:0 + 'px'})
        }
      }

      $(window).on('scroll',action)
      $(document).ready(action)
    }
    
    if( $(window).width() >= 1024 &&  $("#guideContainer").length >0 ) guideFix();

    if( $(window).width() >= 1024 &&  $(".featured-section--equal").length > 0 ){

         $(".featured-section--equal .featured-section__item").on('mouseenter',function(){

            sibllings = $(this).siblings('.featured-section__item')
            sibllings.addClass('featured-section__item--wid25')
            $(this).addClass('featured-section__item--wid50')
         })
         $(".featured-section--equal").on('mouseout',function(){
            sibllings = $(this).find('.featured-section__item')
            sibllings.removeClass('featured-section__item--wid25 featured-section__item--wid50 ')
         })
    }
  }

//[-] Run all plugins
  plugins.init = function(){
    plugins.wave()
    plugins.lazyload()
    plugins.masonry()
    plugins.theia()
    plugins.owel()
    plugins.ajax(axios)
    plugins.syles()
  }
  plugins.init()

