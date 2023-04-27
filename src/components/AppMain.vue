<script>
import CardProps from "./CardProps.vue";
import Jumbo from "./Jumbo.vue";
export default {
  name: "AppMain",
  components: {
    CardProps,
    Jumbo,
  },
  data() {
    return {
      card: [
        {
          image: "../assets/images/Group-247.png",
          title: "Data Analyst",
          description:
            "When, while the lovely valley teems with vapour around means the upper",
        },
        {
          image: "Group-567.png",
          title: "SEO Optimization",
          description:
            "When, while the lovely valley teems with vapour around means the upper",
        },
        {
          image: "Group-538.png",
          title: "Security Data",
          description:
            "When, while the lovely valley teems with vapour around means the upper",
        },
        {
          image: "Group-566.png",
          title: "Branding Strategy",
          description:
            "When, while the lovely valley teems with vapour around means the upper",
        },
      ],
    };
  },
  methods: {
    // getImagePath(img) {
    //   return new URL(`../assets/images/${img.image}`, import.meta.url).href;
    // },
  },
};
</script>
<template>
  <main>
    <div class="container text-center pt-5">
      <div class="text">
        <p class="other">Our Services</p>
        <p class="title"><strong>What</strong> We Do</p>
        <p class="mb-5">
          When, while the lovely valley teems with vapour around means the
        </p>
      </div>
      <div class="row">
        <CardProps :cardArray="card" />
      </div>
      <div class="btn">
        <button class="my-btn">View All Services</button>
      </div>
    </div>
    <div class="jumbomain">
      <Jumbo />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.text {
  padding: 4rem 0;
  .other {
    color: #f9636b;
  }
  .title {
    font-size: 3rem;
  }
}
.btn {
  padding-top: 6rem;
  padding-bottom: 3rem;
}
.my-btn {
  background: linear-gradient(0.25turn, #b9276e, #f8626b);
  color: white;
  border: none;
  text-align: center;
  padding: 10px 40px;
  border-radius: 30px;
}
.jumbomain {
  background: linear-gradient(#0b1953, #020331);
  padding: 3rem;
}
</style>
