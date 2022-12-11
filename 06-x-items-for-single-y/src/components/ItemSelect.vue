<script setup>
import { ref } from 'vue'
import { useItemComparison } from '../composables/itemComparison'

const props = defineProps({
  products: Array
})

defineEmits(['selectProduct'])

const selected = ref()
</script>

<template>
  <select v-model="selected" v-on:change="$emit('selectProduct', products.filter(item => item.id == selected)[0])" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option v-for="product in products" :value="product.id">{{ product.title }} - {{ product.price }}€</option>
  </select>
</template>
