<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          
          <vue-tabs :active-tab-color=tabColor
                      active-text-color="white"
                      type="pills">
                <v-tab title="患者列表" icon="ti-user">
                  <patient-table></patient-table>
                </v-tab>

                <v-tab title="人员详情" icon="ti-settings">
                  Second tab content
                </v-tab>

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
        tabs: ['Fuck', 'You']
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
.tab-close{
  float:right;
}
.tab-close:hover{
  transform: rotate(7deg);
}
</style>
