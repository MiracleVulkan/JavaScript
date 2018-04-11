<template>
  <el-table
    :data="items"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="title"
      label="title"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="price"
      width="180">
    </el-table-column>
    <el-table-column class="success-row"
      prop="img"
      label="img">
    </el-table-column>
  </el-table>
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
      console.log(this.items);
      })
  }
}
</script>
