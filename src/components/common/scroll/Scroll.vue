<template>
<!-- ref -->
  <div class="wrapper" ref="Swrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
 name:'Scroll',
 data() {
   return {
     scroll:null
   }
 },
 props:{
   probeType:{ 
     type:Number,
     default:0
   },
   pullUpLoad:{
     type:Boolean,
     default:false
   }
 },
  mounted() {
  this.scroll = new BScroll(this.$refs.Swrapper,{
    click: true,
    probeType: this.probeType,
    pullUpLoad:this.pullUpLoad
    })
    // 111111111111111111
    this.scroll.scrollTo(0,0)
    // 监听滚动的位置
    this.scroll.on('scroll',(position) => {
      console.log(position)
      this.$emit('scroll',position)
    })
    // console.log(this.scroll)
      // this.scroll.refresh();
    // 监听上拉事件
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
      // console.log('上拉加载更多')
      
    })

    // if(this.probeType === 2 || this.probeType === 3){
    //   this.scroll.on('scroll',(position) => {
    //   // console.log(position)
    //   this.$emit('scroll',position)
    // })
    // }

    // if(this.pullUpLoad){
    //   this.scroll.on('pullingUp',() => {
    //   this.$emit('pullingUp')
    // })
    // }


  },
  methods: {
    // 222222
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
       console.log('-------',this.scroll)
       this.scroll && this.scroll.refresh()
    }
  },
}


</script>

<style>
/* .content{
  height: 5100px;
} */

</style>