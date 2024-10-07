<script setup lang="ts">
import store from "@/store";
import { useHead } from "@unhead/vue";
import { onMounted, watch } from "vue";

useHead({ title: "about" });
onMounted(() => {
  fetch('https://B93F2.playfabapi.com/Authentication/GetEntityToken', {
    method: 'POST',
    headers: {
      "X-SecretKey": "JTQ3PH4YMN5TB31YJWU3MPRU9JY1RNW4Y99T1CAYQ76J184R4F",
      "Content-Type": "application/json"
    }
    , body: JSON.stringify({})
  })
    .then(res => res.text())
    .then(res => JSON.parse(res))
    .then(res => fetch('https://B93F2.playfabapi.com/CloudScript/ListFunctions', {
      method: 'POST',
      headers: {
        "X-EntityToken": res.data.EntityToken,
        "Content-Type": "application/json"
      }
    }))
})

watch(
  () => store.state.count,
  (count) => console.log('about watch count ', count)
)

</script>

<template>
  <h1 :key="`abc`">This is an about page count {{ store.state.count }}</h1>
</template>

<style>
.abc {
  padding: 1;
}
</style>
