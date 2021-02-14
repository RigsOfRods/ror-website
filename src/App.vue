<template>
  <div id="app" class="d-flex flex-column">
    <TheNavBar/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheNavBar,
    TheFooter
  },
  metaInfo: {
    titleTemplate: '%s | Rigs of Rods'
  }
}
</script>

<style lang="scss">
@import 'assets/custom.scss';

@import '~bootstrap';
@import '~bootstrap/scss/bootstrap.scss';
</style>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  overflow-y: scroll;
}

#app, html, body {
  height: 100% !important;
}
</style>
