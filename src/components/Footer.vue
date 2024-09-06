<template>
    <footer class="footer-container container-fluid" id="full-footer">
        <div class="row">
            <div class="col-sm-4 d-flex flex-column align-items-center">1</div>
            <div class="col-sm-4 d-flex flex-column align-items-center">2</div>
            <div class="col-sm-4 d-flex flex-column align-items-center">3</div>
            <div class="col-sm-12 d-flex flex-column align-items-center">DEMURE@2024</div>
        </div>
      <!-- <div class="footer-logo">
        <img src="" alt="nav-logo" />
      </div>
      <div class="footer-links">
        <p class="footer-title">Quick Links</p>
        <router-link to="/" class="footer-link">Home</router-link>
        <router-link to="/about" class="footer-link">About</router-link>
        <router-link to="/products" class="footer-link">Store</router-link>
        <router-link to="/admin" class="footer-link">Admin</router-link>
        <router-link to="/contact" class="footer-link">Contact Us</router-link>
      </div>
      <div class="footer-contact">
        <h4 class="footer-title">Contact Us</h4>
        <div class="footer-contact-info">
          <span>Mohammad Mohamed</span>
          <div class="footer-icons">
            <a href="https://wa.me/0833858267" target="_blank">
              <i class="fa fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/mohammad.mhm16/" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="mailto:mohammad.mhm16@gmail.com" target="_blank">
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
        <div class="footer-contact-info">
          <span>Imaraan Sheldon</span>
          <div class="footer-icons">
            <a href="https://wa.me/" target="_blank">
              <i class="fa fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/imraan/" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="mailto:imaraansheldonis2302003@gmail.com" target="_blank">
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      </div> -->
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
  }
  </script>
  
<style scoped>
  /* .footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: var(--dark-color);
    min-height: 6rem;
    box-sizing: border-box;
    padding: 1rem;
    color: var(--white-color);
  } */
  
  .footer-logo img {
    height: 100px;
    filter: drop-shadow(0 0 1rem var(--brown-color));
  }
  
  .footer-links,
  .footer-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 200px;
  }
  
  .footer-title {
    margin-bottom: 0.5rem;
    color: var(--brown-color);
    font-weight: bold;
  }
  
  .footer-link {
    text-decoration: none;
    color: var(--light-grey-color);
    margin-bottom: 0.25rem;
    transition: var(--transition);
  }
  
  .footer-link:hover {
    color: var(--white-color);
    text-decoration: underline;
  }
  
  .footer-contact-info {
    margin-bottom: 1rem;
  }
  

.icons i {
    color: var(--brown-color); /* Make the icons visible with the chosen color */
    font-size: 24px; /* Increase the size of the icons */
    transition: transform 0.3s ease, color 0.3s ease; /* Add a smooth transition */
    cursor: pointer; /* Change cursor to pointer when hovering */
}

.icons i:hover {
    transform: scale(1.2); /* Enlarge the icons when hovered */
    color: var(--dark-color); /* Change color on hover */
}

.icons i:active {
    transform: scale(1); /* Reset to original size when clicked */
    color: var(--light-brown-color); /* Change color on click */
}

</style>
  