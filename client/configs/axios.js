import axios from 'axios';

axios.defaults.baseURL = 'http://hp-note.herokuapp.com/';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;