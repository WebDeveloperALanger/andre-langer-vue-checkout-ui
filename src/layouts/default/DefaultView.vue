<template>
  <v-main>
    <v-container fluid class="fill-height bg-surface-alvcui align-start">
      <v-row>
        <v-col cols="12">
          <v-card
            max-width="1440px"
            elevation="0"
            class="mx-auto mt-8"
          >
            <v-card-title
              class="text-center"
            >
              {{ store.global_headline }}
            </v-card-title>
            <v-container fluid class="">
              <router-view/>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import {useAppStore} from "@/store/app";

const store = useAppStore()
</script>

<style>
.bg-surface-alvcui {
  background-color: #f6f8fb;
}
</style>
