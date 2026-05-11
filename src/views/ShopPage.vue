<template>
  <div class="shop-page">
    <!-- Page Hero -->
    <PageHero
      title="SHOP"
      breadcrumbText="Shop"
      :backgroundImage="heroBackground"
    />

    <!-- Shop Content -->
    <section class="shop-content">
      <div class="shop-container">

        <!-- Sidebar -->
        <aside class="shop-sidebar">
          <!-- Search -->
          <div class="sidebar-widget">
            <div class="search-box">
              <input type="text" placeholder="Search products..." class="search-input" v-model="searchQuery" />
              <button class="search-btn" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>

          <!-- Best Sellers -->
          <div class="sidebar-widget">
            <h3 class="widget-title">[ Best Sellers ]</h3>
            <div class="best-sellers-list">
              <div v-for="(item, index) in bestSellers" :key="index" class="best-seller-item">
                <img :src="item.image" :alt="item.name" class="bs-image" />
                <div class="bs-info">
                  <div class="bs-rating">
                    <span v-for="s in 5" :key="s" :class="['star', s <= item.rating ? 'filled' : '']">★</span>
                  </div>
                  <p class="bs-name">{{ item.name }}</p>
                  <div class="bs-price">
                    <span v-if="item.oldPrice" class="old-price">${{ item.oldPrice }}</span>
                    <span class="current-price">${{ item.price }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Popular Tags -->
          <div class="sidebar-widget">
            <h3 class="widget-title">[ Popular Tags ]</h3>
            <div class="tags-list">
              <span
                v-for="(tag, index) in popularTags"
                :key="index"
                class="tag"
                :class="{ active: activeTag === tag }"
                @click="activeTag = activeTag === tag ? '' : tag"
              >{{ tag }}</span>
            </div>
          </div>

          <!-- Shopping Cart -->
          <div class="sidebar-widget">
            <h3 class="widget-title">[ Shopping Cart ]</h3>
            <div v-if="cart.length === 0" class="empty-cart">
              <p>No products in the cart.</p>
            </div>
            <div v-else class="cart-items">
              <div v-for="(item, index) in cart" :key="index" class="cart-item">
                <img :src="item.image" :alt="item.name" class="cart-item-img" />
                <div class="cart-item-info">
                  <p class="cart-item-name">{{ item.name }}</p>
                  <p class="cart-item-price">${{ item.price }}</p>
                </div>
                <button class="remove-btn" @click="removeFromCart(index)">×</button>
              </div>
              <div class="cart-total">
                <span>Total:</span>
                <span class="cart-total-price">${{ cartTotal }}</span>
              </div>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <div class="shop-main">
          <!-- Toolbar -->
          <div class="shop-toolbar">
            <p class="results-text">Showing 1–{{ filteredProducts.length }} of {{ products.length }} results</p>
            <div class="toolbar-right">
              <button class="filter-btn">
                Filters
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                  <line x1="11" y1="18" x2="13" y2="18"></line>
                </svg>
              </button>
              <select class="sort-select" v-model="sortBy">
                <option value="default">Default sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">By Rating</option>
              </select>
            </div>
          </div>

          <!-- Products Grid -->
          <div class="products-grid">
            <div
              v-for="(product, index) in filteredProducts"
              :key="index"
              class="product-card"
            >
              <div class="product-image">
                <img :src="product.image" :alt="product.name" />
                <span v-if="product.badge" class="product-badge" :class="product.badge.toLowerCase()">{{ product.badge }}</span>
                <div class="product-actions">
                  <button class="action-btn wishlist-btn" aria-label="Add to wishlist" @click="toggleWishlist(product)">
                    <svg width="16" height="16" viewBox="0 0 24 24" :fill="product.wishlisted ? '#e63946' : 'none'" stroke="#e63946" stroke-width="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <button class="add-to-cart-btn" @click="addToCart(product)">ADD TO CART</button>
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span v-for="s in 5" :key="s" :class="['star', s <= product.rating ? 'filled' : '']">★</span>
                </div>
                <h3 class="product-name">{{ product.name }}</h3>
                <div class="product-price">
                  <span v-if="product.oldPrice" class="old-price">${{ product.oldPrice }}</span>
                  <span class="current-price">${{ product.price }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button
              v-for="page in totalPages"
              :key="page"
              class="page-btn"
              :class="{ active: currentPage === page }"
              @click="currentPage = page"
            >{{ page }}</button>
            <button class="page-btn" @click="currentPage = Math.min(currentPage + 1, totalPages)">→</button>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/PageHero.vue'

const heroBackground = ref('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&auto=format')
const searchQuery = ref('')
const sortBy = ref('default')
const activeTag = ref('')
const currentPage = ref(1)
const itemsPerPage = 9

const cart = ref([])
const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2))

const addToCart = (product) => {
  cart.value.push({ ...product })
}

const removeFromCart = (index) => {
  cart.value.splice(index, 1)
}

const toggleWishlist = (product) => {
  product.wishlisted = !product.wishlisted
}

const popularTags = ref(['automobile', 'electro', 'parts', 'rims', 'service', 'technology', 'vehicle', 'wheels'])

const bestSellers = ref([
  {
    name: 'CANDY RED FUEL 1245 HEATER FUEL',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_1-1-540x620.webp',
    rating: 4,
    oldPrice: '550.00',
    price: '495.00'
  },
  {
    name: 'HALO GLADIATORS PRO SERIES',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_2-1-540x620.webp',
    rating: 4,
    oldPrice: '325.00',
    price: '224.00'
  },
  {
    name: 'DRILLED AND SLOTTED BRAKE ROTORS',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_3-1-540x620.webp',
    rating: 4,
    oldPrice: '550.00',
    price: '450.00'
  }
])

const products = ref([
  {
    name: 'PRESTIGE WHL 894 WHEELS 4X450',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_3-1-540x620.webp',
    rating: 4,
    price: '1,900.00',
    badge: null,
    wishlisted: false
  },
  {
    name: 'GOODYEAR ULTRA GRIP PERFORMANCE',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/shop-2-400x400.webp',
    rating: 4,
    oldPrice: '480.00',
    price: '410.00',
    badge: 'SALE',
    wishlisted: false
  },
  {
    name: 'CANDY RED FUEL 1245 HEATER FUEL',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_1-1-540x620.webp',
    rating: 4,
    price: '2,830.00',
    badge: null,
    wishlisted: false
  },
  {
    name: 'YOKOHAMA SPORT V105 - 245/40',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/shop-1-400x400.webp',
    rating: 4,
    price: '450.00',
    badge: null,
    wishlisted: false
  },
  {
    name: 'HALO HEADLIGHTS SPYDER PRO SERIES',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_2-1-540x620.webp',
    rating: 4,
    price: '224.00',
    badge: null,
    wishlisted: false
  },
  {
    name: 'HALO HEADLIGHTS PRO SERIES',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/shop-3-400x400.webp',
    rating: 4,
    price: '235.00',
    badge: null,
    wishlisted: false
  },
  {
    name: 'PROJECTOR HEADLIGHTS RECON',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_2-1-540x620.webp',
    rating: 4,
    oldPrice: '250.00',
    price: '169.00',
    badge: 'SALE',
    wishlisted: false
  },
  {
    name: 'PROJECTOR HEADLIGHTS RECON CJ',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/shop-1-400x400.webp',
    rating: 4,
    price: '240.00',
    badge: 'SALE',
    wishlisted: false
  },
  {
    name: 'DRILLED AND SLOTTED BRAKE ROTORS',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_3-1-540x620.webp',
    rating: 4,
    oldPrice: '550.00',
    price: '450.00',
    badge: null,
    wishlisted: false
  }
])

const filteredProducts = computed(() => {
  let result = [...products.value]

  if (searchQuery.value) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (sortBy.value === 'price-low') {
    result.sort((a, b) => parseFloat(a.price.replace(',', '')) - parseFloat(b.price.replace(',', '')))
  } else if (sortBy.value === 'price-high') {
    result.sort((a, b) => parseFloat(b.price.replace(',', '')) - parseFloat(a.price.replace(',', '')))
  } else if (sortBy.value === 'rating') {
    result.sort((a, b) => b.rating - a.rating)
  }

  return result
})

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))
</script>

<style scoped>
.shop-page {
  width: 100%;
}

.shop-content {
  background: #f8f8f8;
  padding: 80px 0;
}

.shop-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
}

/* Sidebar */
.shop-sidebar {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.sidebar-widget {
  background: #ffffff;
  padding: 25px;
}

.widget-title {
  font-size: 16px;
  font-weight: 700;
  color: #e63946;
  margin: 0 0 20px 0;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

/* Search */
.search-box {
  display: flex;
  border: 1px solid #e5e5e5;
}

.search-input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  font-size: 14px;
  font-family: Arial, sans-serif;
  color: #333;
}

.search-input:focus {
  outline: none;
}

.search-btn {
  background: #e63946;
  border: none;
  padding: 12px 15px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.search-btn:hover {
  background: #d62839;
}

/* Best Sellers */
.best-sellers-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.best-seller-item {
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;
}

.bs-image {
  width: 65px;
  height: 65px;
  object-fit: cover;
  flex-shrink: 0;
}

.bs-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.bs-rating .star {
  color: #dddddd;
  font-size: 13px;
}

.bs-rating .star.filled {
  color: #ffa500;
}

.bs-name {
  font-size: 13px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.3;
}

.bs-price {
  display: flex;
  gap: 8px;
  align-items: center;
}

/* Tags */
.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 6px 14px;
  border: 1px solid #e5e5e5;
  font-size: 12px;
  color: #666666;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag:hover,
.tag.active {
  background: #e63946;
  border-color: #e63946;
  color: #ffffff;
}

/* Cart */
.empty-cart p {
  font-size: 14px;
  color: #999999;
  font-family: Arial, sans-serif;
  margin: 0;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  gap: 12px;
  align-items: center;
}

.cart-item-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  flex-shrink: 0;
}

.cart-item-info {
  flex: 1;
}

.cart-item-name {
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 4px 0;
  font-family: Arial, sans-serif;
}

.cart-item-price {
  font-size: 13px;
  color: #e63946;
  font-weight: 700;
  margin: 0;
  font-family: Arial, sans-serif;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #999999;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.3s ease;
}

.remove-btn:hover {
  color: #e63946;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  border-top: 1px solid #e5e5e5;
  font-size: 14px;
  font-weight: 700;
  font-family: Arial, sans-serif;
}

.cart-total-price {
  color: #e63946;
}

/* Main Content */
.shop-main {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.shop-toolbar {
  background: #ffffff;
  padding: 18px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.results-text {
  font-size: 13px;
  color: #666666;
  margin: 0;
  font-family: Arial, sans-serif;
}

.toolbar-right {
  display: flex;
  gap: 15px;
  align-items: center;
}

.filter-btn {
  background: transparent;
  border: 1px solid #e5e5e5;
  padding: 8px 18px;
  font-size: 13px;
  font-family: Arial, sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666666;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #e63946;
  color: #e63946;
}

.sort-select {
  padding: 8px 18px;
  border: 1px solid #e5e5e5;
  font-size: 13px;
  font-family: Arial, sans-serif;
  color: #666666;
  cursor: pointer;
  background: #ffffff;
}

.sort-select:focus {
  outline: none;
  border-color: #e63946;
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.product-card {
  background: #ffffff;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f8f8f8;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: Arial, sans-serif;
  z-index: 2;
}

.product-badge.sale {
  background: #e63946;
  color: #ffffff;
}

.product-badge.new {
  background: #000000;
  color: #ffffff;
}

.product-actions {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-actions {
  opacity: 1;
}

.action-btn {
  width: 36px;
  height: 36px;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: #e63946;
}

.action-btn:hover svg {
  stroke: #ffffff;
}

.add-to-cart-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e63946;
  color: #ffffff;
  border: none;
  padding: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product-card:hover .add-to-cart-btn {
  transform: translateY(0);
}

.add-to-cart-btn:hover {
  background: #d62839;
}

.product-info {
  padding: 20px;
}

.product-rating {
  margin-bottom: 8px;
}

.star {
  color: #dddddd;
  font-size: 14px;
}

.star.filled {
  color: #ffa500;
}

.product-name {
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 10px 0;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  line-height: 1.4;
}

.product-price {
  display: flex;
  gap: 10px;
  align-items: center;
}

.old-price {
  font-size: 14px;
  color: #999999;
  text-decoration: line-through;
  font-family: Arial, sans-serif;
}

.current-price {
  font-size: 16px;
  font-weight: 700;
  color: #e63946;
  font-family: Arial, sans-serif;
}

/* Pagination */
.pagination {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.page-btn {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #666666;
  font-family: Arial, sans-serif;
  transition: all 0.3s ease;
}

.page-btn.active,
.page-btn:hover {
  background: #e63946;
  border-color: #e63946;
  color: #ffffff;
}

/* Responsive */
@media (max-width: 1024px) {
  .shop-container {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .shop-content {
    padding: 60px 0;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .shop-toolbar {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>
