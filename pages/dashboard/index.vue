<template>
  <div>
    <h1>
      Session Started with Backend
    </h1>
  </div>
</template>

<script>
import cookies from 'js-cookie'
export default {
  middleware: 'detectpush',
  mounted () {
    // const token = localStorage.getItem('token') //manejado con localstorage
    const cookietoken = cookies.set('token2')
    console.log('@Nint =>', cookietoken)
    if (!cookietoken) {
      this.$router.push('/')
    }
  }
}

</script>
