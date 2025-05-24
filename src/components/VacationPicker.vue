<template>
    <div class="container">
    </div>
      <h1>{{ header }}</h1>
      <h2>static header VacationPicker.vue: pick your next vacation</h2>
  <ul class="list-group">
    <!--@click="showMessage(countrytje.name)" @mouseover="showMessage(countrytje.name-->
    <li class="list-group-item" v-for="(countrytje, index) in countryDataa.countries" v-bind:key="countrytje.id" v-bind:title="countrytje.details" @click="selectCountry(index)">
        {{ countrytje.id }} - 
      {{ countrytje.name }}
    </li>
  </ul>

  <h2>Selected country: </h2>
  <ul class="list-group">
    <li class="list-group-item">{{ selectedCountry.id }}</li>
    <li class="list-group-item">{{ selectedCountry.name }}</li>
    <li class="list-group-item">{{ selectedCountry.capital }}</li>
    <li class="list-group-item">{{ selectedCountry.cost }}</li>
    <li class="list-group-item">{{ selectedCountry.details }}</li>
    <li class="list-groupp-item">
      <img :src="getImgUrl(selectedCountry.img)" :alt="selectedCountry.img" class="img-fluid">
    </li>
    <li class="list-group-item" v-if="isExpensive">
      <span class="badge rounded-pill text-bg-danger">Expensive!</span>
    </li>
  </ul>

  <h3>Teller: {{ counter }}</h3>
  <button v-on:click="increment()" class="btn btn-succes">+</button>
  <button @click="decrement()" class="btn btn-danger">-</button>

</template>

<script>
    import countryDataa from '@/data/countryData.js'
    import mixins from '@/Mixins/mixins'
    export default {
        name: "VacationPicker",
        mixins: [mixins],
        data(){
            return {
                countryDataa,
                header: "from VacationPicker: Vue vacation picker",
                counter: 0,
                selectedCountryIndex: 0
            }
        },
        methods: {
          increment() {
            this.counter++;
          },
          decrement() {
            this.counter--;
          },
          showMessage(country) {
            alert(country);
          },
          selectCountry(index) {
            this.selectedCountryIndex = index;
          }
        },
        computed: {
          selectedCountry() {
            return {
              ...this.countryDataa.countries[this.selectedCountryIndex]
            }
          },
          isExpensive() {
              return this.countryDataa.countries[this.selectedCountryIndex].cost > 998;
            }
        }
    }
</script>