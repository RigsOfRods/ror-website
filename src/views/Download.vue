<template>
  <div class="download">
    <main class="hero hero-md" id="heroSupportedContent">
      <div class="hero-overlay">
        <div class="hero-body">
          <div class="container">
            <h1 class="hero-title"><i class="fas fa-download"></i> Download Center</h1>
          </div>
        </div>
      </div>
    </main>
    <!-- TODO: finish this page -->
  </div>
</template>

<style lang="scss" scoped>
#heroSupportedContent {
  background: center / cover url("../assets/background-sunset.png") no-repeat;
  position: sticky;
}

.hero-overlay {
  background: linear-gradient(180deg, rgba(0,0,0,0.95), rgba(#882500, .85));
  backdrop-filter: blur(5px);
}

.dl-card {
  background-color:#882500;
  padding: 1em;
}
</style>

<script>
export default {
  name: 'Download',
  metaInfo: {
    title: 'Download Center'
  }
}
</script>