<template>
  <div id="login-container" class="columns is-centered is-vcentered">
    <div class="column is-one-third-fullhd is-half-desktop is-three-quarters-tablet">
      <div class="box container">
        <h2 class="title is-2 has-text-centered">Log In</h2>
        <div class="field">
          <label class="label">User</label>
          <p class="control has-icons-left has-icons-right">
            <input v-model="user.mail" @keyup.enter="onLogin" class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <p class="control has-icons-left">
            <input v-model="user.password" @keyup.enter="onLogin" class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fa fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="control">
          <button @click="onLogin" class="button is-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from '@/plugins/firebase'

export default {
  data() {
    return {
      user: {
        mail: '',
        password: ''
      }
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('admin')
      }
    })
  },
  methods: {
    onLogin() {
      firebase.auth().signInWithEmailAndPassword(this.user.mail, this.user.password)
        .then((res) => {
          console.log(res)
          this.$router.push('admin')
        })
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 1.5em;
}

.field {
  margin-top: 1em;
  margin-bottom: 1em;
}

#login-container {
  height: 80vh;
}
</style>
