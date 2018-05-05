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
                
                <v-tab v-for="tab in tabs" :key="tab.title" :icon="tab.icon" 
                :title="`${tab.title}`">
                  <span slot="title" class="title title_center">
                    <i class="ti-settings">&nbsp;</i>
                    {{tab.title}}&nbsp;&nbsp;
                    <span @click.stop="removeTab(index)" class="ti-close tab-close"></span>
                  </span>
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
        tabs: []
      }
    },
    methods: {
      removeTab (index) {
        this.tabs.splice(index, 1)
      }
    }
  }

</script>
<style>
.tab-close{
  float:right;
}
.tab-close:hover{
  transition: all 0.5s;
  transform: rotate(10deg);
}
</style>
