<template>
  <section class="testimonials-section">
    <div class="testimonials-container">
      <!-- Header -->
      <div class="testimonials-header">
        <div class="header-left">
          <p class="section-subtitle">[ TESTIMONIALS ]</p>
          <h2 class="section-title">{{ title }}</h2>
        </div>
        <a href="#" class="view-all-link">
          VIEW ALL
          <span class="arrow">→</span>
        </a>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="testimonial-card"
        >
          <div class="testimonial-header">
            <img 
              :src="testimonial.image" 
              :alt="testimonial.name"
              class="author-image"
            />
            <div class="author-info">
              <h3 class="author-name">{{ testimonial.name }}</h3>
              <p class="author-role">{{ testimonial.role }}</p>
            </div>
          </div>
          
          <div class="testimonial-content">
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="quote-icon">"</div>
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
    required: true
  },
  testimonials: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.testimonials-section {
  padding: 100px 0;
  background: #1a1a1a;
}

.testimonials-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.testimonials-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.section-subtitle {
  font-size: 14px;
  font-weight: 700;
  color: #e63946;
  margin: 0;
  font-family: Arial, sans-serif;
  letter-spacing: 2px;
}

.section-title {
  font-size: 48px;
  font-weight: 900;
  margin: 0;
  color: #ffffff;
  font-family: Arial Black, sans-serif;
  letter-spacing: 0px;
  line-height: 1.1;
  text-transform: uppercase;
}

.view-all-link {
  color: #e63946;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.view-all-link:hover {
  gap: 12px;
}

.arrow {
  font-size: 18px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.author-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.author-name {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  font-family: Arial, sans-serif;
}

.author-role {
  font-size: 13px;
  color: #999999;
  margin: 0;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.testimonial-content {
  background: #2a2a2a;
  padding: 35px;
  border-radius: 4px;
  position: relative;
}

.testimonial-text {
  font-size: 16px;
  line-height: 1.8;
  color: #cccccc;
  margin: 0;
  font-family: Arial, sans-serif;
}

.quote-icon {
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-size: 80px;
  font-weight: 700;
  color: #e63946;
  line-height: 1;
  font-family: Georgia, serif;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .testimonials-section {
    padding: 80px 0;
  }

  .testimonials-container {
    padding: 0 24px;
  }

  .section-title {
    font-size: 36px;
  }

  .testimonials-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin-bottom: 40px;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 28px;
  }

  .testimonial-content {
    padding: 30px;
  }

  .quote-icon {
    font-size: 60px;
    bottom: 15px;
    right: 20px;
  }
}
</style>
