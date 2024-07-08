<template>
    <el-container>
        <Side :isFold="isFold" />
        <el-container>
            <el-main>
                <el-scrollbar>
                    <Header @changeFold="handelFold" />
                    <Main />
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import Side from "@/components/Side.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import { ref } from "vue";

const isFold = ref(false);
const handelFold = (flageFlod: boolean) => {
    isFold.value = flageFlod;
    console.log("fold", flageFlod);
}
</script>

<style scoped lang="less">
.el-container {
    height: 100%;
}

.el-container {}
</style>