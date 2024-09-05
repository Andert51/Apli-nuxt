<template>
  <div>
    <v-row class="mb-4">
      <v-spacer />
      <v-btn
        color="green lighten-1"
        dark
        class="white--text animate__animated animate__pulse animate__infinite"
        elevation="2"
        style="border-radius: 8px;"
        @click="showdialog=true"
      >
        <v-icon left>
          mdi-plus
        </v-icon> Create Student
      </v-btn>
    </v-row>

    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="students"
        class="elevation-2"
        style="background-color: #f5f5f5; border-radius: 12px; overflow: hidden;"
        dense
        :footer-props="{ itemsPerPageOptions: [5, 10, 20] }"
      >
        <template #[`item.Actions`]="{ item }">
          <v-tooltip bottom color="yellow lighten-2" dark>
            <template #activator="{on, attrs}">
              <v-btn
                icon
                color="blue darken-2"
                v-bind="attrs"
                class="animate__animated animate__fadeIn"
                @click="updateStu(item)"
                v-on="on"
              >
                <v-icon>mdi-update</v-icon>
              </v-btn>
            </template>
            <span>Update Student: {{ item.name }}</span>
          </v-tooltip>
          <v-tooltip bottom color="red lighten-2" dark>
            <template #activator="{on, attrs}">
              <v-btn
                icon
                color="red darken-2"
                v-bind="attrs"
                class="animate__animated animate__fadeIn"
                @click="deleteStudent(item)"
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

    <v-dialog v-model="showdialog" width="600" persistent>
      <v-card color="primary" dark>
        <v-card-title class="headline text-center white--text">
          Create a Student
        </v-card-title>
        <v-card-text>
          <v-form ref="formCreated">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  placeholder="Write your name"
                  label="Name"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInLeft"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="apaterno"
                  placeholder="Write your Paternal surname"
                  label="Paternal Surname"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInRight"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="amaterno"
                  placeholder="Write your Maternal surname"
                  label="Maternal Surname"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInLeft"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="direccion"
                  placeholder="Write your Direction"
                  label="Direction"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInRight"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="telefono"
                  placeholder="Write your Phone number"
                  label="Phone"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInLeft"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="mail"
                  placeholder="Write your Mail"
                  label="Mail"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInRight"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="user"
                  placeholder="Write your User"
                  label="User"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInLeft"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="password"
                  placeholder="Write your Password (Password must be at least 4 characters)"
                  label="Password"
                  filled
                  dense
                  color="accent"
                  outlined
                  type="password"
                  class="animate__animated animate__fadeInRight"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row align="center" justify="center" class="mb-2">
            <v-btn color="red lighten-1" class="white--text" @click="showdialog=false">
              Cancel
            </v-btn>
            <v-btn color="green lighten-1" class="white--text" @click="createStudent">
              Add
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showdialogUpdate" width="600" persistent>
      <v-card color="secondary" dark>
        <v-card-title class="headline text-center white--text">
          Update a Student
        </v-card-title>
        <v-card-text>
          <v-form ref="formUpdate">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="student.name"
                  placeholder="Write your name"
                  label="Name"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInLeft"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="student.apaterno"
                  placeholder="Write your Paternal surname"
                  label="Paternal Surname"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInRight"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="student.amaterno"
                  placeholder="Write your Maternal surname"
                  label="Maternal Surname"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInLeft"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="student.direccion"
                  placeholder="Write your Direction"
                  label="Direction"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInRight"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="student.telefono"
                  placeholder="Write your Phone number"
                  label="Phone"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInLeft"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="student.mail"
                  placeholder="Write your Mail"
                  disabled
                  label="Mail"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInRight"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="student.user"
                  placeholder="Write your User"
                  disabled
                  label="User"
                  filled
                  dense
                  color="accent"
                  outlined
                  class="animate__animated animate__fadeInLeft"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="student.password"
                  placeholder="Write your Password (Password must be at least 4 characters)"
                  label="Password"
                  filled
                  dense
                  color="accent"
                  outlined
                  type="password"
                  class="animate__animated animate__fadeInRight"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row align="center" justify="center" class="mb-2">
            <v-btn color="red lighten-1" class="white--text" @click="showdialogUpdate=false">
              Cancel
            </v-btn>
            <v-btn color="blue lighten-1" class="white--text" @click="updateStudent">
              Update
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
      token: null,
      student: {},
      showdialogUpdate: false

    }
  },
  mounted () {
    this.loadstudents()
  },
  methods: {
    updateStu (item) {
      this.student = item
      this.student.password = ''
      this.showdialogUpdate = true
      console.log('@Nint estudiante => ', this.student)
    },
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
    deleteStudent (item) {
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
    },
    updateStudent () {
      this.$axios.put(`/student/${this.student.id}`, this.student, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log('@Nint res => ', res)
        if (res && res.data && res.data.message === 'success') {
          this.loadstudents()
          this.student = {}
          this.showdialogUpdate = false
        }
      }).catch((error) => {
        console.log('@Nint error =>', error)
      })
    }

  }
}

</script>
