import Swiper from 'swiper'
const initPlugins = {
  swiper : function(){

    function activeSlides(domlist, activeIndex, length){
      Array.from(domlist).map((item, index)=>{
        if(index >= activeIndex && index <= length+activeIndex -1){
          item.classList.add('swiper-slide--active')
          item.classList.remove('swiper-slide--opacity')
        }else{
          item.classList.remove('swiper-slide--active')
          item.classList.add('swiper-slide--opacity')
        }
      })
    }
    
    var indexUpperCarousel = new Swiper ('#js-swiper-container--index', {
      slidesPerView: 4,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1279: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        959: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        639: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
      on:{
        init: function () {
          activeSlides(this.slides, this.activeIndex, this.params.slidesPerView)
          let swiper = this.$el
         
          let wraper = swiper[0].childNodes[3]
           wraper.classList.add('swiper-wrapper--init')
        },
        slideChange: function(){
          activeSlides(this.slides, this.activeIndex, this.params.slidesPerView)
        },
        resize: function(){
          activeSlides(this.slides, this.activeIndex, this.params.slidesPerView)
        }
      }
    })

    
    var qoutesCarousel = new Swiper ('#js-quote-section', {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      init: function () {
        let swiper = this.$el
        let wraper = swiper[0].childNodes[3]
        wraper.classList.add('quote-section__swiperWrapper--init')
      },
    }) 



  }
}

export default initPlugins

