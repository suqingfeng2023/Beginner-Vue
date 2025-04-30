<script setup>
const props = defineProps({
  foodList: {
    type: Array,
    required: true,
    default: []
  }
});
</script>

<template>
  <table class="table table-striped table-bordered">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="(item, index) in foodList" :key="item.id">
        <slot name="body" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>