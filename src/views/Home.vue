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
            <div class="col-12 col col-lg-6 col-xl-4" v-for="announcement in announcements" :key="announcement.id">
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
    </section>
    <section>
      <!-- -->
      <div class="container">
        <div class="feature-item">
          <div class="row py-md-4">
            <div class="col-12 col-lg-6 mt-4 my-lg-auto">
              <h4 class="feature-title">The Free & Open Source Vehicle Simulator</h4>
              <p class="feature-text">
                Rigs of Rods is a free and open-source vehicle simulator. It allows for the accurate physical simulation of a flexible soft-body object which entirely depends on the physical construction of what you make.
              </p>
            </div>
            <div class="col-12 col-lg-6 feature-img mx-auto my-auto">
              <img src="../assets/background-truckrally.png" />
            </div>
          </div>
        </div>
        <div class="feature-item">
          <div class="row py-md-4">
            <div class="col-12 col-lg-6 mt-4 my-lg-auto">
              <h4 class="feature-title">Your World, Your Creations</h4>
              <p class="feature-text">
                Put your ideas into Rigs of Rods with ease! Our documentation is always up-to-date, with plenty of helpful tutorials written by community members to help you start.
              </p>
            </div>
            <div class="col-12 col-lg-6 feature-img mx-auto my-auto">
              <img src="../assets/background-sunset.png" />
            </div>
          </div>
        </div>
        <div class="feature-item">
          <div class="row py-md-4">
            <div class="col-12 col-lg-6 mt-4 my-lg-auto">
              <h4 class="feature-title">Play, With Friends</h4>
              <p class="feature-text">
                Play Rigs of Rods – with your friends! Enjoy what you do in single player but with up to 64 other players in a public lobby or your own private server.
              </p>
            </div>
            <div class="col-12 col-lg-6 feature-img mx-auto my-auto">
              <img src="../assets/background-helicopter.png" />
            </div>
          </div>
        </div>
      </div>
      <!-- -->

    </section>
    <TrailerModal />
  </div>
</template>

<script>
import LatestNewsCard from "../components/Home/LatestNewsCard";
import TrailerModal from "@/components/Home/TrailerModal.vue";

export default {
  components: {
    LatestNewsCard,
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
