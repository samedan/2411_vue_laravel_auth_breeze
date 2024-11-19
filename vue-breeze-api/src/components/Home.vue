<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const user = ref();

onMounted(async () => {
    //token & user
    await authStore.getUser();
});
</script>

<template>
    <div v-if="authStore.user">
        <h1>{{ authStore.user.name }}</h1>
        <p>{{ authStore.user.email }}</p>
    </div>
    <div v-else>
        <h1>Go and Login</h1>
    </div>
</template>
