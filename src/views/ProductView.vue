<template>
    <div class="product-view" v-if="product">
      <h1>{{ product.prodName }}</h1>
      <div class="product-details">
        <img :src="product.prodUrl" :alt="product.prodName" class="product-image" />
        <div class="product-info">
          <p><strong>Category:</strong> {{ product.Category }}</p>
          <p><strong>Quantity:</strong> {{ product.quantity }}</p>
          <p><strong>Price:</strong> ${{ product.amount }}</p>
          <router-link to="/products" class="back-button">Back to Products</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const store = useStore();
      const route = useRoute();
      const product = computed(() => store.state.product);
  
      onMounted(() => {
        // const productId = route.params.prodID;
        store.dispatch('fetchProduct', route.params.id);
      });
  
  
      return {
        product,
      };
    },
  };
  </script>
  
  <style scoped>
  .product-view {
    padding: 2rem;
    background-color: var(--light-grey-color);
  }
  
  .product-details {
    display: flex;
    gap: 2rem;
  }
  
  .product-image {
    width: 300px;
    height: auto;
    object-fit: cover;
  }
  
  .product-info {
    flex: 1;
  }
  
  .back-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--brown-color);
    color: var(--white-color);
    text-decoration: none;
    border-radius: 5px;
    transition: background-color var(--transition);
  }
  
  .back-button:hover {
    background-color: var(--dark-color);
  }
  </style>
  