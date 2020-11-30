<template>
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
            </div>
        </div>
    </div>
</template>

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
  text-align: left;
}

.wid{
  max-width: 98%;
  margin: auto;
}
html, 
body {
    overflow-x: hidden;
}
</style>