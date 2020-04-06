import axios from 'axios';

const KEY = 'AIzaSyDcJkidfWK73LhDHJZ59hrmgIw0qchBFsw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});