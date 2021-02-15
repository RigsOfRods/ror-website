<template>
  <div class="container download">
    <div class="section-header">
      <div class="section-header-title">
        Download Center
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="card itch">
          <div class="card-body">
            <div class="mb-4">
              <h6>
                Get it from itch.io
              </h6>
              <p>
                Keep your game up to date with the Itch.io launcher. Available
                for both Windows and Linux.
              </p>
            </div>
            <div class="mb-4">
              <h6>
                First, you'll need to...
              </h6>
              <p>
                Click below to download and install the itch.io desktop app.
              </p>
              <a href="#" class="btn btn-secondary">Get the itch.io launcher</a>
            </div>
            <div class="">
              <h6>
                Lastly, you'll need to...
              </h6>
              <p>
                Click below to open the itch.io desktop app and install Rigs of
                rods.
              </p>
              <a href="#" class="btn btn-secondary"
                >Download Rigs of Rods 2021.02</a
              >
            </div>
          </div>
        </div>
        <div class="other-installer mb-4">
          <p class="mt-3">
            Alternatively, you can download the game using our installers:
          </p>
          <div class="row ps-3">
            <div class="col-6 col-md-7 col-lg-5 col-xl-4">
              <i class="fas fa-chevron-right"></i> rigs of rods 2021.02:
            </div>
            <div class="col">
              <a href="">Windows</a> | <a href="">macOS</a> |
              <a href="">Linux</a>
            </div>
          </div>
          <div class="row ps-3">
            <div class="col-6 col-md-7 col-lg-5 col-xl-4">
              <i class="fas fa-chevron-right"></i> rigs of rods 2021.02 (with
              content pack):
            </div>
            <div class="col">
              <a href="">Windows</a> | <a href="">macOS</a> |
              <a href="">Linux</a>
            </div>
          </div>
          <div class="row ps-3">
            <div class="col-6 col-md-7 col-lg-5 col-xl-4">
              <i class="fas fa-chevron-right"></i> rigs of rods nightly-build:
            </div>
            <div class="col">
              <a href="">Windows</a> | <a href="">macOS</a> |
              <a href="">Linux</a>
            </div>
          </div>
        </div>
        <a href="#">
          <div class="big-btn">
            <div class="title">
              New to the game?
            </div>
            <p>
              Learn the basics of Rigs of Rods if you're new. It'll help with
              installation, setting up, installing mods, and getting started
              with multiplayer.
            </p>
          </div>
        </a>
        <a href="#">
          <div class="big-btn">
            <div class="title">
              Looking for Development Builds?
            </div>
            <p>
              Rigs of Rods is constantly evolving everyday. Try what's new with
              the newest features.
              <b style="color: white;"
                >If you are not technically familiar with Rigs of Rods, it is
                strongly recommended to just use the latest official release.</b
              >
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Download",
  metaInfo: {
    title: "Download Center",
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/_vars.scss";

.big-btn {
  background-color: #24435a;
  padding: 20px 10px 10px 15px;
  margin-bottom: 15px;

  &:hover {
    background-color: #1a3041;
  }

  .title {
    color: white;
    font-weight: bold;
  }

  p {
    color: $gray-500;
  }
}

.other-installer {
  p {
    color: white;
    margin-bottom: 5px;
  }

  .row {
    color: $gray-500;
  }
}
.download {
  margin-bottom: 50px;
  .card {
    background-color: #262626;
    .itch {
      background-color: #1a1a1a;
      h6 {
        font-weight: bold;
        color: white;
      }
    }
  }
}
.section-header {
  margin: 30px 0;
  height: 95px;
  background: center / cover url("../assets/background-boat-sunset.jpg")
    no-repeat;
  position: sticky;
  border-radius: 0.35rem;

  .section-header-title {
    padding: 20px 10px;

    font-weight: bold;
    font-size: 2rem;
    text-shadow: 0px 0px 4px #0000009d;
  }
}
</style>
