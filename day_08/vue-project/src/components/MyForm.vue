<script setup>
// 表单校验 
const validate = () => {
    return Math.random() > 0.5 ? true : false
}
// 暴漏给组件, ⽬的是⽗组件可以通过 ref 可以拿到⼦组件的⽅法 
defineExpose({
    validate
})
</script>
<template>
    <div class="login-box">
        账⼾：<input type="text" /><br /><br />
        密码：<input type="password" /><br /><br />
    </div>
</template>
