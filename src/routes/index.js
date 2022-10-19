import { HeaderOnly } from '~/conponents/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import routesConfig from '~/config/routes';
//public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
