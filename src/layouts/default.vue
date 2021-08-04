<template>
  <v-app >
  <v-app-bar class="header d-flex justify-end align-center pr-4" app>
    <v-btn color="white darken-2" text @click="$router.push('/login')">
      <v-icon>{{ iconUrl }}</v-icon>
      <span>登出</span>
    </v-btn>
  </v-app-bar>
    <v-main class="pa-16">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
  </v-main>
</v-app>
</template>
<script>
import { mdiAccount } from '@mdi/js';
export default {
  data: () => {
    return {
      iconUrl: mdiAccount
    }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
  }
</style>
