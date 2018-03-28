
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
        template:'<div><img class="faultPicture" v-for="item in items" :src="item.imgUrl" v-on:click="say(item.imgUrl)"></div>',
        data: function () {
                return { counter: this.total }
        },
        methods: {
            say:function (msg) {
                this.$emit('show-modal',msg);
            }
        }
    })


    Vue.component('resolution-image',{
        props:['resolutionitems'],
        template:'<div><img class="resolutionPicture" v-for="item in resolutionitems" :src="item.imgUrl" v-on:click="say(item.imgUrl)"></div>',
        data: function () {
            return { counter: this.total }
        },
        methods: {
            say:function (msg) {
                this.$emit('show-modal',msg);
            }
        }
    })


    Vue.component('zen-modal',{
        template: `<div class="modal is-active">
				  <div class="modal-background"></div>
				  <div class="modal-content_new">
				  	<div class="box_new">
				  	    <img src="./image/fault1.jpg">
				  		<span>{{modalmessage}}</span>
				  	</div>
				  </div>
				  <button class="modal-close" @click="$emit('fireclose')"></button>
				</div>`,
        props:['modalmessage'],
    });

    var temp = new Vue({
        el:'#app',
        data: {
            showModal:false,
            modalmessage:"默认模态框内容",
            items: [
                {imgUrl:"./image/fault1.jpg"},
                {imgUrl:"./image/fault2.jpg"},
                {imgUrl:"./image/fault3.jpg"},
                {imgUrl:"./image/fault4.jpg"},
            ],
            resolutionitems:[
                {imgUrl:"./image/resolution1.jpg"},
                {imgUrl:"./image/resolution2.jpg"},
                {imgUrl:"./image/resolution3.jpg"},
                {imgUrl:"./image/resolution4.jpg"},
            ]
        },
        components:{
            // 'parent':parentNode
        },
        methods:{
            show:function (message) {
                this.modalmessage = message;
                this.showModal = true;
            },
            say:function () {
                alert(111);
            },
        }
    })


}


