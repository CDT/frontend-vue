<template>
<div class="row">
  <!-- 规则列表 -->
  <div class="wrapper col-sm-4">
    <div class="rule-list card">
      <div v-for="ruleSet, ruleSetIndex in ruleSets">
        <div class="rule-category"> 
        {{ ruleSetIndex + 1 }}. {{ ruleSet.category }} 
        </div>
        <rule-title 
        v-for="rule, ruleIndex in ruleSet.rules" 
        :rule="rule" 
        :index="(ruleSetIndex + 1) + '.' + (ruleIndex + 1)"
        :selected="selectedRule === rule"
        ></rule-title>
      </div>    
    </div>
  </div>

  <!-- 规则详情 -->
  <div class="col-sm-8">
    <rule-detail :rule="selectedRule"></rule-detail>
  </div>

</div>
</template>

<script>
import RuleTitle from './RuleTitle.vue'
import RuleDetail from './RuleDetail.vue'
import eventBus from '../../../eventBus'
import { ruleSets } from 'src/assets/data/ruleSets.json'

export default {
  components: {
    'rule-title': RuleTitle,
    'rule-detail': RuleDetail
  },
  data () {
    return {
      ruleSets: ruleSets,
      selectedRule: null
    }
  },
  methods: {
    showRuleDetails () {
      console.log('rule selected')
    },
    ruleSelected () {
      console.log(this)
    }
  },
  mounted () {
    eventBus.$on('rule-selected', rule => {
      this.selectedRule = rule
    })
  }
}
</script>

<style lang="scss" scoped>

* {
    margin: 0;
    text-decoration: none;
}

.wrapper {
    // height: 100vh;
    display: flex;
    justify-content: center;
    overflow: auto;
    padding: 0px;
    .rule-list {
        // height: 100%;
        padding: 5%;
        margin: 0 10px;
    }
}

.rule-details {
  margin: 0 10px;
  padding: 5%;
}

.rule-category {
  font-size: 2rem;
  font-weight: bold;
}

@media all and (max-width: 410px) {
    .window {
        width: 100%;
        min-width: 270px;
    }
}
</style>
