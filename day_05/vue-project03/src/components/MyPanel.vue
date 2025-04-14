<script setup>
import { ref } from 'vue'
// 是否可⻅, 默认值 false, 表⽰不可⻅ 
const visible = ref(false)
</script>

<template>
    <div class="panel">
    <div class="title">
      <h4>⾃由与爱情</h4>
      <span class="btn" @click="visible = !visible">
        {{ visible ? '收起' : '展开' }}
      </span>
    </div>
    <div class="container" v-show="visible">
      <p>⽣命诚可贵,</p>
      <p>爱情价更⾼。</p>
      <p>若为⾃由故，</p>
      <p>两者皆可抛。</p>
    </div>
  </div>
</template>



<style scoped>
.panel {
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 0 1em;
  }

  .title h4 {
    line-height: 2;
    margin: 0;
  }

  .container {
    border: 1px solid #ccc;
    padding: 0 1em;
  }

  .btn {
    /* ⿏标改成⼿的形状 */
    cursor: pointer;
  }
}</style>