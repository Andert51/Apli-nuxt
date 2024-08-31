<template>
  <v-row justify="center" align="center">
    <LoginUser
      @show-alert="showAlert"
    />
  </v-row>
</template>

<script>
import LoginUser from '~/components/usert/loginUser.vue'

export default {
  name: 'IndexPage',
  components: {
    LoginUser
  },
  layout: 'login',
  middleware: 'detectpush',
  mounted () {
  },
  methods: {
    showAlert (data) {
      console.log('@Nint data => ', data)
      this.$nuxt.$emit('show-alert', data)
    }
  }
}
</script>
