import axios from 'axios';

export const list = (state) => {
  axios.get('http://localhost:8000/api/products')
    .then((response) => {
        state.commit('setProducts',response.data.data || []);
    });
}

