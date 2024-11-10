<script setup lang="ts">

const listItems = [
  { name: 'Mount Baker Volunteer Association', link: 'https://www.mtbakervolunteers.org/'},
  { name: 'Recreation Northwest', link: 'https://www.recreationnorthwest.org/recreation-northwest/about-us/'},
  { name: 'Wild Whatcom', link: 'https://www.wildwhatcom.org/'},
  { name: 'Vamos Outdoor Project', link: 'https://www.vamosoutdoorsproject.com/programs-1'},
  { name: 'Belligham Non-Profits Resources', link: 'https://bellinghamnonprofits.org/'},
]
</script>

<template>
  <div class="w-screen h-screen bg-gray-50 text-gray-600 mx-auto p-8 text-left">
    <h2 class="text-3xl font-bold mb-6">Organizations</h2>
    <ul class="space-y-4 list-none">
      <li
        v-for="(item, index) in listItems"
        :key="index"
        class="flex items-start space-x-3 transition-all hover:translate-x-1 cursor-pointer"
      >
        <!-- Custom Bullet Icon -->
        <span class="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-blue-500"></span>
        <!-- List Item Text -->
        <a :href="item.link" target="_blank" class="text-lg font-medium text-gray-800">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

