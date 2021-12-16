<template>
  <div class="app">
    <div class="wrapper">
      <vheader></vheader>
      <vnavigation></vnavigation>
      <router-view></router-view>
      <vfooter></vfooter>
    </div>
  </div>
</template>

<script>
import vheader from "./components/v-header";
import vnavigation from "./components/v-navigation";
import vfooter from "./components/v-footer";
export default {
  components: { vnavigation, vheader, vfooter },
};
</script>

<style>
.app {
  height: 100%;
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  background: white;
  line-height: 1.6;
  background-color: black;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
