<template>
    <div class="modal-layer">
        <div class="modal-container">
            <div class="x-container" style="">
                <span class="close_x" @click="close()">x</span>
            </div>
            <div class="content-container">
                <slot></slot>
            </div>
            <div class="button-slot">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
    .modal-layer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        background: #000000c7;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-container {
        background: #fff;
        width: 80vw;
        height: 80vh;
        padding: 15px;
        position: relative;
    }
    .x-container {
        display: flex;
        justify-content: end;
        width: 100%; 
        height: 3rem
    }
    .close_x {
        cursor: pointer;
        color: #9c9c9c;
        transition: 0.5s;
        border-radius: 999px;
        transition: 0.5s;
        font-size: 2rem;
    }
    .button-slot {
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        padding: 10px;
    }
    .content-container {
        height: 50vh;
        width: 100%;
        overflow-y:scroll;
    }
</style>