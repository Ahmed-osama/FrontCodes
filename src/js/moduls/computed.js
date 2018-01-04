
export default {
    videoScrolled:function(){
        let state = this.winScroll > 300 && this.videoActive  && this.winWidth <= 480?true:false
        return state
    }
}