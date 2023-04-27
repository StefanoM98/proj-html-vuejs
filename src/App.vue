<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppHeader,
    AppMain,
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
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
