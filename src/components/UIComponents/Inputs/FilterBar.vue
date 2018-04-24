<template>
  <div class="filter-bar pull-left">
    <div class="form-inline">
      <div class="form-group">
        <label>查找 :</label>
        <input type="text" v-model="filterText" class="form-control" @keyup.enter="doFilter" placeholder="关键字">
        <button class="btn btn-primary" @click="doFilter">搜索</button>
        <!-- <button class="btn btn-default" @click="resetFilter">重置</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterText: ''
    }
  },
  methods: {
    doFilter () {
      this.$events.fire('filter-set', this.filterText)
    }
    // resetFilter () {
    //   this.filterText = ''  // clear the text in text input
    //   this.$events.fire('filter-reset')
    // }
  }
}
</script>
<style>
.filter-bar {
  margin-bottom: 8px;
}
</style>
