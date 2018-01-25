<template lang="pug">
  div#app
    router-link(to="/Counter") Go to Counter
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* a {
  border: 1px solid black;
  background-color: rgb(46, 39, 39);
  color: white;
  text-decoration: none;
} */
</style>
