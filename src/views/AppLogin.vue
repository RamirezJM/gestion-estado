<script setup>

import { ref } from "vue"
import { useAuthStore } from "../stores/auth"
import { useRouter } from "vue-router"

const username = ref("")
const password = ref("")

const auth = useAuthStore()
const router = useRouter()

const login = async () => {

  await auth.doLogin({
    username: username.value,
    password: password.value
  })

  if (auth.isAuthenticated) {
    router.push("/dashboard")
  }

}

</script>

<template>

<h2>Login</h2>

<form @submit.prevent="login">

<input v-model="username" placeholder="Usuario">
<input v-model="password" type="password" placeholder="Password">

<button type="submit">Entrar</button>

</form>

<p v-if="auth.loading">Ingresando...</p>

<p v-if="auth.error" class="error">
  {{ auth.error }}
</p>

</template>

<style>
h2{
  margin: 1em auto;
  text-align: center;
}

form{
  max-width: 500px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border: solid 2px #323232;
  border-radius: 5px;
  margin: 0 auto;
}

input{
  width: 80%;
  margin-block: 1em;
  padding: 0.3em;
  border-radius: 5px;
}

button{
  width: fit-content;
  padding: 0.5em 1em;
  background-color: rgb(198, 176, 219);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover{
  transform: scale(1.1);
}
button:active{
  background-color: rgb(132, 70, 190);
}

p{
  text-align: center;
  margin-block: 1em;
}
.error{
  color: crimson;
}
</style>

