<script setup>
import { ref, onMounted } from 'vue';
import { useProdutcStore } from '@/stores/product'
const props = defineProps(['id'])
const produto = ref({})
const productStore = useProdutcStore()
onMounted(() => {
    produto.value = productStore.getProductById(props.id)
})
</script>
<template>
    <h1>Descrição Produto - {{ id }}</h1>
    <h2>Nome: {{ produto.name }}</h2>
    <h2>Preço: {{ produto.price }}</h2>
    <h2>Estoque: {{ produto.qty }}</h2>
</template>
<style scoped>
</style>