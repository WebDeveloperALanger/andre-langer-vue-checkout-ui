<script setup>
import { ref } from "vue";
import {useAppStore} from "@/store/app";
import PaymentMethodSepa from "@/components/PaymentMethodSepa.vue";
import PaymentMethodBankTransfer from "@/components/PaymentMethodBankTransfer.vue";
import {storeToRefs} from "pinia";

const store = useAppStore()
const paymentMethod = ref('')
const { paymentMethodLabelById } = storeToRefs(store)
</script>

<template>
  <v-card
    border
    elevation="0"
    :loading="store.loading"
  >
    <v-card-text>
      <v-card
        elevation="0"
        :loading="store.loading"
      >
        <v-card-title>
          Zahlung {{ paymentMethodLabelById(paymentMethod) }}
        </v-card-title>
        <v-card-text>

          <p class="text-caption mt-3">Zahlungsmethode</p>

          <v-btn-toggle
            class="mt-3"
            v-model="paymentMethod"
            border
          >
            <v-btn value="sepa">
              <span>Sepa Lastschrift</span>
              <v-icon end>
                mdi-credit-card
              </v-icon>
            </v-btn>

            <v-btn value="bank-transfer">
              <span>Überweisung</span>
              <v-icon end>
                mdi-bank
              </v-icon>
            </v-btn>

          </v-btn-toggle>
        </v-card-text>
        <v-card-text>
          <v-slide-x-transition
            group
            hide-on-leave
          >

            <payment-method-sepa
              v-if="paymentMethod === 'sepa'"
            />

            <payment-method-bank-transfer
              v-else-if="paymentMethod === 'bank-transfer'"
            />

          </v-slide-x-transition>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
