<template>
    <modal @close="$emit('close')">
        <ul class="list-group">
            <li class="list-group-item">Ряд: {{ ticketData.row }}</li>
            <li class="list-group-item">Место: {{ ticketData.seat }}</li>
            <li class="list-group-item">Дата: {{ ticketData.showdate }}</li>
            <li class="list-group-item">Время: {{ ticketData.daytime }}</li>
            <li class="list-group-item">ИД Заказа: {{ ticketData.ticketkey }}</li>
        </ul>
    </modal>
</template>

<script>
import modal from '../modals/modal.vue';
export default {
    components: {
        modal
    },
    props: ['ticketData'] 
}
</script>
