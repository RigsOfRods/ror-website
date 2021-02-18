<template>
  <div class="container get-involved">
    <div class="section-header">
      <div class="section-header-title">
        Get Involved
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <h4>Game development</h4>
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              Rigs of Rods started out as a small side project in 2005 by Pierre-Michel Ricordel. The game was eventually open sourced in 2009 and the project has since then been contributed to by volunteers from all around the world.</p>
            <p class="card-text">
              Rigs of Rods is coded in C++ and uses OGRE for its graphics library and Dear ImGui for its UI library.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>Web development</h4>
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              This website is made using VueJS, front end JavaScript framework. We are always looking for any type of feedback or improvements.
            </p>
            <p class="card-text">
              Adding and improving documentation is critical for Rigs of Rods. We use MkDocs deployed on GitHub Pages.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>Translations</h4>
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              Rigs of Rods is played by people all around the world, and the whole world doesn't speak just English. If you are a native speaker of a language other than English, your help would be greatly appreciated.
            </p>
            <p class="card-text">
              <a href="https://hosted.weblate.org/engage/rigs-of-rods/">
              <img src="https://hosted.weblate.org/widgets/rigs-of-rods/-/287x66-black.png" alt="Translation status" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>Content creation tools</h4>
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              We maintain several Blender plugins.
            </p>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetInvolved",
  metaInfo: {
    title: "Get Involved",
  },
};
</script>

<style lang="scss" scoped>
.get-involved {
  h4 {
    font-weight: bold;
  }
  .card {
    background-color: #262626;
    margin-bottom: 20px;
  }
}
.section-header {
  margin: 30px 0;
  height: 95px;
  background: center / cover url("../assets/background-dodge.jpg") no-repeat;
  background-position: 70% 74%;
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
