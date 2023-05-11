<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()
const id = computed(() => route.params.id)
</script>

<template>
  <div>
    Workflow Component {{ id }}
  </div>
</template>

<style scoped>

</style>
