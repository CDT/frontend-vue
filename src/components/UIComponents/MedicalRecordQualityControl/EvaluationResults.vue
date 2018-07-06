<template>
<div class="row">
  <!-- 组织机构数 -->
  <div class="col-sm-4">
    <organization-tree></organization-tree>
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

export default {
  components: {
    'organization-tree': OrganizationTree
  }
}
</script>

<style>
</style>
