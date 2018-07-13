<template>
<div class="row">
  <!-- 组织机构数 -->
  <div class="col-sm-4">
    <organization-tree eventSource="evaluation-results" :selectedOrg="selectedOrg"></organization-tree>
  </div>

  <!-- 质控详情 -->
  <div class="col-sm-8">
    <div class="card">
      <h1 class="org-name" :class="selectedOrg ? 'org-' + selectedOrg.type : ''">
        {{ selectedOrg ? (selectedOrg.branch ? getBranchName(selectedOrg.branch) + ' ' : '')  + selectedOrg.name : '请选择一个科室' }}
      </h1>
    </div>
  </div>
</div>
</template>

<script>
import OrganizationTree from 'src/components/UIComponents/OrganizationTree/OrganizationTree.vue'
import { getBranchName } from 'src/components/utils'
import eventBus from 'src/eventBus'

export default {
  components: {
    'organization-tree': OrganizationTree
  },
  data () {
    return {
      selectedOrg: null
    }
  },
  methods: {
    getBranchName: getBranchName
  },
  mounted () {
    eventBus.$on('evaluation-results-organization-selected', selectedOrg => {
      this.selectedOrg = selectedOrg
    })
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
}
h1 {
  padding: 2rem;
}
</style>
