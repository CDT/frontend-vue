import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import MedicalRecordQualityControl from 'src/components/Dashboard/Views/MedicalRecordQualityControl.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Patients from 'src/components/Dashboard/Views/Patients.vue'
import Employees from 'src/components/Dashboard/Views/Employees.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        component: Notifications
      },
      {
        path: 'mrqc',
        component: MedicalRecordQualityControl
      },
      {
        path: 'maps',
        component: Maps
      },
      {
        path: 'patientview',
        component: Patients
      },
      {
        path: 'table-list',
        component: Employees
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
