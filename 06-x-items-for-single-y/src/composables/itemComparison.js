import { ref } from "vue"

const products = ref([])

export const useItemComparison = () => ({
    products
})
