<template>
  <div class="container get-involved">
    <div class="section-header">
      <div class="section-header-title">
        Get Involved
      </div>
    </div>

    <!-- -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">The Rigs of Rods project</h5>
        <p class="card-text">
          Rigs of Rods is an open source project, meaning anyone can contribute. There are many ways to help contribute to the project, which involves many different skill sets apart from just coding.
        </p>
      </div>
    </div>

    <!-- -->
    <h4>Working with Code</h4>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Game development</h5>
        <p class="card-text">
          Rigs of Rods is coded in C++ and uses <a href="https://www.ogre3d.org/">OGRE</a> for its graphics library and <a href="https://github.com/ocornut/imgui">Dear ImGui</a> for its UI library. Please see the <a href="https://developer.rigsofrods.org">Developer Portal</a> for more information.
        </p>
        <h5 class="card-title">Game scripting</h5>
        <p class="card-text">
          Rigs of Rods uses <a href="https://en.wikipedia.org/wiki/AngelScript">AngelScript</a>, an easy to use scripting language.
        </p>
        <h5 class="card-title">Game tools</h5>
        <p class="card-text">
          We maintain several tools meant to ease the content creation process:
          <ul>
            <li><a href="https://forum.rigsofrods.org/resources/nodesnap-truckfile-editor.775/">nodeSnap: Truckfile editor</a> - our primary truckfile editor</li>
            <li><a href="https://forum.rigsofrods.org/resources/blender-n-b-import-export-plugin.25/">Blender N/B Import/Export Plugin</a> - import and export truckfiles into Blender</li>
            <li><a href="https://forum.rigsofrods.org/resources/blender-ror-truck-exporter.765/">Blender RoR Truck Exporter</a> - export a truckfile from Blender</li>
          </ul>
        </p>
        <h5 class="card-title">Web development</h5>
        <p class="card-text">
          If you are familiar with JavaScript or HTML and CSS, any contributions are welcome. Please visit the <a href="https://docs.rigsofrods.org">docs page on website development.</a>
        </p>
      </div>
    </div>

    <!-- -->
    <h4>Non-Coding</h4>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Reporting issues</h5>
        <p class="card-text">
          Rigs of Rods is a large open-source project which means developers rely on users to report back issues they encounter directly to them. Reporting any issue, small or large, is an excellent contribution to the stability of the game.
          <ul>
            <li>Our code repository is hosted on GitHub, which means <a href="https://github.com/RigsOfRods/rigs-of-rods/issues">we keep track of issues there</a>. Please review our <a href="https://github.com/RigsOfRods/rigs-of-rods/blob/a1b0d551f89d34975777f6da2457d8c9a299b253/CONTRIBUTING.md#reporting-bugs">guide on opening an issue</a>.</li>
            <li>Consider looking through other issues that haven't received as much attention.</li>
          </ul>
        </p>
        <h5 class="card-title">Translations</h5>
        <p class="card-text">
          Rigs of Rods is played by people from all around the world, and the whole world doesn't speak just English. If you are a native speaker of a language other than English, your help would be greatly appreciated.
        </p>
        <a href="https://hosted.weblate.org/engage/rigs-of-rods/">
          <img src="https://hosted.weblate.org/widgets/rigs-of-rods/-/287x66-black.png" alt="Translation status" />
        </a><br /><br />
        <h5 class="card-title">Documenting</h5>
        <p class="card-text">
          Adding and improving documentation is critical for Rigs of Rods as many beginners and experts rely on it to have the most update-to-date information possible. Please see on <a href="https://github.com/RigsOfRods/docs.rigsofrods.org">how to contribute</a>.
        </p>
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
  background: center / cover url("../assets/background-dodge.jpg") no-repeat;
  background-position: 70% 74%;
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
