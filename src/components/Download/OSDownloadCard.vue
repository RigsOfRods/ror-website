<template>
    <div class="os-download-card">
        <div class="card" style="background-color: #131313;">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <div class="btn-group py-2" style="width:100%">
                    <a :href="items[0].url" class="btn btn-dl">{{ items[0].rel }}</a>
                    <button class="btn btn-dl dropdown-toggle dropdown-toggle-split" type="button" id="dropdownWindowsReleases" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu dropdown-dl" aria-labelledby="dropdownWindowsReleases" v-for="item in items" :key="item.rel">
                        <div v-for="item in items" :key="item.rel">
                            <li><a class="dropdown-item" :href="item.url">{{ item.rel }}</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "items"],
    mounted() {
        console.log(this.items);
    },
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/_vars.scss";

.btn-dl {
  padding: 0.8em;
  border: 1px solid $dark-200;
  box-shadow: none;
  text-align: left;

  &:hover, &:focus {
    background-color: $dark-200;
  }
}

.dropdown-toggle {
  display: flex;
  justify-content: center;
  max-width: 40px;
  &:after {
    border: 0;
    font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f078";
  }
}

.dropdown-dl {
  background-color: $dark-400;
  width:100%;
  transform: translate(0px, 62px) !important;

  .dropdown-item {
    color: rgba(#FFF, .87);
  }

  .dropdown-item:hover, .dropdown-item:focus {
    background-color: $primary;
  }
}
</style>