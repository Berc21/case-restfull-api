<template>
  <div class="container">
      <div class="row">
          <div class="col-md-8 mb-3"  >
            <div  v-for="shop in shops" :key="shop._id" >
                   <Card :shop="shop"  /> <br>
            </div>
           
        </div>

            <div class="col-md-4 mb-3">
             <Campaigns/>
              </div>
          </div>
      </div>
</template>

<script>
import Card from './Cardtop';
import Campaigns from './Campaigns';

export default {
    props: ['shops'],
    components: {
        Card,
        Campaigns
    }

}
</script>

<style scoped>

</style>
