<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <vue-tabs :active-tab-color=tabColor
                      active-text-color="white"
                      type="pills">
                <v-tab title="质控规则" icon="ti-settings">
                  <rules-panel></rules-panel>
                </v-tab>
                <v-tab title="质控结果" icon="ti-check-box">
                  <evaluation-results></evaluation-results>
                </v-tab>
            </vue-tabs>
        </div>
      </div>
    </div>
</template>
<script>
import globalConfig from 'globalConfig'
import RulesPanel from 'src/components/UIComponents/MedicalRecordQualityControl/RulesPanel.vue'
import EvaluationResults from 'src/components/UIComponents/MedicalRecordQualityControl/EvaluationResults.vue'

export default {
  components: {
    'rules-panel': RulesPanel,
    'evaluation-results': EvaluationResults
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
