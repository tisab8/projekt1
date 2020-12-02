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
                <div class="media-content column is-two-quarters-desktop is-full-mobile">
                    <div class="content grey columns event">
                      <div class="column is-three-quarters-desktop is-full-mobile">
                        <h6 active class="is-size-3">{{event.name}}</h6>
                        <h6 active class="is-size-4 has-text-black">{{event.date}}</h6>
                        <p class="is-size-5 subtitle">
                            {{event.shortDescription}}
                        </p>
                      </div>
                         <b-button type="is-primary" class="column is-one-quarter-desktop is-full-mobile is-size-5" @click="modalW(event)">More</b-button>
                    </div>
                 
                </div>



                <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
                  <div class="card">
                    <template>
                      <section>
                        <b-tabs type="is-toggle" position="is-centered" class="block" size="is-large">
                            <b-tab-item :label="event.name">
                                 <div class="card-image">
                                    <figure class="image is-16by9">
                                        <img v-bind:src="pathM2" alt="Image">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content details mb-4">
                                            <p class="title is-2">{{eventM.name}}</p>
                                            <p class="title is-size-4 is-size-5-mobile">{{eventM.date}} {{eventM.time}}</p>
                                            <p class="title is-size-5-desktop is-size-6-mobile">{{eventM.city}}</p>
                                        </div>
                                    </div>
                                    <div class="content subtitle is-size-5-desktop is-size-6-mobile mb-6">
                                      <hr>
                                      {{eventM.description}}
                                    </div>
                                    <hr>
                                    <div class="columns">
                                      <b-button type="is-primary" class="column mt-4 is-one-third-desktop is-offset-one-third-desktop is-full-mobile is-size-5" @click="isCardModalActive = false">Close</b-button>
                                    </div>
                                </div>
                            </b-tab-item>

                            <b-tab-item :label="event.place">
                                <div class="card-content">
                                    <div class="media columns">
                                        <div class="media-content column">
                                            <figure class="image2">
                                                <img v-bind:src="pathM1" alt="Image" class="imageM">
                                                <hr>
                                              <div class="details mt-6">
                                                <p class="title is-size-1-desktop is-size-3-mobile mt-4">{{eventM.place}}</p>
                                               <p class="title is-size-4-desktop is-size-6-mobile">{{eventM.city}}</p>
                                              </div>
                                              <hr>
                                              <div class="mt-6">
                                                <p class="title is-size-4-desktop is-size-5-mobile mt-4">{{eventM.placeDescription}}</p>
                                              </div>
                                              <hr>
                                               <div class="column">
                                                  <div class="whiteStrap">
                                                      <a :href="pathFacebook"  target="_blank"> <img class="image3" src="@/assets/images/facebook.png"> </a>
                                                      <a :href="pathInstagram"  target="_blank"> <img class="image4 pb-2 ml-4" src="@/assets/images/instagram.png"></a>
                                                  </div>
                                              </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div class="columns">
                                      <b-button type="is-primary" class="column mt-4 is-one-third-desktop is-offset-one-third-desktop is-full-mobile is-size-5" @click="isCardModalActive = false">Close</b-button>
                                    </div>
                                </div>
                            </b-tab-item>
                        </b-tabs>
                      </section>
                    </template>
                  </div>
                  
                </b-modal>

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
            isCardModalActive: false,
            eventM: '',
            pathM:'',
            pathFacebook:'',
            pathInstagram:''
        }
    },

    methods: {
    imageShow: function(events) {
      return require('@/assets/images/' + events.image)
    },
    modalW: function(events) {
      this.isCardModalActive = true,
      this.eventM = events,
      this.pathM1 = require('@/assets/images/' + this.eventM.image),
      this.pathM2 = require('@/assets/images/' + this.eventM.banner),
      this.pathFacebook = this.eventM.pathFacebook,
      this.pathInstagram = this.eventM.pathInstagram
    },
    }
}

</script>
<style scoped>
.image3{
    width:70px;
}
.image4{
    width:55px;
}
.image2{
  width:80%;
  margin: auto;
}
.imageM{
border-radius: 30px;
border-color:  rgb(11, 84, 113, 0.5);
border-style: solid;
border-width: 4px;
}
.details{
  background-color: rgb(11, 84, 113, 0.5);
  padding: 2%;
  border-radius: 30px;
}
.event{
  background-color: rgb(237, 235, 230, 0.9);
  border-radius: 10px;
  border-style: none;
  width: 100%;
}
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