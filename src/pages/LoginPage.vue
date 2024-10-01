<script setup lang="ts">
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useHead } from '@unhead/vue';
import { ref } from 'vue';

useHead({ title: "Log in" });

const formRef = ref<{ email: string, password: string; }>({ email: "", password: "" });

function onSubmit() {
    console.log(formRef.value);
}

</script>

<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="onSubmit">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" v-model="formRef.email" required />
                    <span class="icon is-small is-left">
                        <FontAwesomeIcon :icon="faEnvelope" />
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="formRef.password" required />
                    <span class="icon is-small is-left">
                        <FontAwesomeIcon :icon="faLock" />
                    </span>
                </p>
            </div>
            <button class="button is-info">Login</button>
        </form>
    </div>
</template>