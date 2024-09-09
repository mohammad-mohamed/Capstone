<template>
  <!-- Contact -->
  <div class="contact-form-container mt-5 container9">
    <h1 class="text-center m-5">Contact Us</h1>
    <div class="row">
      <section class="contact-info col-md-6 text-center">
        <div class="contact-info-box me-md-5">
          <h2 class="contact-info-title" id="text-glow7">Contact Information</h2>
          <p class="contact-info-subtitle">Say something to start a live chat!</p>
          <div class="contact-info-phone">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/91077aea5aa62b8e443823a60102ac5646331cf76f7c36981cbc399d9dac9f13?apiKey=0bccd99636064f128fb65b1d52624404&" alt="" class="contact-info-icon" />
            <span class="contact-info-phone-number">+27 083 385 8367</span>
          </div>
          <div class="contact-info-email">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33a12af71453b99485ac9031fecc220eb9409e1999afd1ffbb8eef1e6b8f8f2?apiKey=0bccd99636064f128fb65b1d52624404&" alt="" class="contact-info-icon" />
            <span class="contact-info-email-address">mohammad.mhm16@gmail.com</span>
          </div>
          <div class="contact-info-location">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a95236edbb272ad63891b22868a195f09637d663fca1420ca3cc4475295718e?apiKey=0bccd99636064f128fb65b1d52624404&" alt="" class="contact-info-icon" />
            <span class="contact-info-location-text">Lansdowne, Cape Town, South Africa</span>
          </div>
          <div class="contact-info-bottom">
            <div class="contact-info-bottom-content">
              <div class="contact-info-bottom-left">
                <div class="contact-info-social-icons">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50d1a4b46be2a1c147b3e998399a6b51e701f20f6831c89e27878b68e94152f5?apiKey=0bccd99636064f128fb65b1d52624404&" alt="" class="contact-info-social-icon" />
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bd43cfbebb909b8217c66a8c2ccd9270d0e362aeab1e6a2ef8ae68f1ba8ce3b?apiKey=0bccd99636064f128fb65b1d52624404&" alt="" class="contact-info-social-icon" />
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb81d9e3889282d2a223a859cf8071d4c31be8305c4258e539dca8a5efabc91c?apiKey=0bccd99636064f128fb65b1d52624404&" alt="" class="contact-info-social-icon" />
                </div>
              </div>
              <div class="contact-info-bottom-right">
                <div class="contact-info-avatar">
                  <div class="contact-info-avatar-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="formcarry-container col-md-6">
        <form class="ms-5" action="https://formcarry.com/s/5BAGnwhvgiN" method="POST" enctype="multipart/form-data">
          <div class="formcarry-block">
            <label for="fc-generated-1-name">Full Name</label>
            <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
          </div>
          <div class="formcarry-block">
            <label for="fc-generated-1-email">Your Email Address</label>
            <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" />
          </div>
          <div class="formcarry-block">
            <label for="fc-generated-1-message">Your message</label>
            <textarea name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
          </div>
          <div class="formcarry-block">
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<style>
/* Contact Page Styling */
.container9 {
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 559px;
  align-items: center;
  justify-content: center;
}

.contact-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-info-box {
  background-color: var(--dark-color); /* Using the dark color from your scheme */
  color: var(--white-color); /* White text for contrast */
  padding: 30px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.contact-info-box::before {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 100px;
  height: 100px;
  background-color: var(--brown-color); /* Accent color */
  border-radius: 50%;
  z-index: 0;
}

.contact-info-title {
  font-size: 30px;
  margin-bottom: 20px;
  color: var(--brown-color); /* Matching the accent color */
  z-index: 1;
  position: relative;
}

.contact-info-subtitle {
  font-size: 20px;
  margin-bottom: 20px;
  z-index: 1;
  position: relative;
}

.contact-info-phone,
.contact-info-email,
.contact-info-location {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
}

.contact-info-icon {
  width: 30px;
  margin-right: 10px;
}

.contact-info-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  z-index: 1;
  position: relative;
}

.contact-info-bottom-content {
  display: flex;
}

.contact-info-avatar {
  width: 100px;
  height: 100px;
  background-color: var(--brown-color); /* Accent color for the avatar */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.contact-info-avatar-image {
  width: 80px;
  height: 80px;
  background-color: var(--white-color); /* White background for the avatar image */
  border-radius: 50%;
}

.formcarry-container {
  margin-top: 50px;
}

.formcarry-block {
  margin-bottom: 20px;
}

.formcarry-block label {
  font-size: 20px;
  color: var(--dark-color); /* Dark text for labels */
}

.formcarry-block input[type="text"],
.formcarry-block input[type="email"],
.formcarry-block textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--light-grey-color); /* Light grey border */
  border-radius: 5px;
  margin-top: 5px;
}

.formcarry-block button[type="submit"] {
  background-color: var(--brown-color); /* Accent color for the button */
  color: var(--white-color);
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: var(--transition);
}

.formcarry-block button[type="submit"]:hover {
  background-color: var(--dark-color); /* Dark color for hover state */
}
</style>
