import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ListingPage from '../views/ListingPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/listing',
    name: 'Listing',
    component: ListingPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
