<template>
<main class="max-w-1440 mt-8 xl:mt-14 mx-4 xl:mx-auto transition-all ease-in duration-300 leading-28">
  <Top />
  <router-view/>
  <Footer />
</main>

</template>

<script>
import Top from './components/Top.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'manage',
  components: {
    Top,
    Footer,
  },
};
</script>

<style lang="scss">

:root {
  --blue: theme('colors.blue');
}



</style>
