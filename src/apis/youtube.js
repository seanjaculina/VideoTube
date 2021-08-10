import axios from 'axios';

const KEY = 'AIzaSyDXgQvijGesc9b2WPRcwxtuOqmT8x6GyhU';


export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params:{
       part: 'snippet',
       maxResults: 5,
       key: KEY,
   }
});

