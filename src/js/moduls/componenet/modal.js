import Vue from '../vue'
Vue.component('modal', {
    template: `
        <div class="modal_-closer" @click='close' :class='{"modal_-closer--active":show}'>
            <div class="modal" @click.stop :class='{"modal--active":show}'>
                <div class="modal__head"><span class="modal__headtitle">
                    <slot name="header">
                    </slot>
                    </span>
                        <a class="modal__close" @click.prevent="close">
                            <svg class="u-icon">
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </a>
                    </div>
                <div class="modal__body">
                    <slot name="body"></slot>
                </div>
                <div class="modal__footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    `,
    props:{
        show:{
            type:Boolean
        }
    },
    methods: {
        close: function() {
            this.$emit('close')
        }
    }
})