import { Balance, Dashboard, HelpPage, History, PrivacyPage, SettingPage } from "views/pages"
import userSingle from "views/pages/userSingle"


const PrivateRoutes = [
  { path: '/app/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/app/users-single/:id', name: 'userSingle', component: userSingle },

  { path: '/app/history', name: 'Dashboard', component: History },
  { path: '/app/balance', name: 'Dashboard', component: Balance },

  { path: '/app/setting', name: 'Dashboard', component:SettingPage  },
  { path: '/app/privacy', name: 'Dashboard', component:  PrivacyPage},
  { path: '/app/help', name: 'Dashboard', component: HelpPage },
]
export default PrivateRoutes
