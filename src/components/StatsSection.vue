<template>
  <section class="stats-section">
    <!-- Scrolling Text -->
    <div class="scrolling-text-wrapper">
      <div class="scrolling-text">Top Makes. New Cars. Premium Vehicles. Top Makes. New Cars. Premium Vehicles. Top Makes. New Cars. Premium Vehicles. </div>
    </div>

    <div class="stats-container">
      <div v-for="(stat, index) in stats" :key="index" class="stat-card">
        <div class="stat-number-bg">{{ String(index + 1).padStart(2, '0') }}</div>
        <h3 class="stat-title">{{ stat.label }}</h3>
        <p class="stat-description">{{ stat.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.stats-section {
  background: #e63946;
  padding: 0;
  position: relative;
  overflow: hidden;
}

.scrolling-text-wrapper {
  background: #ffffff;
  padding: 20px 0;
  overflow: hidden;
  white-space: nowrap;
}

.scrolling-text {
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  color: #e63946;
  font-family: Arial, sans-serif;
  animation: scroll 20s linear infinite;
  padding-right: 100%;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.stats-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

.stat-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 30px 0;
}

.stat-number-bg {
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 180px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.15);
  font-family: Arial Black, sans-serif;
  line-height: 1;
  pointer-events: none;
  z-index: 1;
}

.stat-title {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 15px 0;
  position: relative;
  z-index: 2;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  width: 100%;
}

.stat-description {
  font-size: 15px;
  line-height: 1.7;
  color: #ffffff;
  font-family: Arial, sans-serif;
  margin: 0;
  position: relative;
  z-index: 2;
}

@media (max-width: 1024px) {
  .stats-container {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 60px 24px;
  }

  .stat-number-bg {
    font-size: 140px;
  }
}

@media (max-width: 768px) {
  .stats-container {
    padding: 40px 24px;
    gap: 40px;
  }

  .stat-number-bg {
    font-size: 100px;
  }

  .scrolling-text {
    font-size: 16px;
  }
}
</style>
