<template>
<div>
    <v-header/>
    <router-view/>
</div>
</template>

<script>
import VHeader from '../components/v-header.vue';
export default {
  components: { VHeader },
};
</script>