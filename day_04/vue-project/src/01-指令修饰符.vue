<script setup>
const onKeydown = (event) => {
  console.log(event.key);
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  }
};

// p标签的点击事件 
const onPClick = () => {
  console.log('onPClick')
}
// div标签的点击事件 
const onDivClick = () => {
  console.log('onDivClick')
}

</script>

<template>
  <!-- 按键修饰符 -->
  <!-- <div>
    <input type="text" @keydown="onKeydown" />
  </div> -->
  <!-- 事件修饰符 -->
  <div @click="onDivClick">
    <!-- .prevent: 阻⽌默认⾏为 -->
    <a href="https://baidu.com" @click.prevent>百度⼀下</a>
    <!-- .stop: 阻⽌冒泡，同名事件不会向上级传递 -->
    <p @click.stop="onPClick"></p>
    <!-- 修饰符的链式调⽤: 表明两个同时阻⽌ -->
    <a href="https://baidu.com" @click.stop.prevent>百度⼀下</a>
  </div>

</template>



<style>
div {
  width: 400px;
  height: 200px;
  background: plum;
}

div a {
  display: block;
  width: 100px;
  text-decoration: none;
  background: tomato;
  text-align: center;
  color: #fff;
}

div p {
  width: 200px;
  height: 100px;
  background: rebeccapurple;
}
</style>