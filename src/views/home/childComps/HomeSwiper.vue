<template>
  <swiper ref="swiper" v-if="banners.length" >
    <swiper-item v-for="(item, index) in banners" :key="index">
      <!-- <a :href="item.link"> -->
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadswiperimg">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper'

	export default {
    name: "HomeSwiper",
    data() {
      return {
        isLoad:false
      }
    },
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
		  banners: {
		    type: Array,
        default: []
      }
    },
    methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
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

</style>
