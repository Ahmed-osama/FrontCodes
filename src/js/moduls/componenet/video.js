import util from '../util'
import Vue from '../vue'


export default Vue.component('video-frame', {
    template:`
        <div class='videoFrame'>

            <iframe v-if='type == "youtube"'
                class='videoFrame__iframe'
                ref="iframe"
                width="100%"
                height="100%"
                :src="url"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen
                v-cloak
            ></iframe>

            <iframe 
                else-if='type == "facebook"'
                :src="url"
                ref="iframe"
                class='videoFrame__iframe'
                width="100%"
                height="100%"
                v-cloak
                frameBorder="0"
            ></iframe>


        </div>
    `,
    props: {
        src: {
            type: String,
        },
        autplay:{
            type:Boolean
        }
    },
    data: function() {
        return {
           winWidth:320,
           width:0
        }
    },
    computed:{
        url:function(){
            let quemark = this.src.includes('?')?"&":"?"
           let autoplay =this.autplay?quemark+'autoplay=1':''
           return this.src + autoplay
        },
        height:function(){
            let height = (315/560) * this.width ;
            return  height
        },
        type:function(){
            if(this.src.includes('youtube')) return "youtube"
            if(this.src.includes('facebook')) return "facebook"

        }
    },
    watch:{

    },
    methods: {
       close(){
            console.log('closed video')
       },
      
    },
    mounted(){
        let self= this;
        let iframe = this.$refs.iframe;
        this.winWidth = window.innerWidth
        this.width = iframe.offsetWidth

        console.log(iframe)

        window.addEventListener('resize',function(){
            self.winWidth = window.innerWidth
            self.width = self.$refs.iframe.offsetWidth
        })

        if(this.type == 'facebook'){
            let cover = document.querySelector('.cover--videoActivated')
            cover.classList.add('cover--videoFacbook')
        }
    }
})