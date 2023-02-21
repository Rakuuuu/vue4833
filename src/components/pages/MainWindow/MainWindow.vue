<template>
  <div>
    <a-layout class="main-window">
      <a-layout-header class="nav-bar">
        <a-row>
          <a-col :span="8" class="left-content">
            <div>
              <a-space class="left-content-space">
                <a-avatar
                    class="logo"
                    shape="square"
                >Logo</a-avatar>
                <h3>动态密码管理系统</h3>
                <a-divider
                    direction="vertical"
                    :margin="4"
                />
                <h3>DPSAS</h3>
              </a-space>
            </div>
          </a-col>
          <a-col
              :span="8"
              :offset="8"
              class="right-content"
          >
            <a-space class="right-content-space">
              <a-menu
                  :selected-keys="menuSelectedKey"
                  mode="horizontal"
                  class="right-content-space-menu"
              >
                <a-menu-item key="index" @click="navigateTo('index')">主页</a-menu-item>
                <a-menu-item key="manage" @click="navigateTo('manage')">管理</a-menu-item>
                <a-menu-item key="my" @click="navigateTo('my')">我的</a-menu-item>
              </a-menu>
              <a-dropdown
                  trigger="hover"
                  v-if="isLogin"
                  class="avatar"
              >
                <a-avatar>
                  <img
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
                    alt="avatar"
                  >
                </a-avatar>
                <template #content>
                  <a-doption @click="this.$parent.$router.push({path:'/login'})">
                    <template #icon><icon-import/></template>
                    退出登录
                  </a-doption>
                </template>
              </a-dropdown>
              <a-avatar
                  class="avatar"
                  @click="this.$parent.$router.push({path:'/login'})"
                  v-else
              >
                未登录
              </a-avatar>
            </a-space>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>

import {IconImport} from "@arco-design/web-vue/es/icon";

export default {
  name: "MainWindow",
  data(){
    return{
      menuSelectedKey:[this.$route.matched[1].name],
      layoutHeight:window.innerHeight+'px',
      isLogin:true
    }
  },
  methods:{
    navigateTo(route){
      this.menuSelectedKey[0]=route;
      this.$router.push({path:route})
    }
  },
  mounted() {
  },
  components:{
    IconImport
  }
}
</script>

<style scoped>
.main-window{
  width: 100%;
  height: v-bind(layoutHeight);
  display: block;
  position: relative;
}

.nav-bar{
  height: 64px;
  width: 100%;
  box-shadow: 0 0 20px 0  rgba(0,0,0,0.15);
}

.left-content{
  height: 64px;
  float: left;
  display: flex;
  padding: 0 0 0 16px;
}

.left-content-space{
  align-self: center;
  height: 64px;
}

.logo {
  margin: 0 8px 0 0;
}

.right-content{
  display: flow;
  height: 64px;
}

.right-content-space{
  float: right;
  height: 64px;
  padding: 0 16px 0 0;
}

.right-content-space-menu{
}

.avatar :hover{
  cursor: pointer;
}

.layout-content{

}

</style>