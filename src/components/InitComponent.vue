<script setup>
import {useAppStore} from "@/store/app";
import {useRoute} from "vue-router";
import {onMounted} from "vue";
import CartComponent from "@/components/CartComponent.vue";
import PaymentComponent from "@/components/PaymentComponent.vue";

const store = useAppStore()
const route = useRoute()
onMounted(() => {
  console.log('onMounted InitComponent', route.params.id)
  store.setCheckoutId(route.params.id)
})
</script>

<template>
  <v-row>
    <v-col cols="12" md="6">
      <cart-component/>
    </v-col>
    <v-col cols="12" md="6">
      <payment-component />
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
