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
        {{ patient.patientId }}

      </h4>
      <p class="category">[国籍|省|市] {{ translateCurrentStatus(patient.currentStatus) }}</p>
    </div><!-- end of header -->

    <div class='content'>
      <p>出生日期：{{ formatDate(patient.dateOfBirth) }}</p>
      <p>身份证号：{{ patient.idNumber }} </p>
      <p>手机号：{{ patient.phone }} </p>
      <p>血型：</p>
      <p>出生地： </p>
      <p>户口地： </p>
      <p>居住地： </p>
      <p>联系人：姓名|关系|联系人住址 </p>
      <p>职业：</p>
    </div><!-- end of content -->
  </div><!-- end of profile -->
</template>

<script>
  import { getAge, translatePatientCurrentStatus, formatDate } from '../../utils'
  
  export default {
    props: {
      patient: {
        type: Object
      }
    },
    methods: {
      getAge: getAge,
      translateCurrentStatus: translatePatientCurrentStatus,
      formatDate: formatDate
    },
    created () {
      console.log(this.patient)
    }
  }
</script>

<style>
</style>
