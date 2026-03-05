<script setup>

import { onMounted } from "vue"
import { useAuthStore } from "../stores/auth"
import { useFrameworksStore } from "../stores/frameworks"
import { useRouter } from "vue-router"

const auth = useAuthStore()
const frameworks = useFrameworksStore()
const router = useRouter()

onMounted(() => {
  frameworks.cargar()
})

const logout = () => {

  auth.doLogout()
  router.push("/login")

}

</script>

<template>

<h2>Hola, {{ auth.username }}</h2>

<button @click="logout">Salir</button>

<p v-if="frameworks.loading">
  Cargando datos...
</p>

<p v-if="frameworks.error">
  {{ frameworks.error }}
</p>

<ul v-if="frameworks.items.length">

<li v-for="item in frameworks.items" :key="item.id">
  {{ item.name }}
</li>

</ul>

</template>

<style>
button{
  display: block;
  margin: 0 auto;
 }

 ul{
  text-align: center;
  margin-block: 1em;
 }
</style>

