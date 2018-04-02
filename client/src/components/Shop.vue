<template>
  <div class="container">
        <center> 
        <img :src="shop.image" :alt="shop.name" class="img-fluid">
        <h5>{{ shop.name }}</h5>
        <span class="font-weight-bold">{{ shop.category }} </span>
        <span>
          |  {{ shop.description }}
        </span> 
    </center>

  </div>
</template>

<script>
import Api from '@/config/Api'

export default {
  props: ['id'],
  data(){
    return {
      shop: {}
    }
  },
  created() {
       Api().get(`/shops/${this.id}`)
              .then(response => {
                this.shop = response.data
              });
  }
}
</script>

<style>

</style>
