<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="pull-left">
        <ul>
          <li>
            <router-link :to="{path:'/admin'}">数据查询</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright pull-right">
        &copy; 同济医院
        <i class="fa fa-desktop"></i> 计算机中心
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>

</style>
