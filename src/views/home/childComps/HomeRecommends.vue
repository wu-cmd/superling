<template>
  <div class="HomeRecommends">
      <div v-for="item in recommend" :key="item.sort" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
name:'HomeRecommends',
 props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
data(){
    return{

    }
},

}
</script>

<style>
.HomeRecommends{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 15px 0;
  border-bottom: 8px solid #eee;
}
.recommend-item{
    flex: 1;
    width: 25%;
}
.recommend-item img{
  width: 90%;
}
</style>