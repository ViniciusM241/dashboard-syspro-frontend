import loginRoutes from '~/views/Login/routes';
import homeRoutes from '~/views/Home/routes';
import logoutRoutes from '~/views/Logout/routes';
import adminRoutes from '~/views/Admin/routes';
import notificationRoutes from '~/views/Notifications/routes';
import postsRoutes from '~/views/Posts/routes';
import profileRoutes from '~/views/EditProfile/routes';
import supportRoutes from '~/views/Support/routes';

const routes = [
  ...loginRoutes,
  ...homeRoutes,
  ...logoutRoutes,
  ...adminRoutes,
  ...notificationRoutes,
  ...postsRoutes,
  ...profileRoutes,
  ...supportRoutes,
];

export default routes;
