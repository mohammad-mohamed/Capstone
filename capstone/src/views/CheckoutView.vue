<template>
  <div class="checkout container">
    <h1>Checkout</h1>
    <div v-if="cartItems && cartItems.length > 0" class="checkout-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>amount</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.prodID">
            <td>{{ item.prodName }}</td>
            <td>${{ item.amount }}</td>
            <td>
              <input
                type="number"
                v-model="item.quantity"
                min="1"
                @change="updateQuantity(item.prodID, item.quantity)"
              />
            </td>
            <td>
              <button class="btn btn-danger" @click="removeFromCart(item.prodID)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="checkout-footer">
        <p>Total: ${{ totalAmount }}</p>
        <button class="btn btn-primary" @click="checkout">Proceed to Checkout</button>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty!</p>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.state.cart || []);
    const removeFromCart = (prodID) => {
      store.dispatch('removeFromCart', prodID);
    };
    const updateQuantity = (prodID, quantity) => {
      store.dispatch('updateCartQuantity', { prodID, quantity });
    };
    const totalAmount = computed(() => {
      return cartItems.value.reduce((total, item) => total + (item.amount * item.quantity), 0);
    });
    const checkout = () => {
      alert(`Proceeding with payment of $${totalAmount.value}`);
      store.dispatch('clearCart');
    };
    return {
      cartItems,
      totalAmount,
      removeFromCart,
      updateQuantity,
      checkout,
    };
  },
};
</script>
<style scoped>
.checkout {
  margin-top: 40px;
}
.checkout-footer {
  margin-top: 20px;
  text-align: right;
}
.checkout-footer p {
  font-weight: bold;
  font-size: 18px;
}
</style>