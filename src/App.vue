<script>
  import VacationPicker from "@/components/VacationPicker.vue";
  import H3Oefening from "@/components/H3Oefening.vue";

  export default {
    name: 'App',
    components: {
      VacationPicker,
      H3Oefening
    }
  }

</script>

<template>
  <div>
    <h1>App.Vue 3 applicatie vacation picker</h1>
    <br>
    <VacationPicker/>
    <!-- <H3Oefening /> -->
  </div>
</template>

<style scoped>

</style>
