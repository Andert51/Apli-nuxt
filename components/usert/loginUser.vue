<template>
  <v-card
    color="teal darken-3"
    width="400"
    elevation="0"
    height="300"
    rounded
    class="pa-4"
  >
    <v-card-title>
      <v-row align="center" justify="center">
        <span
          style="color:white;
        font-family:New Amsterdam, sans-serif;
        font-weight: 400;
        font-size:larger;
        font-style: normal;"
        >
          <h3>Welcome back</h3>
        </span>
      </v-row>
    </v-card-title>
    <v-card-text class="mt-4 mb-4 pt-4 pb-4">
      <v-form ref="form">
        <div class="textFields">
          <v-row style="width: 100%;">
            <v-text-field
              v-model="user"
              label="User"
              placeholder="Write your username"
              filled
              solo
              dense
            />
          </v-row>
          <v-row style="width: 100%;">
            <v-text-field
              v-model="password"
              label="Password"
              placeholder="Write your password"
              filled
              solo
              dense
              type="password"
              :rules="passwordRules"
            />
          </v-row>
        </div>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-row align="center" justify="center" >
        <v-btn
          color="cyan lighten-4"
          @click="loginBackend"
        >
          <span style="text-transform: none; color:black;">
            LogIn
          </span>
          <v-icon>
            mdi-login
          </v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import cookies from 'js-cookie'
export default {
  data () {
    return {
      user: '',
      password: '',
      passwordRules: [
        value => !!value || 'Password cannot be empty!',
        value => (value && value.length >= 8) || 'Password must be at least 8 characters',
        value => (value && /[!@#$%^&*(),.?":{}|<>]/.test(value)) || 'At least one special character'
      ]
    }
  },
  methods: {
    loginBackend () {
      const body = {
        user: this.user,
        password: this.password
      }
      this.$axios.post('/login', body)
        .then((res) => {
          if (res.data && res.data.token) {
            cookies.set('token2', res.data.token, { expires: 1, path: '/' }) // Con path la cookie esta disponible en todas las paginas

            // localStorage.setItem('token', res.data.token) // con localstorage
            // cookies.remove('token2') // Eliminar una cookie al cerrar sesion, eso es extra
            console.log('@Nint token => ', res.data.token)
            this.$router.push('/dashboard')
          }
        })
        .catch((error) => {
          console.error('@Nint error =>', error)
        })
    }
  }
}
</script>

<style>
.textFields {
    width: 100%;
    margin: 3px;
}
</style>
