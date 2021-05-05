<template>
  <div>
    <div>详情页</div>
      <div>{{iid}}</div>
  </div>
</template>

<script>
export default {
name:'detail',
 data:{  
  return(){
    iid:null
  }
},
created(){
 this.iid = this.$route.params.iid
}
  

}
</script>

<style>

</style>