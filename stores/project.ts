import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const project = ref()

  const setProject = (data?: object) => (project.value = data)

  const getProject = async () => {
    try {
      const res = await $fetch('/api/project', {
        method: 'GET'
      })
      setProject(res.data)
    } catch (error) {
      setProject()
    }
  };

  return {
    project,
    getProject,
    setProject
  }
})
