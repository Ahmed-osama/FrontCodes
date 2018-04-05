import util from '../util'
import Vue from '../vue'
export default Vue.component('dropdown', {
    template:`
    <div class="dropdown" @keyup.esc="close" v-click-outside="close"><a class="dropdown__button btn" href="#" @click.prevent="open"> 
        <svg class="icon btn__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
        <slot name="title" v-if="!options"></slot>
        <span v-if="options">{{selected}}</span>
        </a>
        <transition name="expand-fade" mode="out-in">
            <ul class="dropdown__list dropdown__list--dd" v-show="active">
            <slot name="content" v-if="!options"></slot>
            <li class="dropdown__item dropdown__item--opt"
                :class="{'is-selected' : opt == selected}"
                v-for="opt in options"
                v-if="options.length &gt; 0"
                @click="setopt(opt)"
            >{{opt.alias}}</li>
            </ul>
        </transition>
    </div>
    `,
    props: {
        options: {
            type: Array,
        },
        placeholder: {
            type: String
        }
    },
    data: function() {
        return {
            active: false,
            selected: this.selected || this.placeholder || ((util.ltr)?"filter":"تصفية")
        }
    },
    methods: {
        close: function() {
            this.active = false;
        },
        open: function() {
            this.active = true;
        },
        setopt: function(opt) {
            this.selected = opt.alias
            this.$emit('input', opt.value)
            this.close();
        }
    }
})