<template>
    <swiper class="swipera" >
        <swiper-item v-for="(item,index) in topImages" :key=index>
          <img :src="item" alt="" @load="loadswiperimg">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
  name:"DetailSwiper",
  components:{
    Swiper,SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
      return[]
    }
    }
    
  },
   methods: {
      loadswiperimg(){
        // console.log('---')
        // 监听轮播发送一次就行，获取轮播加加载完，获取高度
        if(this.isLoad == false){
          this.$emit('loadswiperimg')
          this.isLoad = true
        }
        
      }
    }
}
</script>

<style scoped>
.swipera{
  height: 300px;
  overflow: hidden;
}
</style>