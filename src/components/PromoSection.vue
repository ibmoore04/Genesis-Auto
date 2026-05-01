<template>
  <section class="promo-section" :style="{ backgroundImage: `url(${image})` }">
    <div class="promo-overlay"></div>
    <div class="promo-container">
      <div class="promo-content">
        <h2 class="promo-title" v-html="title"></h2>
        <p class="promo-description">{{ description }}</p>
        <ul class="promo-features">
          <li v-for="(feature, index) in features" :key="index">
            <span class="feature-icon">✓</span>
            {{ feature }}
          </li>
        </ul>
        <button class="promo-button">
          {{ buttonText }}
          <span class="button-arrow">→</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'SLEEK RIDES, SMART<br/>PRICES: YOUR IDEAL CAR<br/>IS A CLICK AWAY'
  },
  description: {
    type: String,
    default: 'Discover unbeatable deals on quality vehicles. Browse our extensive inventory and find the perfect car that fits your budget and lifestyle.'
  },
  features: {
    type: Array,
    default: () => [
      'Wide Selection of Vehicles',
      'Competitive Pricing',
      'Easy Financing Options',
      'Quality Assurance'
    ]
  },
  buttonText: {
    type: String,
    default: 'SHOP NOW'
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.promo-section {
  background: #1a1a1a;
  padding: 100px 0;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.promo-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.promo-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;
}

.promo-content {
  max-width: 600px;
  color: #ffffff;
}

.promo-title {
  font-size: 42px;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 0 25px 0;
  color: #ffffff;
  font-family: Arial Black, sans-serif;
  letter-spacing: 1px;
}

.promo-description {
  font-size: 16px;
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0 0 30px 0;
  font-family: Arial, sans-serif;
}

.promo-features {
  list-style: none;
  padding: 0;
  margin: 0 0 35px 0;
}

.promo-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 15px;
  font-family: Arial, sans-serif;
}

.feature-icon {
  width: 24px;
  height: 24px;
  background: #e63946;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
}

.promo-button {
  background: #e63946;
  color: #ffffff;
  border: none;
  padding: 18px 40px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
}

.promo-button:hover {
  background: #d62839;
  transform: translateX(5px);
}

.button-arrow {
  font-size: 20px;
}

@media (max-width: 1024px) {
  .promo-section {
    padding: 80px 0;
  }

  .promo-container {
    padding: 0 40px;
  }

  .promo-title {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .promo-section {
    padding: 60px 0;
  }

  .promo-container {
    padding: 0 24px;
  }

  .promo-title {
    font-size: 28px;
  }
}
</style>
