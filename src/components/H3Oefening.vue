<template>
    <div>
    <br>
    <br>
    <h3>H3 + H4 oefening</h3>
    <ul class="list-group">
        <li class="list-group-item" v-for="(werkgevert, index) in werkgeversOverzicht.werkgevers" 
            v-bind:key="werkgevert.id" v-bind:title="werkgevert.name" @click="selectCompany(index)">
        {{ werkgevert.id }} - 
      {{ werkgevert.name }} - 
      {{  werkgevert.year }}
        </li>
    </ul>

    <h3>Selected company: </h3>
    <ul class="list-group">
        <li class="list-group-item" >id: {{ selectedCompany.id }}</li>
        <li class="list-group-item" >name: {{ selectedCompany.name }}</li>
        <li class="list-group-item" >place: {{ selectedCompany.place }}</li>
        <li class="list-group-item" >year: {{ selectedCompany.year }}</li>
        <li class="list-group-item" >salary: {{ selectedCompany.salary }}</li>
    </ul>
    <br>

    {{  name }}
    <br>
    {{ address }}
    <br>
    {{ profession }}
    <br>
    {{  todo }} - {{ numbers[2] }}
    <br>
    <label for="numbers">Pick a number:</label>
    <br>
    <select name="numbers">
        <option v-for="(number, index) in numbers" v-bind:value="number" v-bind:label="number"></option>
    </select>
    </div>
    <button v-bind:disabled="isDisabled">Disabled</button>
</template>

<script>
    import H3Oefening from '@/data/H3Oefening';
import werkgeversOverzicht from '@/data/H3Oefening'
    export default {
        name: 'H3Oefening',
        data() {
            return {
                werkgeversOverzicht,
                name: "MichelMansveld",
                address: "Jules Vernehof 4",
                profession: "Industrial programmer",
                todo: "Clean kitchen",
                isDisabled: true,
                numbers: [10, 20, 30, 40, 50, 60],
                selectedCompanyIndex: 0
            }
        },
        methods: {
            selectCompany(index) {
                this.selectedCompanyIndex = index;
            }
        },        
        computed: {
          selectedCompany() {
            return {
              ...this.werkgeversOverzicht.werkgevers[this.selectedCompanyIndex]
            }
          }
        }  
    }
</script>

<style>

</style>

