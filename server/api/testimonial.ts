import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const testimonials = [
    { id: 1, name: 'Client 1', desc: 'PT PJPT SENOPATI provided excellent service and ensured our cargo was delivered on time.', img: 'client1.webp' },
    { id: 2, name: 'Client 2', desc: 'Highly recommend PT PJPT SENOPATI for their professional and reliable logistics solutions.', img: 'client2.webp' },
    { id: 3, name: 'Client 3', desc: 'Great experience with PT PJPT SENOPATI. Their team is very responsive and helpful.', img: 'client3.webp' },
  ];

  return {
    success: true,
    data: testimonials
  };
});
