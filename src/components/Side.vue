<template>
  <div class="sideWrapper">
    <div class="SideTitle">
      <div class="logo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="text" v-show="!isFold">蘑菇街商城管理系统</div>
    </div>
    <el-menu :collapse="isFold" :default-active="'1'" :default-openeds="['1']" text-color="#b7bdc3"
      active-text-color="#fff" background-color="#001529">
      <el-sub-menu class="el-sub-menu" index="1">
        <template #title>
          <span class="elitemtitle">用户管理</span>
        </template>
        <el-menu-item index="1">Option 4-1</el-menu-item>
        <el-menu-item index="2">Option 4-1</el-menu-item>
        <el-menu-item index="3">Option 4-1</el-menu-item>
        <el-menu-item index="4">Option 4-1</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
const props = defineProps({
  isFold: {
    type: Boolean,
    default: true
  }
})

</script>

<style scoped lang="less">
.sideWrapper {
  background-color: #001529;
  transition: width 0.3s ease;

  :deep(.el-menu) {
    color: #fff;
  }

  :deep(.el-sub-menu) {
    background-color: #324157;

  }

  .el-menu {
    border: none;
  }

  .SideTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    height: 100px;

    .logo {
      margin-left: 5px;
      margin-top: 5px;

      img {
        width: 50px;
        height: 50px;
      }
    }

    .text {
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 10px;
    }
  }


  .el-sub-menu {
    background-color: #001529;

    .elitemtitle {
      margin-left: 30px;
      font-size: 16px;
    }

    .el-menu-item {
      color: #98a2ac;
      padding-left: 50px !important;
      background-color: #0c2135;
    }

    .el-menu-item :hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      color: #fff;
      background-color: #0a60bd;
    }
  }
}
</style>
