<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" :to="'/'">
        <img id="nav-icon" src="https://i.dlpng.com/static/png/4296409-food-food-bowl-hot-food-meal-icon-hot-food-png-512_512_preview.webp" height="50px" width="50px">
        <b>FoodAdvisor</b>
      </nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-links">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-links" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link v-if="isUserLogged" :to="'/admin'" class="button is-primary">
              <strong>Admin area</strong>
            </nuxt-link>
            <a @click="onLogClick" class="button is-light">
              {{ logButtonText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { firebase } from '@/plugins/firebase'

export default {
  data() {
    return {
      isUserLogged: false
    }
  },
  computed: {
    logButtonText() {
      if (this.isUserLogged) {
        return 'Log Out'
      } else {
        return 'Log In'
      }
    }
  },
  mounted() {
    this.checkUserLogged()
  },
  methods: {
    onLogClick() {
      if (this.isUserLogged) {
        this.logOutUser()
      } else {
        this.$router.push('login')
      }
    },
    checkUserLogged() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.isUserLogged = true
        } else {
          this.isUserLogged = false
        }
      })
    },
    logOutUser() {
      firebase.auth().signOut()
        .then(() => {
          this.isUserLogged = false
        })
    }
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 0.2em 0.4em 0 #aaa;
}
a.navbar-item {
  padding: 0 1em;
}
a.navbar-item:hover,
a.navbar-item:focus {
  color: #4a4a4a;
}
a.navbar-item > b {
  font-size: 1.4em;
  margin-left: 0.5em;
}
#nav-icon {
  max-height: 3em;
}
</style>
