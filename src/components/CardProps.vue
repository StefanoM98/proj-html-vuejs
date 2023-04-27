<script>
// import getImagePath from "../js/script.js";
export default {
  name: "CardProps",
  components: {
    // getImagePath
  },
  props: {
    cardArray: Array,
  },
};
</script>
<template>
  <div class="col" v-for="(card, index) in cardArray" :key="index">
    <div class="card">
      <img :src="card.image" class="card-img-top" alt="image" />
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
}
</style>
