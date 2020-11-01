<template>
    <b-navbar class="is-size-2 nav" transparent >
       
        <template slot="start">
            <b-navbar-item href="#" class="pr-5">
                Home
            </b-navbar-item>
            <b-navbar-item href="#" class="pl-5">
                Browse
            </b-navbar-item>
            <b-navbar-dropdown hoverable label="Info" class="pl-6 pr-4">
                <b-navbar-item href="#" class="is-size-3">
                    About
                </b-navbar-item>
                <b-navbar-item href="#"  class="is-size-3">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="field has-addons pt-3 columns pl-6 pr-6"> 
                    <div class="control is-size-1 column is-three-quarters-desktop is-two-thirds-mobile is-two-thirds-tablet">
                        <input class="input is-size-5 is-one-quarter-desktop" type="text" placeholder="Find a place">
                    </div>
                    <div class="control column">
                        <a class="button is-primary is-size-5">
                        Search
                        </a>
                    </div>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>



<style scoped>
.nav{
     
     margin-bottom:10%;
     padding: 2%;
     background-color: rgb(237, 239, 240, 0.9);
     
}
</style>