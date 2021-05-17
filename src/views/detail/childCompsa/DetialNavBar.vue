<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        《《《
        <!-- 图片不显示 -->
        <!-- <img src="../../../assets/img/common/back.svg" alt=""> -->
      </div>
      <div slot="center" class="titile">
       <div v-for="(item,index) in titles"
        :key="index" 
        class="titleitem"
        :class="{active :index === currentIndex}"
        @click="activecolor(index)"> 
        {{item}} </div> 
       </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/Navbar'

export default {
    name:'DetialNavBar',
    components:{
      NavBar
      },
    data(){
        return{
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
        }
    },
    // created:{

    // },
    methods:{
      activecolor(index){
        this.currentIndex=index
      },
      backClick(){
        this.$router.back(-1)
      }
    }
}   
</script>

<style>
.titile{
  display: flex;
  font-size: 13px;
}
.titleitem{
  flex: 1;
}
.active{
  color:var(--color-high-text) ;
}
.back img{
  margin-top: 12px;
}
</style>