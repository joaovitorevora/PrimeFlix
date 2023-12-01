//Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=f127071e4dbfe15dee31bd98314c1062&language=pt-BR

import axios from 'axios';
//base URL é a que nunca irá mudar
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
