<template>
  <div class="home">
    <div class="" v-if="logintype == true">
      <news-media></news-media>
      <app-footer></app-footer>
    </div>
    <div class="" v-else>
      <app-login></app-login>
    </div>
  </div>
</template>

<script>
import appLogin from './login/index.vue'
import appFooter from './common/footer.vue'
import newsMedia from './newsmedia/index.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      logintype: false
    }
  },
  methods: {
    linkToPath (path) {
      this.$router.push({ path: path })
    }
  },
  components: {
    appFooter: appFooter,
    newsMedia: newsMedia,
    appLogin: appLogin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">
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
