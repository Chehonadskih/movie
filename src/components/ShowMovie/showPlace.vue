<template>
    <modal @close="$emit('close')">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ряд</th>
                    <th scope="col">место</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in placeData.place" :key="index">
                    <td>{{ item[0].row }}</td>
                    <td style="display: flex; flex-wrap: wrap;">
                        <div v-for="(place,i) in item[1]" 
                            :key="i" 
                            class="place-container-div"
                            @click="toBook(item[0].row, place.seat)"
                        >
                            <div :style="place.is_free ? {'background': 'green'} : { 'background': 'red' }">
                                {{ place.seat }}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
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
    props: ['placeData'],
    methods: {
        toBook(row, place) {
            const obj = {
                'movie_id': this.placeData.id,
                'row': row,
                'seat': place,
                'showdate': this.placeData.date,
                'daytime': this.placeData.time
            }
            movieList.toBook(obj).then(resp => {
                console.log('resp', resp)
                this.$emit('showTicket', resp.data.data);
            })
            .catch(err => console.error(err));


        }
    }
}
</script>

<style scoped>
    .place-container-div {
        padding: 5px; 
        cursor: pointer; 
        width: 50px; 
        text-align: center;
        transition: 0.5s;
    }
    .place-container-div:hover {
        background: red;
    }
</style>
