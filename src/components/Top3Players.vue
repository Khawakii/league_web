<template>
  <div class="d-flex justify-content-center flex-wrap gap-3">
    <div
      v-for="player in top3"
      :key="player.id"
      class="card"
      style="width: 18rem;"
    >
      <img :src="player.photo" class="card-img-top" :alt="player.name" style="height: 180px; object-fit: cover;" />
      <div class="card-body">
        <h5 class="card-title">{{ player.name }}</h5>
        <p class="card-text">{{ player.role }} | {{ player.region }}</p>
      </div>
      <div class="card-body">
        <a >{{ player.comment }}</a>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Player } from '@/stores/Player'
import playersData from '../data/players.json'

const players = playersData as Player[]
const top3 = [...players].slice(0, 3)
</script>
