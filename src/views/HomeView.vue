<script setup>
import { ref } from 'vue';
import { useProdutcStore } from '@/stores/product'
import { useRouter } from 'vue-router'
const productStore = useProdutcStore()
const router = useRouter()
const produto = ref({
  name: '',
  price: '', 
  qty: ''
})
const defaultProduto = {...produto}

function visualizar(id) {
  router.push(`/produto/${id}`)
}

function Adicionar(){
  productStore.addingProduct(produto.value)
  produto.value = defaultProduto
}
</script>

<template>
  <h1>Listagem de Produtos</h1>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>
          <button @click="visualizar(product.id)">Ver</button>
          <button @click="productStore.deleteProductById(product.id)">Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
  <section>
    <form @submit.prevent = 'Adicionar()'>
      <input type="text" v-model="produto.name" placeholder="nome">
      <input type="number" v-model="produto.price" placeholder="preço">
      <input type="number" v-model="produto.qty" placeholder="quantidade">
      <button>Adicionar Produto</button>
    </form>
    <p>{{ produto }}</p>
  </section>
</template>
