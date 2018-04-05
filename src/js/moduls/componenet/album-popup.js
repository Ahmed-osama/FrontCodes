import util from '../util'
import Vue from '../vue'
import Swiper from 'swiper'
import Hammer from 'hammerjs'

export default Vue.component('album', {
    template:`
        <div ref='swiperContainer' class="albumPop" @keyup.esc='close' @click.prevent='close' @keyup.left='prev' @keyup.right='next'>
            <div @click.stop='' class="container albumPop__swiperContainer swiper-container" ref='swiper'>
                <div class="swiper-wrapper albumPop__swiperWraper">
                    <div class="swiper-slide albumPop__slide" v-for='img in images' @click.prevent='slideTo(img.index)'>
                        <img :src='img.src' class="albumPop__slideImg">
                        <h4 class="albumPop__slideCaption">
                            {{img.caption}}
                        </h4>
                    </div>
                </div>
                <div class="albumPop__current">
                    <span class="orange_color">{{current+1}}</span>/
                    <span class="white_color">{{images.length}}</span>
                </div>
            </div>
        </div>
    `,
    props: {
        images: {
            type: Array,
        },
        current:{
            type:Number
        }
        
    },
    data: function() {
        return {
            swiper:''
        }
    },
    watch:{

    },
    methods: {
        close(){
            this.$emit('close', false)
        },
        slideTo(index){
            this.swiper.slideTo(index, 300, null)
        },
        prev(){
            this.swiper.slidePrev(300, null)
        },
        next(){
            this.swiper.slideNext(300, null)
       }
    },
    mounted(){
        let self = this;
        var albumSwiper = new Swiper (self.$refs.swiper, {
            slidesPerView: 1,
            spaceBetween: 0,
            on:{
                slideChange:function(){
                    self.$emit('changeindex', this.activeIndex)
                }
            }
        }) 
        this.swiper = albumSwiper
        setTimeout(window.resize, 500)
        this.slideTo(this.current)

        window.addEventListener('keyup',function(e){
            e.preventDefault();
            if(e.key=="ArrowLeft" && (util.lang()).trim() == 'ltr') self.prev();
            if(e.key=="ArrowLeft" && (util.lang()).trim() == 'rtl') self.next();

            if(e.key=="ArrowRight" && (util.lang()).trim() == 'ltr') self.next();
            if(e.key=="ArrowRight" && (util.lang()).trim() == 'rtl') self.prev();

            if(e.key=="Escape") self.close();
        })

        
        let albumOver = self.$refs.swiperContainer
        let albumArea = new Hammer(albumOver)
        
        albumArea.get('swipe').set({
            direction: Hammer.DIRECTION_ALL,
            threshold: 1, 
            velocity:0.1
        });
        albumArea.on('swipeup swipedown',function(){
            self.close()
        })
    }
})