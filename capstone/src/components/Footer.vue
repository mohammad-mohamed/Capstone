<template>
  <footer class="footer-container container-fluid" id="full-footer">
    <div class="row">
      <div class="col-sm-6 d-flex flex-column align-items-center justify-content-center">
        <img
          src="https://imaraansheldon.github.io/Demure/Images/Logo/Demure.png"
          class="footer-logo rounded-circle"
        />
      </div>

      <div class="col-sm-6 d-flex flex-column align-items-center justify-content-center">
        <div class="social-icons icons">
          <a href="https://wa.me/0833858267" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/mohammad.mhm16" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/@Labbeast1" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="mailto:mohammad.mhm16@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      
      <div class="col-sm-12 d-flex flex-column align-items-center mark">
        DEMURE@2024
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
};
</script>

<style scoped>
:root {
  --brown-color: #492500; /* or any other brown color of your choice */
  /* ... other variables ... */
}
.row {
  background: #e6a462; /* Change background to brown */
  color: var(--dark-color); /* Keep text color as dark */
}

.footer-logo {
  height: 140px;
  width: 140px;
  filter: drop-shadow(0 0 1rem var(--brown-color)); /* Add a brown shadow to the logo */
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons i {
  font-size: 24px;
  color: var(--brown-color); /* Change icon color to brown */
  transition: color 0.3s ease-in-out;
}

.social-icons i:hover {
  color: var(--dark-color); /* Change icon color to dark on hover */
}

.mark {
  margin-top: 20px;
  font-weight: bold;
  color: var(--brown-color); /* Change mark color to brown */
}

.icons i {
  color: var(--brown-color); /* Keep icon color as brown */
  font-size: 24px; /* Keep icon size as 24px */
  transition: transform 0.3s ease, color 0.3s ease; /* Keep the smooth transition */
  cursor: pointer; /* Keep the cursor as pointer on hover */
}

.icons i:hover {
  transform: scale(1.2); /* Keep the enlarge effect on hover */
  color: var(--dark-color); /* Keep the dark color on hover */
}

.icons i:active {
  transform: scale(1); /* Keep the reset to original size on click */
  color: var(--light-brown-color); /* Keep the light brown color on click */
}
</style>
