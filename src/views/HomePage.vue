<template>
  <div class="home-page">
    <HeroSection 
      subtitle="[ FIND THE PERFECT CAR HERE ]"
      title="CARS FOR EVERY JOURNEY"
      :image="heroImage"
      watermarkText="START HERE"
    />

    <OfferSection 
      title="WHAT WE OFFER FOR YOU"
      :offers="offers"
    />

    <BrandSection 
      title="EXPLORE A DIVERSE TOP"
      subtitle="AUTOMOBILE MAKERS"
      :brands="brands"
      :stats="stats"
    />

    <VehicleListingSection 
      title="BROWSE OUR RECENT"
      subtitle="NEW VEHICLES"
      viewAllText="VIEW ALL"
      :vehicles="vehicles"
    />

    <PromoSection 
      title="SLEEK RIDES, SMART<br/>PRICES: YOUR IDEAL CAR<br/>IS A CLICK AWAY"
      description="Discover unbeatable deals on quality vehicles. Browse our extensive inventory and find the perfect car that fits your budget and lifestyle."
      :features="promoFeatures"
      buttonText="SHOP NOW"
      :image="promoImage"
    />

    <BlogSection 
      title="READ OUR LATEST"
      subtitle="NEWS & STORIES"
      viewAllText="VIEW ALL"
      :posts="blogPosts"
    />

    <!-- <CategorySection :categories="categories" /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import OfferSection from '../components/OfferSection.vue'
import BrandSection from '../components/BrandSection.vue'
import VehicleListingSection from '../components/VehicleListingSection.vue'
import PromoSection from '../components/PromoSection.vue'
import BlogSection from '../components/BlogSection.vue'
import CategorySection from '../components/CategorySection.vue'

// Sample data - replace with your actual data
const heroImage = ref('https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/serv-1-1.webp')
const promoImage = ref('https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/h2-1.webp')

const offers = ref([
  {
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/pt-contacts.webp',
    title: 'Trusted Dealer'
  },
  {
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format',
    title: 'Easy Purchase'
  },
  {
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format',
    title: 'Expert Service'
  },
  {
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=300&auto=format',
    title: 'Best Prices'
  }
])

const brands = ref([
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg', name: 'Audi', count: 1256 },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg', name: 'Toyota', count: 1256 },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg', name: 'Volkswagen', count: 1256 },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg', name: 'Ford', count: 1256 },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg', name: 'Mercedes', count: 1256 },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg', name: 'BMW', count: 1256 },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Kia_logo3.svg', name: 'Kia', count: 1256 },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Hyundai_Motor_Company_logo.svg', name: 'Hyundai', count: 1256 }
])

const stats = ref([
  { number: '4.000+', label: 'Cars for Sale' },
  { number: '17.000+', label: 'Visitors per Day' },
  { number: '600+', label: 'Official Dealers' },
  { number: '50.000+', label: 'Client Reviews' }
])

const vehicles = ref([
  {
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/listing_single1-740x560.jpg',
    name: 'CHEVROLET CAMARO',
    year: '2024',
    mileage: '15K',
    price: 45000,
    badge: 'NEW'
  },
  {
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/listing_single2-740x560.jpg',
    name: 'ROLLS ROYCE PHANTOM',
    year: '2023',
    mileage: '8K',
    price: 350000,
    badge: 'FEATURED'
  },
  {
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format',
    name: 'TOYOTA CAMRY SE',
    year: '2024',
    mileage: '5K',
    price: 32000,
    badge: 'HOT'
  },
  {
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/listing_single4-740x560.jpg',
    name: 'BMW M4 COUPE',
    year: '2024',
    mileage: '10K',
    price: 75000,
    badge: 'NEW'
  }
])

const promoFeatures = ref([
  'Wide Selection of Vehicles',
  'Competitive Pricing',
  'Easy Financing Options',
  'Quality Assurance'
])

const blogPosts = ref([
  {
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format',
    title: 'Top 10 Cars for 2024',
    excerpt: 'Discover the best vehicles hitting the market this year',
    date: 'Jan 15, 2024',
    category: 'Reviews',
    badge: 'TRENDING'
  },
  {
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format',
    title: 'Electric vs Hybrid: Which is Right for You?',
    excerpt: 'Compare the pros and cons of electric and hybrid vehicles',
    date: 'Jan 12, 2024',
    category: 'Guides'
  },
  {
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format',
    title: 'Maintenance Tips for Your Vehicle',
    excerpt: 'Keep your car running smoothly with these essential tips',
    date: 'Jan 10, 2024',
    category: 'Tips'
  }
])

const categories = ref([
  { name: 'MAKES', underline: true },
  { name: 'ACCESSORIES', underline: true },
  { name: 'NEW CARS', underline: true },
  { name: 'SERVICE', underline: true },
  { name: 'PARTS', underline: true },
  { name: 'USED CARS', underline: true },
  { name: 'REPAIR' }
])
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>
