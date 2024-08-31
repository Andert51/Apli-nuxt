<template>
  <div>
    <v-row align="center" justify="center">
      <h1>Students</h1>
    </v-row>
    <v-row align="center" justify="center">
      <studentsCrud />
      <v-row />
    </v-row>
  </div>
</template>

<script>
import cookies from 'js-cookie'
import studentsCrud from '~/components/usert/studentsCrud.vue'
export default {
  components: {
    studentsCrud
  },
  middleware: 'detectpush',
  mounted () {
    // const token = localStorage.getItem('token') //manejado con localstorage
    const cookietoken = cookies.get('token')
    console.log('@Nint =>', cookietoken)
    if (!cookietoken) {
      this.$router.push('/')
    }
  }
}

</script>

<style scoped>

</style>
