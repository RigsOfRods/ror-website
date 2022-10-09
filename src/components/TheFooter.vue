<template>
  <footer class="footer mt-auto" role="footer">
    <div class="container">
      <div class="footer-index pt-4 mt-2">
        <div class="footer-indexcopyright">
          <div class="d-flex flex-column flex-sm-row justify-content-between">
            <div>
              <h4 class="mb-2">
                © 2013-2022 Petr Ohlidal<br />
                <span>© 2005-2013 Pierre-Michel Ricordel, © 2009-2013 Thomas Fischer</span>
              </h4>
              Rigs of Rods is distributed under the
              <a href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                >GNU General Public License v3</a
              >. <br />
              Unless otherwise stated. The Rigs of Rods Website is licensed under a
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                >CC BY-NC-SA 4.0 License</a
              >.
            </div>
            <div>
              <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="col-12 col-md-2" href="https://twitter.com/rigsofrods"
                  ><i class="fab fa-twitter fa-2x"></i
                ></a></li>
                <li class="ms-3"><a class="col-12 col-md-2" href="https://www.facebook.com/rigsofrods"
                  ><i class="fab fa-facebook fa-2x"></i
                ></a></li>
                <li class="ms-3"><a class="col-12 col-md-2" href="https://discord.gg/rigsofrods"
                  ><i class="fab fa-discord fa-2x"></i
                ></a></li>
                <li class="ms-3"><a class="col-12 col-md-2" href="https://www.youtube.com/rigsofrods"
                  ><i class="fab fa-youtube fa-2x"></i
                ></a></li>
                <li class="ms-3"><a class="col-12 col-md-2" href="https://github.com/RigsOfRods"
                  ><i class="fab fa-github fa-2x"></i
                ></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-lowerindex py-4">
        <a href="https://forum.rigsofrods.org/help/terms/">Terms and rules</a> | 
        <a href="https://forum.rigsofrods.org/help/privacy-policy/">Privacy policy</a> | 
        <a href="https://contact.rigsofrods.org">Report abuse</a> | 
        <a href="https://docs.rigsofrods.org/tools-tutorials/branding/">Branding guidelines</a> | 
        <a href="https://www.digitalocean.com/?utm_medium=opensource&utm_source=Rigs-of-Rods">Powered by <i class="fab fa-digital-ocean"></i> DigitalOcean</a>
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
  background-color: $dark-400;

  .footer-lowerindex {
    font-size: 12px;
    color: $gray-500;
  }

  .footer-indexcopyright {
    font-size: 0.875em;

    h4 {
      font-size: 1.4em;

      span {
        font-size: 0.7em;
        font-weight: normal;
      }
    }
  }
}
</style>
