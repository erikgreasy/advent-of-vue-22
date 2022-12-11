import { ref } from "vue"

const products = ref([])
const productX = ref(null)
const productY = ref(null)

export const useItemComparison = () => ({
    products,
    productX,
    productY,
})
