<template>
  <div class="login d-flex justify-center align-center
">
  <v-card class="pa-8">
    <h3>系統登入</h3>
    <v-text-field
      v-model="account"
      label="帳號"
    ></v-text-field>
    <v-text-field v-model="passwd" label="密碼"></v-text-field>
    <div class="d-flex justify-center login__button">
      <v-btn @click="login" color="primary">登入</v-btn>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  data: () => {
    
    return {
      account: 'jeff',
      passwd: 'testqq'
    }
  },
  methods: {
    async login() {
      try {
        // await this.$store.dispatch('login', {account: this.account, passwd: this.passwd})
        this.$router.push('/lists')
      } catch (e) {
        console.log(e)
      }
      
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
  height: 100%;
  .v-card {
    h3 {
      text-align: center;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 45px;
    }
    width: 450px;
    height: 500px;
  }
  &__button {
    margin-top: 100px
  }
}
</style>