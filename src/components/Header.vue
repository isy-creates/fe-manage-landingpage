<template>
  <header class="header">
    LOGO
    <mobileMenu v-show="mobile" />
    <nav class="nav" v-show="!mobile">NAVIGATION</nav>
    <a href="#" class="btn" v-show="!mobile">Get Started</a>
  </header>
</template>

<script>
import mobileMenu from './MobileMenu.vue';

export default {
  name: 'header',
  components: {
    mobileMenu
  },
  data() {
    return {
      mobile:null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 650) {
        this.mobile = true;
        return
      }
      this.mobile = false;
      return
    }
  }
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
