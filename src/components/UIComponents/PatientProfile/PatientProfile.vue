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
      <p class="category"> {{ translateCurrentStatus(patient.currentStatus) }} {{ patient.cardTrack }}</p>
    </div><!-- end of header -->

    <div class='content'>
      <p>出生日期：{{ formatDate(patient.dateOfBirth) }}</p>
      <p>身份证号：{{ patient.idNumber }} </p>
      <p>手机号：{{ patient.phone }} </p>
      <p>血型：{{ translateBloodType() }}</p>
      <p>地址：{{ translateAddress() }}</p>
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
      formatDate: formatDate,
      translateBloodType () { return this.patient.translated === undefined ? this.patient.bloodType : this.patient.translated.bloodType },
      translateAddress () {
        return this.patient.translated === undefined
          ? this.patient.address
          : this.patient.translated.nationality + ' ' + this.patient.translated.province + ' ' + this.patient.translated.county + ' ' + this.patient.address.detailAddress +
            ' 或者 ' + this.patient.address.contactAddress
      }
    },
    data () {
      return {
        translated: false
      }
    },
    created () {
      // 翻译血型、地址等码表
      let patient = this.patient
      axios.get('/api/translation',
        {
          params: {
            entries: {
              bloodType: this.patient.bloodType,
              nationality: this.patient.address.nationality,
              province: this.patient.address.province,
              city: this.patient.address.city,
              county: this.patient.address.county
            }
          }
        }
      )
      .then(function (response) {
        patient.translated = response.data
      })
      .catch(function (error) {
        alert(error)
      })

      axios.get('/api/cardTrack',
        {
          params: {
            id: patient.patientId
          }
        }
      )
      .then(function (response) {
        console.log(response)
        patient.cardTrack = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style>
</style>
