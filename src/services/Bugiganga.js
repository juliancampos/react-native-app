import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

export default class Bugiganga {
  static async getUsers() {
    return api.get('/users');
  }
  static async postUser(user) {
    return api.post('/users', user);
  }
}
