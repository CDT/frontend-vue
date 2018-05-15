<template>
  <div class="custom-actions">
    <button class="btn btn-default btn-sm" @click="itemAction('view-item', rowData, rowIndex)"><span class="glyphicon glyphicon-zoom-in"></span></button>
    <button class="btn btn-default btn-sm" @click="itemAction('edit-item', rowData, rowIndex)"><span class="glyphicon glyphicon-pencil"></span></button>
    <button class="btn btn-default btn-sm" @click="itemAction('delete-item', rowData, rowIndex)"><span class="glyphicon glyphicon-remove"></span></button>
  </div>
</template>

<script>
  import eventBus from '../../../eventBus'

  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      },
      tabs: {
        type: Array
      }
    },
    methods: {
      itemAction (action, data, index) {
        switch (action) {
          case 'view-item':
            eventBus.$emit('addPatientTab', {icon: 'ti-id-badge', key: 'detail-' + data.patientId, patient: data})
            break
          default:
            console.log('default')
        }
      }
    }
  }
  </script>

  <style>
    .custom-actions button.ui.button {
      padding: 8px 8px;
    }
    .custom-actions button.ui.button > i.icon {
      margin: auto !important;
    }
  </style>
