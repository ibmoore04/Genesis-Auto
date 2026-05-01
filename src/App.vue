<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: #ffffff;
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px;
}

@media (max-width: 1024px) {
  .main-content {
    padding: 40px 24px;
  }
}
</style>
