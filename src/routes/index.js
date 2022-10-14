import { HeaderOnly } from '~/conponents/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: HeaderOnly },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
