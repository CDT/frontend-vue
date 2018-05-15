<template>
    <div>
      <div class="author">

        <h1 class="title">{{patient.name}} <span class="label label-info"><i class="fa fa-venus"></i>女</span>
          <br>          
            <small>患者Id: {{patient.patientId}}</small>
        </h1>

        {{patient}}

      </div>
    </div>
</template>

<script>
  
  export default {
    props: {
      patient: {
        type: Object
      }
    }
  }

</script>
<style>

</style>
