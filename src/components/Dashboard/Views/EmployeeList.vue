<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <basic-table 
            :title="title" 
            :sub-title="subTitle" 
            :api="api"
          >
          </basic-table>
        </div>
      </div>
    </div>
</template>

<script>
  import BasicTable from 'components/UIComponents/BasicTable/BasicTable.vue'
  
  export default {
    components: {
      BasicTable
    },
    data () {
      return {
        title: '人员信息表',
        subTitle: '院内所有人员基本信息',
        api: 'localhost:8080/api/employees'
      }
    }
  }

</script>
<style>

</style>
