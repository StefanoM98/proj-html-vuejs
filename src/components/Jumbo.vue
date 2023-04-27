<script>
export default {
  name: "Jumbo",
  data() {
    return {};
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-7">
        <div class="images">
          <img src="../assets/images/men-data.png" alt="" class="background" />
          <img src="../assets/images/nemoodar.png" alt="" />
        </div>
      </div>
      <div class="col-5">
        <div class="strategy">
          <div class="text">
            <h5><strong>Start your Project </strong></h5>
            <p>Grow Your Business</p>
            <p><strong>With Our Strategy</strong></p>
          </div>
          <div class="description pt-4">
            <p>
              When, while the lovely valley teems with vapour around means the
              meridian sun strikes the upper surface.
            </p>
          </div>
          <button class="my-btn red m-3">Try It Now</button>
          <button class="my-btn">Explore More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.images {
  width: 500px;
  position: relative;
  .background {
    position: absolute;
    width: 400px;
    left: 5rem;
    top: 3rem;
  }
}
.strategy {
  padding: 5rem 0;
  .text {
    color: white;
    font-weight: 500;
    font-size: 3rem;
  }
  .description {
    color: #03a7d3e6;
  }
  .my-btn {
    color: white;
    border: none;
    text-align: center;
    padding: 10px 40px;
    background: linear-gradient(0.25turn, #05a1ce, #1e4589);
    border-radius: 30px;
  }
  .my-btn.red {
    background: linear-gradient(0.25turn, #b9276e, #f8626b);
  }
}
</style>
