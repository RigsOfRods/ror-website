<template>
  <div class="home">
    <main class="hero hero-md" role="main">
      <div class="hero-overlay">
        <div class="hero-body">
          <div class="container">
            <div class="row align-items-lg-center">
              <div class="col-md-8 order-md-1 col-lg-7">
                <h1 class="hero-title mb-2">Free, open source, forever</h1>
                <p class="hero-subtitle mb-2">
                  Rigs of Rods is a free and open source vehicle simulator that
                  uses soft-body physics to simulate the motion destruction and
                  deformation of vehicles
                </p>
                <a
                  href="/download"
                  class="btn btn-secondary btn-lg px-4 mt-4 mb-3 me-3 shadow border-0 scale-up"
                  ><i class="fas fa-download" style="padding-right: 0.5em;"></i>
                  Download</a
                >
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#trailerModal"
                  class="btn btn-primary btn-lg px-4 mt-4 mb-3 me-3 shadow border-0 scale-up"
                >
                  <i class="fas fa-video" style="padding-right: 0.5em;"></i>
                  Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section id="latest-news" style="background-color: #262626">
      <div class="container">
        <h2 class="section-title py-4">
          Latest news
        </h2>
        <div class="latest-news-body">
          <div class="row">
            <div class="col-12 col col-lg-6 col-xl-4">
              <div v-for="announcement in announcements" :key="announcement.id">
                <LatestNewsCard
                  :title="announcement.title"
                  :date="announcement.date"
                  :author="announcement.author"
                  :author_link="announcement.author_url"
                  :post_link="announcement.url"
                  :avatar_url="announcement.avatar_url"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="container">
        <div class="feature-head pt-4">
          <!-- TODO: finish this section, title needs proper positioning and font sizing -->
          <!-- TODO: also finish gfx for images, must include the (c) of everyone's who screenshot im using -->
          <h2 class="feature-title">
            A soft-body physics sandbox for everyone
          </h2>
          <p class="feature-text">
            Unleash the full power of soft-body physics. Nothing is predefined,
            everything is in real time.
          </p>
        </div>
        <FeatureItem
          title="Real Soft-body Physics"
          text="Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          :list="[
            `Non tellus orci ac auctor augue mauris augue`,
            `Curabitur gravida arcu ac tortor dignissim`,
            `Nisi est sit amet facilisis magna etiam tempor orci`,
            `Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus`,
          ]"
        />
        <FeatureItem
          title="Advanced Flight Model"
          text="Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          :list="[
            `Non tellus orci ac auctor augue mauris augue`,
            `Curabitur gravida arcu ac tortor dignissim`,
            `Nisi est sit amet facilisis magna etiam tempor orci`,
            `Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus`,
          ]"
        />
        <FeatureItem
          title="Accurate Buoyancy Model"
          text="Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          :list="[
            `Non tellus orci ac auctor augue mauris augue`,
            `Curabitur gravida arcu ac tortor dignissim`,
            `Nisi est sit amet facilisis magna etiam tempor orci`,
            `Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus`,
          ]"
        />
        <FeatureItem
          title="Extendable with AngelScript"
          text="Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          :list="[
            `Non tellus orci ac auctor augue mauris augue`,
            `Curabitur gravida arcu ac tortor dignissim`,
            `Nisi est sit amet facilisis magna etiam tempor orci`,
            `Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus`,
          ]"
        />
      </div>
    </section>
    <TrailerModal />
  </div>
</template>

<script>
import LatestNewsCard from "../components/Home/LatestNewsCard";
import FeatureItem from "../components/Home/FeatureItem";
import TrailerModal from "@/components/Home/TrailerModal.vue";

export default {
  components: {
    LatestNewsCard,
    FeatureItem,
    TrailerModal,
  },
  name: "Home",
  computed: {
    announcements() {
      return this.$store.state.announcements
    }
  },
  mounted() {
    this.$store.dispatch("getAllAnnouncements");
  },
  metaInfo: {
    title: "Rigs of Rods Soft-body Physics Simulator",
    titleTemplate: false,
    meta: [
      { name: "description", content: "Rigs of Rods is an open source vehicle simulator licensed under the GNU General Public License version 3."}
    ]
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/bootstrap_theme.scss";

//
// Hero
//
.hero {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: $hero-color;

  &.hero-sm {
    // Small
    .hero-body {
      padding: $hero-body-padding-sm;
    }
  }

  &.hero-md {
    // Medium
    .hero-body {
      padding: $hero-body-padding-md;
    }
  }

  &.hero-lg {
    // Large
    .hero-body {
      padding: $hero-body-padding-lg;
    }
  }

  &.h-100 {
    .hero-body {
      align-items: center;
      display: flex;
      .container {
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
  }
}

.hero-title {
  margin-bottom: $hero-spacer-y;
  font-weight: bold;
  color: $white;
}

.hero-subtitle {
  font-size: 1.2em;
  margin-top: $hero-spacer-y;
}

// Negative margin hack since the navbar is in the
// App.vue parent file and we can't put it inside the hero section
// navbar is 60px h
// hero is ~490px h
.hero {
  margin-top: -60px;
  height: 550px;
  background: center / cover url("../assets/background-rockcrawling.png")
    no-repeat;
  position: sticky;
}

.hero-overlay {
  height: 550px;
  background-color: rgba(18, 50, 74, 0.5);
  backdrop-filter: blur(5px);
}

.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: $hero-body-padding;
  margin-top: 60px;
}

.feature-item:nth-child(even) {
  flex-direction: row-reverse;

  .feature-body {
    padding-left: 60px;
  }
}

#download-now {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3em;
}
</style>
