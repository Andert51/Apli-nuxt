<template>
  <div class="crud-container">
    <v-row align="center" justify="center" class="mb-4">
      <h1 class="title animate__animated animate__fadeInDown">Students</h1>
    </v-row>
    <v-row align="center" justify="center">
      <studentsCrud />
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
    const cookietoken = cookies.get('token')
    console.log('@Nint =>', cookietoken)
    if (!cookietoken) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.crud-container {
  background-color: #f0f4f8;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #2c3e50;
  text-transform: uppercase;
}

h1 {
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #2c3e50;
  letter-spacing: 1px;
}

v-row {
  margin-bottom: 20px;
}

.studentsCrud {
  width: 100%;
}

.animate__animated.animate__fadeInDown {
  animation-duration: 1s;
}
</style>
