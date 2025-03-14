<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from 'vitepress'
import { ElButton, ElSpace } from 'element-plus'
import { getArrayRandomItem, getChildPkgPath } from "@utils"

const props = defineProps(['idList'])

const loading = ref(false)

const { route, go } = useRouter();

const handleClickRandom = async () => {
  go(getChildPkgPath(route.path, getArrayRandomItem(props.idList)))
}
</script>

<template>
  <el-space class="w-full p-16" direction="vertical" alignment="center">
    <el-button type="primary" @click="handleClickRandom" :loading="loading">随机</el-button>
  </el-space>
</template>
