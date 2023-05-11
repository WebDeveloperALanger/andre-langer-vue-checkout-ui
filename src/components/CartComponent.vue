<script setup>
import {useAppStore} from "@/store/app";
import {formatCentsToEuro} from "../composables/useCurrency";

const store = useAppStore()
</script>

<template>
  <v-card
    :disabled="store.loading"
  >
    <v-card-title>
      Zahlung an {{ store.recipientName }}<br>
      {{ formatCentsToEuro(store.cart.amount) }}
    </v-card-title>
  </v-card>
</template>

<style scoped>

</style>
