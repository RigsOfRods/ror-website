<template>
  <footer class="footer mt-auto" role="footer">
    <div class="container">
      <div class="footer-index pt-4 mt-2">
        <div class="footer-indexcopyright">
          <div class="row">
            <div class="col-12 col-md-8 col-lg-9 col-xl-10">
              <h4 class="mb-2">
                © 2013-2021 Petr Ohlidal<br />
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
            <div class="col">
              <div class="row footer-social">
                <a class="col-12 col-md-2" href="twitter.com/rigsofrods"
                  ><i class="fab fa-twitter fa-2x"></i
                ></a>
                <a class="col-12 col-md-2" href="facebook.com/rigsofrods"
                  ><i class="fab fa-facebook fa-2x"></i
                ></a>
                <a class="col-12 col-md-2" href="discord.gg/rigsofrods"
                  ><i class="fab fa-discord fa-2x"></i
                ></a>
                <a class="col-12 col-md-2" href="youtube.com/rigsofrods"
                  ><i class="fab fa-youtube fa-2x"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-lowerindex py-4">
        <a href="#">Terms and rules</a> | 
        <a href="#">Privacy policy</a> | 
        <a href="#">Report abuse</a> | 
        <a href="#">Branding guidelines</a> | 
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

  .footer-social {
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      flex: 1;
      padding-left: 5px;
      padding-right: 5px;
      
      text-align: center;
    }
  }

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
