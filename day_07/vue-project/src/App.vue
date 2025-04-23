<script setup>
import { ref } from 'vue';
import MyGoods from './components/MyGoods.vue';
// 父组件提供数据 
const goodsList = ref([
  {
    id: '4001172',
    name: '称⼼如意⼿摇咖啡磨⾖机咖啡⾖研磨机',
    price: 289,
    picture:
      'https://yanxuanitem.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg'

  },
  {
    id: '4001594',
    name: '⽇式⿊陶功夫茶组双侧把茶具礼盒装',
    price: 288,
    picture:
      'https://yanxuanitem.nosdn.127.net/3346b7b92f9563c7a7e24c7ead883f18.jpg'
  },
  {
    id: '4001009',
    name: '⽵制⼲泡茶盘正⽅形沥⽔茶台品茶盘',
    price: 109,
    picture:
      'https://yanxuanitem.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png'

  },
  {
    id: '4001874',
    name: '古法温酒汝瓷酒具套装⽩酒杯莲花温酒器',
    price: 488,
    picture:
      'https://yanxuanitem.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png'

  },
  {
    id: '4001649',
    name: '⼤师监制⻰泉⻘瓷茶叶罐',
    price: 139,
    picture:
      'https://yanxuanitem.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png'

  },
  {
    id: '3997185',
    name: '与众不同的⼝感汝瓷⽩酒杯套组1壶4杯',
    price: 108,
    picture:
      'https://yanxuanitem.nosdn.127.net/8e21c794dfd3a4e8573273ddae50bce2.jpg'

  },
  {
    id: '3997403',
    name: '⼿⼯吹制更厚实⽩酒杯壶套装6壶6杯',
    price: 100,
    picture:
      'https://yanxuanitem.nosdn.127.net/af2371a65f60bce152a61fc22745ff3f.jpg'

  },
  {
    id: '3998274',
    name: '德国百年⼯艺⾼端⽔晶玻璃红酒杯2⽀装',
    price: 139,
    picture:
      'https://yanxuanitem.nosdn.127.net/8896b897b3ec6639bbd1134d66b9715c.jpg'

  }
])

// i 下标，让哪个对象的price减少
// price 每次减少的价格
const subPrice = (i, price) => {
  // 1. 拿到当前对象
  const goodsObj = goodsList.value[i]
  // 2. 拿到当前对象的price
  const oldPrice = goodsObj.price
  // 3. 新的price
  const newPrice = oldPrice - price
  // 4. 给当前对象的price重新赋值
  goodsObj.price = newPrice
}

</script>
<template>
  <div class="list">
    <MyGoods 
    v-for="goodsObj, index in goodsList"
    :key="goodsObj.id"
    :imgUrl="goodsObj.picture" 
    :title="goodsObj.name" 
    :price="goodsObj.price"
    :index="index"
    @cut="subPrice"></MyGoods>
  </div>
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.list {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
