<template>
  <v-row justify="center" align="center">
    <LoginUser />
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
  }
}
</script>
