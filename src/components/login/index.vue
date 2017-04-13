<template>
  <div class="app-login">
    {{msg}}
    <form class="login" v-on:submit.prevent="submit">
			<div class="line">
				<div v-show="btn && !form.id">id不能为空</div>
				<input type="number" placeholder="输入你的id" v-model="form.id">
			</div>
			<div class="line">
				<div v-show="btn && !form.name">用户名不能为空</div>
				<input type="text" placeholder="输入你的用户名" v-model="form.name">
			</div>
			<div class="line">
				<div v-show="btn && !form.age">age should be none</div>
				<input type="text" placeholder="age" v-model="form.age">
			</div>
			<button>登录</button>
		</form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../../store/storex'
export default {
  data () {
    return {
      msg: 'login here',
      btn: false,
      form: {
        id: '',
        name: '',
        age: ''
      }
    }
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    submit () {
      this.btn = true
      if (!this.form.id || !this.form.name || !this.form.age) return
      this.USER_SIGNIN(this.form)
      this.$router.replace({ path: '/newsmedia' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
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

.login {
	padding: 50px;
	text-align: center;
	.line {
		padding: 5px;
		input {
			padding: 0 10px;
			line-height: 28px;
		}
	}
	button {
		padding: 0 20px;
		margin-top: 20px;
		line-height: 28px;
	}
}
</style>
