<script setup>
import {ref} from "vue";
import {useAppStore} from "@/store/app";
const store = useAppStore()
const icon = ref('justify')
</script>

<template>
  <v-card
    border
    elevation="0"
    :loading="store.loading"
  >
    <v-card-title>
      Zahlung {{ icon }}
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row no-gutters>
        <v-col
          cols="12"
          class="py-2"
        >
          <p class="text-caption">Zahlungsmethode</p>

          <v-btn-toggle
            class="mt-2"
            v-model="icon"
            border
          >
            <v-btn value="sepa">
              <span class="hidden-sm-and-down">Sepa Lastschrift</span>
              <v-icon end>
                mdi-credit-card
              </v-icon>
            </v-btn>

            <v-btn value="bank-transfer">
              <span class="hidden-sm-and-down">Überweisung</span>
              <v-icon end>
                mdi-bank
              </v-icon>
            </v-btn>

          </v-btn-toggle>
        </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
