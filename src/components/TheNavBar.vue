<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top" role="nav" style="background: rgba(0,0,0,0.5);backdrop-filter: blur(15px);">
    <div class="container">
      <!-- TODO: i hate this -->
      <a class="navbar-brand" href="/"><img src="../assets/RoR_Logo.png" alt="logo" class="img-fluid" id="logo" width="180"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/download">Download</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://forum.rigsofrods.org">Forums</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://docs.rigsofrods.org">Docs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/get-involved">Get Involved</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>