<template>
  <div>
    <img src="./assets/logo.png">
    <div class="fault">
      <img :src="imgsrc"  v-for="imgsrc in imginformation" @click="showinfo(imgsrc,'fault')">
    </div>
    <div class="resolution">
      <img :src="imgsrc"  v-for="imgsrc in imginformation" @click="showinfo(imgsrc,'resolution')">
      <!-- <img :src="imginformation"> -->
      <!-- <img src="./assets/logo.png">
      <img src="./assets/logo.png">
      <img src="./assets/logo.png"> -->
    </div>
    <modal :dialogtablevisible="dialogtablevisible" :showmode="showmode" @updatevalue="updatevalue"></modal>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import modal from './Modal'

export default {

  name: 'App',
  data(){
    return {
        imgsrcs:[
          "logo.png",
          "logo.png",
          "logo.png"
        ],
        dialogtablevisible:false,
        showmode:"default",
        imginfo:"logo.png",
    }
  },
  components:{
    modal
  },
  computed:{
    imginformation:function(){
      var imgtemp = [];
      for(var i = 0;i< this.imgsrcs.length;i++)
      {
        imgtemp[i]=require("./assets/" + this.imgsrcs[i]);
      }
      return imgtemp;
    }
  },
  methods:{
    show(){
      this.dialogtablevisible = true;
      
    },
    showinfo(imgsrc,type){
      this.dialogtablevisible = true;
      this.showmode=type;
      this.imginfo = imgsrc;
      
    },
    updatevalue(value){
      this.dialogtablevisible = value;
    }
  }

}
</script>

<style>
  .fault{
    text-align: center;
    margin-top: 50px;
    position: relative;
    margin-bottom: 200px;
  }
  .resolution{
    text-align: center;
    position: relative;
  }
  img{
    position: relative;
    margin-left: 50px;
  }
</style>
