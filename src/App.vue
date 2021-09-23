<template>
  <div id="app">
    <mainPage />
  </div>
</template>

<script>
import mainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    mainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
