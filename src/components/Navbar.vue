<template>
    <section class="columns">
        
        <b-tabs v-model="activeTab" size="is-large" class="column " multiline>
            <b-tab-item label="Home">
               <Home></Home>
            </b-tab-item>

            <b-tab-item label="Find places">
               <ChooseInterests></ChooseInterests>
            </b-tab-item>

             <b-tab-item label="Browse">
               <Browse></Browse>
            </b-tab-item>

            <b-tab-item label="About">
                <About></About>
            </b-tab-item>
            
        </b-tabs>

    </section>
</template>

<script>
import Home from './Home.vue'
import ChooseInterests from './ChooseInterests.vue'
import About from './About.vue'
import Browse from './Browse.vue'

    export default {
    name: 'Navbar',
        components: {
           Home,
           ChooseInterests,
           About,
           Browse
        },


        data() {
            return {
                activeTab: 0,
            }
        }
    }
</script>