<script setup>
import { ref } from 'vue'
const tabs = ref([
  {id: 1, name: '京东秒杀'},
  {id: 2, name: '每日特价'},
  {id: 3, name: '品类秒杀'}
])
const activeIndex = ref(0)

</script>

<template>
  <ul>
    <li v-for="(item, index) in tabs" :key="index" @click="activeIndex = index">
      <!-- 这里的activeIndex是一个响应式数据，点击li时会改变activeIndex的值 -->
      <a 
      href="#"
      :class="{active: activeIndex == index}">{{ item.name }}
      </a>
    </li>
  </ul>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  list-style: none;
  border-bottom: 1px solid rgb(158, 9, 9);
}
ul li {
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
ul li a {
  display: block;
  text-decoration: none;
  color: #000;
  font-weight: bolder;
}
ul li a.active {
  background-color: rgb(193, 38, 38);
  color: #fff;
}
</style>