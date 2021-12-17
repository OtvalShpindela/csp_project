<template>
  <div class="app">
    <div class="wrapper">
      <component :is="layout">
        <router-view/>
      </component>
    </div>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
export default {
  computed: {
    layout() {
        return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: { AuthLayout, MainLayout }
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
