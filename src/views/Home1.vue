<template>
<div>
    <b-navbar spaced>
        <template slot="start">
            <b-navbar-item active class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/">Home</router-link>
                        <router-view />
            </b-navbar-item>
            <b-navbar-item class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/ChooseInterests">Find events</router-link>
                        <router-view />
            </b-navbar-item>
             <b-navbar-item class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/Browse">Browse</router-link>
                        <router-view />
            </b-navbar-item>
            <b-navbar-item class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/About">About</router-link>
                        <router-view />
            </b-navbar-item>
        </template>
    </b-navbar>

    <div class="hero is-fullheight">
        <div class="hero-body wid">
            <div class="columns is-multiline">
                <div class="column is-two-thirds is-offset-2">
                    <div class="blueStrap">
                        <h1 class="title is-size-1-desktop is-size-1-tablet is-size-3-mobile has-text-white">Welcome! Choose what you're interested in and find the ideal place for you.</h1>
                    </div>
                </div>
                <div class="column is-two-thirds is-offset-2 mb-5">
                    <div class="whiteStrap">
                        <h2 class="subtitle is-size-2-desktop is-size-3-tablet is-size-4-mobile ">Whether you're just hanging out with friends, going on a date or longing for a crazy night out.</h2>
                    </div>
                </div>
                <div class="column is-one-third is-offset-4">
                    <div class="blueStrap1">
                         <router-link to="/ChooseInterests"><h1 class="title is-size-1-desktop is-size-1-tablet is-size-2-mobile has-text-white">Get Started</h1></router-link>
                        <router-view />
                    </div>
                </div>
                 <div class="column is-one-third is-offset-4">
                    <div class="whiteStrap">
                        <router-link to="/Browse"><a v-on:click="eventsShowKey = 'all'" :class="{ active: eventsShowKey == 'all' }"><h1 class="title is-size-1-desktop is-size-1-tablet is-size-2-mobile subtitle">Browse events</h1></a></router-link>
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>

    export default {
    name: 'Home1',
        components: {
           
        },


        data() {
            return {
                activeTab: 0,
            }
        }
    }
</script>

<style scoped>
.blueStrap{
  background-color: rgb(11, 84, 113, 0.8);
  padding: 5%;
  border-radius: 30px;
  text-align: left;
}
.blueStrap1{
  background-color: rgb(11, 84, 113, 0.8);
  padding: 5%;
  border-radius: 30px;
  text-align: center;
}
.whiteStrap{
  background-color: rgb(237, 239, 240, 0.7);
  padding: 5%;
  border-radius: 30px;
  text-align: center;
}

.wid{
  max-width: 98%;
  margin: auto;
}
</style>