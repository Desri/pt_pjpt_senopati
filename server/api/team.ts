import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const teams = [
    { id: 1, name: 'John Doe', position: 'CEO & Founder', img: 'team1.webp' },
    { id: 2, name: 'Jane Smith', position: 'Operations Manager', img: 'team2.webp' },
    { id: 3, name: 'Michael Brown', position: 'Logistics Coordinator', img: 'team3.webp' },
    { id: 4, name: 'Emily Davis', position: 'Customer Support', img: 'team4.webp' }
  ];

  return {
    success: true,
    data: teams
  };
});
