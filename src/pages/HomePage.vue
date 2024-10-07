<script setup lang="ts">
import { useHead } from '@unhead/vue';
import store from '@/store'
import { watch } from 'vue';

useHead({
  title: 'Home'
});


function increment() {
  store.commit('increment')

}

watch(
  () => store.state.count,
  (count) => console.log('home watch count ', count)
)


</script>

<template>
  <div>home
    <button class="button is-info" @click="increment">count {{ store.state.count }}</button>
  </div>
</template>
