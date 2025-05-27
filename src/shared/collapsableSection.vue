<template>
    <div>
        <div class="alert alert-" style="cursor: pointer">
            <span v-if="open" @click="open = !open">&#x25B2</span>
            <span v-if="!open" @click="open = !open">&#x25C2</span>
        </div>
        <Transition name="fade">
            <slot v-if="open"></slot>
        </Transition>
    </div>
</template>

<script>
export default {
    name: 'collapsableSection',
    data() {
        return {
            open: false
        }
    }
}
</script>

<style scoped>
.fade-enter-active {
    transition: opacity 1s;
}
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>