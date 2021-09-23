<template>
    <modal @close="$emit('close')">
        <div class="row">
            <div class="movie-img col-md-6">
                <img :src="itemData.image" :alt="itemData.name">
            </div>
            <div class="col-md-6">
                {{ itemData.description }}
            </div>
        </div>
        <template v-slot:button>
            <button class="btn btn-info" style="width: 100%" @click="getMoviesSessions">Время сеансов</button>
        </template>
    </modal>
</template>

<script>
import modal from '../modals/modal.vue';
import { getAPI } from '@/API.js';
const movieList = new getAPI();
export default {
    components: {
        modal
    },
    props: ['itemData'],
    methods: {
        getMoviesSessions() {
            movieList.getMoviesSessions(this.itemData.id).then(request => {
                this.$emit('selectSsession', { data: request.data.data[this.itemData.id], id: this.itemData.id })
            })
            .catch(err => console.error(err))
        }
    }
}
</script>

<style scoped>
    .movie-img {
        display: flex;
        justify-content: start;
    }
    .movie-img > img {
        height:50vh;
        width: auto;
    }
</style>