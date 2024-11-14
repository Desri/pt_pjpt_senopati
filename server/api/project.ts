import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const projects = [
    { id: 1, title: 'Project 1', desc: 'Description of project 1', img: 'project1.jpg' },
    { id: 2, title: 'Project 2', desc: 'Description of project 2', img: 'project2.jpg' },
    { id: 3, title: 'Project 3', desc: 'Description of project 3', img: 'project3.jpg' },
    { id: 4, title: 'Project 4', desc: 'Description of project 4', img: 'project4.jpg' },
    { id: 5, title: 'Project 5', desc: 'Description of project 5', img: 'project1.jpg' },
    { id: 6, title: 'Project 6', desc: 'Description of project 6', img: 'project5.jpg' },
  ];

  return {
    success: true,
    data: projects
  };
});
