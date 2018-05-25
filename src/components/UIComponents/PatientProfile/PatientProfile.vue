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
      <p class="category"> {{ translateCurrentStatus(patient.currentStatus) }}</p>
      <p class="category">[卡磁道：pca.pca_service_card_info]</p>
    </div><!-- end of header -->

    <div class='content'>
      <p>出生日期：{{ formatDate(patient.dateOfBirth) }}</p>
      <p>身份证号：{{ patient.idNumber }} </p>
      <p>手机号：{{ patient.phone }} </p>
      <p>血型：{{ patient.bloodType}}</p>
      <p>地址：{{ patient.address }}</p>
    </div><!-- end of content -->
  </div><!-- end of profile -->
</template>

<script>
  import axios from 'axios'
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
      // 翻译血型、地址等码表
      axios.get('/api/translation',
        {
          params: {
            entries: {
              bloodType: this.patient.bloodType,
              nationality: this.patient.nationality,
              province: this.patient.address.province,
              city: this.patient.address.city,
              county: this.patient.address.county
            }
          }
        }
      )
      .then(function (response) {
        console.log(response)
        if (response.data) {
          row.password = response.data
        } else {
          row.password = '解密失败'
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style>
</style>
