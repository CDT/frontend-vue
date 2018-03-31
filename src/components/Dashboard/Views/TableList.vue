<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="title" :sub-title="subTitle" :data="data" :columns="columns">

          </paper-table>
        </div>
      </div>
    </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import axios from 'axios'
  const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
  const tableData = []

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        title: '人员信息表',
        subTitle: '院内所有人员基本信息',
        columns: [...tableColumns],
        data: [...tableData]
      }
    },
    created () {
      axios.get('/api/employees')
           .then(response => {
             this.data = response.data
           })
           .catch(e => {
             console.log(e)
           })
    }
  }

</script>
<style>

</style>
