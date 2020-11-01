<template>
  <div id="app" class="pozadina ">
    <Navbar></Navbar>
    
      <div class="container">
        <div class="wid">

        <div class="columns is-multiline">
          <div class="column  is-two-thirds">
            <div class="blueStrap">
              <h1 class="title is-size-1-desktop is-size-1-tablet is-size-2-mobile has-text-white">Choose what you're interested in and find the ideal place for you.</h1>
            </div>
          </div>
          <div class="column is-two-thirds is-offset-4 mb-5">
            <div class="whiteStrap">
              <h2 class="subtitle is-size-2-desktop is-size-3-tablet is-size-4-mobile ">Whether you're just hanging out with friends, going on a date or longing for a crazy night out.</h2>
            </div>
          </div>
        </div>
    
      <div class="columns">
        <div class="column is-full interests">
          <ChooseInterests></ChooseInterests>
        </div>
      </div>

      
      <div class="columns ">
        <div class="buttons column is-offset-9-desktop is-offset-8-tablet is-offset-6-mobile interests">
          <b-button type="is-primary" class="is-size-4-tablet ">Find places</b-button>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import ChooseInterests from './components/ChooseInterests.vue'
import Navbar from './components/Navbar.vue'

export default {
name: 'App',
  components: {
    ChooseInterests,
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


.blueStrap{
  background-color: rgb(11, 84, 113, 0.8);
  padding: 5%;
  border-radius: 30px;
 
}
.whiteStrap{
  background-color: rgb(237, 239, 240, 0.7);
  padding: 5%;
  border-radius: 30px;
}
h1,h2{
  text-align: left;
  
}
.interests{
margin: auto;
}

.wid{
  max-width: 75%;
  margin: auto;
}
</style>
