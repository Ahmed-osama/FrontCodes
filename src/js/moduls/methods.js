import Velocity from 'velocity-animate'
import axios from 'axios'
import util from './util'
const methods = {
    favourite:function(event){
        let $el = event.target
        let id = $el.getAttribute('data-id');
        if(this.userloggedin){
            console.log('make fav request')
            $el.checked = true
        }else{
            //this.openModal('login')
            console.log('open modal login')
        }
    },

    screenDemintions:function(){
        this.winWidth = window.innerWidth
        this.winHeight = window.innerHeight
    },

    request:function(url){
        let val;
        this.loading = true;
        axios
        .get(url)
        .then((response) =>{
            val = response.data
            this.loading = false;
        })
        return val

    }, 
    scrolltop :function(){
        Velocity(document.body, "scroll", {offset: "0", mobileHA: false});
    },

    noScroll: function(bolean) {
        if (bolean) {
            document.body.classList.add('no-scrl')
            document.querySelector('html').classList.add('no-scrl')
        } else {
            document.body.classList.remove('no-scrl')
            document.querySelector('html').classList.remove('no-scrl')
        }
    },

    increasePageNumber:function(){
        this.pageNumber++
    },

    openFancyBox(e) {
        fancyBox(e.target, this.imageList);
    },

    slideToggle:util.toggle,

    domDataToArr : function(selector){
        let arr =[]
        let $elms = document.querySelectorAll(selector);

        Array.from($elms).forEach((elm)=>{
            arr.push({
                src:elm.getAttribute('data-src'),
                index:parseInt(elm.getAttribute('data-index')),
                caption:elm.getAttribute('title'),
            })
        })
        return arr
    },
    
    openAlbum:function(e){
        this.albumActive = true
        console.log(e.target)
        console.log(e.target.getAttribute('data-index'))
        this.albumCurrent =  parseInt(e.target.getAttribute('data-index'))
    },
    log:console.log,

    openVideo:function(e){
        
    },

    windowScroll(e){
        this.winScroll = window.scrollY;
    }

    
}

export default methods