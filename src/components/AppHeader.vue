<script>
export default {
  name: "AppHeader",
  props: {
    linkArray: Array,
  },
};
</script>
<template>
  <header>
    <section class="top d-flex justify-content-between">
      <img src="../assets/images/white-logo-2.png" alt="" />
      <div class="cta d-flex align-items-center">
        <ul class="links d-flex">
          <li
            v-for="(link, index) in linkArray"
            :key="index"
            :class="link.active ? 'active' : ''"
          >
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
        <button class="my-btn">Sign in</button>
      </div>
    </section>
    <section class="jumbotron">
      <div class="row">
        <div class="col-4 pt-5">
          <div class="text">
            <p><strong>Business Planning</strong></p>
            <p>Digital Technology</p>
            <p><strong>Modern Solution !</strong></p>
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
        <div class="col-8 d-flex justify-content-end">
          <img src="../assets/images/header.png" alt="" class="w-75" />
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: linear-gradient(#0b1953, #020331);
  .top {
    width: 75%;
    margin: 0 auto;
    padding: 1rem 0;
    .links {
      list-style-type: none;
    }
    li {
      color: white;
      padding: 0 1rem;
      a {
        color: inherit;
        text-decoration: none;
      }
      &.active,
      &:hover {
        color: #f9636b;
      }
    }
  }
  .my-btn {
    color: white;
    border: none;
    text-align: center;
    padding: 10px 40px;
    background: linear-gradient(0.25turn, #05a1ce, #1e4589);
    border-radius: 30px;
    transition: all 0.3s ease 0s;
    &:hover {
      box-shadow: 0px 15px 20px #05a1ce;
    }
  }
  .my-btn.red {
    background: linear-gradient(0.25turn, #b9276e, #f8626b);
    &:hover {
      box-shadow: 0px 15px 20px #b9276e;
    }
  }
  .jumbotron {
    width: 80%;
    margin: 0 auto;
    padding: 1rem 0;
    .text {
      color: white;
      font-weight: 500;
      font-size: 3rem;
    }
    .description {
      color: #03a7d3e6;
    }
  }
}
</style>
