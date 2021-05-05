<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style>
.tabbar{
  position: fixed;
  display: flex;
  bottom:0px;
  left: 0px;
  height: 50px;
  z-index: 999;
  width: 100%;
  border: 1px solid grey;
  background-color: #f2f2f2;
}
</style>
