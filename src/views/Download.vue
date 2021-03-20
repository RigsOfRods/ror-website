<template>
  <div class="container download">
    <div class="section-header">
      <div class="section-header-title">
        Download Center
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row g-2">
          <div v-if="releases.windows_release && releases.windows_release.length != 0" class="col-md-4">
            <OSDownloadCard
              title="Windows"
              :items=releases.windows_release
            />
          </div>
          <div v-if="releases.linux_release && releases.linux_release.length != 0" class="col-md-4">
            <OSDownloadCard
              title="Linux"
              :items=releases.linux_release
            />
          </div>
        </div>
        <div class="row py-2 mt-2 g-4">
          <div class="col-md-6">
            <div class="infocard">
              See what's new in Rigs of Rods 2021.03 by reading the <a href="https://forum.rigsofrods.org/forums/announcements.44/">release notes</a>.
            </div>
          </div>
          <div class="col-md-6">
            <div class="infocard">
              If you're new, its recommended you read our <a href="https://docs.rigsofrods.org/gameplay/beginners-guide/">guide on getting started</a>.
            </div>
          </div>
          <div class="col">
            <div class="infocard">
              Rigs of Rods is evolving everyday. Try <a href="https://forum.rigsofrods.org/threads/ror-development-builds-for-windows-and-linux.696/">development builds</a>.
            </div>
          </div>
        </div>
        <div class="row py-4 g-4 mt-2">
          <div class="col-md-4">
            <h5 class="card-title">System requirements</h5>
          </div>
          <div class="col-md-4">
            <h5 class="card-title">Previous releases</h5>
            <p class="card-text">If you would like to try out older versions of Rigs of Rods, they are <a href="https://sourceforge.net/projects/rigsofrods/files/rigsofrods/museum/">available for download</a>. However, versions older than the current release are not supported.</p>
          </div>
          <div class="col-md-4">
            <h5 class="card-title">Compile from source</h5>
            <p class="card-text">The Rigs of Rods code repository can be found on GitHub. From there, it is recommended to <a href="https://github.com/RigsOfRods/rigs-of-rods/wiki/Compile-(Windows)">read our guide</a> on compiling Rigs of Rods from source.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OSDownloadCard from "../components/Download/OSDownloadCard";

export default {
  components: {
    OSDownloadCard
  },
  name: "Download",
  computed: {
    releases() {
      return this.$store.state.releases
    }
  },
  mounted() {
    this.$store.dispatch("getAllReleases");
  },
  metaInfo: {
    title: "Download Center",
  },
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/_vars.scss";

.infocard {
  background-color: rgba($primary, .1);
  padding: 1em;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 0.25rem;
  color: #FFF;
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
  background: center / cover url("../assets/background-boat-sunset.jpg")
    no-repeat;
  position: sticky;
  border-radius: 0.35rem;

  .section-header-title {
    padding: 25px 10px;

    font-weight: bold;
    font-size: 2rem;
    text-shadow: 0px 0px 4px #0000009d;
    color: white;
  }
}
</style>
