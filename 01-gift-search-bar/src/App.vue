<script setup>
import { ref, watch } from 'vue'
import { debounce } from 'debounce'

const searchTerm = ref('')
const foundProducts = ref([])
const loading = ref(false)

/**
 * Fetch products from dummy api with debounce
 */
const findProducts = debounce(async term => {
  if(term === '') return foundProducts.value = []

  try {
    loading.value = true

    const data = await (
      await fetch(`https://dummyjson.com/products/search?q=${term}`)
    ).json()
  
    foundProducts.value = data.products
  } catch(err) {
    console.log(err)
    alert('Ooops, something went wrong.')
  } finally {
    loading.value = false
  }
}, 300)

watch(searchTerm, newTerm => findProducts(newTerm))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    
    <!-- products -->
    <ul v-if="(foundProducts.length && !loading)" class="list-disc">
      <li v-for="product in foundProducts" :key="product.id">
        {{ product.title }} - {{ product.price }} €
      </li>
    </ul>

    <!-- loader -->
    <div v-else-if="loading">
      Loading...
    </div>
  </div>
</template>
