<template>
  <div class="feature-item">
    <div class="row">
      <div class="col-12 col-lg-6 feature-img shadow-lg mx-auto my-auto">
        <img src="https://via.placeholder.com/1920x1080" />
      </div>
      <div class="col-12 col-lg-6 mt-4 my-lg-auto">
        <h2 class="feature-title">{{ title }}</h2>
        <p class="feature-text">
          {{ text }}
        </p>
        <ul class="list-unstyled" v-if="list">
          <div v-for="(item, idx) in list" :key="idx">
            <li>&#8729; {{ item }}</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "list"],
  mounted() {
    console.log(this.list);
  },
};
</script>

<style lang="scss">
.feature-item {
  align-items: center;
  font-size: 1.1em;
  margin: 0 auto;
  padding: 30px 0;
}

.feature-body {
  text-align: left;
}

.feature-img img {
  max-width: 100%;
}
</style>
