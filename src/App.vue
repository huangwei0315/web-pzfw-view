<script setup>
import { ref, computed } from 'vue'
import Home from './components/view/Home.vue'
// import Test from './components/view/Test.vue'
import About from './components/view/About.vue'
import Order from './components/view/Order.vue'

import NotFound from './components/view/NotFound.vue'
const routes = {
  '/': Home,
  '/order': Order,

  // '/test': Test,
  '/about': About
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <!-- <a href="#/test">Test</a> |  -->
  <!-- <a href="#/">Home</a> | -->
  <!-- <a href="#/about">About</a> | -->
  <!-- <a href="#/non-existent-path">Broken Link</a> -->
  <component :is="currentView" />
</template>
