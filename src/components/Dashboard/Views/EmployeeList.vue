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
  const tableColumns = ['工号', '姓名', '电话', '身份证']
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
    methods: {
      translateData: function (employees) {
        let translatedEmployees = []
        employees.forEach(employee => {
          let translatedEmployee = {}
          translatedEmployee['工号'] = employee.job_NO
          translatedEmployee['姓名'] = employee.name
          translatedEmployee['电话'] = employee.mobile === null ? '(空)' : employee.mobile
          translatedEmployee['身份证'] = employee.id_NO === null ? '(空)' : employee.id_NO
          translatedEmployees.push(translatedEmployee)
        })
        return translatedEmployees
      }
    },
    created () {
      axios.get('/api/employees')
           .then(
             response => {
               this.data = this.translateData(response.data)
             })
           .catch(e => {
             console.log(e)
           })
    }
  }

</script>
<style>

</style>
