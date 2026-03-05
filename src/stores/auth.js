import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth", {

  state: () => ({
    auth: false,
    username: "",
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state) => state.auth
  },

  actions: {

      async doLogin({ username, password }) {

  this.loading = true
  this.error = null

  try {

    if (!username || !password) {
      throw new Error("Debe ingresar usuario y contraseña")
    }

    // simulación de espera
    await new Promise(resolve => setTimeout(resolve, 600))

    // credenciales válidas
    if (username === "admin" && password === "1234") {

      this.auth = true
      this.username = username

    } else {

      throw new Error("Usuario o contraseña incorrectos")

    }

  } catch (err) {

    this.error = err.message

  } finally {

    this.loading = false
  }

},
 doLogout() {
      this.auth = false
      this.username = ""
    }
  }

})