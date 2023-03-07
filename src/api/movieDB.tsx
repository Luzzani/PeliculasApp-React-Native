import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '3ab9f46e1c4105a0674bf9f70cd7399c',
    languaje: 'es-ES',
  },
});

export default movieDB;
