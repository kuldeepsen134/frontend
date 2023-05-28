import { Dashboard, HelpPage, History, PrivacyPage, SettingPage } from "views/pages"


const PrivateRoutes = [
  { path: '/app/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/app/history', name: 'Dashboard', component: History },
  { path: '/app/setting', name: 'Dashboard', component: PrivacyPage },
  { path: '/app/privacy', name: 'Dashboard', component: SettingPage },
  { path: '/app/help', name: 'Dashboard', component: HelpPage },
]
export default PrivateRoutes
