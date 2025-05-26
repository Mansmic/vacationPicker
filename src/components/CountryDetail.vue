<template>

<h2>Selected country: </h2>
<div>
  <ul class="list-group">
    <li class="list-group-item">{{ country.id }}</li>
    <li class="list-group-item">{{ country.name }}</li>
    <li class="list-group-item">{{ country.capital }}</li>
    <li class="list-group-item">{{ country.cost }}</li>
    <li class="list-group-item">{{ country.details }}</li>
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
    props: ['country'],
    mixins: [mixins],
    computed: {
          isExpensive() {
              return this.country.cost > 998
            }
        }
  }
</script>

