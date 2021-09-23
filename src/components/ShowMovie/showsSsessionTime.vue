<template>
    <modal @close="$emit('close')">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">дата</th>
                    <th scope="col">время</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in selectSsessionTime.data" :key="index">
                    <td>{{ item.showdate }}</td>
                    <td>
                        <span v-for="(time, i) in item.daytime.split(';')" 
                            :key="i" 
                            class="time-span" 
                            @click="getTime(item.showdate, time)"
                        >
                            {{time}}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </modal>
</template>

<script>
import modal from '../modals/modal.vue';
export default {
    components: {
        modal
    },
    props: ['selectSsessionTime'],
    methods: {
        getTime(date, time) {
            this.$emit('showPlace', { id: this.selectSsessionTime.id, date: date, time: time })
        }
    }
}
</script>

<style scoped>
    .time-span {
        cursor: pointer;
        transition: 0.5s;
    }
    .time-span:hover {
        background: grey;
        color: #fff;
    }
</style>
