<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- Left Section -->
      <div class="footer-left">
        <h2 class="footer-title">
          UNLEASH THE ROAD AHEAD:<br />
          YOUR NEXT CAR AWAITS
        </h2>
        <a href="tel:+18001234567789" class="footer-phone">+1 800 123 456 789</a>
        <a href="mailto:gen_auto@mail.com" class="footer-email">gen_auto@mail.com</a>
        
        <div class="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="arrow">→</span> INSTAGRAM
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="arrow">→</span> FACEBOOK
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="arrow">→</span> TWITTER
          </a>
        </div>
      </div>

      <!-- Company Section -->
      <div class="footer-column">
        <h3 class="footer-heading">Company</h3>
        <nav class="footer-nav">
          <router-link to="/about" class="footer-link">About Company</router-link>
          <a href="#" class="footer-link">Our Services</a>
          <router-link to="/contact" class="footer-link">Contact Us</router-link>
          <a href="#" class="footer-link">FAQs</a>
          <a href="#" class="footer-link">Getting Started</a>
        </nav>
      </div>

      <!-- Quick Links Section -->
      <div class="footer-column">
        <h3 class="footer-heading">Quick Links</h3>
        <nav class="footer-nav">
          <router-link to="/contact" class="footer-link">Get in Touch</router-link>
          <a href="#" class="footer-link">Help Center</a>
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Live Chat</a>
          <a href="#" class="footer-link">Terms</a>
        </nav>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p class="copyright">© 2024 GenesisAuto by WebGeniusLab. All Rights Reserved</p>
    </div>

    <!-- Background Text -->
    <div class="footer-bg-text-wrapper">
      <div class="footer-bg-text">GENESIS AUTO GENESIS AUTO GENESIS AUTO GENESIS AUTO</div>
    </div>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" @click="scrollToTop" aria-label="Scroll to top">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.app-footer {
  background: #1a1a1a;
  color: #ffffff;
  padding: 80px 0 0;
  position: relative;
  overflow: hidden;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 60px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 80px;
  position: relative;
  z-index: 2;
}

/* Left Section */
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 10px 0;
  color: #ffffff;
  font-family: Arial, sans-serif;
  letter-spacing: 0.5px;
}

.footer-phone {
  font-size: 32px;
  font-weight: 700;
  color: #e63946;
  text-decoration: none;
  font-family: Arial, sans-serif;
  transition: color 0.3s ease;
}

.footer-phone:hover {
  color: #ff4757;
}

.footer-email {
  font-size: 32px;
  font-weight: 700;
  color: #e63946;
  text-decoration: none;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

.footer-email:hover {
  color: #ff4757;
}

.social-links {
  display: flex;
  gap: 30px;
  margin-top: 10px;
}

.social-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
  font-family: Arial, sans-serif;
  letter-spacing: 0.5px;
}

.social-link:hover {
  color: #e63946;
}

.arrow {
  font-size: 18px;
}

/* Footer Columns */
.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 25px 0;
  color: #ffffff;
  font-family: Arial, sans-serif;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-link {
  color: #b0b0b0;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
  font-family: Arial, sans-serif;
}

.footer-link:hover {
  color: #e63946;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid #333;
  padding: 25px 40px;
  position: relative;
  z-index: 2;
}

.copyright {
  text-align: center;
  color: #808080;
  font-size: 14px;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Background Text */
.footer-bg-text-wrapper {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
  height: 250px;
  display: flex;
  align-items: center;
}

.footer-bg-text {
  font-size: 280px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  font-family: Arial Black, sans-serif;
  letter-spacing: 40px;
  white-space: nowrap;
  animation: scrollText 30s linear infinite;
}

@keyframes scrollText {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Scroll to Top Button */
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #e63946;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
}

.scroll-top:hover {
  background: #d62839;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(230, 57, 70, 0.4);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 0 24px 40px;
  }

  .footer-title {
    font-size: 20px;
  }

  .footer-phone,
  .footer-email {
    font-size: 24px;
  }

  .social-links {
    flex-direction: column;
    gap: 15px;
  }

  .footer-bg-text-wrapper {
    height: 150px;
    bottom: 30px;
  }

  .footer-bg-text {
    font-size: 120px;
    letter-spacing: 20px;
  }

  .scroll-top {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
  }
}

@media (max-width: 768px) {
  .app-footer {
    padding: 50px 0 0;
  }

  .footer-title {
    font-size: 18px;
  }

  .footer-phone,
  .footer-email {
    font-size: 20px;
  }

  .footer-bg-text-wrapper {
    height: 100px;
    bottom: 20px;
  }

  .footer-bg-text {
    font-size: 80px;
    letter-spacing: 15px;
  }
}
</style>
