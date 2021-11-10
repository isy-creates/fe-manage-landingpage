<template>
<main class="app-wrapper">
  <Header />
  <router-view/>
  <Footer />
</main>

</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'manage',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

* {
  margin: 0;
  padding: 0;
}

:root {
  --space-xxs:4px;
  --space-xs:8px;
  --space-s: 16px;
  --space-m:24px;
  --space-l:32px;
  --space-xl:40px;
  --space-xxl:48px;
  --component-padding:var(--space-m);

  .app-wrapper {
    max-width: 1440px;
    margin: 0 auto;
    margin: var(--space-xl) var(--space-m) 0;

    transition:all .3s ease-in;

    @media (min-width:1488px){
      margin: 56px auto 0;
    }
  }
}
</style>
