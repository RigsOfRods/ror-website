<template>
  <footer class="footer mt-auto" role="footer">
    <div class="container">
      <div class="row footer-body">
        <div class="col-10 col-md-8 col-lg-9 col-xl-10 footer-info">
          <h5>© 2013-2021 Petr Ohlidal</h5>

          Rigs of Rods is distributed under the
          <a href="https://www.gnu.org/licenses/gpl-3.0.en.html"
            >GNU GPL v3 license</a
          >. <br />
          Website content licensed
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY-NC-SA 4.0</a
          >

          <ul class="footer-links">
            <li><a href="#">Terms and rules</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div class="col">
          <div class="row footer-social">
            <a class="col-12 col-md-2 mx-2" href="twitter.com/rigsofrods"
              ><i class="fab fa-twitter fa-2x"></i
            ></a>
            <a class="col-12 col-md-2 mx-2" href="facebook.com/rigsofrods"
              ><i class="fab fa-facebook fa-2x"></i
            ></a>
            <a class="col-12 col-md-2 mx-2" href="discord.gg/rigsofrods"
              ><i class="fab fa-discord fa-2x"></i
            ></a>
            <a class="col-12 col-md-2 mx-2" href="youtube.com/rigsofrods"
              ><i class="fab fa-youtube fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../stylesheets/_vars.scss";

.footer {
  color: $gray-500;
  background-color: $dark-secondary;
  padding: 1.5em 0;
  font-size: 0.875em;

  a {
    text-decoration: underline;
    color: $gray-500;
  }

  .footer-links {
    list-style: none;
    margin-top: 1em;
    padding: 0;

    li {
      display: inline-block;
    }

    li:not(:first-child) {
      margin-left: 1em;
    }
  }
}
</style>
