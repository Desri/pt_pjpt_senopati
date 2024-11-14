import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const blogs = [
    { id: 1, title: 'Teknologi Terbaru dalam Industri Logistik', datetime: '13 Nov 2024', img: 'blog1.jpg', desc: 'Industri logistik terus berkembang pesat dengan adopsi teknologi baru untuk meningkatkan efisiensi' },
    { id: 2, title: 'Cara Memilih Mitra Logistik yang Tepat', datetime: '13 Nov 2024', img: 'blog2.jpg', desc: 'Memilih mitra logistik yang tepat adalah salah satu keputusan strategis penting bagi bisnis' },
    { id: 3, title: 'Mengenal Sistem Manajemen Transportasi', datetime: '13 Nov 2024', img: 'blog3.jpg', desc: 'Sistem Manajemen Transportasi atau Transportation Management System (TMS) adalah perangkat' },
  ];

  return {
    success: true,
    data: blogs
  };
});
