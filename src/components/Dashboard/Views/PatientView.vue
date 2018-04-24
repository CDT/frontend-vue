<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          
          <vue-tabs :active-tab-color=tabColor
                      active-text-color="white">
            
            <v-tab title="患者列表" icon="ti-user">
              <patient-table>
              </patient-table>
            </v-tab>

          </vue-tabs>

        </div>
      </div>
    </div>
</template>

<script>
  import PatientTable from 'components/UIComponents/PatientTable/PatientTable.vue'
  import globalConfig from 'globalConfig'
  
  export default {
    components: {
      PatientTable
    },
    data () {
      return {
        tabColor: globalConfig.tabColor
      }
    }
  }

</script>
<style>

</style>
