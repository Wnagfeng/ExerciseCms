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
import { ref, onMounted } from "vue";
import { loadLocalRouters } from '@/utils/map-menus'
const isFold = ref(false);
const handelFold = (flageFlod: boolean) => {
    isFold.value = flageFlod;
    console.log("fold", flageFlod);
}
onMounted(() => {
    console.log(loadLocalRouters())
    console.log("mounted");
});
</script>

<style scoped lang="less">
.el-container {
    height: 100%;
}

.el-container {}
</style>