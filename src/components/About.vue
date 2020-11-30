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
             <b-navbar-item class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/Browse">Browse</router-link>
                        <router-view />
            </b-navbar-item>
            <b-navbar-item active class="is-size-3-desktop is-size-5-mobile">
                 <router-link to="/About">About</router-link>
                        <router-view />
            </b-navbar-item>
        </template>
    </b-navbar>

    <div class="hero is-fullheight">
        <div class="hero-body ">
            <div class="columns is-multiline">
                <div class="column is-full">
                    <div class="blueStrap">
                        <h1 class="subtitle is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-white">Here you can find all current events and places based on your location, interests and date. </h1>
                    </div>
                </div>
                <div class="column is-full mb-5">
                    <div class="whiteStrap">
                        <h2 class="subtitle is-size-2-desktop is-size-3-tablet is-size-4-mobile ">The goal is to save the time you would spend searching for fun ideas to go out all over social media and have one place where you can find all events, restaurants and clubs.</h2>
                    </div>
                </div>
                <div class="column is-full">
                    <div class="blueStrap">
                        <h1 class="subtitle is-size-1-desktop is-size-1-tablet is-size-2-mobile has-text-white">Hope you will find the place for you and have fun! </h1>
                    </div>
                </div>
                <div class="column">
                    <div class="whiteStrap2">
                        <a href="https://www.facebook.com/"  target="_blank"> <img class="image1" src="@/assets/images/facebook.png"> </a>
                         <a href="https://www.instagram.com/?hl=hr"  target="_blank"> <img class="image2 pb-2 ml-4" src="@/assets/images/instagram.png"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>   
</template>

<style scoped>
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
  text-align: center; 
}
.image1{
    width:70px;
}
.image2{
    width:55px;
}
html, 
body {
    overflow-x: hidden;
}
</style>