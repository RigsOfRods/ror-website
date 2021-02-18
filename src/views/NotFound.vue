<template>
  <div class="container not-found mx-auto my-auto">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h2>404! That page couldn't be found.</h2>
            <p>Try removing Ogre.h, that might solve your problem.</p>
          </div>
          <div class="col my-auto mx-auto">
            <i class="fas fa-bomb float-end" style="font-size: 3rem;"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  metaInfo: {
    title: "404 Not Found",
  },
};
</script>

<style lang="scss">
@import "../stylesheets/_vars.scss";

.not-found {
  .card {
    background-color: $secondary;
  }
}
</style>
