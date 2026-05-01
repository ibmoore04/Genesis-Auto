<template>
  <section class="team-section">
    <div class="team-container">
      <!-- Header -->
      <div class="team-header">
        <div class="team-text">
          <p class="team-subtitle">{{ subtitle }}</p>
          <h2 class="team-title">{{ title }}</h2>
        </div>
        <button class="team-btn">{{ buttonText }}</button>
      </div>

      <!-- Team Grid -->
      <div class="team-grid">
        <div 
          v-for="(member, index) in team" 
          :key="index"
          class="team-card"
        >
          <div class="team-image-wrapper">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="team-image"
            />
            <div class="team-overlay">
              <div class="social-icons">
                <a href="#" class="social-icon" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" class="social-icon" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="social-icon" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="social-icon" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="team-info">
            <h3 class="team-name">{{ member.name }}</h3>
            <p class="team-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  team: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.team-section {
  padding: 100px 0;
  background: #ffffff;
}

.team-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.team-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
}

.team-text {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.team-subtitle {
  font-size: 14px;
  font-weight: 700;
  color: #e63946;
  margin: 0;
  font-family: Arial, sans-serif;
  letter-spacing: 2px;
}

.team-title {
  font-size: 48px;
  font-weight: 900;
  color: #000000;
  margin: 0;
  font-family: Arial Black, sans-serif;
  letter-spacing: 0px;
  line-height: 1.1;
  text-transform: uppercase;
}

.team-btn {
  background: #e63946;
  color: #ffffff;
  border: none;
  padding: 18px 45px;
  font-size: 13px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border-radius: 50px;
  white-space: nowrap;
}

.team-btn:hover {
  background: #d62839;
  transform: translateY(-2px);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.team-card {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.team-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  aspect-ratio: 3/4;
}

.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-card:hover .team-image {
  transform: scale(1.05);
}

.team-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e63946;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
}

.team-card:hover .team-overlay {
  opacity: 1;
  transform: translateY(0);
}

.social-icons {
  display: flex;
  gap: 20px;
}

.social-icon {
  width: 36px;
  height: 36px;
  background: transparent;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  transform: translateY(-3px);
}

.team-info {
  text-align: center;
  padding-top: 10px;
}

.team-name {
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 8px 0;
  font-family: Arial, sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.team-role {
  font-size: 13px;
  color: #e63946;
  margin: 0;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .team-section {
    padding: 80px 0;
  }

  .team-container {
    padding: 0 24px;
  }

  .team-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin-bottom: 40px;
  }

  .team-title {
    font-size: 36px;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .team-section {
    padding: 60px 0;
  }

  .team-title {
    font-size: 28px;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .team-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
