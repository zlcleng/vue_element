<template>
  <section class="dashboard-navigation-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>
<style lang="less" scoped>
.dashboard-navigation-bar {
  width: 200px;
  height: calc(100vh - 40px);
  background: #fff;
  font-size: 16px;
  transition: all .2s;
  position: relative;
}
:deep(.el-sub-menu) {
  &__title {
    height: 36px;
    line-height: 36px;
    padding: 10px 12px 10px 21px;
    color: #1f2d3d;
    user-select: none;
    &:hover {
      border-right: 2px solid;
      background: #e5f9f4;
      color: #00bf8a;
    }
  }
}
:deep(.el-menu) {
  height: 100%;
  &-item {
    width: 100%;
    height: 36px !important;
    line-height: 36px;
    font-size: 14px;
    padding: 0 21px 0 33px;
    position: relative;
    color: #8492a6;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &.is-active, &:hover {
      border-right: 2px solid;
      background: #e5f9f4;
      color: #00bf8a;
      font-weight: 500;
    }
  }
}
</style>