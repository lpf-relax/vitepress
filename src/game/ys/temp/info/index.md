---
aside: right
outline: [1,6]
---

<script setup>
import { reactive, ref } from 'vue'

import ysRoleBgPng from "@assets/images/ys-role-bg.png";

const pageWrapStyle = reactive({
  backgroundImage: `url(${ysRoleBgPng})`
})

const infoList = ref([
  {
    title: '圣遗物',
    list: [
      '生之花',
      "死之羽",
      "时之沙",
      "空之杯",
      "理之冠",
    ]
  }
])
</script>

<div :style="pageWrapStyle" class="bg-contain py-8">
  <div v-for="(infoItem, infoIndex) in infoList">
    <h2 :id="infoIndex">
      <div class="bg-teal-800 font-bold p-1.5 text-white">{{infoItem.title}}</div>
    </h2>
    <div class="flex flex-wrap gap-4 p-2">
      <ViHideDiv v-for="item in infoItem.list" class="px-4 py-2 border rounded-xs border-yellow-600/70 flex bg-neutral-100/70" >{{item}}</ViHideDiv>
    </div>
  </div>
</div>