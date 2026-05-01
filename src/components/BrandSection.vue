<template>
  <section class="brand-section">
    <div class="brand-container">
      <h2 class="brand-title">{{ title }}</h2>
      <p class="brand-subtitle">{{ subtitle }}</p>

      <!-- Carousel -->
      <div class="carousel-wrapper">
        <button class="carousel-btn prev" @click="prevSlide" :disabled="currentIndex === 0">‹</button>

        <div class="brand-carousel">
          <div class="brand-grid" :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }">
            <div
              v-for="(brand, index) in brands"
              :key="index"
              class="brand-card"
            >
              <div class="brand-logo">
                <img :src="brand.logo" :alt="brand.name" />
              </div>
              <p class="brand-name">{{ brand.name }}</p>
              <p class="brand-count">{{ brand.count }} Items</p>
            </div>
          </div>
        </div>

        <button class="carousel-btn next" @click="nextSlide" :disabled="currentIndex >= brands.length - visibleCount">›</button>
      </div>

      <!-- Stats -->
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'EXPLORE A DIVERSE TOP'
  },
  subtitle: {
    type: String,
    default: 'AUTOMOBILE MAKERS'
  },
  brands: {
    type: Array,
    required: true
  },
  stats: {
    type: Array,
    default: () => [
      { number: '4.000+', label: 'Cars for Sale' },
      { number: '17.000+', label: 'Visitors per Day' },
      { number: '600+', label: 'Official Dealers' },
      { number: '50.000+', label: 'Client Reviews' }
    ]
  }
})

const visibleCount = 5
const currentIndex = ref(0)

const nextSlide = () => {
  if (currentIndex.value < props.brands.length - visibleCount) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style scoped>
.brand-section {
  background: #1a1a1a;
  padding: 80px 0;
}

.brand-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.brand-title {
  font-size: 14px;
  font-weight: 600;
  color: #e63946;
  letter-spacing: 2px;
  margin: 0 0 10px 0;
  font-family: Arial, sans-serif;
  text-align: left;
}

.brand-subtitle {
  font-size: 36px;
  font-weight: 900;
  text-align: left;
  margin: 0 0 50px 0;
  color: #ffffff;
  font-family: Arial Black, sans-serif;
  letter-spacing: 1px;
}

/* Carousel */
.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 70px;
}

.carousel-btn {
  width: 44px;
  height: 44px;
  background: transparent;
  border: 2px solid #444;
  color: #e63946;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  line-height: 1;
}

.carousel-btn:hover:not(:disabled) {
  background: #e63946;
  border-color: #e63946;
  color: #ffffff;
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.brand-carousel {
  overflow: hidden;
  flex: 1;
}

.brand-grid {
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease;
}

.brand-card {
  min-width: calc(20% - 16px);
  flex-shrink: 0;
  background: #252525;
  padding: 35px 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.brand-card:hover {
  border-color: #e63946;
  transform: translateY(-5px);
}

.brand-logo {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.brand-name {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-align: center;
  font-family: Arial, sans-serif;
}

.brand-count {
  font-size: 13px;
  color: #888888;
  margin: 0;
  text-align: center;
  font-family: Arial, sans-serif;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  border-top: 1px solid #333;
  padding-top: 60px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.stat-number {
  font-size: 48px;
  font-weight: 900;
  color: #e63946;
  font-family: Arial Black, sans-serif;
  line-height: 1;
}

.stat-label {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  font-family: Arial, sans-serif;
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .brand-carousel {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .brand-carousel::-webkit-scrollbar {
    display: none;
  }

  .brand-grid {
    transform: none !important;
  }

  .brand-card {
    min-width: calc(33.33% - 14px);
  }

  .brand-container {
    padding: 0 24px;
  }

  .carousel-btn {
    display: none;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .stat-number {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .brand-section {
    padding: 50px 0;
  }

  .brand-subtitle {
    font-size: 28px;
  }

  .brand-card {
    min-width: calc(50% - 10px);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .stat-number {
    font-size: 28px;
  }
}
</style>
