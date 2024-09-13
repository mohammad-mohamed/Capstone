<template>
  <div>
    <!-- Spinner Component -->
    <Spinner v-if="loading" />

    <div class="product-view" v-if="!loading && product">
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
    <div :else>
        <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
      </div>
  </div>
      </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Spinner from '@/components/Spinner.vue'; // Adjust the path if necessary

export default {
  components: {
    Spinner,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const product = computed(() => store.state.product);
    const loading = ref(true); // Loading state

    onMounted(() => {
      store.dispatch('fetchProduct', route.params.id)
        .finally(() => {
          loading.value = false; // Set loading to false once data is fetched
        });
    });

    return {
      product,
      loading,
    };
  },
};
</script>

<style scoped>
.product-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-image {
  width: 300px; /* adjust the width to your liking */
  height: 300px; /* adjust the height to your liking */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-info p {
  margin-bottom: 10px;
}

.back-button {
  margin-top: 20px;
  background-color: #4CAF50;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #3e8e41;
}
</style>
