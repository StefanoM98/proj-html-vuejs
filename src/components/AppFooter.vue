<script>
export default {
  name: "AppFooter",
  data() {
    return {
      links: {
        "Quick Links": [
          {
            name: "Service",
            url: "#",
          },
          {
            name: "Contact",
            url: "#",
          },
          {
            name: "Blog",
            url: "#",
          },
        ],
        Resources: [
          {
            name: "Art Design",
            url: "#",
          },
          {
            name: "Computer",
            url: "#",
          },
          {
            name: "IT News",
            url: "#",
          },
          {
            name: "Networking",
            url: "#",
          },
          {
            name: "Web Security",
            url: "#",
          },
        ],
      },
    };
  },
};
</script>
<template>
  <section class="footer">
    <div class="container d-flex justify-content-between">
      <div class="footer_logo">
        <img src="../assets/images/white-logo-2.png" alt="" />
        <p>
          When, while lovely valley teeems vapour around meand <br />
          meridian sun strikes the upper impenetrable
        </p>
      </div>
      <div class="footer_links">
        <div class="cta d-flex flex-wrap">
          <div v-for="(elem, index) in links" class="card">
            <h4>{{ index }}</h4>
            <ul>
              <li v-for="(link, index) in elem" :key="index">
                <a :href="link.url"> {{ link.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contact_us">
        <h4>Contact Us</h4>
        <p>
          <span>Address:</span> Patricia C.Amedee 4401 Waldeck Street Grapevine
          Nashville, Tx 76051
        </p>
        <p><span>Phone:</span> +99 (0) 101 0000 888</p>
        <p><span>Email:</span> Info@yourdomain.com</p>
      </div>
    </div>
    <hr />
    <div class="bottom">
      <div class="container d-flex justify-content-between">
        <div class="text">
          <p>@ 2020 Phlox. All Right Reserved.</p>
        </div>
        <div class="social">
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  background: #04083b;
  color: #aaaaaa;
}

.bottom {
  background: #04083b;
  padding: 10px 0;
}
.card {
  width: 50%;
  padding: 40px;
  border: none;
  background: none;
  text-align: center;
  h4 {
    padding: 0.4rem 0;
  }
  a {
    text-align: left;
    color: #aaaaaa;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: white;
    }
  }
}
.contact_us {
  width: 30%;
  span {
    color: white;
  }
}

.social a {
  padding: 20px;
  color: white;
  font-size: 1.2rem;
}
</style>
