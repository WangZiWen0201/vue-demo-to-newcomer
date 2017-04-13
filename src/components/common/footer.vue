<template>
  <div class="app-footer">
    <div class="app-footer-wrap">
      <div @click="linkToPath('newsmedia')" :class="{'active':$route.name == 'newsmedia'}"><p><i class="el-icon-menu"></i></p>{{this.newsmedia}}</div>
      <div @click="linkToPath('infomation')" :class="{'active':$route.name == 'infomation'}"><p><i class="el-icon-document"></i></p>{{this.infomation}}</div>
      <div @click="linkToPath('workremind')" :class="{'active':$route.name == 'workremind'}"><p><i class="el-icon-date"></i></p>{{this.workremind}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newsmedia: '新闻媒体',
      infomation: '信息录入',
      workremind: '工作提醒'
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
<style rel="stylesheet/scss" lang="scss">
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
.active{
  color: #fff;
}
.app-footer{
  position: fixed;
  bottom: 0;
  z-index: 500;
  width: 100%;
  background-color: #f7f7fa;
  .app-footer-wrap{
    display: flex;
    justify-content: space-around;
    background: #D3DCE6;
    border-bottom: 1px solid #58B7FF;
    outline: none;
    color: #20A0FF;
    div{
      padding: 0 10px;
    }
    p{
      margin: 0;
      padding: 6px 0;
    }
  }
}
</style>
