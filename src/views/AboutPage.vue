<template>
  <div class="about-page">
    <!-- Page Hero -->
    <PageHero 
      title="ABOUT US"
      breadcrumbText="About Us"
      :backgroundImage="heroBackground"
    />

    <!-- Discover Section -->
    <DiscoverSection 
      subtitle="[ RIDE IN STYLE ]"
      title="DISCOVER OUR PREMIUM AUTO COLLECTION"
      description="These businesses can vary in size, ranging from small independently-owned dealerships to large franchise operations representing multiple brands."
      description2="A significant number of dealerships have service and maintenance departments. These departments offer vehicle repair, routine maintenance, and other services, either for vehicles purchased from the dealership or for repairs."
      buttonText="SEARCH CARS"
      :image="discoverImage"
    />

    <!-- Stats Section -->
    <StatsSection :stats="stats" />

    <!-- Services Grid -->
    <ServicesGrid :services="services" />

    <!-- Testimonials -->
    <TestimonialsSection 
      title="WHAT OUR CLIENTS SAY ABOUT US"
      :testimonials="testimonials"
    />

    <!-- Team Section -->
    <TeamSection 
      subtitle="[ OUR TEAM ]"
      title="MEET OUR SKILLED TEAM OF PROFESSIONALS"
      buttonText="VIEW ALL TEAM"
      :team="teamMembers"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import DiscoverSection from '../components/DiscoverSection.vue'
import StatsSection from '../components/StatsSection.vue'
import ServicesGrid from '../components/ServicesGrid.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import TeamSection from '../components/TeamSection.vue'

const heroBackground = ref('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format')
const discoverImage = ref('https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/a-1.webp')

const stats = ref([
  { 
    label: 'VEHICLE SALES',
    description: 'Auto dealerships have a diverse inventory of cars, trucks, SUVs, and other vehicles for customers to choose from.'
  },
  { 
    label: 'TRADE-IN & TESTDRIVE',
    description: 'Some dealerships provide leasing options, allowing customers to use a vehicle for a specific period without committing.'
  },
  { 
    label: 'CUSTOMER SERVICE',
    description: 'Some dealerships provide pre-purchase inspections for used cars, giving buyers confidence in the condition.'
  }
])

const services = ref([
  {
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&auto=format',
    title: 'INSPECTION AND CERTIFICATION',
    description: 'Every vehicle undergoes rigorous inspection'
  },
  {
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&auto=format',
    title: 'SERVICE AND MAINTAINING',
    description: 'Professional maintenance and repair services'
  },
  {
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&auto=format',
    title: 'ACCESSORIES AND PARTS',
    description: 'Genuine parts and premium accessories',
    badge: 'POPULAR'
  }
])

const testimonials = ref([
  {
    name: 'Garold Luiss',
    role: 'CLIENT OF COMPANY',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: '" The team is not only knowledgeable about their vehicles but also incredibly courteous. They took the time to understand my preferences. "'
  },
  {
    name: 'Arnold Kolins',
    role: 'CLIENT OF COMPANY',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: '" They took the time to understand my preferences and guided me to the perfect car. Kudos to the staff for their professionalism! "'
  }
])

const teamMembers = ref([
  {
    name: 'GAROLD LUISS',
    role: '[ CEO OF COMPANY ]',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/team-s1-740x800.webp'
  },
  {
    name: 'LIANA WILLIAMS',
    role: '[ SALES MANAGER ]',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/team-s2-740x800.webp'
  },
  {
    name: 'TOMAS BLACK',
    role: '[ TOP SELLER ]',
    image: 'https://wgl-dsites.net/genesisauto/wp-content/uploads/2024/05/team-s4-740x800.webp'
  }
])
</script>

<style scoped>
.about-page {
  width: 100%;
}
</style>
