<template>
<div>

     <b-navbar spaced>
        <template slot="start">
            <b-navbar-item class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/">Home</router-link>
                        <router-view />
            </b-navbar-item>
            <b-navbar-item class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/ChooseInterests">Find events</router-link>
                        <router-view />
            </b-navbar-item>
             <b-navbar-item active class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/Browse"><a v-on:click="eventsShowKey = 'all'" :class="{ active: eventsShowKey == 'all' }">Browse</a></router-link>
                        <router-view />
            </b-navbar-item>
            <b-navbar-item class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/About">About</router-link>
                        <router-view />
            </b-navbar-item>
        </template>
    </b-navbar>

    <div class="hero is-fullheight pt-6"> 
        
        <div class="columns is-multiline field has-addons">
            <div class="column is-one-third is-offset-7">
                <div class="container mr-6 ml-6">
                    <div class="columns">
                        <div class="control column is-four-fifths">
                            <input class="input" type="text" placeholder="Find an event" v-model="searchValue">
                        
                       
                        </div>
                        <div class="control column">
                                <button v-on:click="eventsShowKey = 'searched'" :class="{ active: eventsShowKey == 'searched' }" class="button is-primary search">Search by event name</button>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        <section class="mt-6">
            <article class="media wid mb-6 columns is-multiline" v-for="event in eventsShow" :key="event.id">
                <figure class="media-left mr-5 al column is-one-quarter-desktop is-full-mobile">
                    <img :src='imageShow(event)' class="image is-128x128 has-text-black mb-2 al2">
                    <h6 active class="is-size-4 has-text-black">{{event.place}}</h6>
                    <h6 active class="is-size-4 has-text-black">{{event.city}}</h6>
                </figure>
                <div class="media-content column">
                    <div class="content grey">
                        <h6 active class="is-size-3">{{event.name}}</h6>
                        <h6 active class="is-size-4 has-text-black">{{event.date.substring(0,15)}}</h6>
                        <p class="is-size-5">
                            {{event.description}}
                        </p>
                    </div>
                
                </div>
            </article>
        </section>
    <div class="columns is-multiline" v-if="eventsShow.length === 0">
    <div class="column is-two-thirds is-offset-2">
        <div class="blueStrap">
            <h1 class="title is-size-1-desktop is-size-1-tablet is-size-3-mobile has-text-white">No events currently match your search. </h1>
        </div>
    </div>
    </div>

    </div>
</div>
</template>

<script>
import eventsData from "@/assets/events.json";

export default {
    

  computed: {
    eventsShow() {
      return this[this.eventsShowKey]
    },
    all() {
      return this.events.filter(events=>events.show)
    },
    searched() {
     if(this.searchValue){
      return this.events.filter((events)=>{
        return this.searchValue.toLowerCase().split(' ').every(v => events.name.toLowerCase().includes(v))
      })
      }else{
       return this.events.filter(events=>events.show)
      }
    }   
    },
     

    data() {
        return {
            events: eventsData,
            searchValue: "",
            eventsShowKey: 'all',
        }
    },

    methods: {
    imageShow: function(events) {
      return require('@/assets/images/' + events.image)
    },
    }
}

</script>
<style scoped>
.wid{
  max-width: 95%;
  margin: auto;
}
.al{
  background-color: rgb(237, 235, 230, 0.9);
  border-radius: 10px;
  padding: 1%;
  margin: auto;
  text-align: center;
}
.al2{
  background-color: rgb(237, 235, 230, 0.9);
  border-radius: 10px;
  padding: 1%;
  margin: auto;
  text-align: center;
}
.grey{
  background-color: rgb(237, 235, 230, 0.9);
  border-radius: 10px;
  padding: 3%;
  width:100%;
  margin: auto;
  text-align: left;
}
.search{
    width: 100%;
}
.blueStrap{
  background-color: rgb(11, 84, 113, 0.8);
  padding: 5%;
  border-radius: 30px;
  text-align: center;
}
html, 
body {
    overflow-x: hidden;
}

</style>