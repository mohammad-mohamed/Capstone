<template>

    <navbar/>
    <spinner v-if="!$store.state.cart"></spinner>
    
    <div>
  
      <div class="container text-center">
        <div class="row align-items-center">
          <div id="checkout-head" class="mb-5 mt-4">
            <h1 id="checkoutDrag">Checkout</h1>
          </div>
        </div>
      </div>
  
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-dark table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price per Unit</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Remove Item</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cart in $store.state.cart" :key="cart.orderID">
                    <td><img :src="cart.prod_URL" style="height: 150px;width: 200px;"></td>
                    <td>{{cart.prodName}}</td>
                    <td>{{cart.sold_quantity}}</td>
                    <td>{{cart.price_per_unit}}</td>
                    <td>{{cart.total_price}}</td>
                    <td><button id="checkBut" @click="deleteCartItem(cart.prod_ID)">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
      </div>
  
      <div id="total-con" class="container-fluid d-flex justify-content-center">
  
      </div>
  
      <div class="container-fluid d-flex justify-content-center">
  
        <button @click="checkout" id="checkout-button" type="button" class="btn btn-light mx-2">Checkout</button>
  
      </div>
  
    </div>
    <footer id="footer-con" class="container py-3 my-1" style="font-family: fantasy;">
      <p id="footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
  </template>
  <script>
  
  export default {
    components: {
      navbar,
      spinner
    },
  
    data() {
      return {}
    },
    computed: {
      getUserCart() {
        this.$store.dispatch('getUserCart')
      }
    },
    methods: {
      deleteCartItem(prod_ID) {
        console.log(prod_ID);
        this.$store.dispatch('deleteCartItem', prod_ID)
      },
      checkout() {
        this.$store.dispatch('checkout')
      }
    },
    mounted() {
      this.getUserCart
    }
  }
  </script>