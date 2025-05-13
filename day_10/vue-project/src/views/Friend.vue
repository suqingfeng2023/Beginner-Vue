<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>

<template>
    <div class="friend">
        <p>朋友</p>
        <p>朋友</p>
        <p>朋友...</p>
        <p>id: {{ route.query.id }}</p>
    </div>
</template>

<style scoped></style>