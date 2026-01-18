<template>
  <div class="container py-5">
    <!-- Search -->
    <h3 class="text-center mb-4 p-5">Search Summoner</h3>
    <input v-model="searchQuery" type="text" class="form-control mb-3" placeholder="Enter summoner name..." />
    <div v-if="searchQuery">
      <div v-if="searchResults.length">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Summoner</th>
              <th>Region</th>
              <th>Likes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="summoner in searchResults" :key="summoner.id">
              <td>{{ summoner.id }}</td>
              <td>{{ summoner.summoner }}</td>
              <td>{{ summoner.region }}</td>
              <td>{{ summoner.likes }}</td>
              <td>
                <button class="btn btn-primary btn-sm" @click="incrementLikes(summoner.id)">
                  Like
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p class="text-center  text-danger">No summoners found.</p>
      </div>
    </div>

    <!-- All Summoners Table -->
    <h3 class="text-center mb-4 p-5">All Summoners</h3>
    <div v-if="summoners.length">
      <table class="table table-striped mb-5">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Summoner</th>
            <th>Region</th>
            <th>Likes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="summoner in summoners" :key="summoner.id">
            <td>{{ summoner.id }}</td>
            <td>{{ summoner.summoner }}</td>
            <td>{{ summoner.region }}</td>
            <td>{{ summoner.likes }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="incrementLikes(summoner.id)">
                Like
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="text-center">Loading summoners...</p>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSummonerStore } from '@/stores/summonerStore'

export default defineComponent({
  name: 'SummonerView',
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    store() {
      return useSummonerStore()
    },
    summoners() {
      return this.store.summoners
    },
    searchResults() {
      if (!this.searchQuery) return []
      return this.summoners.filter(s =>
        s.summoner.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  created() {
    this.store.loadSummoners()
  },
  methods: {
    incrementLikes(id: number) {
      this.store.incrementLikes(id)
    }
  }
})
</script>
