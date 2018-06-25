<template>
<div class="wrapper">
  <div class="window">
    <div class="ruleList">
      <div v-for="ruleSet in ruleSets">
        <p> {{ ruleSet.category }} </p>
        <rule v-for="rule in ruleSet.rules" :description="rule"></rule>
      </div>      
    </div>
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.window {
    border-radius: 8px;
    overflow: hidden;
    width: 400px;
    .ruleList {
        height: 100%;
        padding: 8px 0;
    }
}

@media all and (max-width: 410px) {
    .window {
        width: 100%;
        min-width: 270px;
    }
}
</style>
