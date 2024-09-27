import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useProdutcStore = defineStore('product', () => {
  const products = ref([
    {id:1, name: 'O morro dos ventos uivantes', price: 50.0 , qty:100},
    {id:2, name: 'Pessoas Normais', price: 40.0 , qty:30},
    {id:3, name: 'Um dia', price: 60.0 , qty:80},
    {id:4, name: 'Um ano solitario', price: 40.0 , qty:30},
    {id:5, name: 'Orgulho e Preconceito', price: 70.0 , qty:70},
    {id:6, name: 'Mulherzinhas', price: 100.0 , qty:10},
  ])

  return { products }
})
