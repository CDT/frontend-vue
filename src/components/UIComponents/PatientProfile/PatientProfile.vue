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
      <p class="category"> {{ translateCurrentStatus() }} {{ patient.cardTrack }}</p>
    </div><!-- end of header -->

    <div class='content'>
      <p>出生日期：{{ formatDate(patient.dateOfBirth) }}</p>
      <p>身份证号：{{ patient.idNumber }} </p>
      <p>手机号：{{ patient.phone }} </p>
      <p>血型：{{ translateBloodType() }}</p>
      <p>地址：{{ patient.address }}</p>
    </div><!-- end of content -->
  </div><!-- end of profile -->
</template>

<script>
  import axios from 'axios'
  import { getAge, formatDate } from '../../utils'
  
  export default {
    props: {
      patient: {
        type: Object
      }
    },
    methods: {
      getAge: getAge,
      formatDate: formatDate,
      translateBloodType () { return this.patient.translated === undefined ? this.patient.bloodType : this.patient.translated.bloodType },
      translateCurrentStatus () { return this.patient.translated === undefined ? this.patient.currentStatus : this.patient.translated.currentStatus }
    },
    data () {
      return {
        translated: false
      }
    },
    created () {
      console.log(this.patient)
      // 翻译血型、地址等码表
      let patient = this.patient
      axios.get('/api/translation',
        {
          params: {
            entries: {
              bloodType: this.patient.bloodType,
              currentStatus: this.patient.currentStatus
            }
          }
        }
      )
      .then(function (response) {
        patient.translated = response.data
      })
      .catch(function (error) {
        console.log(error)
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
