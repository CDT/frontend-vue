<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          
          <vue-tabs :active-tab-color=tabColor>
            
            <!-- <v-tab title="患者列表" icon="ti-user">
              <patient-table>
              </patient-table>
            </v-tab> -->
            <v-tab v-for="tab in tabs" :key="tab">
              <div slot="title">{{tab}} <span @click.stop="removeTab(index)" class="ti-close tab-close"></span></div>
              {{tab}} 
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
        tabColor: globalConfig.tabColor,
        tabs: ['First Tab', 'Second Tab', 'Third Tab']
      }
    },
    methods: {
      removeTab (index) {
        this.tabs.splice(index, 1)
      },
      addTab () {
        this.tabs.push('New Tab')
      }
    }
  }

</script>
<style>

</style>
