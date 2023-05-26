import { RecoverPassword, SignIn, SignUp, UpdatePassword } from "views/pages/auth"

const PublicRoutes = [
  { path: '/login', exact: true, name: 'Login', component: SignIn },
  { path: '/account-recovery/initiate', name: 'Forgot', exact: true, component: RecoverPassword },
  { path: '/account-recovery/submit', name: 'Reset', exact: true, component: UpdatePassword },
  { path: '/register', name: 'SignUp', exact: true, component: SignUp },
]
export default PublicRoutes
