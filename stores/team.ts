import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', () => {
  const team = ref()

  const setTeam = (data?: object) => (team.value = data)

  const getTeam = async () => {
    try {
      const res = await $fetch('/api/team', {
        method: 'GET'
      })
      setTeam(res.data)
    } catch (error) {
      setTeam()
    }
  };

  return {
    team,
    getTeam,
    setTeam
  }
})
