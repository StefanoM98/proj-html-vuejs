<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header>
    <section class="top d-flex justify-content-between">
      <img src="../assets/images/white-logo-2.png" alt="" />
      <div class="cta d-flex align-items-center">
        <button class="btn btn-primary">Sign in</button>
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

    li {
      color: white;
      padding: 0 1rem;
    }
  }
}
</style>
