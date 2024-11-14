import { defineStore } from 'pinia'

export const useTestimonialStore = defineStore('testimonial', () => {
  const testimonial = ref()

  const setTestimonial = (data?: object) => (testimonial.value = data)

  const getTestimonial = async () => {
    try {
      const res = await $fetch('/api/testimonial', {
        method: 'GET'
      })
      setTestimonial(res.data)
    } catch (error) {
      setTestimonial()
    }
  };

  return {
    testimonial,
    getTestimonial,
    setTestimonial
  }
})
