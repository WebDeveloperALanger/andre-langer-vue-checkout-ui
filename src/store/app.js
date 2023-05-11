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
    },
    paymentMethods: [
      { id: 'sepa', label: 'Sepa Lastschrift' },
      { id: 'bank-transfer', label: 'Überweisung' },
    ]
  }),
  getters: {
    getCheckoutId: (state) => state.checkoutId,
    paymentMethodLabelById: (state) => {
      return (id) => {
        const item = state.paymentMethods.find(el => el.id === id)
        if ( item ){
          return item.label
        } else {
          return ' - not found - '
        }
      }
    }
  },
  actions: {
    setCheckoutId(id) {
      console.log(id)
      this.checkoutId = id
      localStorage.setItem('checkoutId', id)
    },
  }
})
