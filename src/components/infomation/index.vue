<template>
  <div class="hello">
    <app-header></app-header>
    <!-- <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="search">搜索</el-button> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
export default {
  name: 'infomation',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
