import { Dashboard, HelpPage, History, PostSingle, About, Profile, SettingPage, AdminDashboard } from "views/pages"
import userSingle from "views/pages/userSingle"


const PrivateRoutes = [

  { path: '/app/admindashboard', name: 'AdminDashboard', component: AdminDashboard },

  { path: '/app/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/app/users-single/:id', name: 'userSingle', component: userSingle },
  { path: '/app/post-single/:id', name: 'postSingle', component: PostSingle },


  { path: '/app/history', name: 'Dashboard', component: History },
  { path: '/app/profile', name: 'Dashboard', component: Profile },

  { path: '/app/setting', name: 'Dashboard', component: SettingPage },
  { path: '/app/about', name: 'Dashboard', component: About },
  { path: '/app/help', name: 'Dashboard', component: HelpPage },
]
export default PrivateRoutes
