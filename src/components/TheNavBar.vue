<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="{ blueNavbar: $route.name != `Home` }"
    role="nav"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><img
          src="../assets/RoR_Logo.png"
          alt="logo"
          class="img-fluid"
          id="logo"
          width="180"
      /></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
        </svg>
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
          <li class="nav-item dropdown">
            <a
              id="navbarDropdownMenuLink"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Community
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="https://forum.rigsofrods.org/"
                  >Forums</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="https://forum.rigsofrods.org/resources/"
                  >Repository</a
                >
              </li>              
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://docs.rigsofrods.org"
              >Docs</a
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
.navbar-toggler {
  color: rgba(255,255,255,.55);
}
</style>
