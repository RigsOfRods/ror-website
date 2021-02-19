<template>
  <div id="app" class="d-flex flex-column">
    <TheNavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheNavBar,
    TheFooter,
  },
  metaInfo: {
    titleTemplate: "%s | Rigs of Rods",
    lang: "en",
    meta: [
      { name: "theme-color", content: "#226699"}
    ]
  },
};
</script>

<style lang="scss"></style>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  overflow-y: scroll;
}

#app,
html,
body {
  height: 100% !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 540px) {
  body {
    font-size: 14px;
  }
}

@media (min-width: 720px) {
  body {
    font-size: 16px;
  }
}
</style>
