import { defineStore } from "pinia"
import api from "../api/api"

export const useFrameworksStore = defineStore("frameworks", {

  state: () => ({
    items: [],
    loading: false,
    error: null
  }),

  actions: {

    async cargar() {

      this.loading = true
      this.error = null

      try {

        const response = await api.get("/users")

        this.items = response.data

      } catch (error) {

        this.error = "No se pudieron cargar los datos"

      } finally {

        this.loading = false
      }

    }

  }

})