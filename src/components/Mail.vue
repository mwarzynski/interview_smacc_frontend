<template>
  <v-container fluid>
    <v-alert :value="showSuccess" type="success" outline>
      Success.
    </v-alert>
    <v-alert :value="showError" type="error" outline>
      Something went wrong.
    </v-alert>
    <v-slide-y-transition mode="out-in">
      <v-form v-model="formValid" ref="form">
        <v-text-field v-model="from" :rules="emailRules" label="From" required></v-text-field>
        <v-text-field v-model="to" :rules="emailRules" label="To" required></v-text-field>
        <v-text-field v-model="subject" :rules="subjectRules" :counter="100" label="Subject" required></v-text-field>
        <v-textarea v-model="text" label="Message" required></v-textarea>
        <v-btn :disabled="!formValid" @click="submit">submit</v-btn>
        <v-btn @click="clearForm">clear</v-btn>
      </v-form>
    </v-slide-y-transition>
    <v-progress-linear :active="inProgress" :indeterminate="true"></v-progress-linear>
  </v-container>
</template>

<script>
import { sendMail } from '../api'

export default {
  name: 'Mail',
  props: {},
  data: () => ({
    formValid: true,
    from: '',
    to: '',
    subject: '',
    text: '',
    subjectRules: [
      v => !!v || 'Subject is required',
      v => (v && v.length <= 100) || 'Subject must be less than 50 characters'
    ],
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters'
    ],
    emailRules: [
      v => !!v || 'Field is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    showSuccess: false,
    showError: false,
    inProgress: false
  }),
  methods: {
    clearForm () {
      this.showError = false
      this.showSuccess = false
      this.$refs.form.reset()
    },
    submit () {
      this.inProgress = true
      if (this.$refs.form.validate()) {
        sendMail({
          from: this.from,
          to: this.to,
          subject: this.subject,
          text: this.text
        })
          .then((response) => {
            this.showError = false
            this.showSuccess = true
            this.$refs.form.reset()
            setTimeout(() => {
              this.formValid = true
              this.showSuccess = false
            }, 5000)
            this.inProgress = false
          })
          .catch(_ => {
            this.inProgress = false
            this.showError = true
          })
      } else {
        this.inProgress = false
      }
    }
  }
}
</script>
