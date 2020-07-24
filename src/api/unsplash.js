import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Myhv-Md8tjZrrj9a9ClbtJjAz6JqFTIgKn_SRZe5H3U'
    }
});