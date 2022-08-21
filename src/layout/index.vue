<template>
  <div class="layout-container">
    <Header />
    <div class="layout-container-content">
      <Sidebar />
      <div>
        <Tabsbar />
        <router-view v-slot="{ Component }">
            <transition :name="transition" mode="out-in">
              <keep-alive :include="$route.meta.keepalive ? '': []">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Header, Tabsbar, Sidebar } from './components/index'

export default defineComponent({
  components: { Header, Tabsbar, Sidebar },
  props: {
    transition: {
      type: String,
      default: () => 'el-fade-in'
    }
  }
})
</script>
<style lang="less" scoped>
.layout-container {
  min-width: 1270px;
  &-content {
    display: flex;
  }
}
</style>