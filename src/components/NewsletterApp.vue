<script>
export default {
  name: "NewsletterApp",
};
</script>
<template>
  <div class="newsletter">
    <div
      class="content container-fluid d-flex justify-content-between align-items-center"
    >
      <div class="text">
        <p><strong>We Offer Awesome Services</strong></p>
        <p>
          When, while lovely valley teems with vapour around meand meridian sun
          strikers the upper surface
        </p>
      </div>
      <div class="form">
        <form class="subscription">
          <input
            class="add-email"
            type="email"
            placeholder="Enter your e-mail "
          />
          <button class="submit-email" type="button">
            <span class="before-submit">Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newsletter {
  position: relative;
  height: 400px;
  background: linear-gradient(to top, #04083b 50%, white 50%);

  .content {
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translate(-50%);
    width: 70%;
    padding: 3rem;
    border-radius: 60px;
    margin: 0 auto;
    background: linear-gradient(0.25turn, #b9276e, #f8626b);
    color: white;
    .text strong {
      font-size: 3rem;
    }
  }
  .form {
    background-color: white;
    border-radius: 30px;
    padding: 10px 20px;
    .add-email {
      border: none;
      outline: none;
      padding: 0 100px 0 0;
    }
    .submit-email {
      border: none;
      padding: 10px;
      border-radius: 60px;
      outline: none;
      background: linear-gradient(0.25turn, #05a1ce, #1e4589);
      transition: all 0.3s ease 0s;
      color: #ffffff;
      &:hover {
        box-shadow: 0px 15px 20px #05a1ce;
      }
    }
  }
}
</style>
