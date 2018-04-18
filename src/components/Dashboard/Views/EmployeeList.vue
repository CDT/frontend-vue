<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <employee-table 
            :title="title" 
            :sub-title="subTitle" 
            :api="api"
          >
          </employee-table>
        </div>
      </div>
    </div>
</template>

<script>
  import EmployeeTable from 'components/UIComponents/EmployeeTable/EmployeeTable.vue'
  
  export default {
    components: {
      EmployeeTable
    },
    data () {
      return {
        title: '人员信息表',
        subTitle: '院内所有人员基本信息',
        api: '/api/employees'
      }
    }
  }

</script>
<style>

</style>
