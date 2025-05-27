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
      <span class="float-end badge rounded-pill bg-secondary" v-if="countrytje.rating !== 0">
        {{ countrytje.rating }}
      </span>
    </li>
  </ul>

  <collapsableSection>
  <div class="col-6">
    <countryDetail v-if="selectedCountry" @rating="onRating($event)" :country="selectedCountry" :name="selectedCountry.name" :messageType="'warning'" />
  </div>
  </collapsableSection>
  



  <h2>Other countries: </h2>
  <input type="text" v-model="newCountry" @keyup.enter="addCountry(newCountry)" class="form-control-lg" placeholder="new country...">
  <button @click="addCountry(newCountry)" class="btn btn-info">Add Country</button>
  <h3>{{ newCountry }}</h3>
  <ul class="list-group">
    <li class="list-group-item" v-for="(country, index) in newCountries" :key="index">{{ country }}</li>
  </ul>

  <h2>Destinations cheaper than: </h2>
  <select class="form-control-lg" v-model="selectedCost" @change="filterCountries()">
    <option v-for="(cost, index) in costs" :key="index" :value="cost">{{ cost }}</option>
  </select>
  <ul class="list-group">
    <li v-for="(country, index) in filteredCountries" :key="index" class="list-group-item">{{ country.name }} (EUR: {{ country.cost }})</li>
  </ul>

  <h3>Teller: {{ counter }}</h3>
  <button v-on:click="increment()" class="btn btn-succes">+</button>
  <button @click="decrement()" class="btn btn-danger">-</button>

</template>

<script>
    import countryDataa from '@/data/countryData.js'
    import mixins from '@/Mixins/mixins'
    import countryDetail from '@/components/CountryDetail.vue'
    import collapsableSection from '@/shared/collapsableSection.vue';
    
    export default {
        name: "VacationPicker",
        created() {
          console.log('Component vacationpicker.vue created');
        },
        components: {
          countryDetail,
          collapsableSection
        },
        mixins: [mixins],
        data(){
            return {
                countryDataa,
                header: "from VacationPicker: Vue vacation picker",
                counter: 0,
                selectedCountryIndex: 0,
                newCountry: '',
                newCountries: [],
                selectedCost: 1000,
                costs: [1000,2000,3000,4000,5000,6000],
                filteredCountries: []
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
          },
          addCountry() {
            this.newCountries.push(this.newCountry);
            this.newCountry= '';
          },
          filterCountries() {
            this.filteredCountries=this.countryDataa.countries.filter(country => country.cost < this.selectedCost)
          },
          onRating(rating) {
            this.countryDataa.countries[this.selectedCountryIndex].rating += rating;
          }
        },
        computed: {
          selectedCountry() {
            return {
              ...this.countryDataa.countries[this.selectedCountryIndex]
            }
          }
        }
    }
</script>