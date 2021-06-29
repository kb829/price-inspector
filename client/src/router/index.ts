import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Profile from '@/pages/Profile.vue'
import Wishlist from '@/pages/Wishlist.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/Wishlist',
            name: 'Wishlist',
            component: Wishlist
        },
    ]
})

export default router;