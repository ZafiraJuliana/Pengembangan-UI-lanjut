import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/App.vue' // Pastikan huruf besar/kecil foldernya sesuai

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { breadcrumb: 'Home' },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: { breadcrumb: 'About' },
      },
      {
        path: 'browse',
        name: 'browse',
        component: () => import('@/views/Browse.vue'),
        meta: { breadcrumb: 'Browse' },
        redirect: '/browse/events',
        children: [
          {
            path: 'events',
            name: 'events',
            component: () => import('@/views/EventList.vue'),
            meta: { breadcrumb: 'Event List' },
          },
          {
            path: 'events/:id',
            name: 'event-detail',
            component: () => import('@/views/EventDetail.vue'),
            meta: { breadcrumb: 'Event Detail' },
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/Category.vue'),
            meta: { breadcrumb: 'Category' },
          },
        ],
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
        meta: { breadcrumb: 'Contact' },
      },
    ],
  },
  // --- RUTE DASHBOARD (Rail & Pane System) ---
  {
    path: '/dashboard',
    component: () => import('@/layouts/DashboardLayout.vue'), // Sesuaikan path jika foldernya berbeda
    children: [
      {
        path: '',
        name: 'dashboard-overview',
        component: () => import('@/views/Dashboard.vue'), // Sesuaikan dengan nama file komponen overview Anda
        meta: { breadcrumb: 'Dashboard Overview' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
