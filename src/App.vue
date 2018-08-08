<template>
  <div id="app">
    <nav class="navbar is-light">
          <div class="navbar-brand">
              <a class="navbar-item">
                <router-link :to="'/'">
                  <img src="@/assets/logo.png" alt="Buefy">
                </router-link>
              </a>
          </div>
          <b-dropdown>
            <button class="button is-warning is-medium" type="button" slot="trigger">
                <router-link to="/Cart">
                  <b-icon icon="cart"></b-icon>
                </router-link> &nbsp
                {{ $store.getters.objectsInCar }}
                <b-icon icon="menu-down"></b-icon>
            </button>
            <b-dropdown-item v-for="object in $store.getters.objects " :key="object.id">({{ object.count}}) {{ object.name }} ($ {{ object.price * object.count }}) </b-dropdown-item>
        </b-dropdown>
          <div class="navbar-menu">
            <div class="navbar-end">
                <b-dropdown v-model="navigation" position="is-bottom-left">
                    <a class="navbar-item" slot="trigger">
                        <span>Menu</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>
                    <b-dropdown-item value="home">
                      <router-link :to="'/'">
                        <b-icon icon="home"/>
                          Home
                      </router-link>
                    </b-dropdown-item>
                    <b-dropdown-item value="cart">
                        <router-link to="/Cart">
                          <b-icon icon="cart"></b-icon>
                          <label class="is-primary-invert pointer">Cart</label>
                        </router-link>
                    </b-dropdown-item>
                    <hr class="dropdown-divider">
                    <b-dropdown-item value="settings">
                        <b-icon icon="settings"></b-icon>
                        Settings
                    </b-dropdown-item>
                    <b-dropdown-item value="logout">
                        <b-icon icon="logout"></b-icon>
                        Logout
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
      </nav>
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Bienvenido a Amazonia
            </h1>
          </div>
        </div>
      </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navigation: "home"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.hero {
  margin-top: 10px;
  margin-bottom: 20px;
}
.pointer {
  cursor: pointer;
}
a.router-link-exact-active.router-link-active {
  color: #fff;
}
</style>
<style lang="scss" scoped>
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary-invert;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
