<script>
export default {
  name: "CardProps",

  props: {
    cardArray: Array,
  },
  methods: {
    getImagePath(elem) {
      return new URL(`../assets/images/${elem.image}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div class="col" v-for="(card, index) in cardArray" :key="index">
    <div class="card">
      <figure>
        <img :src="getImagePath(card)" class="card-img-top" alt="image" />
      </figure>
      <div class="card-body">
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-text">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  figure {
    height: 250px;

    img {
      width: 80%;
      height: 80%;
      object-fit: cover;
    }
  }
}
</style>
