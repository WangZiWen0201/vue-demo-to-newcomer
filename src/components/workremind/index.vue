<template>
  <div class="hello">
    <app-header></app-header>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        size="small"
        placeholder="选择日期"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
    <div class="ele-wrap">
      <el-button type="text" @click="open">back to login</el-button>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '../common/header.vue'
import appFooter from '../common/footer.vue'
import { mapActions } from 'vuex'
import { USER_SIGNOUT } from '../../store/storex'
export default {
  name: 'workremind',
  data () {
    return {
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value1: '',
      value2: ''
    }
  },
  components: {
    appFooter: appFooter,
    appHeader: appHeader
  },
  methods: {
    ...mapActions([USER_SIGNOUT]),
    submitout () {
      this.USER_SIGNOUT()
      this.$router.replace({ path: '/login' })
    },
    open () {
      console.log(this.value2)
      this.$msgbox({
        title: '退出确认',
        message: '确认退出登录吗',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '正在退出'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 1000)
            this.USER_SIGNOUT()
            this.$router.replace({ path: '/login' })
          } else {
            done()
          }
        }
      }).then(action => {})
    }
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

.block{
  margin-top: 5.6rem;
}
</style>
