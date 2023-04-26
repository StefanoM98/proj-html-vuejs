<script>
export default {
  name: "AppHeader",
  props: {
    linkArray: Object,
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
        <div class="col-4 mt-4">
          <div class="text">
            <h2>Business Planning</h2>
            <p>Digital Technology</p>
            <h2>Modern Solution !</h2>
          </div>
          <div class="description pt-4">
            <p>
              When, while the lovely valley teems with vapour around means the
              meridian sun strikes the upper surface.
            </p>
          </div>
          <button class="my-btn red m-2">Try It Now</button>
          <button class="my-btn">Explore More</button>
        </div>
        <div class="col-8 d-flex justify-content-end">
          <img src="../assets/images/header.png" alt="" class="w-50" />
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: linear-gradient(#0b1953, #020331);
  //   DEBUG
  // height: 300px;
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
    padding: 10px 30px;
    background: linear-gradient(0.25turn, #05a1ce, #1e4589);
    border-radius: 30px;
  }
  .my-btn.red {
    background: linear-gradient(0.25turn, #b9276e, #f8626b);
  }
  .jumbotron {
    width: 80%;
    margin: 0 auto;
    padding: 1rem 0;
    .text {
      color: white;
      font-weight: 200;
      font-size: 2rem;
      h2 {
        font-weight: 700;
      }
    }
    .description {
      color: #03a7d3e6;
    }
  }
}
</style>
