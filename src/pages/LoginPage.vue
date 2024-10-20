<script setup lang="ts">
import store from '@/store';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useHead } from '@unhead/vue';
import { ref } from 'vue';

useHead({ title: "Log in" });

const formRef = ref<{ email: string, password: string; }>({ email: "", password: "" });

function onSubmit() {
    console.log(formRef.value);
}

function googleLogin() {
    store.dispatch("Login/loginWIthGoogle")
}

</script>

<template>
    <div class="hero is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen has-text-centered">
                        <h1 class="title">Login</h1>
                        <form @submit.prevent="onSubmit">
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input" type="email" placeholder="Email" v-model="formRef.email"
                                        required />
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
                                    <input class="input" type="password" placeholder="Password"
                                        v-model="formRef.password" required />
                                    <span class="icon is-small is-left">
                                        <FontAwesomeIcon :icon="faLock" />
                                    </span>
                                </p>
                            </div>
                            <div class="field is-grouped is-grouped-right">
                                <button class="button is-info">Login</button>
                            </div>
                        </form>
                        <div class="social-login">
                            <button class="google-button" @click="googleLogin">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                    class="google-icon">
                                    <g>
                                        <path fill="#EA4335"
                                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                                        </path>
                                        <path fill="#4285F4"
                                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                                        </path>
                                        <path fill="#FBBC05"
                                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                                        </path>
                                        <path fill="#34A853"
                                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                                        </path>
                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                    </g>
                                </svg>
                                <span class="L6cTce" id="button-label">Sign in with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.google-button {
    width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 8px;

    .google-icon {
        margin: 10px;
    }
}
</style>