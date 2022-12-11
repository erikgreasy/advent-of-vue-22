<script setup>
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
import { ref, onMounted } from 'vue';
import { useItemComparison } from './composables/itemComparison';

const { products, productX, productY } = useItemComparison() 

const fetchProducts = async () => {
  try {
    const res = await (await fetch('https://dummyjson.com/products')).json()
    products.value = res.products
  } catch(err) {
    console.log(err)
    alert('Error while fetching products')
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect @select-product="product => productX = product" />
      <ItemSelect @select-product="product => productY = product" />
    </div>
    <ComparisonSummary />
  </div>
</template>
