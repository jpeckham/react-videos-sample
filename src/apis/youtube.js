import axios from 'axios';

const key = '[YOUR YOUTUBE API KEY]';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key
    }
});
