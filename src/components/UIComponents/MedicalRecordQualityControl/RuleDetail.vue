<template>
<div class="card">
  <h2 class="rule-detail-title">规则详情</h2>
  <div class="rule-prop">
    <h3 class="rule-prop-title">规则描述</h3>
    <p class="rule-description">{{ rule && rule.description ? rule.description : '请选择一个规则' }}</p>
  </div>
  <div class="rule-prop">
    <h3 class="rule-prop-title">相关病历</h3>
    <p class="rule-description">{{ rule && rule.relatedDocs ? rule.relatedDocs : '请选择一个规则' }}</p>
  </div>
  <div class="rule-prop">
    <h3 class="rule-prop-title">時间限制</h3>
    <p class="rule-description">{{ rule && rule.timeLimit ? rule.timeLimit : '请选择一个规则' }}</p>
  </div>
  <button class="btn btn-primary save">保存</button>
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
.card {
  height: 100%;
  overflow: hidden;
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
  .rule-description {
    margin: 1em 0;
    text-indent: 1em;
    transition: content 1s;
    content: abc;
  }
}

.save {
  margin: 2rem;
  float:right;
}
</style>
