
const BASE_URL = 'http://15.165.62.51';

export function fetchUser(){
  // return fetch(`http://0.0.0.0:8000/users/`).then(res => res.json());
  return fetch('http://0.0.0.0:8000/users/');
}