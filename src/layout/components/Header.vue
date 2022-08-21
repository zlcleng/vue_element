<template>
  <div class="header flex-xy-between">
    <div class="header-logo">后台管理系统</div>
    <div class="header-user">
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link pointer">
          不不不不
          <i class="el-icon-caret-bottom"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="user">个人中心</el-dropdown-item>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  z-index: 9999;
  // position: fixed;
  // top: 0;
  // right: 0;
  // left: 0;
  width: 100%;
  height: 40px;
  padding: 0 30px;
  border-bottom: 1px solid #e9f0f7;
  box-shadow: 0 4px 12px rgba(31, 45, 61, 0.05);
}
</style>
