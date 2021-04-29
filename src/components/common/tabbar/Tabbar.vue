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
  bottom: 0px;
  left: 0px;
  height: 50px;
  width: 100%;
  border: 1px solid grey;
}
</style>
