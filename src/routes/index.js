import loginRoutes from '~/views/Login/routes';
import homeRoutes from '~/views/Home/routes';
import logoutRoutes from '~/views/Logout/routes';
import adminRoutes from '~/views/Admin/routes';
import notificationRoutes from '~/views/Notifications/routes';

const routes = [
  ...loginRoutes,
  ...homeRoutes,
  ...logoutRoutes,
  ...adminRoutes,
  ...notificationRoutes,
];

export default routes;
