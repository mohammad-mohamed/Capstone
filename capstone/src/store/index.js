import { createStore } from 'vuex';
import axios from 'axios';
import sweet from 'sweetalert'; // Importing sweetalert
import router from '@/router';
import { applyToken } from '@/service/AuthenticatedUser';
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
applyToken(cookies.get('verifiedUser')?.token)

const url = 'http://localhost:3308/'
export default createStore({
  state: {
    products: [],
    product: null, // To store a single product
    users: [],
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    singleProduct(state) {
      return state.product;
    },
    allUsers: state => state.users,
    getUserById: state => id => state.users.find(user => user.userID === id),
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
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_USER(state, user) {
      state.users.push(user);
    },
    UPDATE_USER(state, updatedUser) {
      const index = state.users.findIndex(user => user.userID === updatedUser.userID);
      if (index !== -1) {
        state.users.splice(index, 1, updatedUser);
      }
    },
    DELETE_USER(state, userID) {
      state.users = state.users.filter(user => user.userID !== userID);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await (await axios.get(`${url}product`)).data;
        
        if (response.status === 401) {
          router.push({name : 'admin'})
        } else if (response.status === 200) {
          commit('setProducts', response.results);
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
        const {result} = await (await axios.get(`https://capstone-f7v7.onrender.com/products/${prodID}`)).data
        console.log(result);
        
        if (result) {
          commit('setProduct', result);
        } 
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },

    async addProduct({ commit, dispatch }, productData) {
      try {
        const response = await axios.post('https://capstone-f7v7.onrender.com/products/add', productData);
        if (response.status === 201) {
          commit('addProduct', response.data);
          dispatch('fetchProducts'); // Fetch the updated list of products
        } else {
          console.error('Failed to add product:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },

    async updateProduct({ commit, dispatch }, productData ) {
      try {
        const response = await axios.patch(`https://capstone-f7v7.onrender.com/products/${productData.prodID}`, productData);
        if (response.status === 200) {
          commit('updateProduct', response.data);
          dispatch('fetchProducts'); // Fetch the updated list of products
        } else {
          console.error('Failed to update product:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },

    async deleteProduct(context, prodID) {
      try {
        const {msg} = await (await axios.delete(`https://capstone-f7v7.onrender.com/products/${prodID}`)).data;
        if (msg) {
          // commit('deleteProduct', prodID);
          context.dispatch('fetchProducts'); // Fetch the updated list of products
          sweet("Product Deleted!", "The product has been successfully deleted.", "success");
        } else {
          // console.error('Failed to delete product:', response.statusText);
          sweet("Error", `Failed to delete product: ${response.statusText}`, "error");
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('https://capstone-f7v7.onrender.com/users');
        commit('SET_USERS', response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async addUser({ commit, dispatch }, userData) {
      try {
        console.log('there');
        
        const response = await axios.post('https://capstone-f7v7.onrender.com/users/register', userData);
        console.log(response);
        
        if (response.status === 201) {
          // Fetch updated users list
          dispatch('fetchUsers');
          sweet("User Added!", "The user has been successfully added.", "success");
        } else {
          sweet("Error", `Failed to add user: ${response.statusText}`, "error");
        }
      } catch (error) {
        sweet("Error", "An error occurred while adding the user. Please try again.", "error");
        console.error('Error adding user:', error);
      }
    },
    
    async updateUser({ commit }, userData) {
      try {
        const response = await axios.patch(`https://capstone-f7v7.onrender.com/users/${userData.userID}`, userData);
        commit('UPDATE_USER', response.data);
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },
    async deleteUser({ commit }, userID) {
      try {
        await axios.delete(`https://capstone-f7v7.onrender.com/users/${userID}`);
        commit('DELETE_USER', userID);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
  },
  modules: {
    // Add any additional modules here
  },
});