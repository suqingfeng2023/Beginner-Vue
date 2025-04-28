<script setup>
import { ref } from 'vue'
import * as echarts from 'echarts'
import { onMounted, onUnmounted } from 'vue'
const chartDom = ref(null)
onMounted(() => {
    const myChart = echarts.init(chartDom.value)
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
})

const option = {
    title: {
        text: 'ECharts ⼊⻔案例',
    },
    xAxis: {
        data: ['衬衫', '⽺⽑衫', '雪纺衫', '裤⼦', '⾼跟鞋', '袜⼦'],
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
        }
    ]
}

</script>

<template>
    <div class="chart-box" ref="chartDom"></div>
</template>



<style scoped>
.chart-box {
    width: 400px;
    height: 300px;
    margin: 100px auto;
    border: 3px solid #000;

}
</style>