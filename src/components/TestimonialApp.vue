<script>
export default {
  name: "Testimonial",
  data() {
    return {
      imgs: [
        {
          image: "client-1-1.png",
        },
        {
          image: "client-5.png",
        },
        {
          image: "clienty-2.png",
        },
        {
          image: "clienty-3.png",
        },
        {
          image: "clienty-4.png",
        },
      ],
    };
  },
  methods: {
    getImagePath(img) {
      return new URL(`../assets/images/${img.image}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col p-4 d-flex justify-content-between">
        <div class="card d-flex align-items-center text-center">
          <div class="image">
            <img
              src="../assets/images/szabo-viktor-1266895-unsplash-1024x1024.png"
              alt=""
            />
          </div>
          <div class="star text-center">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="text">
            <p>
              When, while the lovely valley teems with vapour around meand
              meridiannsun strikes the upper impenetrable foliage of my trees,
              and but a thousand.
            </p>
            <h3>Michkel Anegl</h3>
            <p>Marketing Management</p>
          </div>
          <div class="font-awesome">
            <i class="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div class="card d-flex align-items-center text-center">
          <div class="image text-">
            <img
              src="../assets/images/fabio-spinelli-695744-unsplash-1024x1024.png"
              alt=""
            />
          </div>
          <div class="star text-center">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="text">
            <p>
              When, while the lovely valley teems with vapour around meand
              meridiannsun strikes the upper impenetrable foliage of my trees,
              and but a thousand.
            </p>
            <h3>Michkel Anegl</h3>
            <p>Marketing Management</p>
          </div>
          <div class="font-awesome">
            <i class="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div class="card d-flex align-items-center text-center">
          <div class="image text-">
            <img
              src="../assets/images/philipe-cavalcante-539505-unsplash-1024x1024.png"
              alt=""
            />
          </div>
          <div class="star text-center">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="text">
            <p>
              When, while the lovely valley teems with vapour around meand
              meridiannsun strikes the upper impenetrable foliage of my trees,
              and but a thousand.
            </p>
            <h3>Michkel Anegl</h3>
            <p>Marketing Management</p>
          </div>
          <div class="font-awesome">
            <i class="fa-solid fa-quote-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col" v-for="(image, index) in imgs" :key="index">
        <img :src="getImagePath(image)" alt="image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 4rem 0;
}
.card {
  width: calc(100% / 3);
  border: none;
  position: relative;
}
.image {
  width: 130px;
  border: 7px solid #b6246e;
  border-radius: 50%;
}

.font-awesome {
  position: absolute;
  opacity: 0.1;
  top: 70px;
  font-size: 9rem;
}
.star {
  z-index: 1;
  height: 100px;
  padding: 2rem 0;
  font-size: 0.8rem;
  .fa-star {
    border-color: #ea566e;
  }
  .fa-solid {
    color: #ea566e;
  }
}
.text {
  font-size: 0.8rem;
}
</style>
