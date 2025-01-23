<template>
    <div class="logo">
        <img src="@/assets/image/logo.png" :class="{ 'mr-2': !collapsed }" />
        <h2 v-show="!collapsed" class="title m-0">吉云工具箱</h2>
    </div>
</template>
<script setup>
import { useAppStore } from "@/store";
const appStore = useAppStore();
defineProps({
    collapsed: {
        type: Boolean,
        default: false
    }
})

// 获取head元素
const head = document.querySelector('head');

// 创建description标签
const descriptionMeta = document.createElement('meta');
descriptionMeta.setAttribute('name', 'description');
descriptionMeta.setAttribute('content', appStore.AppConfig.description);
head.appendChild(descriptionMeta);

// 创建keywords标签
const keywordsMeta = document.createElement('meta');
keywordsMeta.setAttribute('name', 'keywords');
keywordsMeta.setAttribute('content', appStore.AppConfig.keywords);
head.appendChild(keywordsMeta);
</script>
<style lang="scss" scoped>
.logo {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    white-space: nowrap;
    z-index: 12;


    img {
        width: auto;
        height: 32px;
    }
}
</style>