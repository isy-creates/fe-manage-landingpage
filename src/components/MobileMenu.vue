<template>

  <div class="mobile__nav">

  <button 
    type="button" 
    aria-label="Open Menu" 
    class="mobile-menu" 
    :aria-expanded="isOpen ? 'true' : 'false'" 
    @click="toggleMobileNav"
  >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>

  <transition name="fade">
      <ul class="mobile-nav" v-if="isOpen">
        <li 
          v-for="item in navigationDataList" 
          :key="item.name" 
          class="mobile-nav__item">
            <a :href="item.link" class="block py-9 font-bold">{{item.name}}</a>
          </li>
      </ul>
  </transition>

<transition name="fade-backdrop">
  <div class="fixed inset-x-0 bottom-0 h-screen w-screen z-minusone bg-backdrop" v-if="isOpen"></div>
</transition>

</div>
</template>

<script>
import axios from 'axios';
export default {
  name:'mobileMenu',
  data() {
    return {
      isOpen: null,
      navigationDataList: []
    }
  },
  async created(){
    axios.get('/static/content.json').then(response => (this.navigationDataList = response.data));

  },
  methods: {
    toggleMobileNav(){
      this.isOpen =! this.isOpen;
    }
  },
  watch: {
    isOpen: function() {
      if(this.isOpen) {
        document.documentElement.classList.add('fixed', 'w-full');
        document.documentElement.style.overflowY = 'scroll'
        return
      }

      document.documentElement.removeAttribute('class');
      document.documentElement.removeAttribute('style');
    }
  }
}
</script>

<style lang="scss" scoped>

  .mobile-menu {
    @apply relative h-19 w-25 flex justify-between flex-col z-50;

    .bar {
      @apply w-full h-1 bg-blue block transition ease-in duration-500;
    }

    &:hover {
      @apply cursor-pointer;
    }

    &[aria-expanded=true] {
      .bar {
        &:first-of-type {
          @apply transform rotate-45 translate-x-5 translate-y-5;
        }
        &:nth-of-type(2) {
          @apply opacity-0;
        }
        &:last-of-type {
          @apply transform -rotate-45 translate-x-1 -translate-y-2.5;
        }
      }
    }

  }

  .mobile-nav {
    @apply 
      absolute 
      left-1/2 top-39 
      w-full 
      p-29 
      text-center 
      bg-white 
      rounded-default 
      transform -translate-x-2/4;
  }

  .fade-enter-active {
    @apply top-0 opacity-0 transition ease-in-out duration-300;
  }

  .fade-enter-to {
    @apply top-39 opacity-100;
  }

  .fade-leave-active {
    @apply top-39 opacity-100 transition-all duration-300 ease-in-out;
  }

  .fade-leave-to {
    @apply opacity-0 top-0;
  }

  .fade-backdrop-enter-active {
    @apply h-0 bg-opacity-0 transition-all duration-500 ease-in;
  }

  .fade-backdrop-enter-to {
    @apply h-screen opacity-100;
  }

  .fade-backdrop-leave-active {
    @apply opacity-100 h-screen transition-all duration-300 ease-in-out;
  }

  .fade-backdrop-leave-to {
    @apply h-0 opacity-0;
  }



</style>