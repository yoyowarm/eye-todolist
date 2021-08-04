<template>
  <div>
    <page-title :title="title">
      <span>{{ rightText }}</span>
    </page-title>
    <div class="detail d-flex justify-space-between align-center">
      <div class="d-flex"><span>項目編號:</span>{{id}}</div>
      <div class="d-flex align-center">
        <span>主題</span>
        <v-text-field
        hide-details="auto"
        />
      </div>
      <div class="d-flex align-center">
        <span>預約時間</span>
        <v-text-field
        hide-details="auto"
        />
      </div>
    </div>
    <div class="detail d-flex justify-space-between align-center">
      <div class="d-flex align-center"><span>重要程度</span><v-rating
        v-model="rating"
        background-color="purple lighten-3"
        color="purple"
        size="36"
      ></v-rating></div>
      <div class="d-flex align-center">
        <span>簡介</span>
        <v-text-field
        hide-details="auto"
        />
      </div>
      <div class="d-flex align-center">
        <span>撰寫者</span>
        <v-text-field
        hide-details="auto"
        />
      </div>
    </div>
    <div class="d-flex justify-center mt-8">
      <v-btn outlined color="teal" class="ma-6" @click="$router.back()">儲存</v-btn>
      <v-btn outlined color="amber" class="ma-6" @click="$router.back()">返回</v-btn>
    </div>
  </div>
</template>

<script>
import pageTitle from '../components/pageTitle.vue'
export default {
  components: {
    pageTitle
  },
   data: () => {
     return {
       title: '',
       rightText: '資料修改時間 yyyy-mm-dd hh:mm:ss',
       rating: 0,
       id: '1001'
     }
   },
   computed: {
     listId () {
       return this.$route.params.id
     }
   },
   async mounted () {
     if (this.listId) {
       this.title = '編輯 To Do List'
       this.rightText = '資料修改時間 yyyy-mm-dd hh:mm:ss'
       await this.$store.dispatch('getList', this.listId)

     } else {
       this.title = '新增 To Do List'
       this.rightText = '資料建立時間 yyyy-mm-dd hh:mm:ss'
     }
   }
};
</script>

<style lang='scss' scoped>
.detail {
  margin-bottom: 60px;
  >div {
    min-width: 28%;
    font-size: 18px;
    span {
      margin-right: 20px
    }
  }
}
</style>