<template>
  <div class="checkout-page">
    <div class="coupon-banner">
      <span class="coupon-icon">i</span>
      <span class="coupon-text">Have a coupon?</span>
      <a href="#" class="coupon-link" @click.prevent="showCouponInput = !showCouponInput">CLICK HERE TO ENTER YOUR CODE</a>
    </div>
    <PageHero title="CHECKOUT" breadcrumbText="Checkout" :backgroundImage="heroBackground" />
    <section class="checkout-section">
      <div class="checkout-container">
        <div class="checkout-form">
          <div v-if="showCouponInput" class="coupon-input-box">
            <p>If you have a coupon code, please apply it below.</p>
            <div class="coupon-row">
              <input type="text" placeholder="Coupon code" class="form-input" v-model="couponCode" />
              <button class="apply-btn" @click="applyCoupon">APPLY COUPON</button>
            </div>
          </div>
          <div class="form-step">
            <div class="step-header">
              <span class="step-number">1</span>
              <h2 class="step-title">CONTACT INFORMATION</h2>
            </div>
            <p class="step-subtitle">We'll use this email to send you details and updates about your order.</p>
            <input type="email" placeholder="Email Address" class="form-input" v-model="form.email" />
          </div>
          <div class="form-step">
            <div class="step-header">
              <span class="step-number">2</span>
              <h2 class="step-title">BILLING ADDRESS</h2>
            </div>
            <p class="step-subtitle">Enter the billing address that matches your payment method.</p>
            <div class="form-row">
              <input type="text" placeholder="First Name" class="form-input" v-model="form.firstName" />
              <input type="text" placeholder="Last Name" class="form-input" v-model="form.lastName" />
            </div>
            <input type="text" placeholder="Address" class="form-input mb" v-model="form.address" />
            <input type="text" placeholder="Apartment, Suite, Etc. (Optional)" class="form-input mb" v-model="form.apartment" />
            <select class="form-input mb form-select" v-model="form.country">
              <option value="us">United States (US)</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </select>
            <div class="form-row">
              <input type="text" placeholder="City" class="form-input" v-model="form.city" />
              <input type="text" placeholder="State" class="form-input" v-model="form.state" />
            </div>
            <div class="form-row">
              <input type="text" placeholder="ZIP Code" class="form-input" v-model="form.zip" />
              <input type="tel" placeholder="Phone (Optional)" class="form-input" v-model="form.phone" />
            </div>
          </div>
          <div class="form-step">
            <div class="step-header">
              <span class="step-number">3</span>
              <h2 class="step-title">PAYMENT OPTIONS</h2>
            </div>
            <div class="payment-notice">
              <span class="notice-icon">x</span>
              <p>There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.</p>
            </div>
          </div>
          <div class="order-note">
            <label class="note-label">
              <input type="checkbox" v-model="addNote" class="note-checkbox" />
              <span>Add A Note To Your Order</span>
            </label>
            <textarea v-if="addNote" placeholder="Notes about your order..." class="note-textarea" v-model="form.note"></textarea>
          </div>
          <p class="terms-text">
            By proceeding with your purchase you agree to our
            <a href="#" class="terms-link">Terms and Conditions</a> and
            <a href="#" class="terms-link">Privacy Policy</a>.
          </p>
          <div class="form-actions">
            <router-link to="/cart" class="return-btn">RETURN TO CART</router-link>
            <button class="place-order-btn" @click="placeOrder">PLACE ORDER</button>
          </div>
        </div>
        <div class="order-summary">
          <h2 class="summary-title">ORDER SUMMARY</h2>
          <div class="summary-items">
            <div v-for="(item, index) in cartItems" :key="index" class="summary-item">
              <div class="summary-item-left">
                <div class="summary-img-wrapper">
                  <img :src="item.image" :alt="item.name" class="summary-img" />
                  <span class="summary-qty">{{ item.quantity }}</span>
                </div>
                <div class="summary-info">
                  <p class="summary-name">{{ item.name }}</p>
                  <p class="summary-unit">${{ item.price }}</p>
                </div>
              </div>
              <span class="summary-total">${{ (parseFloat(item.price.replace(',', '')) * item.quantity).toFixed(2) }}</span>
            </div>
          </div>
          <div class="summary-coupon">
            <p class="summary-coupon-label">Add A Coupon</p>
            <div v-if="couponApplied" class="coupon-tag">
              <span>{{ appliedCoupon }} applied!</span>
              <button @click="removeCoupon" class="remove-coupon-btn">x</button>
            </div>
          </div>
          <div class="summary-totals">
            <div class="summary-row"><span>Subtotal:</span><span class="summary-price">${{ cartSubtotal.toFixed(2) }}</span></div>
            <div v-if="couponApplied" class="summary-row"><span>Discount:</span><span class="summary-price discount">-${{ discount.toFixed(2) }}</span></div>
            <div class="summary-row total-row"><span>Total:</span><span class="summary-price total">${{ finalTotal.toFixed(2) }}</span></div>
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
const { cartItems, cartSubtotal } = useCart()

const showCouponInput = ref(false)
const couponCode = ref('')
const couponApplied = ref(false)
const appliedCoupon = ref('')
const addNote = ref(false)

const discount = computed(() => couponApplied.value ? cartSubtotal.value * 0.1 : 0)
const finalTotal = computed(() => cartSubtotal.value - discount.value)

const form = ref({
  email: '', firstName: '', lastName: '', address: '',
  apartment: '', country: 'us', city: '', state: '', zip: '', phone: '', note: ''
})

const applyCoupon = () => {
  if (couponCode.value.trim()) {
    appliedCoupon.value = couponCode.value.trim().toUpperCase()
    couponApplied.value = true
    couponCode.value = ''
    showCouponInput.value = false
  }
}

const removeCoupon = () => { couponApplied.value = false; appliedCoupon.value = '' }

const placeOrder = () => {
  if (!form.value.email || !form.value.firstName || !form.value.address) {
    alert('Please fill in all required fields.')
    return
  }
  alert('Order placed successfully! Thank you for your purchase.')
  router.push('/')
}
</script>

<style scoped>
.checkout-page { width: 100%; }
.coupon-banner { background: #ffffff; border-bottom: 1px solid #e5e5e5; padding: 15px 40px; display: flex; align-items: center; gap: 10px; font-family: Arial, sans-serif; font-size: 14px; position: relative; z-index: 10; }
.coupon-icon { width: 22px; height: 22px; background: #e63946; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; }
.coupon-text { color: #333333; }
.coupon-link { color: #e63946; text-decoration: none; font-weight: 700; letter-spacing: 0.5px; }
.coupon-link:hover { color: #d62839; }
.checkout-section { background: #f8f8f8; padding: 80px 0; }
.checkout-container { max-width: 1400px; margin: 0 auto; padding: 0 40px; display: grid; grid-template-columns: 1fr 400px; gap: 50px; align-items: start; }
.coupon-input-box { background: #ffffff; padding: 25px; margin-bottom: 25px; border: 1px solid #e5e5e5; }
.coupon-input-box p { font-size: 14px; color: #666666; margin: 0 0 15px 0; font-family: Arial, sans-serif; }
.coupon-row { display: flex; gap: 15px; }
.apply-btn { background: #000000; color: #ffffff; border: none; padding: 12px 25px; font-size: 12px; font-weight: 700; letter-spacing: 1px; cursor: pointer; font-family: Arial, sans-serif; white-space: nowrap; transition: background 0.3s ease; }
.apply-btn:hover { background: #e63946; }
.form-step { background: #ffffff; padding: 35px; margin-bottom: 20px; }
.step-header { display: flex; align-items: center; gap: 15px; margin-bottom: 10px; }
.step-number { width: 32px; height: 32px; background: #e63946; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; font-family: Arial, sans-serif; flex-shrink: 0; }
.step-title { font-size: 18px; font-weight: 900; color: #000000; margin: 0; font-family: Arial Black, sans-serif; }
.step-subtitle { font-size: 13px; color: #999999; margin: 0 0 25px 0; font-family: Arial, sans-serif; padding-left: 47px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
.form-input { width: 100%; padding: 14px 0; background: transparent; border: none; border-bottom: 1px solid #e5e5e5; font-size: 14px; font-family: Arial, sans-serif; color: #333333; transition: border-color 0.3s ease; box-sizing: border-box; }
.form-input:focus { outline: none; border-bottom-color: #e63946; }
.form-input::placeholder { color: #999999; }
.form-select { cursor: pointer; appearance: none; }
.mb { display: block; margin-bottom: 20px; }
.payment-notice { display: flex; gap: 15px; align-items: flex-start; background: #fff5f5; border: 1px solid #ffcccc; padding: 20px; margin-top: 20px; }
.notice-icon { width: 24px; height: 24px; background: #e63946; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; }
.payment-notice p { font-size: 13px; color: #666666; margin: 0; font-family: Arial, sans-serif; line-height: 1.6; }
.order-note { background: #ffffff; padding: 25px 35px; margin-bottom: 20px; }
.note-label { display: flex; align-items: center; gap: 12px; cursor: pointer; font-size: 14px; font-weight: 600; color: #000000; font-family: Arial, sans-serif; }
.note-checkbox { width: 18px; height: 18px; cursor: pointer; accent-color: #e63946; }
.note-textarea { width: 100%; margin-top: 15px; padding: 15px; border: 1px solid #e5e5e5; font-size: 14px; font-family: Arial, sans-serif; color: #333333; resize: vertical; min-height: 100px; box-sizing: border-box; }
.note-textarea:focus { outline: none; border-color: #e63946; }
.terms-text { font-size: 13px; color: #999999; font-family: Arial, sans-serif; margin: 0 0 25px 0; line-height: 1.6; }
.terms-link { color: #e63946; text-decoration: none; }
.terms-link:hover { text-decoration: underline; }
.form-actions { display: flex; gap: 20px; align-items: center; }
.return-btn { background: transparent; color: #000000; border: 2px solid #000000; padding: 16px 35px; font-size: 12px; font-weight: 700; letter-spacing: 1px; cursor: pointer; font-family: Arial, sans-serif; text-decoration: none; display: inline-flex; align-items: center; transition: all 0.3s ease; border-radius: 50px; }
.return-btn:hover { background: #000000; color: #ffffff; }
.place-order-btn { background: #e63946; color: #ffffff; border: none; padding: 16px 45px; font-size: 12px; font-weight: 700; letter-spacing: 1px; cursor: pointer; font-family: Arial, sans-serif; border-radius: 50px; transition: all 0.3s ease; }
.place-order-btn:hover { background: #d62839; transform: translateY(-2px); }
.order-summary { background: #ffffff; padding: 35px; position: sticky; top: 20px; }
.summary-title { font-size: 20px; font-weight: 900; color: #000000; margin: 0 0 25px 0; font-family: Arial Black, sans-serif; padding-bottom: 20px; border-bottom: 2px solid #e5e5e5; }
.summary-items { display: flex; flex-direction: column; gap: 20px; margin-bottom: 25px; }
.summary-item { display: flex; justify-content: space-between; align-items: center; gap: 15px; }
.summary-item-left { display: flex; align-items: center; gap: 15px; flex: 1; }
.summary-img-wrapper { position: relative; flex-shrink: 0; }
.summary-img { width: 60px; height: 60px; object-fit: cover; background: #f8f8f8; }
.summary-qty { position: absolute; top: -8px; right: -8px; width: 20px; height: 20px; background: #666666; color: #ffffff; border-radius: 50%; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; font-family: Arial, sans-serif; }
.summary-info { display: flex; flex-direction: column; gap: 4px; }
.summary-name { font-size: 13px; font-weight: 600; color: #000000; margin: 0; font-family: Arial, sans-serif; line-height: 1.3; }
.summary-unit { font-size: 12px; color: #999999; margin: 0; font-family: Arial, sans-serif; }
.summary-total { font-size: 14px; font-weight: 700; color: #e63946; font-family: Arial, sans-serif; white-space: nowrap; }
.summary-coupon { padding: 20px 0; border-top: 1px solid #e5e5e5; border-bottom: 1px solid #e5e5e5; margin-bottom: 20px; }
.summary-coupon-label { font-size: 14px; font-weight: 600; color: #000000; margin: 0; font-family: Arial, sans-serif; }
.coupon-tag { display: flex; align-items: center; justify-content: space-between; margin-top: 10px; padding: 8px 12px; background: #f0fff0; border: 1px solid #90ee90; font-size: 13px; color: #2d7a2d; font-family: Arial, sans-serif; }
.remove-coupon-btn { background: none; border: none; font-size: 18px; cursor: pointer; color: #999999; padding: 0; }
.remove-coupon-btn:hover { color: #e63946; }
.summary-totals { display: flex; flex-direction: column; gap: 15px; }
.summary-row { display: flex; justify-content: space-between; align-items: center; font-size: 15px; font-family: Arial, sans-serif; color: #333333; }
.total-row { padding-top: 15px; border-top: 2px solid #e5e5e5; }
.summary-price { font-weight: 700; color: #e63946; }
.summary-price.discount { color: #2d7a2d; }
.summary-price.total { font-size: 22px; font-weight: 900; }
@media (max-width: 1024px) {
  .checkout-container { grid-template-columns: 1fr; padding: 0 24px; }
  .order-summary { position: static; }
  .coupon-banner { padding: 15px 24px; }
}
@media (max-width: 768px) {
  .checkout-section { padding: 60px 0; }
  .form-step { padding: 25px; }
  .form-row { grid-template-columns: 1fr; }
  .form-actions { flex-direction: column; }
  .return-btn, .place-order-btn { width: 100%; text-align: center; justify-content: center; }
}
</style>
