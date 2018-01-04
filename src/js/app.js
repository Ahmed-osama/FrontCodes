import Vue from './moduls/vue'
import initPlugins from './moduls/init'
import util from './moduls/util'

//plugins
    import axios from 'axios'
    import Hammer from 'hammerjs'
    import VueLazyload from 'vue-lazyload'



//vue objects
    import state from './moduls/state'
    import methods from './moduls/methods'
    import watch from './moduls/watch'
    import computed from './moduls/computed'

//directives\
    import './moduls/directives/clickoutside'
    import './moduls/directives/sticky'

//componenets
    import './moduls/componenet/dropdown'
    import './moduls/componenet/album-popup'
    import './moduls/componenet/video'
    import './moduls/componenet/modal'


//plugins init

    Vue.use(VueLazyload, {
        preLoad: 1.3,
        error: '/img/placeholder-image.png',
        loading: '/img/spacer.png',
        attempt: 1,
        
    })



var app = new Vue({
    el:'#js-app',
    data:state,
    methods,
    computed,
    watch,
    mounted(){
        let self = this;
        setTimeout(initPlugins.swiper, 300);
        window.addEventListener('resize', this.screenDemintions);
        this.albumArr = this.domDataToArr('.post-view__link--fancy, .cover__icon--zoom');

        //sidemenu touch events
            let win = window
            let windowArea = new Hammer(win)
            let swipeDir = !util.ltr?'panright':'panleft'
            let swipeDirRev = util.ltr?'panright':'panleft'
            // windowArea.on(swipeDir, function(){
            //     self.sidemenu = true
            // })
            // windowArea.on(swipeDirRev, function(){
            //     self.sidemenu = false
            // })


        //window scroll
            window.addEventListener('scroll',util.debounce(self.windowScroll))
        
        //video activce on mobile devices
            console.log(
                this.winWidth <= 480 ,
                util.ios(),
                util.touch()
            )
            if((this.winWidth <= 480 || util.ios()) && util.touch()) this.videoActive = true
       
    }
})