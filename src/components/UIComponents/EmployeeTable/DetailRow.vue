<template>
    <div @click="onClick">
      <div class="inline field">
        <label>工号: </label>
        <span>{{rowData.job_NO}}</span>
      </div>
      <div class="inline field">
        <label>姓名: </label>
        <span>{{rowData.name}}</span>
      </div>
      <div class="inline field">
        <label>手机号: </label>
        <span>{{rowData.mobile}}</span>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    },
    methods: {
      onClick (event) {
        console.log('my-detail-row: on-click', event.target)
      }
    }
  }
  </script>
