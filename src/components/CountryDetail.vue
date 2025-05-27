<template>

<h2>Selected country: </h2>
<div>
  <ul class="list-group">
    <li class="list-group-item">{{ country.id }}</li>
    <li class="list-group-item">{{ country.name }}</li>
    <li class="list-group-item">{{ country.capital }}</li>
    <li class="list-group-item">{{ country.cost }}</li>
    <li class="list-group-item">{{ country.details }}</li>
    <li class="list-group-item">{{ country.rating }}</li>
    <li class="list-group-item">
      {{ country.name }} 
      <span class="float-end">
        <button @click="setRating(1)" class="...">+1</button>
        <button @click="setRating(-1)" class="...">-1</button>
      </span>
    </li>
    <li class="list-groupp-item">
      <img :src="getImgUrl(country.img)" :alt="country.img" class="img-fluid">
    </li>
    <li class="list-group-item" v-if="isExpensive">
      <span class="badge rounded-pill text-bg-danger">Expensive!</span>
    </li>
  </ul>
</div>  

</template>

<script>
import mixins from '@/Mixins/mixins'
  export default {
    name: "countryDetail",
    props: {
      country: {
        type: Object,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      number: {
        type: Number,
        required: false,
        default: 100
      },
      messageType: {
        type: String,
        required: true,
        validator: (value) => {
          return ['warning', 'succes', 'info'].indexOf(value) !== -1;
        }
      }
    },
    methods: {
      setRating(value) {
        this.$emit('rating', value);
      }
    }    ,
    mixins: [mixins],
    computed: {
          isExpensive() {
              return this.country.cost > 998
            }
        },
    emits: ['rating'],
  }
</script>

