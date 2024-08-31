<template>
  <div>
    <v-row>
      <v-spacer />
      <v-btn>
        Create Student
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="students"
      />
    </v-row>
  </div>
</template>

<script>
import cookies from 'js-cookie'
export default {
  data () {
    return {
      students: [],
      headers: [{
        text: 'Name',
        align: 'center',
        sortable: true,
        value: 'name'
      },
      {
        text: 'A.Matern',
        align: 'center',
        sortable: true,
        value: 'amaterno'
      },
      {
        text: 'A.Patern',
        align: 'center',
        sortable: true,
        value: 'apaterno'
      },
      {
        text: 'Direction',
        align: 'center',
        sortable: true,
        value: 'direccion'
      },
      {
        text: 'Phone',
        align: 'center',
        sortable: true,
        value: 'telefono'
      },
      {
        text: 'Mail',
        align: 'center',
        sortable: true,
        value: 'mail'
      },
      {
        text: 'User',
        align: 'center',
        sortable: true,
        value: 'user'
      }

      ]
    }
  },
  mounted () {
    this.loadstudents()
  },
  methods: {
    loadstudents () {
      const token2 = cookies.get('token2')
      this.$axios.get('/all', {
        headers: {
          Authorization: `Bearer ${token2}`
        }
      }).then((res) => {
        console.log('@Nint res =>', res.data)
        if (res.data.message === 'success') {
          this.students = res.data.students
        }
      }).catch((error) => {
        console.log('@Nint error =>', error)
      })
    }
  }
}

</script>
