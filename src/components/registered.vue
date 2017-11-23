<template>
<div>
  <el-card class="box-card">
    <el-form :rules="rules" :model="ruleForm" ref="ruleForm" status-icon label-width="100px">
      <el-form-item label="用户名：" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="repPassword">
        <el-input type="password" v-model="ruleForm.repPassword"></el-input>
      </el-form-item>
      <el-row>
        <el-button class="but" type="primary" @click="register('ruleForm')">register</el-button>
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
        password: '',
        repPassword: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        repPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    register (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.password !== this.ruleForm.repPassword) {
            this.$message.error({
              message: '两次输入的密码不相同'
            });
          } else {
            let params = {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            }
            console.log(params);
            this.$http.post('/api/login/createAccount', params)
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
  width: 70%;
  float: right;
  margin: 20px 0;
}
</style>
