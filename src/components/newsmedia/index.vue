<template>
  <div class="hello">
    <app-header></app-header>
      <div class="news--search">
          <div class="app"
             style="height:500px;width: 400px;margin: 0 auto;"
             v-infinite-scroll="loadMore"
             infinite-scroll-disabled="busy"
             infinite-scroll-distance="10">
             <div class="item-block" v-for="i in listSS">
               {{ i }}
             </div>
           </div>
      </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'

export default {
  name: 'newsmedia',
  data () {
    return {
      form: {
        data: [],
        busy: false,
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa'],
      gridData: [{
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      count: 0,
      listSS: [2, 3, 5, 6, 7, 8999]
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4 = []
      }
    },
    loadMore: function () {
      var self = this
      self.busy = true
      var app = document.querySelector('.app')
      var height = app.clientHeight
      app.style.height = height + 300 + 'px'
      // let arr = this.datas.push(this.count)
      self.count++
      self.listSS.push(self.count)
      self.busy = false
      // console.log('loading... ' + new Date())
      // setTimeout(function () {
      //   var app = document.querySelector('.app')
      //   var height = app.clientHeight
      //   app.style.height = height + 300 + 'px'
      //   // let arr = this.datas.push(this.count)
      //   self.count++
      //   self.listSS.push(self.count)
      //   console.log(self.count)
      //   console.log(typeof self.count)
      //   console.log(self.listSS)
      //   console.log('end... ' + new Date())
      //   self.busy = false
      // }, 1000)
    }
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

.el-form{
  padding: 1rem;
}

.el-form-item__content{
  margin: 0;
}

.news--search{
  // display: flex;
  // justify-content: space-between;
  padding: 1rem;
  &-keyword{
    width: 60%;
  }
}

.item-block{
  height: 12rem;
  border: 1px solid #eee;
  width: 3rem;
  background: #0366d6;
}
</style>
