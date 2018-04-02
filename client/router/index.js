import VueRouter from 'vue-router';
import Shops from '@/components/Shops';
import Shop from '@/components/Shop';
import Category from '@/components/Category';
const routes = [
    {
        path: '/',
        name:'home',
        component: Shops
    } ,
    {
        path: '/shop/:id',
        name: 'shop',
        component: Shop,
        props: true
    },
    {
        path: '/:category',
        name: 'category',
        component: Category,
        props: true
    }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
