<template>
  <section class="blog-section">
    <div class="blog-container">
      <div class="blog-header">
        <div>
          <h2 class="blog-title">{{ title }}</h2>
          <p class="blog-subtitle">{{ subtitle }}</p>
        </div>
        <div class="header-actions">
          <div class="carousel-controls">
            <button class="carousel-btn" @click="prevSlide" :disabled="currentIndex === 0">‹</button>
            <button class="carousel-btn" @click="nextSlide" :disabled="currentIndex >= posts.length - 3">›</button>
          </div>
          <button class="view-all-button">
            {{ viewAllText }}
            <span class="button-arrow">→</span>
          </button>
        </div>
      </div>

      <div class="carousel-wrapper">
        <div class="blog-grid" :style="{ transform: `translateX(-${currentIndex * 33.33}%)` }">
          <div 
            v-for="(post, index) in posts" 
            :key="index" 
            class="blog-card"
          >
            <div class="blog-image">
              <img :src="post.image" :alt="post.title" />
              <span v-if="post.badge" class="blog-badge">{{ post.badge }}</span>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ post.date }}</span>
                <span class="blog-category">{{ post.category }}</span>
              </div>
              <h3 class="blog-card-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
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
    default: 'READ OUR LATEST'
  },
  subtitle: {
    type: String,
    default: 'NEWS & STORIES'
  },
  viewAllText: {
    type: String,
    default: 'VIEW ALL'
  },
  posts: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const nextSlide = () => {
  if (currentIndex.value < props.posts.length - 3) {
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
.blog-section {
  background: #ffffff;
  padding: 80px 0;
}

.blog-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.blog-title {
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  color: #000000;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.blog-subtitle {
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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.blog-card {
  background: #ffffff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid #e5e5e5;
}

.blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.blog-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f0f0f0;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.1);
}

.blog-badge {
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

.blog-content {
  padding: 25px;
}

.blog-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 13px;
  color: #666666;
  font-family: Arial, sans-serif;
}

.blog-date,
.blog-category {
  display: flex;
  align-items: center;
}

.blog-card-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #000000;
  font-family: Arial, sans-serif;
  line-height: 1.3;
}

.blog-excerpt {
  font-size: 14px;
  color: #666666;
  margin: 0;
  line-height: 1.6;
  font-family: Arial, sans-serif;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .blog-container {
    padding: 0 24px;
  }

  .blog-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .blog-section {
    padding: 50px 0;
  }

  .blog-title,
  .blog-subtitle {
    font-size: 28px;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
