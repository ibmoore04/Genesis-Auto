<template>
  <div class="cart-page">
    <!-- Page Hero -->
    <PageHero
      title="CART"
      breadcrumbText="Cart"
      :backgroundImage="heroBackground"
    />

    <!-- Cart Content -->
    <section class="cart-section">
      <div class="cart-container">

        <!-- Empty Cart -->
        <div v-if="cartItems.length === 0" class="empty-cart">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#cccccc" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <router-link to="/shop" class="continue-btn">CONTINUE SHOPPING</router-link>
        </div>

        <!-- Cart with items -->
        <div v-else class="cart-layout">

          <!-- Cart Table -->
          <div class="cart-table-wrapper">
            <table class="cart-table">
              <thead>
                <tr>
                  <th class="col-product">PRODUCT</th>
                  <th class="col-total">TOTAL</th>
                  <th class="col-remove"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cartItems" :key="index" class="cart-row">
                  <td class="col-product">
                    <div class="product-cell">
                      <img :src="item.image" :alt="item.name" class="product-thumb" />
                      <div class="product-details">
                        <h3 class="product-name">{{ item.name }}</h3>
                        <p class="product-unit-price">${{ item.price }}</p>
                        <div class="quantity-control">
                          <button class="qty-btn" @click="updateQuantity(index, -1)">−</button>
                          <span class="qty-value">{{ item.quantity }}</span>
                          <button class="qty-btn" @click="updateQuantity(index, 1)">+</button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="col-total">
                    <span class="item-total">${{ (parseFloat(item.price.replace(',', '')) * item.quantity).toFixed(2) }}</span>
                  </td>
                  <td class="col-remove">
                    <button class="remove-btn" @click="removeFromCart(index)" aria-label="Remove item">×</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Coupon -->
            <div class="coupon-row">
              <input type="text" placeholder="Coupon code" class="coupon-input" v-model="couponCode" />
              <button class="coupon-btn" @click="applyCoupon">APPLY COUPON</button>
              <router-link to="/shop" class="update-cart-btn">CONTINUE SHOPPING</router-link>
            </div>
          </div>

          <!-- Cart Totals -->
          <div class="cart-totals">
            <h2 class="totals-title">CART TOTALS</h2>

            <div class="coupon-section">
              <p class="coupon-label">Add A Coupon</p>
              <div v-if="couponApplied" class="coupon-applied">
                <span>Coupon "{{ appliedCoupon }}" applied!</span>
                <button @click="removeCoupon" class="remove-coupon">×</button>
              </div>
            </div>

            <div class="totals-row">
              <span class="totals-label">Subtotal:</span>
              <span class="totals-value">${{ cartSubtotal.toFixed(2) }}</span>
            </div>

            <div v-if="couponApplied" class="totals-row discount-row">
              <span class="totals-label">Discount:</span>
              <span class="totals-value discount">-${{ discount.toFixed(2) }}</span>
            </div>

            <div class="totals-row total-row">
              <span class="totals-label">Total:</span>
              <span class="totals-value total">${{ finalTotal.toFixed(2) }}</span>
            </div>

            <button class="checkout-btn" @click="proceedToCheckout">PROCEED TO CHECKOUT</button>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import { useCart } from '../stores/cart.js'

const heroBackground = ref('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&auto=format')
const router = useRouter()

const { cartItems, cartSubtotal, removeFromCart, updateQuantity } = useCart()

const couponCode = ref('')
const couponApplied = ref(false)
const appliedCoupon = ref('')
const discountRate = ref(0.1) // 10% discount

const discount = computed(() => couponApplied.value ? cartSubtotal.value * discountRate.value : 0)
const finalTotal = computed(() => cartSubtotal.value - discount.value)

const applyCoupon = () => {
  if (couponCode.value.trim()) {
    appliedCoupon.value = couponCode.value.trim().toUpperCase()
    couponApplied.value = true
    couponCode.value = ''
  }
}

const removeCoupon = () => {
  couponApplied.value = false
  appliedCoupon.value = ''
}

const proceedToCheckout = () => {
  router.push('/checkout')
}
</script>

<style scoped>
.cart-page {
  width: 100%;
}

.cart-section {
  background: #f8f8f8;
  padding: 80px 0;
  min-height: 400px;
}

.cart-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Empty Cart */
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  gap: 20px;
  background: #ffffff;
}

.empty-cart h2 {
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  margin: 0;
  font-family: Arial, sans-serif;
}

.empty-cart p {
  font-size: 16px;
  color: #666666;
  margin: 0;
  font-family: Arial, sans-serif;
}

.continue-btn {
  background: #e63946;
  color: #ffffff;
  text-decoration: none;
  padding: 16px 45px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: Arial, sans-serif;
  border-radius: 50px;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.continue-btn:hover {
  background: #d62839;
  transform: translateY(-2px);
}

/* Cart Layout */
.cart-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  align-items: start;
}

/* Cart Table */
.cart-table-wrapper {
  background: #ffffff;
  padding: 0;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table thead tr {
  border-bottom: 2px solid #e5e5e5;
}

.cart-table th {
  padding: 20px 25px;
  font-size: 13px;
  font-weight: 700;
  color: #000000;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
  text-align: left;
}

.col-total {
  text-align: right;
}

.cart-row {
  border-bottom: 1px solid #e5e5e5;
}

.cart-row:last-child {
  border-bottom: none;
}

.cart-table td {
  padding: 25px;
  vertical-align: middle;
}

/* Product Cell */
.product-cell {
  display: flex;
  align-items: center;
  gap: 20px;
}

.product-thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
  background: #f8f8f8;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-name {
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  margin: 0;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
}

.product-unit-price {
  font-size: 14px;
  color: #e63946;
  font-weight: 700;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Quantity Control */
.quantity-control {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 5px;
}

.qty-btn {
  width: 28px;
  height: 28px;
  background: transparent;
  border: 1px solid #e5e5e5;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
}

.qty-btn:hover {
  background: #e63946;
  border-color: #e63946;
  color: #ffffff;
}

.qty-value {
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  min-width: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

/* Item Total */
.item-total {
  font-size: 16px;
  font-weight: 700;
  color: #e63946;
  font-family: Arial, sans-serif;
  display: block;
  text-align: right;
}

/* Remove Button */
.remove-btn {
  background: none;
  border: none;
  font-size: 22px;
  color: #999999;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.3s ease;
  display: block;
}

.remove-btn:hover {
  color: #e63946;
}

/* Coupon Row */
.coupon-row {
  display: flex;
  gap: 15px;
  padding: 25px;
  border-top: 1px solid #e5e5e5;
  flex-wrap: wrap;
}

.coupon-input {
  flex: 1;
  min-width: 150px;
  padding: 12px 15px;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  font-family: Arial, sans-serif;
  color: #333333;
}

.coupon-input:focus {
  outline: none;
  border-color: #e63946;
}

.coupon-btn {
  background: #000000;
  color: #ffffff;
  border: none;
  padding: 12px 25px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  transition: background 0.3s ease;
  white-space: nowrap;
}

.coupon-btn:hover {
  background: #e63946;
}

.update-cart-btn {
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
  padding: 12px 25px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.update-cart-btn:hover {
  background: #000000;
  color: #ffffff;
}

/* Cart Totals */
.cart-totals {
  background: #ffffff;
  padding: 35px;
  position: sticky;
  top: 20px;
}

.totals-title {
  font-size: 22px;
  font-weight: 900;
  color: #000000;
  margin: 0 0 25px 0;
  font-family: Arial Black, sans-serif;
  letter-spacing: 1px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e5e5;
}

.coupon-section {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.coupon-label {
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  font-family: Arial, sans-serif;
}

.coupon-applied {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 15px;
  background: #f0fff0;
  border: 1px solid #90ee90;
  font-size: 13px;
  color: #2d7a2d;
  font-family: Arial, sans-serif;
}

.remove-coupon {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #999999;
  padding: 0;
}

.remove-coupon:hover {
  color: #e63946;
}

.totals-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e5e5e5;
}

.total-row {
  border-bottom: none;
  padding-bottom: 25px;
}

.totals-label {
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  font-family: Arial, sans-serif;
}

.totals-value {
  font-size: 16px;
  font-weight: 700;
  color: #e63946;
  font-family: Arial, sans-serif;
}

.totals-value.discount {
  color: #2d7a2d;
}

.totals-value.total {
  font-size: 22px;
  font-weight: 900;
}

.checkout-btn {
  width: 100%;
  background: #e63946;
  color: #ffffff;
  border: none;
  padding: 18px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  border-radius: 50px;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.checkout-btn:hover {
  background: #d62839;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .cart-container {
    padding: 0 24px;
  }

  .cart-layout {
    grid-template-columns: 1fr;
  }

  .cart-totals {
    position: static;
  }
}

@media (max-width: 768px) {
  .cart-section {
    padding: 60px 0;
  }

  .cart-table th,
  .cart-table td {
    padding: 15px;
  }

  .product-thumb {
    width: 60px;
    height: 60px;
  }

  .product-name {
    font-size: 14px;
  }

  .coupon-row {
    flex-direction: column;
  }

  .coupon-input,
  .coupon-btn,
  .update-cart-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
