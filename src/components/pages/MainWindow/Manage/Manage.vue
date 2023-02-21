<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider class="sider"
        :collapsed="menuCollapsed"
      >
        <a-menu
            class="menu"
            :default-open-keys="['0']"
            :default-selected-keys="['0_2']"
        >
          <a-sub-menu key="0">
            <template #icon><icon-apps></icon-apps></template>
            <template #title>Navigation 1</template>
            <a-menu-item key="0_0">Menu 1</a-menu-item>
            <a-menu-item key="0_1">Menu 2</a-menu-item>
            <a-menu-item key="0_2">Menu 3</a-menu-item>
            <a-menu-item key="0_3">Menu 4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="1">
            <template #icon><icon-bug></icon-bug></template>
            <template #title>Navigation 2</template>
            <a-menu-item key="1_0">Menu 1</a-menu-item>
            <a-menu-item key="1_1">Menu 2</a-menu-item>
            <a-menu-item key="1_2">Menu 3</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="2">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>Navigation 3</template>
            <a-menu-item key="2_0">Menu 1</a-menu-item>
            <a-menu-item key="2_1">Menu 2</a-menu-item>
            <a-sub-menu key="2_2" title="Navigation 4">
              <a-menu-item key="2_2_0">Menu 1</a-menu-item>
              <a-menu-item key="2_2_1">Menu 2</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-sider
          class="collapse-button-sider"
          width="32"
      >
        <a-button
            v-if="!menuCollapsed"
            class="collapse-button"
            type="primary"
            @click="menuCollapsed=!menuCollapsed"
        >
          <template #icon>
            <icon-left/>
          </template>
        </a-button>
        <a-button
            v-else
            class="collapse-button"
            type="primary"
            @click="menuCollapsed=!menuCollapsed"
        >
          <template #icon>
            <icon-right/>
          </template>
        </a-button>
      </a-layout-sider>
      <a-layout-content class="layout-content">
        <a-layout>
          <a-layout-header>
            <a-page-header
                title="ArcoDesign"
                subtitle="ArcoDesign Vue 2.0"
                :show-back="false"
                class="page-header"
            >
              <template #breadcrumb>
                <a-breadcrumb
                  separator=">"
                >
                  <a-breadcrumb-item>Channel</a-breadcrumb-item>
                  <a-breadcrumb-item>News</a-breadcrumb-item>
                </a-breadcrumb>
              </template>
            </a-page-header>
          </a-layout-header>
          <a-divider direction="horizontal" style="margin: 0"></a-divider>
          <a-layout-content class="inner-content">
            <div style="height:1000px;padding: 16px;margin: 0"></div>
          </a-layout-content>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import {
  IconApps,
  IconBug,
  IconBulb,
  IconLeft,
  IconRight
} from '@arco-design/web-vue/es/icon';

export default {
  name: "ManagePage",
  data(){
    return{
      managePageHeight:(window.innerHeight-96)+'px',
      menuCollapsed:false
    }
  },
  mounted() {
  },
  components:{
    IconApps,
    IconBug,
    IconBulb,
    IconLeft,
    IconRight
  }
}
</script>

<style scoped>
  .layout{
    width: 100%;
  }

  .sider{
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.15);
    margin: 16px 0 0 16px;
  }

  .menu{
    height: v-bind(managePageHeight);
    border-radius: 5px;
  }
  .collapse-button-sider{
    margin: 0 -8px 0 -8px;
    background-color: rgba(255,255,255,0);
    box-shadow: 0 0 0 0 rgba(0,0,0,0);
    position: relative;
  }

  .collapse-button{
    width: 32px;
    height: 72px;
    top: 50%;
    transform: translate(0,-50%);
    z-index: 9999;
  }

  .layout-content{
    margin: 16px 16px 0 0;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.15);
    height: v-bind(managePageHeight);
  }

  .page-header{
    
  }

  .inner-content{
  }
</style>