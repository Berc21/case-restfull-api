<template>
  <div class="card" style="width: 100%; height:100%;">
    <div class="card-body" style="padding:0">
        <router-link tag="a" :to="{name: 'shop', params: {id: shop._id}}">
            <img style="width: 100%;height: 10vw; object-fit: cover; margin-bottom: 20px;" :src="shop.image" :alt="shop.name" >
        </router-link>
        <h5 class="card-title" style="color:orangered;margin-left:1rem"> {{ shop.name }}</h5>
        <div style="margin-bottom: 20px;">
        <span class="font-weight-bold" style="position: absolute; top: 10px;color: #fff; right: 10px;background: orangered; padding: 0.5rem; border-radius: 2rem;"> {{ shop.category }}  </span>
        <span class="card-text" style="margin-left:1rem">{{ shop.description.substring(0, 50) }}</span>
        <Countdown style="position: absolute; bottom: 10px; right: 20px;" :end="shop.date"></Countdown>
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
