<script setup>
  import { onMounted } from 'vue'
  onMounted(()=>{
    const input = document.querySelector('input')
    // 聚焦
    input.focus()
  })
</script>
<template>
    <div class="container">
        <img width="150" src="https://zhengxinpub.cdn.bcebos.com/logopic/8b7d40e0b427ca393f6ff8e61f355e14_fullsize.jpg"
            alt="logo" />
        <div class="search-box">
            <input type="text" />
            <button>搜 索</button>
        </div>
    </div>
</template>
<style>
html,
body {
    height: 100vh;
}

.container {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.container .search-box {
    display: flex;
}

.container img {
    margin-bottom: 30px;
}

.container .search-box input {
    width: 512px;
    height: 17px;
    padding: 12px 16px;
    font-size: 16px;
    margin: 0;
    vertical-align: top;
    outline: 0;
    box-shadow: none;
    border-radius: 10px 0 0 10px;
    border: 2px solid #c4c7ce;
    background: #fff;
    color: #222;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
}

.container .search-box button {
    width: 112px;
    height: 44px;
    line-height: 42px;
    background-color: #ad2a27;
    border-radius: 0 5px 5px 0;
    font-size: 17px;
    box-shadow: none;
    font-weight: 400;
    margin-left: -1px;
    border: 0;
    outline: 0;
    letter-spacing: normal;
    color: white;
    cursor: pointer;
}

body {
    background: #f1f2f3 no-repeat center / cover;
}
</style>
