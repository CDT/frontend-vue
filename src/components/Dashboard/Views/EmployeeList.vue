<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
           <vue-tabs :active-tab-color=tabColor
                      active-text-color="white">
                <v-tab title="人员列表" icon="ti-user">
                  <employee-table 
                    :title="title" 
                    :sub-title="subTitle" 
                    :api="api"
                  >
                  </employee-table>
                </v-tab>

                <v-tab title="人员详情" icon="ti-settings">
                  Second tab content
                </v-tab>

                <v-tab title="Third tab" icon="ti-check">
                  Third tab content
                </v-tab>
            </vue-tabs>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import EmployeeTable from 'components/UIComponents/EmployeeTable/EmployeeTable.vue'
  import globalConfig from 'globalConfig'
  
  export default {
    components: {
      EmployeeTable
    },
    data () {
      return {
        title: '人员信息表',
        subTitle: '院内所有人员基本信息',
        api: '/api/employees',
        tabColor: globalConfig.tabColor
      }
    }
  }

</script>
<style>
.vue-tabs .nav-tabs {
  background:white;
}
</style>
