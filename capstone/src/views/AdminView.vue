<template>
  <div class="admin-view">
    <h1>Admin Panel - Product & User Management</h1>

    <!-- Product Management -->
    <div class="product-management">
      <h2>Product Management</h2>
      <!-- Form to Add or Update a Product -->
      <div class="product-form">
        <h3>{{ isEditingProduct ? 'Edit Product' : 'Add New Product' }}</h3>
        <form @submit.prevent="isEditingProduct ? updateProduct() : addProduct()">
          <div class="form-group">
            <label for="prodName">Product Name</label>
            <input type="text" v-model="productForm.prodName" required />
          </div>
          <div class="form-group">
            <label for="quantity">Quantity</label>
            <input type="number" v-model="productForm.quantity" required />
          </div>
          <div class="form-group">
            <label for="amount">Price</label>
            <input type="number" v-model="productForm.amount" step="0.01" required />
          </div>
          <div class="form-group">
            <label for="Category">Category</label>
            <input type="text" v-model="productForm.Category" required />
          </div>
          <div class="form-group">
            <label for="prodUrl">Product Image URL</label>
            <input type="text" v-model="productForm.prodUrl" required />
          </div>
          <div class="form-actions">
            <button type="submit">{{ isEditingProduct ? 'Update Product' : 'Add Product' }}</button>
            <button v-if="isEditingProduct" type="button" @click="cancelEditProduct">Cancel</button>
          </div>
        </form>
      </div>

      <!-- Product List -->
      <div class="product-list">
        <h3>All Products</h3>
        <div v-if="products && products.length">
          <div v-for="product in products" :key="product.prodID" class="product-card">
            <div class="product-info">
              <h4>{{ product.prodName }}</h4>
              <p><strong>Category:</strong> {{ product.Category }}</p>
              <p><strong>Quantity:</strong> {{ product.quantity }}</p>
              <p><strong>Price:</strong> ${{ product.amount }}</p>
            </div>
            <div class="product-actions">
              <button @click="editProduct(product)">Edit</button>
              <button @click="deleteProduct(product.prodID)">Delete</button>
            </div>
          </div>
        </div>
        <div v-else>
          <p>No products available.</p>
        </div>
      </div>
    </div>
  <!-- User List -->
  <div class="user-list">
    <h3>All Users</h3>
    <div v-if="users && users.length">
      <div v-for="user in users" :key="user.userID" class="user-card">
        <div class="user-info">
          <h4>{{ user.firstName }} {{ user.lastName }}</h4>
          <p><strong>Email:</strong> {{ user.emailAdd }}</p>
          <p><strong>Role:</strong> {{ user.userRole }}</p>
          <p><strong>Age:</strong> {{ user.userAge }}</p>
        </div>
        <div class="user-actions">
          <button @click="editUser(user)">Edit</button>
          <button @click="deleteUser(user.userID)">Delete</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No users available.</p>
    </div>
  </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import sweet from 'sweetalert';

export default {
  setup() {
    const store = useStore();

    // Product state and methods
    const productForm = ref({
      prodName: '',
      quantity: '',
      amount: '',
      Category: '',
      prodUrl: ''
    });
    const isEditingProduct = ref(false);
    const editingProductId = ref(null);

    onMounted(() => {
      store.dispatch('fetchProducts');
    });

    const products = computed(() => store.getters.allProducts);

    const addProduct = async () => {
      await store.dispatch('addProduct', productForm.value);
      resetProductForm();
      sweet("Product Added!", "The product has been successfully added.", "success");
    };

    const editProduct = (product) => {
      productForm.value = { ...product };
      isEditingProduct.value = true;
      editingProductId.value = product.prodID;
    };

    const updateProduct = async () => {
      await store.dispatch('updateProduct', { ...productForm.value, prodID: editingProductId.value });
      resetProductForm();
      sweet("Product Updated!", "The product has been successfully updated.", "success");
    };

    const deleteProduct = async (prodID) => {
      await store.dispatch('deleteProduct', prodID);
      sweet("Product Deleted!", "The product has been successfully deleted.", "success");
    };

    const cancelEditProduct = () => {
      resetProductForm();
    };

    const resetProductForm = () => {
      productForm.value = {
        prodName: '',
        quantity: '',
        amount: '',
        Category: '',
        prodUrl: ''
      };
      isEditingProduct.value = false;
      editingProductId.value = null;
    };

    // User state and methods
    const userForm = ref({
      firstName: '',
      lastName: '',
      userAge: '',
      Gender: '',
      userRole: '',
      emailAdd: '',
      userPass: '',  
      userProfile: ''
    });
    const isEditingUser = ref(false);
    const editingUserId = ref(null);

    onMounted(() => {
      store.dispatch('fetchUsers');
    });

    const users = computed(() => store.getters.allUsers);

    const addUser = async () => {
      await store.dispatch('addUser', userForm.value);
      resetUserForm();
      sweet("User Added!", "The user has been successfully added.", "success");
    };

    const editUser = (user) => {
      userForm.value = { ...user };
      isEditingUser.value = true;
      editingUserId.value = user.userID;
    };

    const updateUser = async () => {
      await store.dispatch('updateUser', { ...userForm.value, userID: editingUserId.value });
      resetUserForm();
      sweet("User Updated!", "The user has been successfully updated.", "success");
    };

    const deleteUser = async (userID) => {
      await store.dispatch('deleteUser', userID);
      sweet("User Deleted!", "The user has been successfully deleted.", "success");
    };

    const cancelEditUser = () => {
      resetUserForm();
    };

    const resetUserForm = () => {
      userForm.value = {
        firstName: '',
        lastName: '',
        userAge: '',
        Gender: '',
        userRole: '',
        emailAdd: '',
        userPass: '',  
        userProfile: ''
      };
      isEditingUser.value = false;
      editingUserId.value = null;
    };

    return {
      productForm,
      products,
      isEditingProduct,
      addProduct,
      editProduct,
      updateProduct,
      deleteProduct,
      cancelEditProduct,
      userForm,
      users,
      isEditingUser,
      addUser,
      editUser,
      updateUser,
      deleteUser,
      cancelEditUser
    };
  }
};
</script>


<style scoped>
.admin-view {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  background-color: var(--light-grey-color);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
}

h1, h2 {
  text-align: center;
  color: var(--dark-color);
}

.product-management, .user-management {
  margin-bottom: 3rem;
}

.product-form, .user-form {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--white-color);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--dark-grey-color);
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--dark-grey-color);
  border-radius: 4px;
  box-sizing: border-box;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  background-color: var(--brown-color);
  color: var(--white-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color var(--transition);
}

button:disabled {
  background-color: var(--dark-grey-color);
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: var(--dark-color);
}

.product-list, .user-list {
  margin-top: 2rem;
}

.product-card, .user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--white-color);
  border: 1px solid var(--dark-grey-color);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
}

.product-info h4, .user-info h4 {
  margin: 0 0 0.5rem;
  color: var(--dark-color);
}

.product-actions button, .user-actions button {
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .product-card, .user-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-actions, .user-actions {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
