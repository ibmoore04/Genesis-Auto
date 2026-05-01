<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <p class="hero-subtitle">{{ subtitle }}</p>
        <h1 class="hero-title">{{ title }}</h1>
        
        <!-- Search Form -->
        <div class="search-form">
          <select class="search-select">
            <option value="">Make</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
            <option value="toyota">Toyota</option>
          </select>
          
          <select class="search-select">
            <option value="">Model</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="coupe">Coupe</option>
          </select>
          
          <select class="search-select">
            <option value="">Location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
          
          <button class="search-button" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="hero-image">
        <img :src="image" :alt="title" />
      </div>
    </div>
    
    <div class="hero-watermark">{{ watermarkText }}</div>
  </section>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
    default: '[ FIND THE PERFECT CAR HERE ]'
  },
  title: {
    type: String,
    default: 'CARS FOR EVERY JOURNEY'
  },
  image: {
    type: String,
    required: true
  },
  watermarkText: {
    type: String,
    default: 'START HERE'
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  background: #f5f5f5;
  padding: 100px 0 0;
  overflow: hidden;
  min-height: 700px;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 60px;
}

.hero-subtitle {
  font-size: 14px;
  font-weight: 600;
  color: #e63946;
  letter-spacing: 2px;
  margin: 0 0 50px 0;
  font-family: Arial, sans-serif;
}

.hero-title {
  font-size: 72px;
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 50px 0;
  color: #1c1c1c;
  font-family: Arial Black, sans-serif;
  letter-spacing: 3px;
}

/* Search Form */
.search-form {
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 900px;
  width: 100%;
  background: transparent;
}

.search-select {
  flex: 1;
  padding: 20px 30px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  border: none;
  border-right: 1px solid #e5e5e5;
  background: #ffffff;
  cursor: pointer;
  font-family: Arial, sans-serif;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23000000' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 20px center;
  padding-right: 50px;
}

.search-select:focus {
  outline: none;
  background-color: #fafafa;
}

.search-select option {
  padding: 10px;
}

.search-button {
  width: 70px;
  height: 70px;
  background: #e63946;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.search-button:hover {
  background: #d62839;
}

.hero-image {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 3;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 3;
  transform: scale(1.2);
}

.hero-watermark {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 220px;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.03);
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
  font-family: Arial Black, sans-serif;
  letter-spacing: 30px;
}

@media (max-width: 1024px) {
  .hero-section {
    min-height: 600px;
    padding: 80px 0 0;
  }

  .hero-container {
    padding: 0 24px;
  }

  .hero-title {
    font-size: 48px;
  }

  .search-form {
    flex-wrap: wrap;
  }

  .search-select {
    flex: 1 1 calc(50% - 1px);
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
  }

  .search-select:nth-child(2) {
    border-right: 1px solid #e5e5e5;
  }

  .search-button {
    flex: 1 1 100%;
    width: 100%;
    height: 60px;
  }

  .hero-watermark {
    font-size: 120px;
    bottom: 80px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
    padding: 60px 0 0;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 12px;
  }

  .search-select {
    flex: 1 1 100%;
    padding: 18px 20px;
    font-size: 14px;
    border-right: none;
  }

  .search-select:nth-child(2) {
    border-right: none;
  }

  .hero-watermark {
    font-size: 60px;
    bottom: 60px;
    letter-spacing: 15px;
  }
}
</style>
