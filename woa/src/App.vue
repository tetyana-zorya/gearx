<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import router from '@/router'
import { useElementHeight } from '@/composables/getElementHeight'
import throttle from 'lodash/throttle'

const isScrolled = ref<boolean>(false)
const toolbar = ref(null)
const height = useElementHeight(toolbar)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

const throttledScroll = throttle(handleScroll, 100)

onMounted(() => {
  window.addEventListener('scroll', throttledScroll)
})

const currentRouteName = computed(() => router.currentRoute.value.name)
</script>

<template>
  <div
    id="tool-bar"
    ref="toolbar"
    :class="{'h-24': isScrolled, 'h-[40rem]': !isScrolled && currentRouteName === 'home'}"
    class="p-6 sticky top-0 bg-[url('./src/assets/images/bus-crop.jpg')] transition-all ease-in-out duration-500"
  >
    <div
      class="absolute top-0 left-0 w-full h-full z-1"
      :class="{'bg-gradient-to-b from-blue-950 to-blue-950': height <= 96, 'bg-gradient-to-b from-blue-950': height > 96}"
    />

    <div class="flex justify-between relative z-20">
      <div>
        <RouterLink to="/" class="text-white font-normal text-lg sm:text-2xl"><span class="font-extrabold">CASCADIA</span> Outdoor Alliance</RouterLink>
      </div>
      <div class="space-x-4">
        <RouterLink to="/recreate" class="text-white cursor-pointer">Recreate</RouterLink>
        <RouterLink to="/about" class="text-white cursor-pointer">Events</RouterLink>
        <RouterLink to="/about" class="text-white cursor-pointer">Programs</RouterLink>
        <RouterLink to="/about" class="text-white cursor-pointer">Organizations</RouterLink>
        <RouterLink to="/about" class="text-white cursor-pointer">Get Involved</RouterLink>
      </div>
    </div>

    <!-- Banner Text -->
    <div v-if="height > 96" class="absolute bottom-10 left-10 text-white font-bold z-30 w-5/6" style="font-size: 98px;">
      Your guide to Whatcom County outdoor resources
    </div>

  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
#tool-bar {
  transition: height 0.5s ease-in-out, padding 0.5s ease-in-out;
}
html {
  scroll-behavior: smooth;
}
</style>
