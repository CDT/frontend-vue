<template>
  <div class="basic-table">
    <div class="header">
      <h4 class="title">患者列表</h4>
      <p class="category">所有患者</p>
    </div>
    <br>
    <filter-bar source="patient"></filter-bar>
    <vuetable ref="vuetable"
      :fields="fields"
      :css="css"
      pagination-path=""
      :per-page="10"
      :multi-sort="true"
      multi-sort-key="ctrl"
      :sort-order="sortOrder"
      detail-row-component="detail-row-patient"
      :append-params="moreParams"
      :render-icon="renderIcon"
      api-url='/api/patients'
      track-by='patientId'
      @vuetable:cell-dblclicked="onCellDblClicked"
      @vuetable:pagination-data="onPaginationData"
    >
    </vuetable>
    <div>
      <vuetable-pagination-info ref="paginationInfo"
        :css="css.pagination"
        info-class="pull-left"
      ></vuetable-pagination-info>
      <vuetable-pagination ref="pagination"
        :css="css.pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import axios from 'axios'
import FieldDef from './field-def.js'
import BootstrapStyle from './bootstrap-css.js'
import CustomActions from './CustomActions'
import DetailRow from './DetailRow'
import FilterBar from '../Inputs/FilterBar'
import { formatDate, onNullValue } from '../../utils'

Vue.component('custom-actions-patient', CustomActions)
Vue.component('detail-row-patient', DetailRow)

export default {
  props: {
    type: {
      type: String, // striped | hover
      default: 'striped'
    }
  },
  components: {
    'filter-bar': FilterBar
  },
  data () {
    return {
      css: BootstrapStyle,
      fields: FieldDef,
      sortOrder: [
        {
          field: 'email',
          sortField: 'email',
          direction: 'asc'
        }
      ],
      moreParams: {}
    }
  },
  mounted () {
    this.$events.listen('filter-set-patient', filterText => this.onFilterSet(filterText))
  },
  methods: {
    renderIcon (classes, options) {
      return `<span class="${classes.join(' ')}"></span>`
    },
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === '1'
        ? '<span class="label label-warning"><i class="fa fa-mars"></i>男</span>'
        : '<span class="label label-info"><i class="fa fa-venus"></i>女</span>'
    },
    formatDate: formatDate,
    onNullValue: onNullValue,
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onCellDblClicked (data, field, event) {
      this.$refs.vuetable.toggleDetailRow(data.patientId)
    },
    onFilterSet (filterText) {
      this.moreParams = {
        'filter': filterText
      }
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    }
  }
}
</script>
<style>
.pagination {
  margin-top: 0;
}
.btn.btn-border {
  border: 1px solid;
  margin-right: 2px;
}
.vuetable-pagination-info {
  margin-top: 8px !important;
}
span.sort-icon {
  float: right;
  color: #ff9100;
}
.basic-table {
  padding: 0% 5% 5% 5%;
}
</style>
