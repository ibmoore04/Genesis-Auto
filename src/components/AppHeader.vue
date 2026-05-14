<template>
  <header class="app-header">
    <!-- Desktop Header -->
    <div class="header-desktop">
      <div class="header-container">
        <!-- Logo -->
        <div class="logo">
          <img src="/genesis-logo.png" alt="Genesis Auto" class="logo-img" />
        </div>

        <!-- Navigation -->
        <nav class="nav-menu">
          <router-link to="/" class="nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
            <a @click="navigate" :class="['nav-link', { active: isActive }]">
              <template v-if="isActive">[ HOME ]</template>
              <template v-else>HOME</template>
            </a>
          </router-link>
          <router-link to="/about" class="nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
            <a @click="navigate" :class="['nav-link', { active: isActive }]">
              <template v-if="isActive">[ ABOUT US ]</template>
              <template v-else>ABOUT US</template>
            </a>
          </router-link>
          <router-link to="/listing" class="nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
            <a @click="navigate" :class="['nav-link', { active: isActive }]">
              <template v-if="isActive">[ LISTING ]</template>
              <template v-else>LISTING</template>
            </a>
          </router-link>
          <div class="nav-dropdown">
            <router-link to="/shop" class="nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
              <a @click="navigate" :class="['nav-link', { active: isActive }]">
                <template v-if="isActive">[ SHOP ]</template>
                <template v-else>SHOP</template>
                <span class="dropdown-arrow">▼</span>
              </a>
            </router-link>
            <div class="dropdown-menu shop-dropdown">
              <div class="shop-menu-left">
                <h3 class="shop-menu-title">SHOP</h3>
                <nav class="shop-menu-links">
                  <router-link to="/shop" class="shop-menu-link">Products Grid</router-link>
                  <a href="#" class="shop-menu-link">Single Product</a>
                  <a href="#" class="shop-menu-link">Cart</a>
                  <a href="#" class="shop-menu-link">Checkout</a>
                  <a href="#" class="shop-menu-link">Wishlist</a>
                  <router-link to="/contact" class="shop-menu-link">Login - Register</router-link>
                  <router-link to="/contact" class="shop-menu-link">Help Center</router-link>
                </nav>
              </div>
              <div class="shop-menu-right">
                <div class="shop-product-card">
                  <img src="https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_3-1-540x620.webp" alt="Product" class="shop-product-img" />
                  <div class="shop-product-rating">★★★★☆</div>
                  <h4 class="shop-product-name">STREET SERIES COILOVER DAMPER KIT</h4>
                  <p class="shop-product-price">$280.00</p>
                </div>
                <div class="shop-product-card">
                  <img src="https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_2-1-540x620.webp" alt="Product" class="shop-product-img" />
                  <div class="shop-product-rating">★★★★☆</div>
                  <h4 class="shop-product-name">TURBOCHARGER GT SERIES INTERCOOLER</h4>
                  <p class="shop-product-price">$940.00</p>
                </div>
                <div class="shop-product-card">
                  <img src="https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/prod_1-1-540x620.webp" alt="Product" class="shop-product-img" />
                  <div class="shop-product-rating">★★★★☆</div>
                  <h4 class="shop-product-name">POWER HEATED TOWING MIRRORS</h4>
                  <p class="shop-product-price">$450.00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-dropdown">
            <router-link to="/contact" class="nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
              <a @click="navigate" :class="['nav-link', { active: isActive }]">
                <template v-if="isActive">[ CONTACTS ]</template>
                <template v-else>CONTACTS</template>
                <span class="dropdown-arrow">▼</span>
              </a>
            </router-link>
            <div class="dropdown-menu contacts-dropdown">
              <div class="contacts-menu-left">
                <h3 class="contacts-menu-title">CONTACTS</h3>
                
                <div class="contact-section">
                  <h4 class="contact-heading">Location</h4>
                  <p class="contact-text">27 Division St, New York, NY<br />10002, USA</p>
                </div>

                <div class="contact-section">
                  <h4 class="contact-heading">Contacts</h4>
                  <a href="mailto:gen_auto@mail.com" class="contact-link">gen_auto@mail.com</a>
                  <a href="tel:+18001234567" class="contact-link">+1 800 123 456 78</a>
                </div>

                <div class="contact-socials">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="contact-social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="contact-social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="contact-social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="contact-social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="contacts-menu-center">
                <h3 class="contacts-form-title">GET IN TOUCH</h3>
                <p class="contacts-form-note">Your email address will not be published. Required fields are marked *</p>
                
                <form class="contact-form">
                  <input type="text" placeholder="Your Name" class="contact-input" />
                  <input type="email" placeholder="Your Email" class="contact-input" />
                  <textarea placeholder="Your Comment" class="contact-textarea" rows="4"></textarea>
                  <button type="submit" class="contact-submit-btn">GET IN TOUCH</button>
                </form>
              </div>

              <div class="contacts-menu-right">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy"
                  class="contact-map"
                ></iframe>
              </div>
            </div>
          </div>
        </nav>

        <!-- Right Icons -->
        <div class="header-actions">
          <button class="icon-btn" aria-label="Compare">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button class="icon-btn" aria-label="Wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <router-link to="/cart" class="icon-btn cart-icon-btn" aria-label="Shopping Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
          </router-link>
          <button class="menu-btn" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="5" r="2"></circle>
              <circle cx="12" cy="5" r="2"></circle>
              <circle cx="19" cy="5" r="2"></circle>
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
              <circle cx="5" cy="19" r="2"></circle>
              <circle cx="12" cy="19" r="2"></circle>
              <circle cx="19" cy="19" r="2"></circle>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Header -->
    <div class="header-mobile">
      <div class="mobile-container">
        <button 
          class="hamburger-btn" 
          :class="{ 'active': mobileMenuOpen }"
          @click="toggleMobileMenu" 
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="logo-mobile">
          <img src="/genesis-logo.png" alt="Genesis Auto" class="logo-img-mobile" />
        </div>

        <router-link to="/cart" class="cart-btn-mobile" aria-label="Shopping Cart">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
        </router-link>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
        <nav class="mobile-nav">
          <router-link to="/" class="mobile-nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
            <a @click="navigate(); toggleMobileMenu()" :class="['mobile-nav-link', { active: isActive }]">
              <template v-if="isActive">[ HOME ]</template>
              <template v-else>HOME</template>
            </a>
          </router-link>
          <router-link to="/about" class="mobile-nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
            <a @click="navigate(); toggleMobileMenu()" :class="['mobile-nav-link', { active: isActive }]">
              <template v-if="isActive">[ ABOUT US ]</template>
              <template v-else>ABOUT US</template>
            </a>
          </router-link>
          <router-link to="/listing" class="mobile-nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
            <a @click="navigate(); toggleMobileMenu()" :class="['mobile-nav-link', { active: isActive }]">
              <template v-if="isActive">[ LISTING ]</template>
              <template v-else>LISTING</template>
            </a>
          </router-link>
          <router-link to="/shop" class="mobile-nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
            <a @click="navigate(); toggleMobileMenu()" :class="['mobile-nav-link', { active: isActive }]">
              <template v-if="isActive">[ SHOP ]</template>
              <template v-else>SHOP</template>
            </a>
          </router-link>
          <router-link to="/contact" class="mobile-nav-link" active-class="active" custom v-slot="{ isActive, navigate }">
            <a @click="navigate(); toggleMobileMenu()" :class="['mobile-nav-link', { active: isActive }]">
              <template v-if="isActive">[ CONTACTS ]</template>
              <template v-else>CONTACTS</template>
            </a>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useCart } from '../stores/cart.js'

const mobileMenuOpen = ref(false)
const { cartCount } = useCart()

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.app-header {
  width: 100%;
  position: relative;
}

/* Desktop Header Styles */
.header-desktop {
  display: block;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
}

/* Logo Styles */
.logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.logo-img {
  width: 150px;
  height: auto;
  object-fit: contain;
  display: block;
}

/* Navigation Styles */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  justify-content: center;
  margin: 0 40px;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  font-family: Arial, sans-serif;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: #e63946;
}

.nav-link.active {
  color: #e63946;
}

.dropdown-arrow {
  font-size: 10px;
  margin-left: 4px;
}

/* Dropdown Menu Styles */
.nav-dropdown {
  position: relative;
}

.dropdown-menu {
  position: fixed;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  max-width: 1400px;
  width: 95vw;
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.shop-dropdown {
  display: grid;
  grid-template-columns: 250px 1fr;
}

.shop-menu-left {
  background: #1a1a1a;
  padding: 40px 30px;
}

.shop-menu-title {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 25px 0;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.shop-menu-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.shop-menu-link {
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  font-family: Arial, sans-serif;
  transition: color 0.3s ease;
  padding: 5px 0;
}

.shop-menu-link:hover {
  color: #e63946;
}

.shop-menu-right {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px;
  background: #ffffff;
}

.shop-product-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.shop-product-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  background: #f8f8f8;
}

.shop-product-rating {
  font-size: 14px;
  color: #ffa500;
}

.shop-product-name {
  font-size: 13px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.4;
}

.shop-product-price {
  font-size: 16px;
  font-weight: 700;
  color: #e63946;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Contacts Dropdown Styles */
.contacts-dropdown {
  display: grid;
  grid-template-columns: 250px 1fr 350px;
}

.contacts-menu-left {
  background: #1a1a1a;
  padding: 40px 30px;
}

.contacts-menu-title {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 30px 0;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.contact-section {
  margin-bottom: 30px;
}

.contact-heading {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;
  font-family: Arial, sans-serif;
}

.contact-text {
  font-size: 13px;
  color: #cccccc;
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.contact-link {
  display: block;
  color: #cccccc;
  text-decoration: none;
  font-size: 13px;
  font-family: Arial, sans-serif;
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #e63946;
}

.contact-socials {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.contact-social-icon {
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid #444;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-social-icon:hover {
  background: #e63946;
  border-color: #e63946;
}

.contacts-menu-center {
  background: #2a2a2a;
  padding: 40px 35px;
}

.contacts-form-title {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 15px 0;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
}

.contacts-form-note {
  font-size: 12px;
  color: #999999;
  margin: 0 0 25px 0;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-input,
.contact-textarea {
  width: 100%;
  padding: 12px 15px;
  background: #1a1a1a;
  border: 1px solid #444;
  color: #ffffff;
  font-size: 13px;
  font-family: Arial, sans-serif;
  transition: border-color 0.3s ease;
}

.contact-input:focus,
.contact-textarea:focus {
  outline: none;
  border-color: #e63946;
}

.contact-input::placeholder,
.contact-textarea::placeholder {
  color: #666666;
}

.contact-textarea {
  resize: vertical;
  min-height: 100px;
}

.contact-submit-btn {
  background: #e63946;
  color: #ffffff;
  border: none;
  padding: 15px 35px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  border-radius: 50px;
  align-self: flex-start;
  margin-top: 10px;
}

.contact-submit-btn:hover {
  background: #d62839;
  transform: translateY(-2px);
}

.contacts-menu-right {
  background: #f0f0f0;
  position: relative;
  overflow: hidden;
}

.contact-map {
  width: 100%;
  height: 100%;
  display: block;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #000000;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  color: #e63946;
}

.cart-icon-btn {
  position: relative;
  text-decoration: none;
}

.cart-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #e63946;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
}

.menu-btn {
  background: #e63946;
  border: none;
  cursor: pointer;
  padding: 12px 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.menu-btn:hover {
  background: #d62839;
}

/* Mobile Header Styles */
.header-mobile {
  display: none;
  background: #1a1a1a;
}

.mobile-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30px;
  z-index: 10;
}

.hamburger-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background: #ffffff;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Hamburger Animation */
.hamburger-btn.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.logo-mobile {
  flex: 1;
  display: flex;
  justify-content: center;
}

.logo-img-mobile {
  height: 50px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
  display: block;
}

.cart-btn-mobile {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
}

/* Mobile Menu Dropdown */
.mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #1a1a1a;
}

.mobile-menu.open {
  max-height: 400px;
  border-top: 1px solid #333;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
}

.mobile-nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial, sans-serif;
  letter-spacing: 0.5px;
  padding: 12px 0;
  border-bottom: 1px solid #333;
  transition: color 0.3s ease;
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: #e63946;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .header-desktop {
    display: none;
  }

  .header-mobile {
    display: block;
  }
}

@media (min-width: 1025px) {
  .header-mobile {
    display: none;
  }
}

@media (max-width: 1200px) {
  .nav-menu {
    gap: 20px;
  }

  .nav-link {
    font-size: 13px;
  }
}
</style>
