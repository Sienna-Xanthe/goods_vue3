<template>
  <div class="nav">
    <el-container>
      <el-header class="header">xxPresumtion Levi</el-header>
      <el-container class="mainBox">
        <el-aside class="aside">
          <el-menu router :default-active="route.path">
            <el-menu-item index="/">
              <el-icon><Menu /></el-icon>
              <router-link to="/">首页</router-link></el-menu-item
            >
            <el-menu-item index="/login">
              <el-icon><UserFilled /></el-icon>
              <router-link to="/login">我的</router-link></el-menu-item
            >
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>

<style scoped>
.el-menu--vertical {
  border: 1px solid transparent;
}
.is-active {
  background-color: #d9ecff;
}

.nav {
  height: 100%;
  margin: 0 100px;
}
.header {
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  background-color: #c6e2ff;
}
.aside {
  width: 20%;
}
</style>
