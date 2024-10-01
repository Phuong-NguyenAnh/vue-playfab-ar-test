<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({ title: "404 Not Found" });
</script>
<template>
    <div class="container has-text-centered">
        <h4>
            404 Page Not Found
        </h4>
        <h1>The page you are looking for does not exist.</h1>
        <router-link to="/" class="button is-link">
            back home
        </router-link>
    </div>
</template>