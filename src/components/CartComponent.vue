<script setup>
import {useAppStore} from "@/store/app";
import {formatCentsToEuro} from "../composables/useCurrency";

const store = useAppStore()
</script>

<template>
  <v-card
    elevation="0"
    border
    :disabled="store.loading"
  >
    <v-card-text>
      <v-card
        elevation="0"
      >
        <v-card-title>
          <h2>
            {{ formatCentsToEuro(store.cart.amount) }}
          </h2>
          <div
            class="text-caption pt-1"
          >
            an <b>{{ store.recipientName }}</b>
          </div>
        </v-card-title>
        <v-card-text>
          <p>
            items...
          </p>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
