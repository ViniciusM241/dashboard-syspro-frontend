import loginRoutes from '~/views/Login/routes';
import homeRoutes from '~/views/Home/routes';
import logoutRoutes from '~/views/Logout/routes';
import usersRoutes from '~/views/Users/routes';

const routes = [
  ...loginRoutes,
  ...homeRoutes,
  ...logoutRoutes,
  ...usersRoutes,
];

export default routes;
