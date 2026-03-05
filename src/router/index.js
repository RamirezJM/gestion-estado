import { createRouter, createWebHistory } from "vue-router"
import AppLogin from "../views/AppLogin.vue"
import UserDashboard from "../views/UserDashboard.vue"
import { useAuthStore } from "../stores/auth"

const routes = [

  {
    path: "/login",
    component: AppLogin
  },

  {
    path: "/dashboard",
    component: UserDashboard,
    meta: { requiresAuth: true }
  },

  {
    path: "/",
    redirect: "/login"
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {

  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return "/login"
  }

})

export default router