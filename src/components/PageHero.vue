<template>
  <section class="page-hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-breadcrumb">
        <router-link to="/" class="breadcrumb-link">Home</router-link>
        <span v-if="breadcrumbText"> / {{ breadcrumbText }}</span>
      </p>
    </div>
    <div class="hero-watermark">GENESIS AUTO</div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  breadcrumb: {
    type: String,
    default: ''
  },
  breadcrumbText: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.page-hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #ffffff;
}

.hero-title {
  font-size: 64px;
  font-weight: 900;
  margin: 0 0 15px 0;
  color: #ffffff;
  font-family: Arial Black, sans-serif;
  letter-spacing: 3px;
}

.hero-breadcrumb {
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.breadcrumb-link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #e63946;
}

.hero-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 180px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.05);
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
  font-family: Arial Black, sans-serif;
  letter-spacing: 20px;
}

@media (max-width: 768px) {
  .page-hero {
    height: 300px;
  }

  .hero-title {
    font-size: 42px;
  }

  .hero-watermark {
    font-size: 80px;
  }
}
</style>
