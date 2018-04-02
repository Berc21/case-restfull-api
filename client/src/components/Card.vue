<template>
  <div class="card" >
    <div class="card-body"  style="padding:0" >
        <router-link tag="a" :to="{name: 'shop', params: {id: shop._id}}">
            <img class="card-img-top" :src="shop.image" :alt="shop.name" >
        </router-link>
        <div style="padding:2rem; margin-bottom: 4rem;" >
        <h5 class="card-title" style="color:orangered;">{{ shop.name }}</h5>
        <span class="font-weight-bold" style="position: absolute; bottom: 20px; right: 30px;background: orangered;color: #fff; padding: 0.5rem; border-radius: 2rem;" > {{ shop.category }} </span>
        <span class="card-text">{{ shop.description.substring(0, 50) }}</span>
        <Countdown style="position: absolute; bottom: 10px; left: 30px"  :end="shop.date"></Countdown>
          </div>
    </div>
</div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
    props: ['shop'],
    components: { Countdown }
}
</script>

<style scoped>
.card-title {
        cursor: pointer;
    }
</style>
