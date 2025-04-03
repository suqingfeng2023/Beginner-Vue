<script setup>
import { ref } from 'vue'
const visible = ref(true);
</script>
<template>
    <h3>可折叠⾯板</h3>
    <div class="panel">
        <div class="title">
            <h4>⾃由与爱情</h4>
            <span class="btn"
            @click="visible = !visible"> {{ visible ? '收起' : '展开'}} </span>
        </div>
        <div class="container"
        v-show = "visible">
            <p>⽣命诚可贵,</p>
            <p>爱情价更⾼。</p>
            <p>若为⾃由故，</p>
            <p>两者皆可抛。</p>
        </div>
    </div>
</template>
<style lang="scss">
body {
    background-color: #ccc;
}

#app {
    width: 400px;
    margin: 20px auto;
    padding: 1em 2em 2em;
    border: 4px solid green;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    background-color: #fff;
}

#app h3 {
    text-align: center;
}

.panel {
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1em;
        border: 1px solid #ccc;
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
}
</style>
