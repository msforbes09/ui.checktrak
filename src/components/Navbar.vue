<template>
  <v-app-bar app dark clipped-left height="50">
    <v-app-bar-nav-icon @click.stop="drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <span>CheckTrak </span>
      <span class="grey--text">{{ company.code }}</span>
    </v-toolbar-title>
    <v-spacer> </v-spacer>
    <v-btn text color="deep-orange" @click="logout">
      Logout
      <v-icon right>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    company() {
      return this.$store.getters['tools/company']
    }
  },
  methods: {
    drawer() {
      this.$store.commit('drawer', (this.$store.getters.drawer + 1) % 3)
    },
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
