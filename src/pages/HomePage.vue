<script setup lang="ts">
import { useHead } from '@unhead/vue';
import store from '@/store'

useHead({
  title: 'Home'
});


function increment() {
  store.commit('increment')

}


</script>

<template>
  <div>home
    <button class="button is-info" @click="increment">count</button>
  </div>
</template>
