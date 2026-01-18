import { defineStore } from 'pinia'
import SummonersData from '@/data/summoners.json'

interface Summoner {
  id: number
  summoner: string
  region: string
  likes: number
}

export const useSummonerStore = defineStore('summoner', {
  state: () => ({
    summoners: [] as Summoner[],
  }),
  actions: {
    loadSummoners() {
      try {
        // Load from localStorage if available
        const stored = localStorage.getItem('summoners')
        this.summoners = stored ? JSON.parse(stored) : [...SummonersData]
        this.saveToLocalStorage()
      } catch (err) {
        console.error('Failed to load summoners:', err)
        this.summoners = [...SummonersData]
      }
    },

    incrementLikes(id: number) {
      const summoner = this.summoners.find(s => s.id === id)
      if (summoner) {
        summoner.likes++
        this.saveToLocalStorage()
      }
    },

    saveToLocalStorage() {
      try {
        localStorage.setItem('summoners', JSON.stringify(this.summoners))
      } catch (err) {
        console.error('Failed to save summoners:', err)
      }
    },
  },
})
