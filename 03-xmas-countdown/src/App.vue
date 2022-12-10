<script setup>
import CountdownHeader from '@/components/CountdownHeader.vue'
import CountdownSegment from './components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'
import { computed } from 'vue';

const now = useNow()
const christmas = new Date('12/25/2022 00:00:00')

const diffDays = computed(() => {
  const actual = (christmas.getTime() - now.value.getTime()) / (1000 * 60 * 60 * 24)
  const rounded = Math.floor(actual)

  return {
    actual: actual,
    rounded: rounded
  }
})

const diffHours = computed(() => {
  const actual = 24 * (diffDays.value.actual - diffDays.value.rounded )

  return {
    actual: actual,
    rounded: Math.floor(actual)
  }
})

const diffMinutes = computed(() => {
  const actual = 60 * (diffHours.value.actual - diffHours.value.rounded )

  return {
    actual: actual,
    rounded: Math.floor(actual)
  }
})

const diffSeconds = computed(() => {
  const actual = 60 * (diffMinutes.value.actual - diffMinutes.value.rounded )

  return {
    actual: actual,
    rounded: Math.floor(actual)
  }
})

</script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="diffDays.rounded" />
          <CountdownSegment label="hours" :number="diffHours.rounded" />
          <CountdownSegment label="minutes" :number="diffMinutes.rounded" />
          <CountdownSegment label="seconds" :number="diffSeconds.rounded" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>
