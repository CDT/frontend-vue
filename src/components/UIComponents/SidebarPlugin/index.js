import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: '仪表盘',
      icon: 'ti-panel',
      path: '/admin/overview'
    },
    {
      name: '人员列表',
      icon: 'ti-user',
      path: '/admin/table-list'
    },
    {
      name: '患者信息',
      icon: 'ti-wheelchair',
      path: '/admin/patientview'
    },
    {
      name: '病历质控',
      icon: 'ti-book',
      path: '/admin/mrqc'
    },
    // {
    //   name: 'Maps',
    //   icon: 'ti-map',
    //   path: '/admin/maps'
    // },
    // {
    //   name: 'Notifications',
    //   icon: 'ti-bell',
    //   path: '/admin/notifications'
    // },
    {
      name: '用户资料',
      icon: 'ti-user',
      path: '/admin/stats'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
