<template>
  <div id="tab-control">
      <div v-for="(item, index) in tabtitle" :key="index" class="tabcontrol" 
      :class="{active:index == crrent}" @click= "tabClick(index)">
        <span>{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
name:'tabcontrol',
props:{
tabtitle:{
  type:Array,
  default(){
        return []
      }
}
},
    data(){     
       return{
        crrent:0
    }
},
methods:{
 tabClick(index){
    this.crrent = index
        
        }
}
}
</script>

<style>
#tab-control{
display: flex;
 text-align: center;
  font-size: 15px;
}
.tabcontrol{
flex: 1;
  height: 40px;
  line-height: 40px;
    font-weight: 900;
    text-align: center;
    
}
.tabcontrol span{
  padding: 5px;
}
  .active{
  color:var(--color-high-text);
  font-weight: 900;
}
.active span{
   border-bottom: 3px solid var(--color-tint);
}
</style>