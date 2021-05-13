<template>
  <div class="Tabbaritem" @click="active">
    <div  v-if="isActive"><slot name="icon-img"></slot></div>  
     <div v-else><slot name="icon-active-img"></slot></div>
    <div :style="activeStyle" :class="{active:true}" ><slot name="icon-text" ></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props:{
      path:String,
      activeColor:{
        type:String,
        default:'yellow'
      }
  },
  data(){
      return {
        //   isactive: true,
      }
  },
  methods: {
    active(){
    //   this.isactive = !this.isactive
    this.$router.replace(this.path)
      }
  },
  computed:{
       isActive(){
        //    选泽当前活跃状态的
        return this.$route.path.indexOf(this.path) !== 0
        // console.log("this.$route.path.indexOf(this.path) !== 0")
       },
       activeStyle(){
            return this.isActive ? {color:this.activeColor} :""
       }
  }
}
</script>

<style>
.Tabbaritem{
  flex: 1;
  /* border: 1px solid red; */
  font-size: 16px;
  justify-content:space-around;
  text-align: center;
}
.Tabbaritem img{
    height: 25px;
}
.active{
    color: rgb(19,34,122);
    font-weight: 900;
}
</style>
