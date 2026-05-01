<template>
  <section class="discover-section">
    <div class="discover-container">
      <!-- Top Content Grid -->
      <div class="discover-top">
        <div class="discover-left">
          <p class="discover-subtitle">{{ subtitle }}</p>
          <h2 class="discover-title">{{ title }}</h2>
          <button class="discover-button">
            {{ buttonText }}
          </button>
        </div>
        <div class="discover-right">
          <p class="discover-text">{{ description }}</p>
          <p class="discover-text" v-if="description2">{{ description2 }}</p>
        </div>
      </div>

      <!-- Bottom Car Image -->
      <div class="discover-image">
        <img :src="image" :alt="title" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  description2: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'SEARCH CARS'
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.discover-section {
  background: #ffffff;
  padding: 100px 0 0;
}

.discover-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.discover-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 60px;
}

.discover-left {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.discover-subtitle {
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  letter-spacing: 2px;
  margin: 0;
  font-family: Arial, sans-serif;
}

.discover-title {
  font-size: 48px;
  font-weight: 900;
  line-height: 1.1;
  margin: 0;
  color: #000000;
  font-family: Arial Black, sans-serif;
  letter-spacing: 0px;
  text-transform: uppercase;
}

.discover-button {
  background: #e63946;
  color: #ffffff;
  border: none;
  padding: 18px 45px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  border-radius: 50px;
  align-self: flex-start;
}

.discover-button:hover {
  background: #d62839;
  transform: translateY(-2px);
}

.discover-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.discover-text {
  font-size: 15px;
  line-height: 1.8;
  color: #666666;
  margin: 0;
  font-family: Arial, sans-serif;
}

.discover-image {
  width: 100%;
  margin-top: 40px;
}

.discover-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .discover-container {
    padding: 0 24px;
  }

  .discover-top {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  .discover-title {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .discover-section {
    padding: 60px 0 0;
  }

  .discover-title {
    font-size: 28px;
  }

  .discover-button {
    width: 100%;
    text-align: center;
  }
}
</style>
