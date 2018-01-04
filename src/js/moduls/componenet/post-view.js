export default Vue.component('dropdown', {
    template:`
        <div class="post-view  post-view--over "><a class="post-view__link" href alt="محمد بن يحيى النينوي و حوار خاص: &quot;المحبة&quot; علاج للأفكار المتطرفة"></a>
            <div class="post-view__img">
            <div class="post-view__padge"><a href="#"> حلقة 12</a><a href="#"> من يعرف</a></div><span class="post-view__icon">
                <svg class="u-icon post-view__icon-inner">
                <use xlink:href="#icon-play"></use>
                </svg></span><img class="lazy" alt="محمد بن يحيى النينوي و حوار خاص: &quot;المحبة&quot; علاج للأفكار المتطرفة" v-lazy="&quot;img/content/3.jpg&quot;" src="img/spacer.png">
            </div>
            <div class="post-view__caption" alt="محمد بن يحيى النينوي و حوار خاص: &quot;المحبة&quot; علاج للأفكار المتطرفة">
            <h4 class="post-view__maxTitle"><span>محمد بن يحيى النينوي و حوار خاص: &quot;المحبة&quot; علاج للأفكار المتطرفة</span><span class="post-view__fav">
                <input type="checkbox" @click.prevent="favourite($event)" data-id="#fdas123">
                <svg class="u-icon undefined">
                    <use xlink:href="#icon-fav"></use>
                </svg></span>
            </h4>
            <div class="post-view__meta"><span class="date"><span>الإثنين 12 مايو 2017</span></span><span class="post-view__writer"> <span>بقلم :  </span><a href="#">رباب حسن </a></span></div>
            </div>
        </div>
    `,
    props: {
       
    },
    data: function() {
        return {
            
        }
    },
    methods: {
    }
})