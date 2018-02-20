// Routes
import Layout from '@/components/Layout'

import Homepage from '@/components/Homepage'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

import Dashboard from '@/components/Dashboard'
import ProfileUpdate from '@/components/ProfileUpdate'
import Members from '@/components/Members'
import App from '@/components/App'
import UpdateProfile from '@/components/auth/UpdateProfile'
import Firestore from '@/components/Firestore'
import NotFound from '@/components/errors/404'


import Vue from 'vue'

const routes = [{
    path: '/',
    component: Layout,
    children: [{
            path: '/',
            component: Homepage,
            name: 'Homepage'
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path: '/register',
            component: Register,
            name: 'register'
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                auth: true
            }
        },
        {
            path: '/profile/update',
            component: ProfileUpdate,
            name: 'Profile Update',
            meta: {
                auth: true
            }
        },
        {
            path: '/members',
            component: Members,
            name: 'members',
            meta: {
                auth: true
            }
        },
        {
            path: '/app',
            component: App,
            name: 'Realtime Database',
            meta: {
                auth: true
            }
        },
        {
            path: '/firestore',
            component: Firestore,
            name: 'Cloud Firestore',
            meta: {
                auth: true
            }
        },
        {
            path: '*',
            component: NotFound
        }
    ]
}]


export default routes;
