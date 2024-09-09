import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    product: null, // To store a single product
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    singleProduct(state) {
      return state.product;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex((product) => product.prodID === updatedProduct.prodID);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
    deleteProduct(state, prodID) {
      state.products = state.products.filter((product) => product.prodID !== prodID);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://capstone-f7v7.onrender.com/product');
        if (response.status === 200) {
          commit('setProducts', response.data.results);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    async fetchProduct({ commit }, prodID) {
      try {
        // const response = await axios.get(`https://capstone-f7v7.onrender.com/product/${prodID}`);
        // const product = await response.json();
        const {result} = await (await axios.get(`https://capstone-f7v7.onrender.com/product/${prodID}`)).data
        console.log(result);
        
        if (result) {
          commit('setProduct', result);
        } 
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },

    async addProduct({ commit }, productData) {
      try {
        const response = await axios.post('https://capstone-f7v7.onrender.com/product/add', productData);
        dispatch('fetchProducts');
        if (response.status === 201) {
          commit('addProduct', response.data);
        } else {
          console.error('Failed to add product:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },

    async updateProduct({ commit }, { prodID, productData }) {
      try {
        const response = await axios.patch(`https://capstone-f7v7.onrender.com/product/${prodID}`, productData);
        dispatch('fetchProducts');
        if (response.status === 200) {
          commit('updateProduct', response.data);
        } else {
          console.error('Failed to update product:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },

    async deleteProduct({ commit }, prodID) {
      try {
        const response = await axios.delete(`https://capstone-f7v7.onrender.com/product/${prodID}`);
        dispatch('fetchProducts');
        if (response.status === 204) {
          commit('deleteProduct', prodID);
        } else {
          console.error('Failed to delete product:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
  },
  modules: {
    // Add any additional modules here
  },
});
