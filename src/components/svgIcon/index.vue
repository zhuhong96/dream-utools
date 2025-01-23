<template>
    <svg aria-hidden="true" :style="getStyle">
      <title>{{ title }}</title>
      <use :xlink:href="symbolId" />
    </svg>
  </template>
  
  <script setup lang="ts">
    import { computed } from 'vue';
  
    const props = defineProps({
      name: {
        type: String,
        required: true,
      },
      size: {
        type: [Number, String],
        default: '16',
      },
      width: {
        type: [Number, String],
      },
      height: {
        type: [Number, String],
      },
      title: {
        type: [Number, String],
        default: '',
      },
      color: {
        type: String,
        default: 'none', // 默认为元素本身颜色
      },
    });
  
    /*
     * 某些图标可能需要保持特定的宽高比，就可以单独设置宽度和高度(例如100*200，但svg只能等比放大缩小，
       图标显示尺寸还是以小的值为准，相当于页面占位100*200，图表本身大小还是100*100,然后y轴居中的效果
     * */
    const getStyle = computed(() => {
      const width = props.width ?? props.size;
      const height = props.height ?? props.size;
      return {
        width: `${width.toString().replace('px', '')}px`,
        height: `${height.toString().replace('px', '')}px`,
        color: props.color,
      };
    });
  
    const symbolId = computed(() => {
      return `#icon-${props.name}`;
    });
  </script>
  