<template>
<div class="row">
  <!-- 组织机构数 -->
  <div class="col-sm-4">
    <organization-tree eventSource="evaluation-results" selectedOrg="selectedOrg"></organization-tree>
  </div>

  <!-- 质控详情 -->
  <div class="col-sm-8">
    <div class="card">
      科室质控结果
    </div>
  </div>
</div>
</template>

<script>
import OrganizationTree from 'src/components/UIComponents/OrganizationTree/OrganizationTree.vue'
import eventBus from 'src/eventBus'

export default {
  components: {
    'organization-tree': OrganizationTree
  },
  data () {
    return {
      selectedOrg: ''
    }
  },
  mounted () {
    eventBus.$on('evaluation-results-organization-selected', orgCode => {
      this.selectedOrg = orgCode
    })
  }
}
</script>

<style>
</style>
