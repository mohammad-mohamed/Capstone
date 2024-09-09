<template>
    <div class="products-view">
      <h1>Products</h1>
      <div class="products-grid">
        <CardComp
          v-for="product in products"
          :key="product.prodID"
        >
          <template #prod-img>
            <img :src="product.prodUrl" :alt="product.prodName" class="product-image" />
          </template>
          <template #prod-title>
            {{ product.prodName }}
          </template>
          <template #Desc>
            <p class="product-category">{{ product.Category }}</p>
            <p class="product-quantity">Quantity: {{ product.quantity }}</p>
            <p class="product-amount">${{ product.amount }}</p>
          </template>
          <template #actions>
            <router-link :to="{name: 'product', params: {id: product.prodID}}" class="view-details-button">View details</router-link>
        </template>
        </CardComp>
      </div>
    </div>
  </template>
  
  <script>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import CardComp from '@/components/Card.vue';
  
  export default {
    components: {
      CardComp,
    },
    setup() {
      const store = useStore();
  
      onMounted(() => {
        store.dispatch('fetchProducts');
      });
  
      const products = computed(() => store.getters.allProducts);
  
      return {
        products,
      };
    },
  };
  </script>
  
  <style scoped>
  .products-view {
    padding: 2rem;
    background-color: var(--light-grey-color);
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .view-details-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--brown-color);
    color: var(--white-color);
    text-decoration: none;
    border-radius: 5px;
    transition: background-color var(--transition);
  }
  
  .view-details-button:hover {
    background-color: var(--dark-color);
  }
  </style>
  