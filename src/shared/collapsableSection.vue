<template>
    <div>
        <div class="alert alert-" style="cursor: pointer">
            <span v-if="open" @click="open = !open">&#x25B2</span>
            <span v-if="!open" @click="open = !open">&#x25C2</span>
        </div>
        <slot v-if="open"></slot>
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

</style>