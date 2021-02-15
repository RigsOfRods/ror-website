<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="{ blueNavbar: $route.name != `Home` }"
    role="nav"
  >
    <div class="container">
      <!-- TODO: i hate this -->
      <router-link class="navbar-brand" to="/"
        ><img
          src="../assets/RoR_Logo.png"
          alt="logo"
          class="img-fluid"
          id="logo"
          width="180"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navBar"
        aria-controls="navBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navBar">
        <ul class="nav navbar-nav ms-auto ">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ selected: $route.name == `Home` }"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ selected: $route.name == `Download` }"
              to="/download"
              >Download</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://forum.rigsofrods.org">Forums</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://docs.rigsofrods.org"
              >Documentation</a
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/get-involved"
              :class="{ selected: $route.name == `Get Involved` }"
              >Get Involved</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar-toggler-icon {
  background-image: escape-svg(
    "data:image/svg+xml,%3csvg xmlns=http://www.w3.org/2000/svg width=30 height=30 viewBox=0 0 30 30%3e%3cpath stroke=rgba%28255, 255, 255, 0.55%29 stroke-linecap=round stroke-miterlimit=10 stroke-width=2 d=M4 7h22M4 15h22M4 23h22/%3e%3c/svg%3e"
  );
}
</style>
