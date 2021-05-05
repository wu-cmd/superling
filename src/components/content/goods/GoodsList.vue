<template>
  <div class="good">
      <goods-list-item v-for="(item,index) in goods" :key='index' :goods-item="item" class="gz"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListitem'
export default {
    name:'GoodsList',
    components:{
     GoodsListItem
    },
    props:{
        goods:{
         type:Array,
         default(){
        return []
      }
        }
    },
    data(){
        return{

        }
    }

}
</script>

<style>

.good{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.gz{
  z-index: 100;
}
</style>