<template>
  <h3>Selected country:</h3>
  <ul class="list-group">
    <li class="list-group-item">{{ selectedCountry.id }}</li>
    <li class="list-group-item">{{ selectedCountry.name }}</li>
    <li class="list-group-item">{{ selectedCountry.capital }}</li>
    <li class="list-group-item">{{ selectedCountry.cost }}</li>
    <li class="list-group-item">{{ selectedCountry.details }}</li>
    <li class="list-group-item" v-if="isExpensive">
      <span class="badge rounded-pill text-bg-danger">Expensive!</span>
    </li>
    <li  class="list-group-item">
      <img :src="getImgUrl(selectedCountry.img)" :alt="selectedCountry.img" class="img-fluid">
    </li>
  </ul>
</template>

<script>
    export default {
        name: "CountryDetail",
        props: ['country'],

        computed: {
            isExpensive() {
                return this.countryDataa.countries[this.selectedCountryIndex].cost > 998;
    }

        } 
    }
</script>

