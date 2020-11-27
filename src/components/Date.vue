<template>
    <div class=" interests container mt-3">
        <div class="columns is-vcentered is-multiline">
            <div class="column c1 is-full mb-3">
                <p class="columns  is-centered is-full is-size-2-desktop is-size-3-mobile is-size-3-tablet has-text-black-ter pb-2">Select a date: </p>
            </div>
            <div class="column c2">
                <b-field class="container">
                    <div class="columns">
                        <b-datepicker class="column is-one-third is-offset-4" v-model="dateValue"
                            placeholder="Click to select..."
                            :min-date="minDate"
                            :max-date="maxDate">
                        </b-datepicker>
                    </div>
                </b-field>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const today = new Date()

            return {
                date: new Date(),
                dateValue:'',
                minDate: new Date(today.getFullYear() , today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() + 18, today.getMonth(), today.getDate())
            }
        },
        watch: {
             dateValue: function() {
            this.$emit("child-dateValue", this.dateValue);
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


</style>
