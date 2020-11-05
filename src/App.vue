<template>
  <div id="app" class="pozadina ">
    <Navbar></Navbar>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.pozadina{
  padding-bottom: 20%;
   background-image: url('~@/assets/images/pozadina.jpg');
   background-size: cover;
   background-repeat: repeat;
   background-color: black;
}
</style>
