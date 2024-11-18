<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const user = ref();

onMounted(async () => {
    const data = await axios.get("/api/user");
    user.value = data.data;
    // console.log(data);
    console.log(user.value);
});
</script>

<template>
    <div>
        <h1>{{ user?.name }}</h1>
        <p>{{ user?.email }}</p>
    </div>
</template>
