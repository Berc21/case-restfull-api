<template>
<div>
    <Cardstop :shops="shops" />
    <Cards :shops="shops" />
</div>

</template>

<script>
import Cards from './Cards';
import Cardstop from './Cardstop';
import Api from '@/config/Api'
export default {
    props: ['category'],
    data() {
        return {
            shops: []
        }
    },
    components: {
        Cards,
        Cardstop
    },
    created() {
        this.fetch();
    },
    watch: {
        '$route' (to, from) {
            if(from.params.category !== to.params.category){
                this.fetch()
            }
        }
    },
    methods: {
        fetch() {
             Api().get(`/categories/${this.category}`)
            .then(response => {
                 this.shops = response.data
            });
        }
    }
}
</script>

<style scoped>
    
</style>