<template>
  <div class="app-header">
    <div class="title--news" v-show="$route.name == 'newsmedia'">
      <div class=""></div>
      <div class="">新闻媒体</div>
      <div class="">新建</div>
    </div>
    <div class="title--info"  v-show="$route.name == 'infomation'">
      <div class="el-icon-arrow-left"></div>
      <div class="">信息录入</div>
      <div class="">新建</div>
    </div>
    <div class="title--work"  v-show="$route.name == 'workremind'">
      <div class="">搜索</div>
      <div class="">工作提醒</div>
      <div class="">新建</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    linkToPath (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
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
.app-header{
  height: 2.6rem;
  padding: 0 0.8rem;
  background-color: #20a0ff;
  .title--news,.title--info,.title--work{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 2.6rem;
  }
}
</style>
