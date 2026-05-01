<template>
  <section class="category-section">
    <div class="category-container">
      <div class="category-list">
        <a 
          v-for="(category, index) in categories" 
          :key="index" 
          href="#" 
          class="category-link"
          :class="{ 'active': category.active }"
        >
          {{ category.name }}
          <span v-if="category.underline" class="underline"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    default: () => [
      { name: 'MAKES', active: false, underline: true },
      { name: 'ACCESSORIES', active: false, underline: true },
      { name: 'NEW CARS', active: false, underline: true },
      { name: 'SERVICE', active: false, underline: true },
      { name: 'PARTS', active: false, underline: true },
      { name: 'USED CARS', active: false, underline: true },
      { name: 'REPAIR', active: false }
    ]
  }
})
</script>

<style scoped>
.category-section {
  background: #ffffff;
  padding: 60px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}

.category-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.category-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
}

.category-link {
  position: relative;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  padding-bottom: 5px;
}

.category-link:hover {
  color: #e63946;
}

.category-link.active {
  color: #e63946;
}

.underline {
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 3px;
  background: #e63946;
}

@media (max-width: 1024px) {
  .category-list {
    gap: 30px;
  }

  .category-link {
    font-size: 20px;
  }

  .category-container {
    padding: 0 24px;
  }
}

@media (max-width: 768px) {
  .category-section {
    padding: 40px 0;
  }

  .category-list {
    flex-direction: column;
    gap: 20px;
  }

  .category-link {
    font-size: 18px;
  }
}
</style>
