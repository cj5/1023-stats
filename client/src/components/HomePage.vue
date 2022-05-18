<template>
  <div id="home-page" class="m-6 mt-16">
    <div class="main-wrap">
      <h1 class="heading mb-5">1023 Stats</h1>
      <div v-for="(player, i) in playerData" :key="i">
        <p>
          <span>{{ player.name }}: </span>
          <span class="font-mono text-teal-600">{{ player.points }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const playerData = ref([])

onMounted(() => {
  fetch('http://localhost:5000')
    .then(res => res.json())
    .then(data => playerData.value = data)
    .catch(error => console.error(error))
})
</script>
