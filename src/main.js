import Vue from 'vue'
import VueRouter from 'vue-router'

// Plugins
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/material.css'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import VueEvents from 'vue-events'
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/paper-dashboard.scss'
import 'es6-promise/auto'

Vue.component('vuetable', Vuetable)
Vue.component('vuetable-pagination', VuetablePagination)
Vue.component('vuetable-pagination-info', VuetablePaginationInfo)

// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(SideBar)
Vue.use(Vuetable)
Vue.use(VuetablePagination)
Vue.use(VuetablePaginationInfo)
Vue.use(VueTabs)
Vue.use(VueEvents)

// configure router
const router = new VueRouter({
  routes, // shorthand for routes: routes
  linkActiveClass: 'active'
})

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
