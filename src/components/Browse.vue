<template>
    <div class="hero is-fullheight"> 
        
        <div class="columns is-multiline field has-addons">
            <div class="column is-one-third is-offset-7">
                <div class="container mr-6 ml-6">
                    <div class="columns">
                        <div class="control column is-four-fifths">
                            <input class="input" type="text" placeholder="Find an event">
                        </div>
                        <div class="control column">
                            <a class="button is-primary search">
                                Search
                            </a>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        <section class="mt-6">
            <article class="media wid mb-6" v-for="i in media" :key="i">
                <figure class="media-left mr-5 al column is-one-quarter">
                    <p class="image is-128x128 has-text-black mb-2 al2">
                        <img v-if="i==1" class="image is-rounded" src="~@/assets/images/club.jpg">
                        <img v-else-if="i==2" class="image is-rounded" src="~@/assets/images/restoran.jpg">
                        <img v-else-if="i==3" class="image is-rounded" src="~@/assets/images/coffee.jpg">
                        <img v-else-if="i==4" class="image is-rounded" src="~@/assets/images/pub.jpg">
                    </p>
                    <h6 v-if="i==1" :key="i" active class="is-size-4 has-text-black">{{name1}}</h6>
                    <h6 v-else-if="i==2" active class="is-size-4 has-text-black">{{name2}}</h6>
                    <h6 v-else-if="i==3" active class="is-size-4 has-text-black">{{name3}}</h6>
                    <h6 v-else-if="i==4" active class="is-size-4 has-text-black">{{name4}}</h6>
                </figure>
                <div class="media-content column">
                    <div class="content grey">
                        <h6 v-if="i==1" active class="is-size-3">{{event1}}</h6>
                        <h6 v-else-if="i==2" active class="is-size-3">{{event2}}</h6>
                        <h6 v-else-if="i==3" active class="is-size-3">{{event3}}</h6>
                        <h6 v-else-if="i==4" active class="is-size-3">{{event4}}</h6>
                        <p v-if="i==1" class="is-size-5">
                            {{description1}}
                        </p>
                        <p v-else-if="i==2" class="is-size-5">
                            {{description2}}
                        </p>
                        <p v-else-if="i==3" class="is-size-5">
                            {{description3}}
                        </p>
                        <p v-else-if="i==4" class="is-size-5">
                            {{description4}}
                        </p>
                    </div>
                
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            media: 4,
            name1: 'Club',
            name2: 'Restaurant',
            name3: 'Coffee shop',
            name4: 'Pub',
            event1: 'Queen tribute',
            event2: 'Italian night',
            event3: 'Fresh coffee',
            event4: 'Pub quiz',
            description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a maximus urna. Nunc hendrerit aliquam laoreet. Proin egestas dolor a libero lacinia viverra. Maecenas augue ante, interdum convallis vestibulum at, hendrerit id ante. Sed vel suscipit nibh.',
            description2: 'Nunc mollis porta justo, ac dictum arcu sodales ac. Cras id pulvinar dui, id congue nisl. Sed suscipit rutrum quam a tincidunt. Nam eu nulla rhoncus, egestas nibh ac, lacinia eros. Etiam accumsan metus non risus rutrum pretium. Fusce tempor erat sem, at vestibulum elit condimentum id. Curabitur ac turpis sem. Morbi ut gravida justo.',
            description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a maximus urna. Nunc hendrerit aliquam laoreet. Proin egestas dolor a libero lacinia viverra. Maecenas augue ante, interdum convallis vestibulum at, hendrerit id ante. Sed vel suscipit nibh.',
            description4: 'Nunc mollis porta justo, ac dictum arcu sodales ac. Cras id pulvinar dui, id congue nisl. Sed suscipit rutrum quam a tincidunt. Nam eu nulla rhoncus, egestas nibh ac, lacinia eros. Etiam accumsan metus non risus rutrum pretium. Fusce tempor erat sem, at vestibulum elit condimentum id. Curabitur ac turpis sem. Morbi ut gravida justo.',
        }
    }
}
</script>
<style scoped>
.wid{
  max-width: 90%;
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
  padding: 5%;
  width:100%;
  margin: auto;
  text-align: left;
}
.search{
    width: 100%;
}

</style>