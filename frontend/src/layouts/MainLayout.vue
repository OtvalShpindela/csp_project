<template>
<div class="wrapper">
    <v-header/>
    <v-navigation/>
    <router-view/>
    <v-footer/>
</div>
</template>

<script>
import VNavigation from '../components/v-navigation.vue';
import VFooter from '../components/v-footer.vue';
import VHeader from '../components/v-header.vue';
export default {
  components: { VNavigation, VFooter, VHeader },
};
</script>

<style scoped>
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>