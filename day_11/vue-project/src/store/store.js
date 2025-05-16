import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from 'vue'

export const useStockStore = defineStore('stock', () => {
    // 提供共享数据
    const stock = ref(20);
    // 修改共享数据
    const setStock = (val) => {
        stock.value = val;
    }

    // 新增
    const addStock = () => {
        stock.value++;
    }

    // 减少
    const subStock = () => {
        stock.value--;
    }

    // 翻倍
    const doubleStock = computed(() => {
        return stock.value * 2;
    })

    // 返回共享数据和修改共享数据的方法
    return {
        stock, setStock, addStock, subStock, doubleStock
    }
})