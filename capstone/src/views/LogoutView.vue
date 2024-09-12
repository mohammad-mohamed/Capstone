<template>
    <div class="container">
      <div class="row">
        <h2 class="display-4">Logout</h2>
      </div>
      <div class="row my-4">
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">User Details</h5>
              <p class="card-text"><strong>First Name:</strong> {{ userDetails?.firstName }}</p>
              <p class="card-text"><strong>Last Name:</strong> {{ userDetails?.lastName }}</p>
              <p class="card-text"><strong>Age:</strong> {{ userDetails?.userAge }}</p>
              <p class="card-text"><strong>Gender:</strong> {{ userDetails?.Gender }}</p>
              <p class="card-text"><strong>Email:</strong> {{ userDetails?.emailAdd }}</p>
              <p class="card-text"><strong>Profile:</strong> {{ userDetails?.userProfile }}</p>
              <button class="btn btn-primary mt-3" @click="logOut">Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { computed } from 'vue'
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()
  
  const store = useStore()
  
  // Get the logged-in user's details from the state
  const userDetails = computed(() => cookies.get('LegitUser')?.result)
  
  function logOut() {
    console.log(cookies.get('verifiedUser')?.result);
    
    store.dispatch('logOut')
  }
  </script>
  