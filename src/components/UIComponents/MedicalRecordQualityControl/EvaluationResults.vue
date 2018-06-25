<template>
  <div class="row">
    <div class="col-md-12">
      <div class="tree">
        <ul id="demo">
          <tree
            :model="organization">
          </tree>
        </ul>
      </div><!-- end of tree -->
    </div><!-- end of col-md-12 -->
  </div><!-- end of row -->
</template>

<script>
import { organization } from 'src/assets/data/organization.json'
import TreeNode from '../Common/TreeNode'

console.log(organization)
export default {
  components: {
    'tree': TreeNode
  },
  data () {
    return {
      organization: organization
    }
  }
}
</script>

<style>
</style>
