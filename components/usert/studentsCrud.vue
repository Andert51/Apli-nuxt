<template>
  <div>
    <v-row>
      <v-spacer />
      <v-btn @click="showdialog=true">
        Create Student
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="students"
      >
        <template #[`item.Actions`]="{ item }">
          <v-tooltip bottom color="green">
            <template #activator="{on, attrs}">
              <v-btn
                icon
                color="warning"
                v-bind="attrs"
                @click="updateS(item)"
                v-on="on"
              >
                <v-icon>mdi-update</v-icon>
              </v-btn>
            </template>
            <span>Update Student: {{ item.name }}</span>
          </v-tooltip>
          <v-tooltip bottom color="red">
            <template #activator="{on, attrs}">
              <v-btn
                icon
                color="red"
                v-bind="attrs"
                @click="deleteS(item)"
                v-on="on"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <span>Delete Student: {{ item.name }}</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-row>
    <v-dialog
      v-model="showdialog"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title>Create a student</v-card-title>
        <v-card-text>
          <v-form ref="formCreated">
            <v-row align="center" justify="center">
              <v-text-field
                v-model="name"
                placeholder="Write your name"
                label="Name"
                filled
                dense
              />
            </v-row>
            <v-row align="center" justify="center">
              <v-text-field
                v-model="apaterno"
                placeholder="Write your Paternal surname"
                label="Surname  "
                filled
                dense
              />
            </v-row>
            <v-row align="center" justify="center">
              <v-text-field
                v-model="amaterno"
                placeholder="Write your Maternal surname"
                label="Surname"
                filled
                dense
              />
            </v-row>
            <v-row align="center" justify="center">
              <v-text-field
                v-model="direccion"
                placeholder="Write your Direction"
                label="Direction"
                filled
                dense
              />
            </v-row>
            <v-row align="center" justify="center">
              <v-text-field
                v-model="telefono"
                placeholder="Write your Phone number"
                label="Phone"
                filled
                dense
              />
            </v-row>
            <v-row align="center" justify="center">
              <v-text-field
                v-model="mail"
                placeholder="Write your Mail"
                label="Mail"
                filled
                dense
              />
            </v-row>
            <v-row align="center" justify="center">
              <v-text-field
                v-model="user"
                placeholder="Write your User"
                label="User"
                filled
                dense
              />
            </v-row>
            <v-row align="center" justify="center">
              <v-text-field
                v-model="password"
                placeholder="Write your Password (Password must be at least 4 characters)"
                label="Password"
                filled
                dense
                type="password"
              />
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row align="center" justify="center" class="mb-2">
            <v-btn @click="showdialog=false">
              Cancel
            </v-btn>
            <v-btn @click="createStudent">
              Add
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        text: 'Maternal Surname',
        align: 'center',
        sortable: true,
        value: 'amaterno'
      },
      {
        text: 'Paternal Surname',
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
      },
      {
        text: 'Acciones',
        align: 'center',
        sortable: true,
        value: 'Actions'
      }

      ],

      showdialog: false,
      name: '',
      apaterno: '',
      amaterno: '',
      direccion: '',
      telefono: '',
      mail: '',
      user: '',
      password: '',
      token: null

    }
  },
  mounted () {
    this.loadstudents()
  },
  methods: {
    loadstudents () {
      this.token = cookies.get('token')
      this.$axios.get('/all', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then((res) => {
        console.log('@Nint res =>', res.data)
        if (res.data.message === 'success') {
          this.students = res.data.students
        }
      }).catch((error) => {
        console.log('@Nint error =>', error)
      })
    },
    createStudent () {
      const body = {
        name: this.name,
        apaterno: this.apaterno,
        amaterno: this.amaterno,
        direccion: this.direccion,
        telefono: this.telefono,
        mail: this.mail,
        user: this.user,
        password: this.password
      }

      this.$axios.post('/create', body, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log('@Nint res => ', res)
        if (res && res.data && res.data.message === 'success') {
          this.loadstudents()
          this.showdialog = false
        }
      }).catch((error) => {
        console.log('@Nint error =>', error)
      })
    },
    deleteS (item) {
      console.log('@Nint => ', item)
      this.$axios.delete(`/student/${item.id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          this.loadstudents()
        }).catch((error) => {
          console.error('error => ', error)
        })
    }

  }
}

</script>
