<template>
<el-dialog title="information" width=80% :visible.sync="normalizedSize"  :before-close="handleClose">
 <div v-if="showmode === 'resolution'">
  <el-table :data="items">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <img :src="props.row.img">
        </el-form>
      </template>
    </el-table-column>
    <el-table-column property="title" label="title" width="150"></el-table-column>
    <el-table-column property="price" label="price" width="200"></el-table-column>
    <el-table-column label="img" height="150">
      <!-- <template scope="scope">
        <img src="./assets/logo.png">
      </template> -->
    </el-table-column>
  </el-table>
  </div>
  <div v-else>
      <img src="./assets/logo.png">
  </div>
</el-dialog>
</template>
<script>

export default {
  data(){
      return {
          items:[]
      }
  },
  created () {
      this.$http.get('/api/goods').then((data) => {
      this.items = data.body.data;
    //   console.log(this.items);
      })
  },
  props:['dialogtablevisible','showmode'],
  computed:{
    normalizedSize:function(){
      return this.dialogtablevisible;
    }
  },
  methods:{
            handleClose :function(done) {
                done();
                this.$emit('updatevalue',false);
            }
  }
}
</script>

<style>
  .modalStyle{
    overflow:scroll
  }
</style>
