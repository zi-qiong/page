<template>
<div>
  <el-card class="box-card">
    <el-form :rules="rules" :model="ruleForm" ref="ruleForm" status-icon label-width="80px">
      <el-form-item label="用户名：" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-row>
        <el-button class="but" type="primary" @click="login('ruleForm')">changePassword</el-button>
      </el-row>
      <el-row>
        <router-link style="float: right" to="/login">back</router-link>
      </el-row>
    </el-form>
  </el-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }
          console.log(params);
          this.$http.post('/api/login/changeAccount', params)
            .then((response) => {
              if (response.ok) {
                this.$router.push({ path: 'login' })
              }
              console.log(response);
            })
            .catch((reject) => {
              console.log(reject)
            })
        }
      })
    }
  }
}
</script>
<style>
.box-card {
  width: 380px;
  margin: 10% auto;
}
a {
  color: #409EFF;
  text-decoration: inherit;
  font-size: 12px;
}
.but {
  width: 76%;
  float: right;
  margin: 20px 0;
}
</style>
