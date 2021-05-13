<template>
  <div>
    <!-- <div>详情页</div> -->
      <detial-nav-bar></detial-nav-bar>
      <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetialNavBar from './childComps/DetialNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import {getDetail} from '../../network/detail'
export default {
name:'detail',
components:{
  DetialNavBar,
  DetailSwiper
},
data(){  
  return{
    iid:null,
    topImages:[] 
  }
},
created(){
  // 保存存入ID
 this.iid = this.$route.params.iid
  // 根据iid请求详情数据
  getDetail(this.iid).then(res =>{
    // console.log(res)
    // 获取顶部的图片轮播数据
      const data = res.data.result
      //  console.log(data.skuInfo);

      // 1.获取顶部图片 轮播数据
      this.topImages = data.itemInfo.topImages
    console.log(this.topImages)

  })
}
  

}
</script>

<style>

</style>