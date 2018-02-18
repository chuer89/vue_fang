<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

img{
  vertical-align: top;
}
li{
  list-style: none;
}

input{
  outline:none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mint-header{
  background: #6e53fa;
}
</style>
