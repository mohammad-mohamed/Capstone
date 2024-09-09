<template>
  <div class="products-view">
    <h1>Products</h1>
    
    <!-- Search Bar -->
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search products..."
        class="search-input"
      />
    </div>

    <!-- Filter by Category -->
    <div class="filter-bar">
      <label for="categoryFilter">Filter by Category:</label>
      <select v-model="selectedCategory" id="categoryFilter" class="filter-select">
        <option value="">All Categories</option>
        <option v-for="category in uniqueCategories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    
    <!-- Spinner Component -->
    <Spinner v-if="loading" />

    <div class="products-grid">
      <CardComp
        v-for="product in filteredProducts"
        :key="product.prodID"
      >
        <template #prod-img>
          <img :src="product.prodUrl" class="product-image" />
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
          <router-link :to="{ name: 'product', params: { id: product.prodID } }" class="view-details-button">
            View details
          </router-link>
        </template>
      </CardComp>
      <div :else>
        <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
      </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import CardComp from '@/components/Card.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    CardComp,
    Spinner
  },
  setup() {
    const store = useStore();
    const searchQuery = ref('');
    const selectedCategory = ref('');

    onMounted(() => {
      store.dispatch('fetchProducts');
    });

    const products = computed(() => store.getters.allProducts);

    const filteredProducts = computed(() => {
      return products.value.filter(product => {
        const matchesSearchQuery = product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = selectedCategory.value ? product.Category === selectedCategory.value : true;
        return matchesSearchQuery && matchesCategory;
      });
    });

    const uniqueCategories = computed(() => {
      const categories = products.value.map(product => product.Category);
      return [...new Set(categories)];
    });

    return {
      searchQuery,
      selectedCategory,
      filteredProducts,
      uniqueCategories,
    };
  },
};
</script>

<style scoped>
.products-view {
  padding: 2rem;
  background-color: var(--light-grey-color);
}

.search-bar, .filter-bar {
  margin-bottom: 1rem;
}

.search-input, .filter-select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
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
