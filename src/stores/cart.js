import { ref, computed } from 'vue'

const cartItems = ref([])

export function useCart() {
  const addToCart = (product) => {
    const existing = cartItems.value.find(item => item.name === product.name)
    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (index) => {
    cartItems.value.splice(index, 1)
  }

  const updateQuantity = (index, delta) => {
    const item = cartItems.value[index]
    if (!item) return
    item.quantity += delta
    if (item.quantity < 1) item.quantity = 1
  }

  const cartCount = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const cartSubtotal = computed(() =>
    cartItems.value.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(',', ''))
      return sum + price * item.quantity
    }, 0)
  )

  return {
    cartItems,
    cartCount,
    cartSubtotal,
    addToCart,
    removeFromCart,
    updateQuantity
  }
}
