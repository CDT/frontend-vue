<template>
<div>
  <!-- 规则列表 -->
  <div class="wrapper card col-sm-4">
    <div class="window">
      <div class="ruleList">
        <div v-for="ruleSet, ruleSetIndex in ruleSets">
          <div class="rule-category"> 
          {{ ruleSetIndex + 1 }}. {{ ruleSet.category }} 
          </div>          
          <rule 
          v-for="rule, ruleIndex in ruleSet.rules" 
          :description="rule" 
          :index="(ruleSetIndex + 1) + '.' + (ruleIndex + 1)"
          ></rule>
        </div>      
      </div>
    </div>
  </div>

  <!-- 规则详情 -->
  <div class="ruleDetails card col-sm-8">
    asdf
  </div>

</div>
</template>

<script>
import Rule from './Rule.vue'
import { ruleSets } from 'src/assets/data/ruleSets.json'

export default {
  components: {
    'rule': Rule
  },
  data () {
    return {
      ruleSets: ruleSets
    }
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
    .window {
        border-radius: 8px;
        width: 400px;
        .ruleList {
            // height: 100%;
            padding: 8px 0;
        }
    }
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
