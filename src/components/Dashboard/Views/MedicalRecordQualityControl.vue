<template>
    <div class="row">
      <div class="col-md-12">
        <div class="tabs">
          <vue-tabs :active-tab-color=tabColor
                      active-text-color="white"
                      type="pills">
                <v-tab title="质控规则" icon="ti-settings">                  
                  <rule-panel></rule-panel>
                </v-tab>
                <v-tab title="质控结果" icon="ti-check-box">
                  <evaluation-results></evaluation-results>
                </v-tab>
            </vue-tabs>
        </div> <!--end of tabs-->
      </div>
    </div>
</template>
<script>
import globalConfig from 'globalConfig'
import RulePanel from 'src/components/UIComponents/MedicalRecordQualityControl/RulePanel.vue'
import EvaluationResults from 'src/components/UIComponents/MedicalRecordQualityControl/EvaluationResults.vue'

export default {
  components: {
    'rule-panel': RulePanel,
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
