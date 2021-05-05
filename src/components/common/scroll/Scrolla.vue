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
    props:{

    },
    data(){
        return{
            scroll:null
        }
    },
    // 组件创建完之后调用
    // mounted(){
    //     console.log("this.$refs.wrapper",this.$refs.wrapper);
    //     this.scroll = new BScroll(this.$refs.wrapper,{
    //     probeType: 3
    //     })
    //     this.scroll.on("scroll",(position =>{
    //         console.log(position)
    //     }))
    // },
    mounted() {
         console.log("this.$refs.wrapper",this.$refs.Swrapper);
  this.scroll = new BScroll(this.$refs.Swrapper,{
    click: true,
    probeType: 3,
    })
    // 监听滚动的位置
    this.scroll.on('scroll',(position) => {
      console.log(position)
      this.$emit('scroll',position)
    })
    },
    methods:{

    }
}
</script>

<style>
.content{
    height:100px
    }
</style>