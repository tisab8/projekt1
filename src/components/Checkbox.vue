<template>
    <div class=" interests container mt-6">
        <div class="columns is-vcentered is-multiline">
            <div class="column c1 is-full mb-3">
                <p class="columns  is-centered is-full is-size-2-desktop is-size-3-mobile is-size-3-tablet has-text-black-ter pb-2">What are you interested in?</p>
            </div>
            <div class="column c2">
                    <div class="field is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-black-ter columns ">
                       <b-radio v-model="radio" name="name" native-value="clubbing" class="column is-three-quarters-mobile">Clubbing</b-radio>
                    </div>
                    <div class="field is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-black-ter columns ">
                        <b-radio v-model="radio" name="name" native-value="lunch" class="column is-three-quarters-mobile">Lunch/Dinner</b-radio>
                    </div>
                    <div class="field is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-black-ter columns ">
                        <b-radio v-model="radio" name="name" native-value="coffee" class="column is-three-quarters-mobile">Coffee</b-radio>
                    </div>
                    <div class="field is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-black-ter columns">
                       <b-radio v-model="radio" name="name" native-value="pubQuiz" class="column is-three-quarters-mobile">Pub quizzes</b-radio>
                    </div>
                    <div class="field is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-black-ter columns ">
                        <b-radio v-model="radio" name="name" native-value="concerts" class="column is-three-quarters-mobile">Concerts</b-radio>
                    </div>
                    <div class="field is-size-3-desktop is-size-3-tablet is-size-4-mobile has-text-black-ter columns ">
                        <b-radio v-model="radio" name="name" native-value="performances" class="column is-three-quarters-mobile">Performances</b-radio>
                    </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
       data: function() {
            return {
                radio: ''
            };
        },
       watch: {
             radio: function() {
            this.$emit("child-radio", this.radio);
        }   
  }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.interests{
    padding: 5%;
}
.c1{
  background-color: rgb(166, 219, 242, 0.9);
  border-radius: 15px;
  padding:5%;
}
.c2{
  background-color: rgb(166, 219, 242, 0.8);
  border-radius: 15px;
   padding:5%;
}
html, 
body {
    overflow-x: hidden;
}


</style>
