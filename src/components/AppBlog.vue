<script>
export default {
  name: "AppBlog",
};
</script>
<template>
  <div class="col-6">
    <div class="card">
      <div class="text h-100 d-flex flex-column justify-content-end">
        <p>April 21, 2019 • byPaul</p>
        <h3>Amazon gets CCi not to acquire 49% stake in</h3>
        <p>When, while the lovely valley teems with vapour around means the</p>
        <div class="button text-end">
          <button>Read More</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="my-card">
      <div class="data">
        <p>April 21, 2019 • byPaul</p>
        <h3>Amazon gets CCi not to acquire 49% stake in</h3>
        <p>When, while the lovely valley teems with vapour around means the</p>
        <div class="button">
          <button>Read More</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="my-card">
      <div class="data">
        <p>April 21, 2019 • byPaul</p>
        <h3>Amazon gets CCi not to acquire 49% stake in</h3>
        <p>When, while the lovely valley teems with vapour around means the</p>
        <div class="button">
          <button>Read More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col-6 {
  //   height: 300px;
  color: white;
}
.card {
  padding: 1rem;
  border-radius: 30px;
  background-image: url(../assets/images/headway-537308-unsplash-1380x703.jpg);
  height: 100%;
  background-position: center;
  background-size: cover;
}
.my-card {
  color: white;
  padding: 3rem;
  border-radius: 30px;
  background: linear-gradient(#0b1953, #020331);
}
</style>
