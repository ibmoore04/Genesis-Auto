<template>
  <section class="offer-section">
    <div class="offer-container">
      <h2 class="offer-title">{{ title }}</h2>
      <div class="offer-grid">
        <div 
          v-for="(offer, index) in offers" 
          :key="index" 
          class="offer-card"
        >
          <div class="offer-background">
            <img :src="offer.image" :alt="offer.title" />
            <div class="offer-overlay"></div>
          </div>
          <div class="offer-content">
            <h3 class="offer-card-title">{{ offer.title }}</h3>
            <button class="read-more-btn">
              <span class="arrow">→</span> READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'WHAT WE OFFER FOR YOU'
  },
  offers: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.offer-section {
  background: #ffffff;
  padding: 80px 0;
}

.offer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.offer-title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 60px 0;
  color: #000000;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.offer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.offer-card {
  position: relative;
  height: 400px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.offer-card:hover {
  transform: translateY(-10px);
}

.offer-background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.offer-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.offer-card:hover .offer-background img {
  transform: scale(1.1);
}

.offer-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
}

.offer-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  z-index: 2;
}

.offer-card-title {
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-align: center;
  font-family: Arial, sans-serif;
  line-height: 1.2;
}

.read-more-btn {
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
  transition: all 0.3s ease;
  padding: 0;
  position: absolute;
  bottom: 30px;
}

.read-more-btn:hover {
  transform: translateX(5px);
}

.arrow {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.read-more-btn:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 1024px) {
  .offer-grid {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    gap: 20px;
    grid-template-columns: none;
  }

  .offer-card {
    min-width: calc(50% - 10px);
    flex-shrink: 0;
    scroll-snap-align: start;
    height: 350px;
  }

  .offer-container {
    padding: 0 24px;
  }

  .offer-card-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .offer-section {
    padding: 50px 0;
  }

  .offer-title {
    font-size: 28px;
    margin-bottom: 40px;
  }

  .offer-card {
    min-width: calc(100% - 20px);
    height: 300px;
  }

  .offer-card-title {
    font-size: 24px;
  }
}
</style>
