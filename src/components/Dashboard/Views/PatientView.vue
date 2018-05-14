<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          
          <vue-tabs :active-tab-color=tabColor
                    active-text-color="white"
                    type="pills"
                    v-model="currentTab">
                <v-tab title="患者列表" icon="ti-user">
                  <patient-table></patient-table>
                </v-tab>     
                <v-tab v-for="(tab, index) in tabs" :key="tab.key" :icon="tab.icon" 
                :title="tab.key">
                  <span slot="title" class="title title_center">
                    <i class="ti-settings">&nbsp;</i>
                    {{tab.title}}&nbsp;&nbsp;
                    <span @click.stop="removeTab(index)" class="ti-close tab-close"></span>
                  </span>
                  <patient-profile :patientId='tab.key.split("-")[1]'></patient-profile>
                </v-tab>

            </vue-tabs>
            
        </div>
      </div>
    </div>
</template>

<script>
  import PatientTable from 'components/UIComponents/PatientTable/PatientTable.vue'
  import PatientProfile from 'components/UIComponents/PatientProfile/PatientProfile.vue'
  import globalConfig from 'globalConfig'
  import eventBus from '../../../eventBus'
  import { hasDuplicate } from '../../utils'
  import Vue from 'vue'
  
  export default {
    components: {
      PatientTable,
      PatientProfile
    },
    data () {
      return {
        tabColor: globalConfig.tabColor,
        tabs: [],
        currentTab: ''
      }
    },
    methods: {
      removeTab (index) {
        this.tabs.splice(index, 1)
      }
    },
    mounted () {
      let self = this
      eventBus.$on('addTab', function (tab) {
        if (!hasDuplicate(self.tabs, tab)) {
          self.tabs.push(tab)
        }
        Vue.nextTick(() => { self.currentTab = tab.key })
      })
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
