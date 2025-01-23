<template>
  <div class="footer-container">
    <n-card class="b-rd" :bordered="false">
      <span class="footer-text">
        <a href="https://beian.miit.gov.cn/" target="_blank">备案号：</a>
        <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2021026371号-2</a>
      </span>
      <!-- <p v-html="appStore.AppConfig.footer" class="footer-text"></p> -->
    </n-card>
  </div>
</template>
<script setup>
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>
<style>
.footer-container {
  color: #6c757d;
  padding: 0px 10px 0px 10px;
}

.b-rd {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-container .footer-text a {
  color: #6c757d;
  font-weight: bold;
  text-decoration: none;
}
</style>
