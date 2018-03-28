
// importScripts("./vue.js");


window.onload = function () {

    var childNode = {
        template:'<div ><img v-for="(item,index) in items" :src="item.imgUrl" v-on:click="show()"></div>',
        props:['items'],
        methods:{
            show:function () {
               this.showModal = true;
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
                ]
            }
        },
    }


    Vue.component('div-image',{
        props:['items'],
        // template:'<p @click="say()">{{counter}}</p>',
        template:'<div><img v-for="item in items" :src="item.imgUrl" v-on:click="say()"></div>',
        data: function () {
                return { counter: this.total }
        },
        methods: {
            say:function () {
                this.$emit('show-modal')
            }
        }
    })


    Vue.component('zen-modal',{
        template: `<div class="modal is-active">
				  <div class="modal-background"></div>
				  <div id="app" class="modal-content_new">
				  	<div id="app1" class="box_new">
				  		<span>默认模态框内容</span>
				  	</div>
				  </div>
				  <button class="modal-close" @click="$emit('fireclose')"></button>
				</div>
			`
    });


    var temp = new Vue({
        el:'#app',
        data: {
            showModal:false,
            items: [
                {imgUrl:"./image/01.jpg"},
                {imgUrl:"./image/02.jpg"},
                {imgUrl:"./image/03.jpg"},
                {imgUrl:"./image/04.jpg"},
            ]
        },
        components:{
            // 'parent':parentNode
        },
        methods:{
            show:function () {
                this.showModal = true;
            },
            say:function () {
                alert(111);
            },
        }
    })




}


