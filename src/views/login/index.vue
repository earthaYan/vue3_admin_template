<template>
  <div id="login_wrapper">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="loginFormRules"
          ref="loginFormRef"
        >
          <h1 class="title">Hello</h1>
          <h2 class="sub_title">欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="login_btn"
              size="default"
              @click="handleLogin"
              :loading="loading"
            >
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
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/users'
import { useRouter } from 'vue-router'
import {
  ElNotification,
  FormRules,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  FormInstance,
  ElRow,
  ElCol,
} from 'element-plus'
import { getTimePeriod } from '@/utils/time'
import { UserLoginParams } from '@/api/user/index.type'

let userStore = useUserStore()
let $router = useRouter()
const loginForm = reactive({
  username: 'admin',
  password: 'atguigu123',
})
const loading = ref(false)

const loginFormRules = reactive<FormRules<UserLoginParams>>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'change' },
    { min: 5, max: 10, message: '用户名长度必须在6-10之间', trigger: 'change' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'change' },
    { min: 6, max: 15, message: '密码的长度至少6位', trigger: 'change' },
  ],
})
const loginFormRef = ref<FormInstance>()
const handleLogin = async () => {
  try {
    // 保证表单项校验通过再发请求
    await loginFormRef.value?.validate()
    loading.value = true
    await userStore.handleUserLogin(loginForm)
    ElNotification({
      type: 'success',
      title: `HI,${getTimePeriod()}好`,
      message: '欢迎回来',
    })
    $router.push('/')
  } catch (error) {
    ElNotification({
      type: 'error',
      message: error as string,
    })
  } finally {
    loading.value = false
  }
}
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
