<script>
export default {
    // 提供响应式数据 
    data() {
        return {
            count: 0
        }
    },
    // 提供⽅法/函数 
    methods: {
        fn() {
            console.log('fn 函数执⾏了')
        }
    },
    setup() {
        console.log('0-setup')
    },
    // 创建阶段(第⼀阶段)：Vue组件创建/出⽣阶段： 
    // 创建前：此时⽆法访问 data 数据，也⽆法调⽤ methods ⽅法 
    beforeCreate() {
        console.log('1-beforeCreate')
        // console.log(this.count) // undefined
        // console.log(this.fn) // undefined
    },
    // 创建后：此时可以访问 data 数据，也可以调⽤ methods ⽅法 
    created() {
        console.log('2-created')
        // console.log(this.count) // 0
        // // console.log(this.fn)// 访问到函数 
        // this.fn()
        // 开启定时器 
        // 给当前组件实例新增了⼀个 timerId 属性，保存了当前定时器的 id 值 
        this.timerId = setInterval(() => {
            console.log(this.count)
        }, 1000)
    },
    // 挂载阶段(第⼆阶段)：模版渲染阶段 
    // 挂载前：此时写在 template 下的标签还没有变成真实DOM，故⽽⽆法获取DOM 
    beforeMount() {
        console.log('3-beforeMount')
        console.log(document.querySelector('p')) // null
    },
    // 挂载后：此时写在 template 下的标签已经变成了真实DOM，故⽽可以获取DOM(是最早可操作DOM的时机)

    mounted() {
        console.log('4-mounted')
        console.log(document.querySelector('p')) // <p>0</p>
        document.querySelector('p').style.color = 'red'
    },
    // 更新阶段(第三阶段)：数据变了，组件重新渲染的过程 
    // 更新前 
    beforeUpdate() {
        console.log('5-beforeUpdate')
        // console.log(this.count)
        console.log(document.querySelector('p').innerText) // 旧内容(以前的内容) 
    },
    // 更新后 
    updated() {
        console.log('6-updated')
        // console.log(this.count)
        console.log(document.querySelector('p').innerText) // 新内容 
    },
    // 卸载阶段(第四阶段)：组件移除阶段 
    beforeUnmount() {
        console.log('7-beforeUnmount')
    },
    unmounted() {
        console.log('8-mounted')
        // 关闭定时器 
        clearInterval(this.timerId)
    }
}
</script>
<template>
    <div>
        <p>{{ count }}</p>
        <button @click="count++">+1</button>
    </div>
</template>
<style scoped></style>