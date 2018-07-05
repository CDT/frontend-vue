<template>
<div class="card">
  <h2 class="rule-detail-title">规则详情</h2>
  <div class="rule-prop">
    <h3 class="rule-prop-title">规则描述</h3>
    <p>{{ rule.description ? rule.description : '请选择一个规则' }}</p>
  </div>
  <h3 class="rule-prop">相关病历</h3>
  <h3 class="rule-prop">时间限制</h3>
</div>
</template>

<script>
export default {
  props: {
    rule: {
      type: Object,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
}
.rule-detail-title {
  padding: 20px;
  font-weight: bold;
}
.rule-prop {
  padding: 20px;
  .rule-prop-title {
    font-weight: bold;
  }
}
</style>
