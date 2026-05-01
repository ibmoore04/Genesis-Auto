<template>
  <section class="services-section">
    <div class="services-container">
      <div 
        v-for="(service, index) in services" 
        :key="index" 
        class="service-card"
      >
        <div class="service-image">
          <img :src="service.image" :alt="service.title" />
          <div class="service-overlay"></div>
          <span v-if="service.badge" class="service-badge">{{ service.badge }}</span>
        </div>
        <div class="service-content">
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  services: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.services-section {
  background: #f5f5f5;
  padding: 0;
}

.services-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.service-card {
  position: relative;
  background: #1a1a1a;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-image {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
}

.service-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #e63946;
  color: #ffffff;
  padding: 8px 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: Arial, sans-serif;
  z-index: 2;
}

.service-content {
  padding: 35px 30px;
  background: #1a1a1a;
}

.service-title {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;
  font-family: Arial, sans-serif;
  letter-spacing: 0.5px;
}

.service-description {
  font-size: 14px;
  color: #b0b0b0;
  margin: 0;
  line-height: 1.6;
  font-family: Arial, sans-serif;
}

@media (max-width: 1024px) {
  .services-container {
    grid-template-columns: 1fr;
  }
}
</style>
