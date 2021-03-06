<template>
  <div class="row">
  
  <!-- 科室索引 -->
  <div class="col-sm-3">
    <organization-tree eventSource="patient-table" :selectedOrg="selectedOrg"></organization-tree>
  </div>

  <!-- 患者列表 -->
  <div class="col-sm-9">
  <div class="basic-table card">
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
      api-url='/api/visits'
      track-by='patientId'
      @vuetable:cell-dblclicked="onCellDblClicked"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:loaded="onLoaded"
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
  </div><!-- col-sm-9 -->

  </div><!-- end of row -->
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import FieldDef from './field-def.js'
import BootstrapStyle from './bootstrap-css.js'
import CustomActions from './CustomActions'
import DetailRow from './DetailRow'
import FilterBar from '../Inputs/FilterBar'
import OrganizationTree from 'src/components/UIComponents/OrganizationTree/OrganizationTree.vue'
import { formatDate, onNullValue, getDisplay } from '../../utils'
import eventBus from 'src/eventBus'

Vue.component('detail-row-patient', DetailRow)
Vue.component('custom-actions-patient', CustomActions)

export default {
  components: {
    'filter-bar': FilterBar,
    'organization-tree': OrganizationTree
  },
  props: {
    type: {
      type: String, // striped | hover
      default: 'striped'
    }
  },
  data () {
    return {
      css: BootstrapStyle,
      fields: FieldDef,
      sortOrder: [
        {
          field: 'bedNumber',
          sortField: 'bedNumber',
          direction: 'asc'
        }
      ],
      moreParams: {},
      selectedOrg: null,
      currentOrgPatients: null
    }
  },
  mounted () {
    this.$events.listen('filter-set-patient', filterText => this.onFilterSet(filterText))
    eventBus.$on('patient-table-organization-selected', selectedOrg => {
      this.selectedOrg = selectedOrg
      this.moreParams = { org: selectedOrg.code, type: 'inpatient' }
      console.log('已选择科室：' + selectedOrg.code + ' ' + selectedOrg.name)
      Vue.nextTick(() => this.$refs.vuetable.refresh())
      // this.$refs.vuetable.refresh()
    })
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
      console.log(this.moreParams)
      this.moreParams = {
        org: this.selectedOrg.code,
        filter: filterText
      }
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    },
    onStatusUpdate (currentStatus) {
      if (!currentStatus || !currentStatus.display) {
        return '<i class="fa fa-spinner fa-spin"></i>获取状态中'
      } else {
        return currentStatus.display
      }
    },
    onLoaded () {
      let data = this.$refs.vuetable.tableData
      if (data && data.length > 0) {
        data.forEach(row => {
          axios.get('/api/visits', {
            params: {
              id: row.patientId,
              type: 'inpatient',
              range: 'latest'
            }
          })
          .then(function (response) {
            // Initialize currentStatus and add reactivity to display property
            row.currentStatus = {}
            Vue.set(row.currentStatus, 'display', '')

            let visits = response.data
            if (visits) {
              if (visits.length > 0) {
                row.currentStatus.value = visits[0].currentStatus
                getDisplay('patientCurrentStatus', row.currentStatus)
              } else {
                row.currentStatus = {
                  value: 0,
                  display: '未曾住院'
                }
              }
            } else {
              row.currentStatus = {
                value: -1,
                display: '状态未知'
              }
            }
          })
          .catch(function (error) {
            console.log(error)
            row.currentStatus = {
              value: -1,
              display: '状态未知'
            }
          })
        })
      }
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
