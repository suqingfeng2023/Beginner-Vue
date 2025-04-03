<script setup>
import { ref } from 'vue'
import { reactive } from 'vue';
/* 登录表单数据 */
const lohinForm = reactive({
    username: '',
    password: ''
})

</script>
<template>
    <div>
        账号: <input type="username" v-model="lohinForm.username"><br><br>
        密码: <input type="password" v-model="lohinForm.password"><br><br>
        <button>登录</button>
        <button>重置</button>
    </div>
</template>



<style scoped></style>