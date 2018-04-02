<template>
  <div class="container">
      <div class="row">
          <div  class="col-md-4 mb-3" v-for="shop in shops" :key="shop._id" >
             
                       <Card :shop="shop" />
           
         </div>
      </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
    props: ['shops'],
    components: {
        Card
    }

}
</script>

<style scoped>

</style>
