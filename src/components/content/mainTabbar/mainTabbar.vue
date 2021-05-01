<template>
  <div>
    <Tabbar>
      <Tabbaritem path="/home" activeColor="rgb(128,171,239)">
        <img src="../../../assets/img/tabbar/首页.png" slot="icon-img">
        <img src="../../../assets/img/tabbar/首页1.png" slot="icon-active-img">
        <div slot="icon-text">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/catergory" activeColor="rgb(128,171,239)">
        <img src="../../../assets/img/tabbar/分类.png" slot="icon-img">
        <img src="../../../assets/img/tabbar/分类1.png" slot="icon-active-img">
        <div slot="icon-text">分类</div>
      </Tabbaritem>
      <Tabbaritem path="/cart" activeColor="rgb(128,171,239)">
         <img src="../../../assets/img/tabbar/购物车.png" slot="icon-img">
         <img src="../../../assets/img/tabbar/购物车1.png" slot="icon-active-img">
         <div slot="icon-text">购物车</div>
         </Tabbaritem>
      <Tabbaritem path="/Profile" activeColor="rgb(128,171,239)">
        <img src="../../../assets/img/tabbar/我的.png" slot="icon-img">
        <img src="../../../assets/img/tabbar/我的1.png" slot="icon-active-img">
        <div slot="icon-text">我的</div>
        </Tabbaritem>
    </Tabbar>
  </div>
</template>
<script>
import Tabbar from '../../common/tabbar/Tabbar'
import Tabbaritem from '../../common/tabbar/Tabbaritem'
export default {
  name: 'App',
  components: {
    Tabbar,
    Tabbaritem
  }
}
</script>

<style>

</style>
