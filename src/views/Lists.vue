<template>
  <div>
    <page-title title="To Do List 清單">
      <v-btn color="primary" @click="() => {$router.push('/add-details')}">新增</v-btn>
    </page-title>
    <v-data-table
      :headers="headers"
      :items="listData"
      hide-default-footer
      :items-per-page="itemsPerPage"
      class="elevation-1"
      @page-count="pageCount = $event"
  >
    <template v-slot:item.subject="{ item }">
      <v-btn text color="primary" @click="() => {$router.push(`/edit-details/${item.id}`)}">{{item.subject}}</v-btn>
    </template>
    <template v-slot:item.level="{ item }">
      <v-rating
        v-model="item.level"
        background-color="purple lighten-3"
        color="purple"
        size="24"
      ></v-rating>
    </template>
    <template v-slot:item.delete="{ item }">
      <v-btn outlined color="red" @click="() => {deleteList(item.id)}">刪除</v-btn>
    </template>
  </v-data-table>
  <div class="pa-16">
    <v-pagination
      v-model="page"
      :length="pageCount"
    ></v-pagination>
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
      page: 1,
      pageCount: 10,
      itemsPerPage: 10,
      headers: [
          {
            text: '編號',
            align: 'start',
            value: 'id',
          },
          { text: '主題', value: 'subject' },
          { text: '預約時間', value: 'reserved_time' },
          { text: '內容簡介', value: 'brief' },
          { text: '重要程度', value: 'level' },
          { text: '撰寫者', value: 'author' },
          { text: '操作', value: 'delete' },
        ],
        listData: [
          {
            id: "10001",
            subject: "晨會",
            reserved_time: "2020-10-24 09:00",
            brief: "午餐負責人",
            level: 3,
            author: "傑夫"
          },
          {
            id: "10002",
            subject: "下午茶",
            reserved_time: "2019-10-09 12:28",
            brief: "50嵐 VS 可不可熟成",
            level: 3,
            author: "Leo"
          },
          {
            id: "10003",
            subject: "QQQA",
            reserved_time: "2020-10-24 16:20",
            brief: "this.is.a.book",
            level: 9,
            author: "傑夫"
          }
        ]
     }
   },
   methods: {
     async deleteList(id) {
       await this.$store.dispatch('deleteList', id)
     }
   }
};
</script>

<style lang='scss' scoped>
</style>