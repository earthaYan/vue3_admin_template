<template>
  <div id="login_wrapper">
    <el-row>
      <el-col :span="12" :xs="0">占位文字</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1 class="title">Hello</h1>
          <h2 class="sub_title">欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password="true"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_btn" size="default">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { reactive } from 'vue'
const loginForm = reactive({
  username: '',
  password: '',
})
</script>
<style lang="scss" scoped>
#login_wrapper {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    width: 80%;
    position: relative;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    .title {
      color: $white;
      font-size: 40px;
    }
    .sub_title {
      color: $white;
      font-size: 20px;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
