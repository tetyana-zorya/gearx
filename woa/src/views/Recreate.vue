<template>
  <div class="bg-gray-50 w-full h-full">
    <div class="container mx-auto text-center p-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-gray-100 w-full max-w-xs p-6 rounded-md shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
        >
          <img :src="item.image" :alt="item.title" class="h-80 w-full object-cover mb-4 rounded-sm" />
          <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

// Sample data for the grid items
const items = ref([
  { title: 'Snow', image: 'src/assets/images/grant-gunderson-cropped.jpg', description: 'Skiing, Snowboarding and Snow Adventure' },
  { title: 'Wheels', image: 'src/assets/images/colin-wiseman.jpg', description: 'Mountain and Cross Country Biking' },
  { title: 'Hiking', image: 'src/assets/images/ryan-schoen-cropped.jpg', description: 'Walkabouts to Backpacking' },
])
</script>

<style scoped>
.container {
  max-width: 1200px;
  min-height: 100vh;
}
@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


