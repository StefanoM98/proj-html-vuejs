<script>
import AppBlog from "./AppBlog.vue";
import PricingApp from "./PricingApp.vue";
import CardProps from "./CardProps.vue";
import Jumbo from "./Jumbo.vue";
export default {
  name: "AppMain",
  components: {
    CardProps,
    Jumbo,
    PricingApp,
    AppBlog,
  },
  data() {
    return {
      card: [
        {
          image: "Group-247.png",
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
      carousel: [
        {
          image: "8wa60okr-1-790x576.jpg",
          title: "Basket of Flower on table",
          description: "Branding Strategy",
        },
        {
          image: "84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg",
          title: "Purinky Products",
          description: "Digital Exprerience",
        },
        {
          image: "a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg",
          title: "SatisfyPoster",
          description: "Branding Strategy",
        },
        {
          image: "DRY-1-790x576.jpg",
          title: "MockUp",
          description: " Digital Experience",
        },
        {
          image: "DRY-1-790x576.jpg",
          title: "MockUp",
          description: " Digital Experience",
        },
      ],
      // blogCard: [{}],
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
  <main>
    <!-- OUR SERVICES SECTION -->
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
    <!-- /OUR SERVICES SECTION -->
    <!-- PROJECT SECTION -->
    <section class="jumbomain">
      <Jumbo />
    </section>
    <!-- /PROJECT SECTION -->
    <!-- CAROUSEL SECTION -->
    <section class="carousel pt-5">
      <div class="text">
        <h5>Portfolio</h5>
        <p><strong>latest</strong> work</p>
        <div class="but">
          <button>&larr;</button>
          <button>&rarr;</button>
        </div>
      </div>
      <div class="row">
        <CardProps :cardArray="carousel" />
      </div>
    </section>
    <!-- /CAROUSEL SECTION -->
    <!-- OUR PRICING SECTION -->
    <section class="pricing">
      <PricingApp />
    </section>
    <!-- /OUR PRICING SECTION -->
    <!-- BLOG SECTION -->
    <section class="blog">
      <div class="text text-center">
        <p class="other">Blog</p>
        <p class="title"><strong>Latest</strong> Posts</p>
        <p class="mb-5">
          When, while the lovely valley teems with vapour around means the
          meridian sun strikes <br />
          the upper surface.
        </p>
      </div>
      <div class="container-fluid">
        <div class="row">
          <AppBlog />
        </div>
      </div>
    </section>
    <!-- /BLOG SECTION -->
  </main>
</template>

<style lang="scss" scoped>
.text {
  padding: 4rem 0;
  position: relative;
  .btn {
    position: absolute;
    top: 0;
    right: 0;
  }
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

.carousel {
  .text {
    width: 80%;
    margin: 0 auto;
    font-size: 3rem;
    position: relative;
    .but {
      position: absolute;
      top: 50px;
      right: 10px;
      button {
        margin: 10px;
        background-color: white;
        color: #f8626b;
        width: 60px;
        height: 60px;
        border: #f8626b 1px solid;
        border-radius: 50%;
        font-size: 2rem;
      }
    }
  }
}

.pricing {
  height: 1000px;
  background: linear-gradient(to top, white 50%, #04083b 50%);
}

.blog {
  .container-fluid {
    width: 80%;
  }
}
</style>
