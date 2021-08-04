<template>
  <div class="page-title d-flex justify-space-between ">
    <h3>{{title}}</h3>
    <span><slot/></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data: () => {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  padding-bottom: 40px;
  border-bottom: 1px solid #333;
  margin-bottom: 60px;
  h3 {
    font-size: 24px;
  }
}
  
</style>