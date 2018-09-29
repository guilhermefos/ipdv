import Index from './screens/Index';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import ClassDetail from './screens/ClassDetail';

const routes = [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/home',
    component: Dashboard,
    exact: true
  },
  {
    path: '/curso-detail',
    component: ClassDetail,
    exact: true
  },
];

export default routes;
