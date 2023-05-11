// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    global_headline: 'Andre Langer Vue Checkout UI',
    recipientName: 'Muster GmbH',
    checkoutId: 0,
    loading: false,
    payment_method: null,
    cart: {
      amount: 1695,
      currency: 'EUR', // 3 Letter ISO code https://www.iso.org/iso-4217-currency-codes.html
    }
  }),
  getters: {
    getCheckoutId: (state) => state.checkoutId,
  },
  actions: {
    setCheckoutId(id) {
      console.log(id)
      this.checkoutId = id
      localStorage.setItem('checkoutId', id)
    },
  }
})
