
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      
      { path: '', component: () => import('pages/Index.vue'),
    meta : {
      title : 'Inicio'
    } },

      { path: '/registrar', component: () => import('pages/Registrar.vue'),
    meta : {
      title : 'Registrar'
    } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

