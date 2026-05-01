<template>
  <div class="listing-page">
    <!-- Page Hero -->
    <PageHero 
      title="LISTINGS"
      breadcrumbText="Listings"
      :backgroundImage="heroBackground"
    />

    <!-- Main Content -->
    <section class="listing-content">
      <div class="listing-container">
        <!-- Sidebar Filters -->
        <aside class="listing-sidebar">
          <div class="filter-section">
            <h3 class="filter-title">[ FILTER ]</h3>
            <p class="filter-subtitle">SORT BY PRICE / YEAR</p>
          </div>

          <!-- Price Filter -->
          <div class="filter-group">
            <h4 class="filter-heading">PRICE</h4>
            <div class="price-inputs">
              <input type="number" placeholder="Min" class="price-input" />
              <span class="price-separator">-</span>
              <input type="number" placeholder="Max" class="price-input" />
            </div>
          </div>

          <!-- Year Filter -->
          <div class="filter-group">
            <h4 class="filter-heading">YEAR</h4>
            <div class="year-inputs">
              <select class="year-select">
                <option>Min</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
              <span class="year-separator">-</span>
              <select class="year-select">
                <option>Max</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
          </div>

          <!-- Mileage Filter -->
          <div class="filter-group">
            <h4 class="filter-heading">MILEAGE</h4>
            <div class="checkbox-list">
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Less 1000 km</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Less 5000 km</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Less 10000 km</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Less 20000 km</span>
              </label>
            </div>
          </div>

          <!-- Transmission Filter -->
          <div class="filter-group">
            <h4 class="filter-heading">TRANSMISSION</h4>
            <div class="checkbox-list">
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Automatic</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Manual</span>
              </label>
            </div>
          </div>

          <!-- Fuel Type Filter -->
          <div class="filter-group">
            <h4 class="filter-heading">FUEL TYPE</h4>
            <div class="checkbox-list">
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Petrol</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Diesel</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Electric</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Hybrid</span>
              </label>
            </div>
          </div>

          <!-- Body Type Filter -->
          <div class="filter-group">
            <h4 class="filter-heading">BODY TYPE</h4>
            <div class="checkbox-list">
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Sedan</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>SUV</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Coupe</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Hatchback</span>
              </label>
              <label class="checkbox-item">
                <input type="checkbox" />
                <span>Truck</span>
              </label>
            </div>
          </div>
        </aside>

        <!-- Vehicle Grid -->
        <div class="listing-main">
          <!-- Toolbar -->
          <div class="listing-toolbar">
            <p class="results-count">SHOWING 1-9 OF 45 RESULTS</p>
            <div class="view-controls">
              <button class="view-btn active">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button class="view-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="4" width="18" height="3"></rect>
                  <rect x="3" y="10" width="18" height="3"></rect>
                  <rect x="3" y="16" width="18" height="3"></rect>
                </svg>
              </button>
            </div>
          </div>

          <!-- Vehicle Cards Grid -->
          <div class="vehicle-grid">
            <div 
              v-for="(vehicle, index) in vehicles" 
              :key="index"
              class="vehicle-card"
            >
              <div class="vehicle-image">
                <img :src="vehicle.image" :alt="vehicle.name" />
                <span v-if="vehicle.badge" class="vehicle-badge">{{ vehicle.badge }}</span>
                <button class="favorite-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div class="vehicle-content">
                <h3 class="vehicle-name">{{ vehicle.name }}</h3>
                <div class="vehicle-specs">
                  <span class="spec-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    {{ vehicle.year }}
                  </span>
                  <span class="spec-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    {{ vehicle.mileage }}
                  </span>
                  <span class="spec-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    {{ vehicle.transmission }}
                  </span>
                </div>
                <div class="vehicle-footer">
                  <span class="vehicle-price">{{ vehicle.price }}</span>
                  <button class="details-btn">DETAILS</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="page-btn">1</button>
            <button class="page-btn active">2</button>
            <button class="page-btn">3</button>
            <button class="page-btn">→</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHero from '../components/PageHero.vue'

const heroBackground = ref('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format')

const vehicles = ref([
  {
    name: 'MERCEDES-BENZ S-CLASS',
    year: '2023',
    mileage: '15,000 km',
    transmission: 'Automatic',
    price: '$95,000',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/listing_single1-740x560.jpg',
    badge: 'FEATURED'
  },
  {
    name: 'JEEP CLUB WAGONEER',
    year: '2024',
    mileage: '5,000 km',
    transmission: 'Automatic',
    price: '$88,999',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/listing_single2-740x560.jpg'
  },
  {
    name: 'BMW X6 2025',
    year: '2025',
    mileage: '2,000 km',
    transmission: 'Automatic',
    price: '$97,000',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/listing_single3-740x560.jpg'
  },
  {
    name: 'NEW VOLVO GRAND COUPE',
    year: '2024',
    mileage: '8,000 km',
    transmission: 'Automatic',
    price: '$65,000',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/listing_single4-740x560.jpg',
    badge: 'NEW'
  },
  {
    name: 'AUDI A6 2025',
    year: '2025',
    mileage: '3,500 km',
    transmission: 'Automatic',
    price: '$72,500',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format'
  },
  {
    name: 'VOLVO JEEP WAGONEER',
    year: '2023',
    mileage: '12,000 km',
    transmission: 'Automatic',
    price: '$78,000',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format'
  },
  {
    name: 'AUDI E-TRON GT',
    year: '2024',
    mileage: '6,000 km',
    transmission: 'Automatic',
    price: '$105,000',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format'
  },
  {
    name: 'MERCEDES-BENZ S-CLASS',
    year: '2024',
    mileage: '4,500 km',
    transmission: 'Automatic',
    price: '$110,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format'
  },
  {
    name: 'MERCEDES-BENZ G-CLASS',
    year: '2023',
    mileage: '18,000 km',
    transmission: 'Automatic',
    price: '$145,000',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format',
    badge: 'SALE'
  }
])
</script>

<style scoped>
.listing-page {
  width: 100%;
}

.listing-content {
  background: #f8f8f8;
  padding: 80px 0;
}

.listing-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}

/* Sidebar Styles */
.listing-sidebar {
  background: #ffffff;
  padding: 30px;
  height: fit-content;
  position: sticky;
  top: 20px;
}

.filter-section {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.filter-title {
  font-size: 16px;
  font-weight: 700;
  color: #e63946;
  margin: 0 0 10px 0;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.filter-subtitle {
  font-size: 13px;
  color: #666666;
  margin: 0;
  font-family: Arial, sans-serif;
}

.filter-group {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.filter-group:last-child {
  border-bottom: none;
}

.filter-heading {
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 15px 0;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price-inputs,
.year-inputs {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-input,
.year-select {
  flex: 1;
  padding: 10px;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  font-family: Arial, sans-serif;
}

.price-separator,
.year-separator {
  color: #999999;
}

.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #666666;
  font-family: Arial, sans-serif;
}

.checkbox-item input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

/* Main Content Styles */
.listing-main {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.listing-toolbar {
  background: #ffffff;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.results-count {
  font-size: 13px;
  font-weight: 600;
  color: #666666;
  margin: 0;
  font-family: Arial, sans-serif;
  letter-spacing: 0.5px;
}

.view-controls {
  display: flex;
  gap: 10px;
}

.view-btn {
  background: transparent;
  border: 1px solid #e5e5e5;
  padding: 8px 12px;
  cursor: pointer;
  color: #666666;
  transition: all 0.3s ease;
}

.view-btn.active,
.view-btn:hover {
  background: #e63946;
  border-color: #e63946;
  color: #ffffff;
}

/* Vehicle Grid */
.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.vehicle-card {
  background: #ffffff;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.vehicle-card:hover {
  transform: translateY(-5px);
}

.vehicle-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.vehicle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.vehicle-card:hover .vehicle-image img {
  transform: scale(1.05);
}

.vehicle-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #e63946;
  color: #ffffff;
  padding: 6px 15px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: Arial, sans-serif;
}

.favorite-btn {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666666;
  transition: all 0.3s ease;
}

.favorite-btn:hover {
  background: #e63946;
  color: #ffffff;
}

.vehicle-content {
  padding: 25px;
}

.vehicle-name {
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 15px 0;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.vehicle-specs {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #666666;
  font-family: Arial, sans-serif;
}

.vehicle-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vehicle-price {
  font-size: 24px;
  font-weight: 700;
  color: #e63946;
  font-family: Arial, sans-serif;
}

.details-btn {
  background: #000000;
  color: #ffffff;
  border: none;
  padding: 10px 25px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
}

.details-btn:hover {
  background: #e63946;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
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

/* Responsive Styles */
@media (max-width: 1024px) {
  .listing-container {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }

  .listing-sidebar {
    position: static;
  }

  .vehicle-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .listing-content {
    padding: 60px 0;
  }

  .vehicle-grid {
    grid-template-columns: 1fr;
  }

  .listing-toolbar {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>
