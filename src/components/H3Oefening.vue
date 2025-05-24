<template>
    <div>
    <br>
    <br>
    <h3>H3 oefening</h3>
    <ul>
        <li class="list-group-item" v-for="(werkgevert, index) in werkgeversOverzicht.werkgevers" v-bind:key="werkgevert.id" v-bind:title="werkgevert.name">
        {{ werkgevert.id }} - 
      {{ werkgevert.name }} - 
      {{  werkgevert.year }}
        </li>
    </ul>
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
                numbers: [10, 20, 30, 40, 50, 60]
            }
        }
    }
</script>

<style>

</style>

