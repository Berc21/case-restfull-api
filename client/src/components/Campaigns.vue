<template>
<div   >
  <div v-for="campaign in campaigns" :key="campaign._id">
    <div class="card" style="max-width: 100%; margin-bottom: 20px;">
    <div class="card-body" style="padding:0;">
    <img class="card-img-top" :src="campaign.image" :alt="campaign.name" >
    <h5 class="card-title" style="position:absolute; top: 70%; left:30%; background:orangered;color:white;padding:1rem; border-radius: 1rem;">{{ campaign.title }}</h5>
     </div>
   </div>
   
    </div>
   
</div>

</template>

<script>
import Api from '@/config/Api'
export default {
    data() {
        return {
            campaigns: []
        }
    },
    created() {
    Api().get('/campaigns')
            .then(response => {
                this.campaigns = response.data;
                
            });
    }
}
</script>

<style scoped>
    
</style>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 