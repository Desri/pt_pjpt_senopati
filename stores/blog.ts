import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
  const blog = ref()

  const setBlog = (data?: object) => (blog.value = data)

  const getBlog = async () => {
    try {
      const res = await $fetch('/api/blog', {
        method: 'GET'
      })
      setBlog(res.data)
    } catch (error) {
      setBlog()
    }
  };

  return {
    blog,
    getBlog,
    setBlog
  }
})
