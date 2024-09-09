<template>
    <div class="holder">
      <!-- navbar -->
      <nav class="navbar navbar-expand-lg bg-brown">
        <div class="container-fluid">
          <!-- Toggler and category -->
          <div class="d-flex align-items-center">
            <button type="button" class="btn navbar-show-btn text-white me-2">
              <i class="fas fa-bars"></i>
            </button>
  
            <!-- Side navbar -->
            <ul id="side-navbar" class="bg-white text-uppercase list-unstyled d-none">
              <button type="button" class="btn navbar-hide-btn text-dark">
                <i class="fas fa-times"></i>
              </button>
              <li><router-link to="/" class="nav-link">home</router-link></li>
              <li><router-link to="/about" class="nav-link">about</router-link></li>
              <li><router-link to="/products" class="nav-link">shop</router-link></li>
              <li><router-link to="/admin" class="nav-link">admin</router-link></li>
              <li><router-link to="/contact" class="nav-link">contact</router-link></li>
            </ul>
            <!-- end of side navbar -->
          </div>
  
          <!-- Main navigation list -->
          <div class="collapse navbar-collapse justify-content-end">
            <!-- nav list -->
            <ul class="navbar-nav text-uppercase mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active-link">
                  <span class="nav-link-text">home</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">
                  <span class="nav-link-text">about</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">
                  <span class="nav-link-text">store</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin" class="nav-link">
                  <span class="nav-link-text">admin</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">
                  <span class="nav-link-text">contact</span>
                </router-link>
              </li>
            </ul>
            <!-- end of nav list -->
  
            <!-- Account icons -->
            <!-- <div class="d-flex">
              <router-link to="/profile" class="btn text-white">
                <i class="fas fa-person"></i>
              </router-link>
              <router-link to="/cart" class="btn text-white ms-2">
                <i class="fas fa-shopping-basket"></i>
              </router-link>
            </div> -->
            <!-- end of account icons -->
          </div>
          <!-- end of main navigation list -->
        </div>
      </nav>
      <!-- end of navbar -->
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const navShowBtn = document.querySelector('.navbar-show-btn');
      const navHideBtn = document.querySelector('.navbar-hide-btn');
      const sideNavbar = document.getElementById('side-navbar');
  
      // Show the sidebar
      navShowBtn.addEventListener('click', () => {
        sideNavbar.classList.remove('d-none');
        sideNavbar.classList.add('d-block');
      });
  
      // Hide the sidebar
      navHideBtn.addEventListener('click', () => {
        sideNavbar.classList.remove('d-block');
        sideNavbar.classList.add('d-none');
      });
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  