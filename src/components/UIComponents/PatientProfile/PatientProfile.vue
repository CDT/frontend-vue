<template>
  <div>
    <div class="header">
      <h4 class="title">
        <!-- 患者姓名 -->
        {{ patient.name }} 
        
        <!-- 患者性别 -->
        <span v-if="patient.gender == 1">
          男
        </span>
        <span v-else-if="patient.gender == 2">
          女
        </span>
        <span v-else>性别未知</span>
        
        <!-- 年龄 -->
        {{ getAge(patient.dateOfBirth) }}岁

        <!-- 患者ID -->
        {{ patient.patientId}}

      </h4>
      <p class="category">{{ patient.dateOfBirth }}</p>
    </div><!-- end of header -->

    <div class='content'>
      内容
    </div><!-- end of content -->
  </div><!-- end of profile -->
</template>

<script>
  import { getAge } from '../../utils'
  
  export default {
    props: {
      patient: {
        type: Object
      }
    },
    methods: {
      getAge: getAge
    },
    created () {
      console.log(this.patient)
    }
  }
</script>

<style>
</style>
