<template>
  <div class="home">
    <main class="hero hero-md" id="heroSupportedContent" role="main">
      <div class="hero-overlay">
        <div class="hero-body">
          <div class="container">
            <h2 class="hero-title mb-4">The free and open source vehicle simulator <br><span style="font-size:1em;">based on soft-body physics.</span></h2>
            <a href="/download" class="btn btn-primary btn-lg rounded-pill px-4 mt-4"><i class="fas fa-download"></i> Download Rigs of Rods</a>
          </div>
        </div>
      </div>
    </main>
    <div class="container">
      <div class="card rounded-0 w-100 shadow" style="border:0">
        <div class="card-body h-100">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#heroSupportedContent {
  background: center / cover url("../assets/rigs_of_rods_screenshot_by_4x4convoy.png") no-repeat;
  position: sticky;
}
</style>

<script>
export default {name: 'Home'}
</script>
