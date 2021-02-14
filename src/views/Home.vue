<template>
  <div class="home">
    <main class="hero hero-md" id="heroSupportedContent" role="main">
      <div class="hero-overlay">
        <div class="hero-body">
          <div class="container">
            <div class="row align-items-lg-center">
              <div class="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                <h1 class="hero-title mb-2">Free, open source, forever</h1>
                <p class="hero-subtitle mb-2">Rigs of Rods is a free and open source vehicle simulator that uses soft-body physics to simulate the motion destruction and deformation of vehicles</p>
                <!-- TODO: button design needs tweaking, but i don't know what -->
                <a href="/download" class="btn btn-secondary btn-lg px-4 mt-4 mb-3 me-md-3 shadow border-0 scale-up"><i class="fas fa-download"></i> Download Rigs of Rods 2021.01</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section id="latest-news">
      <div class="container">
        <!-- TODO: RSS feed from forums, cards -->
      </div>
    </section>
    <section id="features">
      <div class="features-overlay">
        <div class="container">
          <div class="text-center">
            <div class="feature-head pt-4">
              <!-- TODO: finish this section, title needs proper positioning and font sizing -->
              <!-- TODO: also finish gfx for images, must include the (c) of everyone's who screenshot im using -->
              <h2 class="feature-title">A soft-body physics sandbox for everyone</h2>
              <p class="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="feature-item">
              <div class="feature-body">
                <h2 class="feature-title">Real Soft-body Physics</h2>
                <p class="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <ul class="list-unstyled">
                  <li>&#8729; Non tellus orci ac auctor augue mauris augue</li>
                  <li>&#8729; Curabitur gravida arcu ac tortor dignissim</li>
                  <li>&#8729; Nisi est sit amet facilisis magna etiam tempor orci</li>
                  <li>&#8729; Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus</li>
                </ul>
              </div>
              <div class="feature-img shadow-lg">
                <img src="https://via.placeholder.com/1920x1080">
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-body">
                <h2 class="feature-title">Advanced Flight Model</h2>
                <p class="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <ul class="list-unstyled">
                  <li>&#8729; Non tellus orci ac auctor augue mauris augue</li>
                  <li>&#8729; Curabitur gravida arcu ac tortor dignissim</li>
                  <li>&#8729; Nisi est sit amet facilisis magna etiam tempor orci</li>
                  <li>&#8729; Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus</li>
                </ul>
              </div>
              <div class="feature-img shadow-lg">
                <img src="https://via.placeholder.com/1920x1080">
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-body">
                <h2 class="feature-title">Accurate Buoyancy Model</h2>
                <p class="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <ul class="list-unstyled">
                  <li>&#8729; Non tellus orci ac auctor augue mauris augue</li>
                  <li>&#8729; Curabitur gravida arcu ac tortor dignissim</li>
                  <li>&#8729; Nisi est sit amet facilisis magna etiam tempor orci</li>
                  <li>&#8729; Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus</li>
                </ul>
              </div>
              <div class="feature-img shadow-lg">
                <img src="https://via.placeholder.com/1920x1080">
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-body">
                <h2 class="feature-title">Extendable with AngelScript</h2>
                <p class="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <ul class="list-unstyled">
                  <li>&#8729; Non tellus orci ac auctor augue mauris augue</li>
                  <li>&#8729; Curabitur gravida arcu ac tortor dignissim</li>
                  <li>&#8729; Nisi est sit amet facilisis magna etiam tempor orci</li>
                  <li>&#8729; Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus</li>
                </ul>
              </div>
              <div class="feature-img shadow-lg">
                <img src="https://via.placeholder.com/1920x1080">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="download-now">
      Free, forever.
      <a href="/download" class="btn btn-primary px-5 mx-5 border-0 shadow-lg"><i class="fas fa-download"></i> Download Rigs of Rods</a>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#heroSupportedContent {
  background: center / cover url("../assets/background-rockcrawling.png") no-repeat;
  position: sticky;
}

#features {
  background-image: url("../assets/background-helicopter.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#download-now {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3rem;
}

.features-overlay {
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(5px);
}
</style>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Rigs of Rods Soft-body Physics Simulator',
    titleTemplate: false
  }
}
</script>
