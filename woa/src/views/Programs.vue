<template>
  <div class="bg-gray-50 w-full h-full">
    <div class="text-green-950 mx-auto p-20">
      <div class="font-bold" :style="'font-size: 35px;'">
        Program Spotlight
      </div>
      <div>
        <div class="z-5 mx-auto text-center p-16">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div
              v-for="(item, index) in items2"
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
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
const items2 = ref([
  { title: 'Wild Whatcom Summer Camps', image: 'src/assets/images/wild-whatcom.jpg', description: 'Sign-ups opens February 1, 2025', link: 'https://www.wildwhatcom.org/summer-camps' },
  { title: 'Ski to Sea Race', image: 'src/assets/images/ski-to-ski.jpg', description: 'Registration opens January 1, 2025.', link: 'https://skitosea.com/' },
  { title: 'Nooksak Nordic Ski Club', image: 'src/assets/images/nordic-ski.jpg', description: 'Winter adventures without heart palpitations', link: 'https://www.nooksacknordicskiclub.org/'},
  { title: 'Vamos Snowboarding', image: 'src/assets/images/vamos-snowboarding.png', description: 'Snowboarding program for Latine, multilingual and migrant families.', link: 'https://www.vamosoutdoorsproject.com/snowboarding' },
])
</script>

<style scoped>

</style>

