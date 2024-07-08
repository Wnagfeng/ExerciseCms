<template>
  <div class="Main-header-Wrapper">
    <div class="left">
      <div class="buton" @click="HandelBtnclick">
        <el-icon :size="30" v-if="isFold">
          <Expand />
        </el-icon>
        <el-icon :size="30" v-else>
          <Fold />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
const isFold = ref(false)
const emits = defineEmits(['changeFold'])
const HandelBtnclick = () => {
  isFold.value = !isFold.value
  emits('changeFold', isFold.value)
}
</script>


<style scoped lang="less">
.Main-header-Wrapper {
  display: flex;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    flex: 1;

    .Breadcrumb {
      margin-left: 20px;
    }

    .buton {
      cursor: pointer;
    }
  }

  .userinfo {
    display: flex;
    align-items: center;

    .icon {
      margin-left: 20px;

      &:hover {
        color: skyblue;
      }

      .dtos {
        position: absolute;
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: red;
      }
    }

    .img {
      margin-left: 20px;
      margin-right: 20px;
      display: flex;
      align-items: center;
      font-weight: 700;

      .info {
        margin-left: 10px;
        align-items: center;
        display: flex;
        width: 80px;
        border: none !important;
      }

      :deep(.el-dropdown-menu__item) {
        font-weight: 700;
        color: rgb(0, 0, 0);
      }
    }
  }
}
</style>
