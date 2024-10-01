<script setup lang="ts">
import TestCom from '@/components/TestCom.vue';
import { useHead } from '@unhead/vue';
useHead({
  title: 'Home'
});
</script>

<template>
  <div>home</div>
  <TestCom />
</template>
