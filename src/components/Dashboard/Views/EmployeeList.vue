<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">

          <vue-tabs type="pills">
            <v-tab title="First tab">
              First tab content
            </v-tab>

            <v-tab title="Second tab">
              Second tab content
            </v-tab>

            <v-tab title="Third tab">
              Third tab content
            </v-tab>
        </vue-tabs>
          
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
          </div>

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
