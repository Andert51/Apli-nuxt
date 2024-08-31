<template>
  <v-app>
    <v-main>
      <ui-alert
        v-if="showAlert"
        :color="color"
        :type="type"
        :icon="icon"
        :message="message"
        :border="border"
        class="alert"
      />

      <v-row
        align="center"
        justify="center"
        class="login"
      >
        <Nuxt />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      showAlert: false,
      color: '',
      type: '',
      message: '',
      border: '',
      icon: ''
    }
  },
  created () {
    this.$nuxt.$on('show-alert', (data) => {
      console.log('@Nint layout =>', data)
      this.showAlert = data.showAlert
      this.color = data.color
      this.type = data.type
      this.message = data.message
      this.icon = data.icon
      this.border = data.border
      setTimeout(() => {
        this.showAlert = false
      }, 2000)
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('show-alert')
  }

}
</script>

<style scoped>
.login {
          width: 100%;
          height: 100vh;
          background-color: #4DB6AC;
      }
      .alert {
        position: absolute;
        right: 10px;
        top: 10px;
      }
</style>
