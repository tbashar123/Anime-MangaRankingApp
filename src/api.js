
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://anime-mangarankingwebsite.onrender.com', // replace with your actual backend URL
  headers: {
    'Content-Type': 'application/json',
    
  },
});

export default api;
