<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          
          <vue-tabs :active-tab-color=tabColor
                    active-text-color="white"
                    type="pills"
                    v-model="tabName">
                <v-tab title="患者列表" icon="ti-user">
                  <patient-table></patient-table>
                </v-tab>

                <v-tab title='fucker'>
                  Fuck
                </v-tab>
                
                <v-tab v-for="tab in tabs" :key="tab.key" :icon="tab.icon" 
                :title="tab.key">
                  <span slot="title" class="title title_center">
                    <i class="ti-settings">&nbsp;</i>
                    {{tab.key}}&nbsp;&nbsp;
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
  import eventBus from '../../../eventBus'
  import Vue from 'vue'
  
  export default {
    components: {
      PatientTable
    },
    data () {
      return {
        tabColor: globalConfig.tabColor,
        tabs: [],
        tabName: ''
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
        self.tabs.push(tab)
        let a = 1
        a = 2
        console.log(a)
        Vue.nextTick(() => { self.tabName = tab.key })
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
