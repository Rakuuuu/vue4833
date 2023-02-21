<template>
  <div>
    <a-layout>
      <a-layout-header class="nav">
        <a-space class="left-content-space">
          <a-avatar
              class="logo"
              :size="64"
              shape="square"
          >Logo</a-avatar>
        </a-space>
      </a-layout-header>
      <a-layout-content
        class="layout-content"
      >
        <img
          src="../../../assets/img/bg/login-bg.jpg"
          alt=""
          class="bg-img"
        >
        <div class="login-form-area">
          <a-layout class="login-form-area-inner">
            <a-layout-header>
              <a-typography>
                <a-typography-title
                    type="secondary"
                    class="title"
                    :heading="2"
                >
                  用户登录
                </a-typography-title>
              </a-typography>
            </a-layout-header>
            <a-layout-content class="login-form-area-inner-content">
              <a-form
                  layout="vertical"
                  class="form"
                  v-model="loginForm"
              >
                <a-form-item>

                  <a-input
                      placeholder="账号/用户名/邮箱"
                      allow-clear
                      @clear="clearLoginForm"
                      v-model="loginForm.account"
                  >
                    <template #prefix>
                      <icon-user
                          :size="16"
                          class="form-icon"
                      />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item>

                  <a-input-password
                      placeholder="密码"
                      v-model="loginForm.password"
                  >
                    <template #prefix>
                      <icon-lock
                          :size="16"
                          class="form-icon"
                      />
                    </template>
                  </a-input-password>
                </a-form-item>
                <a-form-item>
                  <a-checkbox v-model="loginForm.rememberPassword">记住密码</a-checkbox>
                </a-form-item>
                <a-form-item>
                  <a-button
                      type="primary"
                      long
                      @click="loginConfirm"
                  >登录
                  </a-button>
                </a-form-item>
              </a-form>
            </a-layout-content>
            <a-layout-footer class="login-layout-footer">
              没有账号？
              <a-button
                  type="text"
                  @click="this.$parent.$router.push({path:'/register'})"
              >
                点击注册
              </a-button>
            </a-layout-footer>
          </a-layout>
        </div>
      </a-layout-content>
      <a-layout-footer class="footer">

      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import {IconLock, IconUser} from "@arco-design/web-vue/es/icon";

export default {
  name: "LoginPage",
  data(){
    return{
      windowInnerHeight:window.innerHeight,
      windowInnerWidth:window.innerWidth,
      loginForm:{
        account:'',
        password:'',
        rememberPassword:false
      }
    }
  },
  components:{
    IconUser,
    IconLock,
  },
  methods:{
    clearLoginForm(){
      this.loginForm.account='';
      this.loginForm.password=''
    },
    loginConfirm(){
      this.$parent.$router.push({path:'/home/manage'})
    }
  }
}
</script>

<style scoped>
.nav{
  width: 100%;
  height: 96px;
}

.left-content-space{
  align-self: center;
  height: 96px;
  padding: 0 0 0 16px;
}

.logo {
  margin: 0 8px 0 0;
}

.layout-content{
  overflow: hidden;
  padding: 0;
  position: relative;
}

.bg-img{
  height: v-bind(windowInnerHeight-96 + 'px');
  margin: 0;
  padding: 0;
}

.login-form-area{
  height: v-bind(windowInnerHeight-196 + 'px');
  width: v-bind(windowInnerWidth/2.5-64 + 'px');
  position: absolute;
  right: 64px;
  top: 50%;
  transform: translate(0,-50%);
  z-index: 999;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.15);
  border-radius: 5px;
}

.login-form-area-inner{
  height: 100%;
}

.login-form-area-inner-content{
  display: flex;
}

.title{
  text-align: center;
  margin: 24px 0;
  font-weight: bolder;
}

.form{
  width: 70%;
  margin: 0 auto;
  align-self: center;
}

.form-icon{
  color: #f68436;
}

.login-layout-footer{
  padding: 0 0 24px 0;
  margin: auto;
}

.footer{
  height: 96px;
}
</style>