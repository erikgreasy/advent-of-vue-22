<script setup>
import { computed } from 'vue';
import { useItemComparison } from '../composables/itemComparison';

const { productX, productY } = useItemComparison()

const timesMoreExpensive = computed(() => {
  if(productX.value?.price > productY.value?.price) {
    return Math.floor(
      productX.value?.price / productY.value?.price
    )
  } else {
    return Math.floor(
      productY.value?.price / productX.value?.price
    )
  }
})

const cheaperProduct = computed(() => {
  if(productX.value?.price < productY.value?.price) {
    return productX.value
  }

  return productY.value
})

const moreExpensiveProduct = computed(() => {
  if(cheaperProduct.value?.id === productX.value?.id) {
    return productY.value
  }

  return productX.value
})

const itemsAreTheSame = computed(() => {
  return productX.value?.id === productY.value?.id
})
</script>

<template>
  <div v-if="productX !== null && productY !== null">
    <p v-if="itemsAreTheSame">
      <em>These are the same items</em>
    </p>
    <p v-else class="mx-5 text-center">
      You can get <strong>{{ timesMoreExpensive }}</strong> <em>{{ cheaperProduct?.title  }}</em> for about the same price as a single <em>{{ moreExpensiveProduct?.title }}</em>
    </p>
  </div>
</template>
