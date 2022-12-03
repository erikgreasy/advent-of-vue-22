<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="text-center">
      <div class="mb-5">
        {{ joke.setup }}
      </div>

      <button v-if="!isAnswerShown" @click="showAnswer" class="bg-green px-5 py-3">Tell Me!</button>

      <Transition>
        <div v-show="isAnswerShown">
          {{ joke.delivery }}
        </div>
      </Transition>

      <Transition>
        <button v-show="isAnotherOneShown" @click="getJoke" class="mt-10 bg-green px-5 py-3">Another</button>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const joke = ref({})
const isAnswerShown = ref(false)
const isAnotherOneShown = ref(false)

const getJoke = async () => {
  joke.value = {}
  isAnswerShown.value = false
  isAnotherOneShown.value = false

  const res = await (
    await fetch('https://v2.jokeapi.dev/joke/christmas')
  ).json()

  joke.value = res
}

const showAnswer = () => {
  isAnswerShown.value = true

  setTimeout(() => {
    isAnotherOneShown.value = true
  }, 1000)
}

onMounted(() => {
  getJoke()
})
</script>

<style scoped>
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
