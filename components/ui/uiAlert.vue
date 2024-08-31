<template>
  <v-alert :color="color" :type="type" :border="border" width="400">
    <v-icon>
      {{ icon }}
    </v-icon>
    {{ message }}
  </v-alert>
</template>

<script>

export default {
  props: {
    color: { type: String, default: 'teal darken-2' },
    type: { type: String, default: 'success' },
    icon: { type: String, default: '' },
    message: { type: String, default: '' },
    border: { type: String, default: 'teal darken-3' }
  }
}

</script>
