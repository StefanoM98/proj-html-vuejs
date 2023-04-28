<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      arrayLinks: [
        {
          text: "Home",
          url: "#",
          active: true,
        },
        {
          text: "About",
          url: "#",
          active: false,
        },
        {
          text: "Services",
          url: "#",
          active: false,
        },
        {
          text: "Blog",
          url: "#",
          active: false,
        },
        {
          text: "Contact",
          url: "#",
          active: false,
        },
        {
          text: "Portfolio",
          url: "#",
          active: false,
        },
      ],
    };
  },
};
</script>

<template>
  <AppHeader :linkArray="arrayLinks" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
