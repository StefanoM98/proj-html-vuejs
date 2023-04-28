<script>
export default {
  name: "PricingApp",
};
</script>
<template>
  <div class="container-fluid text-center mt-5 pt-5">
    <p class="list">Price List</p>
    <div class="text pb-4">
      <h2>Our Pricing</h2>
      <p>When, while the lovely valley teems with vapour around means the</p>
    </div>
    <div class="row d-flex mt-4">
      <div class="col">
        <div class="card pt-4">
          <div class="characteristics">
            <h2>Designing</h2>
            <p>PROCESS</p>
            <p class="dollaro">$</p>
            <p class="opacity">40</p>
            <p class="price">40</p>
            <p class="subsciption">Per Month</p>
            <p><strong>Creative</strong> Design Enabled</p>
            <p><strong>Vibrant</strong> Color Usage</p>
            <p><strong>Eye</strong> Catching Design</p>
            <p><strong>Extreme</strong> Typography</p>
            <p><strong>Exceptional</strong> Design</p>
            <button class="my-btn">Order Now <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card pt-4 central">
          <div class="characteristics">
            <h2>Developing</h2>
            <p>PRODUCT</p>
            <p class="dollaro">$</p>
            <p class="opacity">60</p>
            <p class="price">60</p>
            <p class="subsciption">Per Month</p>
            <p><strong>Creative</strong> Design Enabled</p>
            <p><strong>Vibrant</strong> Color Usage</p>
            <p><strong>Eye</strong> Catching Design</p>
            <p><strong>Extreme</strong> Typography</p>
            <p><strong>Exceptional</strong> Design</p>
            <button class="my-btn white">Order Now <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card pt-4">
          <div class="characteristics">
            <h2>Supporting</h2>
            <p>CLIENTS</p>
            <p class="dollaro">$</p>
            <p class="opacity">80</p>
            <p class="price">80</p>
            <p class="subsciption">Per Month</p>
            <p><strong>Creative</strong> Design Enabled</p>
            <p><strong>Vibrant</strong> Color Usage</p>
            <p><strong>Eye</strong> Catching Design</p>
            <p><strong>Extreme</strong> Typography</p>
            <p><strong>Exceptional</strong> Design</p>
            <button class="my-btn">Order Now <span>&rarr;</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  width: 80%;
  .list {
    color: #f9636b;
  }
  .text {
    margin: 0 auto;
    width: 40%;
    font-size: 1.5rem;
    color: white;
  }
  .central {
    color: white;
    background: linear-gradient(0.25turn, #b8266f, #f5616e);
  }
  .card {
    position: relative;
    border-radius: 30px;

    .characteristics {
      padding: 6rem;
    }
    .price {
      font-size: 4rem;
    }
    .dollaro {
      font-size: 1.6rem;
      position: absolute;
      left: 35%;
    }
    .opacity {
      position: absolute;
      top: -100px;
      right: 0;
      color: rgba($color: #000000, $alpha: 0.3);
      font-size: 15rem;
      font-weight: 800;
    }
    .my-btn {
      margin: 1rem 0;
      background: linear-gradient(0.25turn, #b9276e, #f8626b);
      color: white;
      border: none;
      text-align: center;
      padding: 10px 40px;
      border-radius: 30px;
      transition: all 0.3s ease 0s;
    }
    .my-btn:hover {
      box-shadow: 0px 15px 20px #b9276e;
    }
    .white {
      background: white;
      color: #f9636b;
    }
  }
}
</style>
