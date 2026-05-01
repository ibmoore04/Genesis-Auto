<template>
  <section class="listing-section">
    <div class="listing-container">
      <div class="listing-header">
        <div>
          <h2 class="listing-title">{{ title }}</h2>
          <p class="listing-subtitle">{{ subtitle }}</p>
        </div>
        <div class="header-actions">
          <div class="carousel-controls">
            <button class="carousel-btn" @click="prevSlide" :disabled="currentIndex === 0">‹</button>
            <button class="carousel-btn" @click="nextSlide" :disabled="currentIndex >= vehicles.length - 3">›</button>
          </div>
          <button class="view-all-button">
            {{ viewAllText }}
            <span class="button-arrow">→</span>
          </button>
        </div>
      </div>

      <div class="carousel-wrapper">
        <div class="listing-grid" :style="{ transform: `translateX(-${currentIndex * 33.33}%)` }">
          <div 
            v-for="(vehicle, index) in vehicles" 
            :key="index" 
            class="vehicle-card"
          >
            <div class="vehicle-image">
              <img :src="vehicle.image" :alt="vehicle.name" />
              <span v-if="vehicle.badge" class="vehicle-badge">{{ vehicle.badge }}</span>
            </div>
            <div class="vehicle-info">
              <h3 class="vehicle-name">{{ vehicle.name }}</h3>
              <div class="vehicle-specs">
                <span class="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {{ vehicle.year }}
                </span>
                <span class="spec-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M2 12h20"></path>
                  </svg>
                  {{ vehicle.mileage }}
                </span>
              </div>
              <div class="vehicle-footer">
                <span class="vehicle-price">${{ vehicle.price.toLocaleString() }}</span>
                <button class="details-button">→</button>
              </div>
            </div>
          </div>
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
    default: 'BROWSE OUR RECENT'
  },
  subtitle: {
    type: String,
    default: 'NEW VEHICLES'
  },
  viewAllText: {
    type: String,
    default: 'VIEW ALL'
  },
  vehicles: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const nextSlide = () => {
  if (currentIndex.value < props.vehicles.length - 3) {
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
.listing-section {
  background: #f5f5f5;
  padding: 80px 0;
}

.listing-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.listing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 30px;
}

.carousel-controls {
  display: flex;
  gap: 10px;
}

.carousel-btn {
  width: 50px;
  height: 50px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  color: #000000;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.carousel-btn:hover:not(:disabled) {
  background: #e63946;
  color: #ffffff;
  border-color: #e63946;
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-wrapper {
  overflow: hidden;
}

.listing-grid {
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease;
}

.vehicle-card {
  min-width: calc(33.33% - 20px);
  flex-shrink: 0;
  background: #ffffff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.listing-title {
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  color: #000000;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.listing-subtitle {
  font-size: 36px;
  font-weight: 700;
  margin: 5px 0 0 0;
  color: #000000;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.view-all-button {
  background: #e63946;
  color: #ffffff;
  border: none;
  padding: 15px 35px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
}

.view-all-button:hover {
  background: #d62839;
  transform: translateX(5px);
}

.button-arrow {
  font-size: 18px;
}

.vehicle-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.vehicle-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f0f0f0;
}

.vehicle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.vehicle-card:hover .vehicle-image img {
  transform: scale(1.1);
}

.vehicle-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e63946;
  color: #ffffff;
  padding: 6px 15px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: Arial, sans-serif;
}

.vehicle-info {
  padding: 25px;
}

.vehicle-name {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: #000000;
  font-family: Arial, sans-serif;
}

.vehicle-specs {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #666666;
  font-family: Arial, sans-serif;
}

.spec-item svg {
  color: #e63946;
}

.vehicle-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e5e5e5;
}

.vehicle-price {
  font-size: 24px;
  font-weight: 700;
  color: #e63946;
  font-family: Arial, sans-serif;
}

.details-button {
  width: 40px;
  height: 40px;
  background: #e63946;
  color: #ffffff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.details-button:hover {
  background: #d62839;
  transform: translateX(5px);
}

@media (max-width: 1024px) {
  .carousel-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .listing-grid {
    transform: none !important;
  }

  .vehicle-card {
    min-width: calc(50% - 15px);
  }

  .listing-container {
    padding: 0 24px;
  }

  .listing-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .carousel-controls {
    display: none;
  }
}

@media (max-width: 768px) {
  .listing-section {
    padding: 50px 0;
  }

  .listing-title,
  .listing-subtitle {
    font-size: 28px;
  }

  .vehicle-card {
    min-width: 100%;
  }
}
</style>
