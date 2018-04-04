
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


    Vue.component('fault-picture',{
        props:['items'],
        template:'<div><img class="faultPicture" v-for="item in items" :src="item.imgUrl" v-on:click="say(item.imgUrl)"></div>',
        data: function () {
                return { counter: this.total }
        },
        methods: {
            say:function (msg) {
                this.$emit('show-modal',msg,"fault");
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
                this.$emit('show-modal',msg,"resolution");
            }
        }
    })


    // Vue.component('modal-image-text',{
    //     template:'<div><img src="./image/fault2.jpg"><img src="./image/fault2.jpg">{{message}}{{message}}{{message}}{{message}}{{message}}{{message}}{{message}}</div>',
    //     props:['message']
    // })


    // Vue.component('modal-image-table',{
    //     template:'<div class="modal-table"><v-table :width="1000" :columns="columns" :table-data="tableData" :show-vertical-border="true"></v-table></div>',
    //     // props:['columns','tableData'],
    //     data:function () {
    //         return {
    //             tableData: [
    //                 {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
    //                 {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
    //                 {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
    //                 {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
    //                 {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
    //             ],
    //             columns: [
    //                 {field: 'name', title:'姓名', width: 100, titleAlign: 'center',columnAlign:'center'},
    //                 {field: 'tel', title: '手机号码', width: 260, titleAlign: 'center',columnAlign:'center'},
    //                 {field: 'hobby', title: '爱好', width: 330, titleAlign: 'center',columnAlign:'center'},
    //                 {field: 'address', title: '地址', titleAlign: 'center',columnAlign:'left'}
    //             ]
    //         }
    //     }
    // })

    // Vue.component('zen-modal',{
    //     template: `<div class="modal is-active">
		// 		  <div class="modal-background"></div>
		// 		  <div class="positionRelative">
		// 		  	<div class="box">
		// 		  	<!--<modal-image-table v-if="showmode==='resolution'" ></modal-image-table>-->
		// 		  	<modal-image-text   v-if="showmode==='fault'" :message="modalmessage"></modal-image-text>
		// 		  	</div>
		// 		  </div>
		// 		  <button class="modal-close" @click="$emit('fireclose')"></button>
		// 		</div>`,
    //     props:['modalmessage','showmode'],
    //     components:{
    //
    //     }
    // });

    Vue.component('table-modal',{
        template:"<div>" +
        "<el-dialog title='收货地址' :visible.sync='dialogtablevisible' :before-close=\"handleClose\">" +
        "<el-table :data='gridData'>" +
        "<el-table-column property='date' label='日期' width=\"150\"></el-table-column>" +
        "<el-table-column property='name' label='姓名' width='200'></el-table-column>" +
        "<el-table-column property='address' label='地址'></el-table-column>" +
        "</el-table>" +
        "</el-dialog>" +
        "</div>",
        data:function () {
            return {
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            };
        },
        props:['dialogtablevisible'],
        methods: {
            handleClose :function(done) {
                this.$emit('update:dialogtablevisible',false);
            }
        }

        // mothod:{
        //     dialogTableVisible:function () {
        //         return dialogtablevisible;
        //     }
        // }
    })


    Vue.component('image-modal',{
        template:"<div>" +
        "<el-dialog title='收货地址' :visible.sync='dialogtablevisible'>" +
        "<span>{{modalmessages}}</span>" +
        "</div>",
        props:['modalmessages','dialogtablevisible'],

    })



    var temp = new Vue({
        el:'#app',
        data: {
            showModal:false,
            mode:"default",
            modalmessage:"默认模态框内容",
            dialogtablevisible:false,
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
        },
        methods:{
            show:function (message,showmode) {
                alert(this.dialogtablevisible);
                this.modalmessage = message;
                this.mode = showmode;
                this.dialogtablevisible = true;
            },
            open:function () {
                this.$alert("<img src='./image/model.jpg'>", 'HTML 片段', {
                    dangerouslyUseHTMLString: true
                });
            }
        }
    })


}


