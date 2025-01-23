<template>
  <div class="w-full" v-if="isLoading">
    <div class="pt-5" v-for="(a, i) in menusConfig" :key="i">
      <CateMenu class="mb-3" :value="a" />

      <template v-if="a.children.length">
        <UntTabs ref="checkUntTabs" class="mb-4" :findex="i" :value="a.children" label="name" @on-change="handleTabs" />
      </template>

      <n-grid x-gap="20" cols="1 400:2 600:2 800:3 900:4 1100:4 1200:5 1500:7">
        <!-- <n-gi :span="1" v-for="(h, j) in 30" :key="j" class="flex align-center justify-center">
          {{ a.tip_id }} 
        </n-gi> -->
        <n-gi :span="1" v-for="(h, j) in Links[menus[a.name]]" :key="j" class="flex align-center justify-center">
          <LinkCurd class="mb-6" :value="h" />
        </n-gi>
      </n-grid>
    </div>
  </div>
  <div class="loading-content" :class="{ isLoadingBar: !isLoading }" v-else></div>
</template>
<script setup>
import CateMenu from "@/components/CateMenu/index.vue";
import UntTabs from "@/components/UntTabs/index.vue";
import LinkCurd from "@/components/LinkCurd/index.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useNavStore } from "@/store";
import { contentCurd } from "@/mask/content.js";
import { menusConfig } from "@/mask/menus.js"; 
const navStore = useNavStore();
const menus = ref({});
const Links = ref(contentCurd);
const checkUntTabs = ref(null);
const isLoading = ref(true);

for (const item in menusConfig) {
  const children = menusConfig[item].children;
  // let list = children.map(a => {
  //   return {
  //     [a.name]: a.name
  //   }
  // });
  menus.value[menusConfig[item].name] = children[0].name;
}

console.log(789, menus.value);



watch(
  () => navStore.tabsData,
  (n) => {
    if (n !== null) {
      checkUntTabs.value[n.tabIndex - 1].handleChange(
        n.dataId,
        n.dataIndex,
        true
      );
    }
  }
);
onMounted(() => {
});
const handleTabs = (e) => {
  // const index = e.findex;
  // menus.value[index].name = e.name;
  console.log(77, e);

  // 切换分类
  if (e.name) {
    // navStore.setTabsData({
    //   tabIndex: e.findex + 1,
    //   dataId: e.id,
    //   dataIndex: e.index,
    // });
  }

};
</script>
<style scoped>
.loading-content {
  margin-top: 20%;
  letter-spacing: 5px;
  font-weight: bold;
}
</style>
