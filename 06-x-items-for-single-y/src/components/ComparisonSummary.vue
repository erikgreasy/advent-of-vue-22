<script setup>
import { computed } from 'vue';

const props = defineProps({
  productX: Object,
  productY: Object
})

const timesMoreExpensive = computed(() => {
  if(props.productX?.price > props.productY?.price) {
    return Math.floor(
      props.productX?.price / props.productY?.price
    )
  } else {
    return Math.floor(
      props.productY?.price / props.productX?.price
    )
  }
})

const cheaperProduct = computed(() => {
  if(props.productX?.price < props.productY?.price) {
    return props.productX
  }

  return props.productY
})

const moreExpensiveProduct = computed(() => {
  if(cheaperProduct.value?.id === props.productX.id) {
    return props.productY
  }

  return props.productX
})

const itemsAreTheSame = computed(() => {
  return props.productX?.id === props.productY?.id
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
