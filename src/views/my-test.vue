<template>
     <div>
     <my-article v-for='item in artList' :art-list='item'></my-article>
     </div>
</template>

<script>
import myArticle from "./views/component.vue"
module.exports= {
    components : {
        myArticle
    },
    created () {
        //比方说我们是从后台拿到的文章集合
        this.artList = [
            {name : 'ziksang1' , startTime : '1小时前' , content:'aaaaaaaaa',good : 1},
            {name : 'ziksang2' , startTime : '2小时前' , content:'bbbbbbbbb',good : 2},
            {name : 'ziksang3' , startTime : '3小时前' , content:'ccccccccc',good : 3},
            {name : 'ziksang4' , startTime : '4小时前' , content:'ddddddddd',good : 4}
        ]
     },
     data () {
         return {
             artList : [] 
         }
     }
}
</script>