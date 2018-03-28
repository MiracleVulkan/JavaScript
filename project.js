
// importScripts("./vue.js");


window.onload = function () {

    var childNode = {
        template:'<div ><img v-for="(item,index) in items" :src="item.imgUrl" v-on:click="say(item.imgUrl)"></div>',
        props:['items'],
        methods:{
            say:function (message) {
                alert(message);
            }
        }
    }

    var parentNode = {
        template:'<div><child :items="items"></child></div>',
        components:{'child':childNode},

        data: function () {
            return {
                items: [
                    {imgUrl:"./image/01.jpg"},
                    {imgUrl:"./image/02.jpg"},
                    {imgUrl:"./image/03.jpg"},
                    {imgUrl:"./image/04.jpg"},
                ]
            }
        },
    }

    var temp = new Vue({
        el:'#app',
        components:{
            'parent':parentNode
        },
        methods: {
            say: function (message) {
                alert(message)
            }
        }
    })


    Vue.component('zen-modal',{
        template: `<div class="modal is-active">
				  <div class="modal-background"></div>
				  <div id="app" class="modal-content_new">
				  	<div id="app1" class="box_new">
				  		<span>默认模态框内容sssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdffffffffffffffffff</span>
				  	</div>
				  </div>
				  <button class="modal-close" @click="$emit('fireclose')"></button>
				</div>
			`
    });


}


