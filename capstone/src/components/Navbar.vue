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
          <div id="side-navbar" class="side-navbar d-none">
            <button type="button" class="btn navbar-hide-btn text-dark">
              <i class="fas fa-times"></i>
            </button>
            <ul class="list-unstyled text-uppercase">
              <li><router-link to="/" class="nav-link">Home</router-link></li>
              <li><router-link to="/about" class="nav-link">About</router-link></li>
              <li><router-link to="/products" class="nav-link">Shop</router-link></li>
              <li><router-link to="/checkout" class="nav-link">Checkout</router-link></li>
              <li v-if="user && user.userRole == 'admin'"><router-link to="/admin" class="nav-link">Admin</router-link></li>
              <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
              <ul class="userAccount navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/logout">Logout</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/register">Register</router-link>
                        </li>
                    </ul>

            </ul>
          </div>
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
                <router-link class="nav-link" to="/checkout"><span class="nav-link-text">Checkout</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin" class="nav-link">
                <span class="nav-link-text">admin</span>
              </router-link>
            </li>
            <!-- <li v-if="user && user.userRole == 'admin'">
              <router-link to="/admin" class="nav-link">
                <span class="nav-link-text">admin</span>
              </router-link>
            </li> -->
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">
                <span class="nav-link-text">contact</span>
              </router-link>
            </li>

            <ul class="userAccount navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login"><span class="nav-link-text">Login</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/logout"><span class="nav-link-text">Logout</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/register"><span class="nav-link-text">Register</span></router-link>
                        </li>
                    </ul>
          </ul>
          <!-- end of nav list -->

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
.side-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px; /* Adjust width as needed */
  height: 100%;
  background-color: var(--white-color);
  box-shadow: 0 0 10px rgba(0,0,0,0.3); /* Optional shadow for better visibility */
  z-index: 1000; /* Make sure it appears above other content */
  transition: transform 0.3s ease; /* Smooth transition for sidebar */
}

.side-navbar .list-unstyled {
  padding: 20px;
}

.side-navbar .nav-link {
  display: block;
  padding: 10px 15px;
}
</style>
