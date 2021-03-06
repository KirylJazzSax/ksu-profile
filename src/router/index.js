import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/works',
        name: 'Works',
        component: () => import('../views/Works.vue')
    },
    {
        path: '/ksu',
        name: 'Ksu',
        component: () => import('../views/Ksu.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/awards',
        name: 'Awards',
        component: () => import('../views/Awards.vue')
    },
    {
        path: '/immersive',
        name: 'Immersive',
        component: () => import('../views/Immersive.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
