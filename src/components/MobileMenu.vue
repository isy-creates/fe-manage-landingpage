<template>
  <button class="mobile-menu" aria-label="Mobile Menu" aria-expanded="false" @click="toggleMobileNav">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path>
  </svg>
  </button>
  <transition name="mobile-nav">
    <ul class="mobile-nav" v-show="isOpen">
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </transition>
</template>

<script>
export default {
  name:'MobileMenu',
  data() {
    return {
      isOpen: null,
    }
  },
  methods: {
    toggleMobileNav(){
      this.isOpen =! this.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>