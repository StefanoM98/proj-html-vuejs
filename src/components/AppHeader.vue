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
    <section class="jumbotron"></section>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: linear-gradient(#0b1953, #020331);
  //   DEBUG
  height: 300px;
  .top {
    width: 80%;
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
    .my-btn {
      color: white;
      border: none;
      text-align: center;
      padding: 10px 30px;
      background: linear-gradient(0.25turn, #05a1ce, #1e4589);
      border-radius: 30px;
    }
  }
}
</style>
