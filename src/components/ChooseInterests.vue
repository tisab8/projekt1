<template>
<div>
      <div class="columns">
        <div class="column is-full">
          <Checkbox></Checkbox>
        </div>  
      </div>

      <div class="columns">
         <div class="column is-full">
          <Date></Date>
        </div>
      </div>

      <div class="columns">
         <div class="column is-full">
          <City></City>
        </div>
      </div>
      <div class="columns">
        <div class="buttons column interests is-full">
          <b-button type="is-primary" class="is-size-4-tablet ">Find places</b-button>
        </div>
      </div>
</div>

</template>

<script>
import Checkbox from './Checkbox.vue'
import Date from './Date.vue'
import City from './City.vue'


export default {

  name: 'ChooseInterests',
    components: {
      Checkbox,
      Date,
      City
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
