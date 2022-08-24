<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();
</script>

<template>
    <section>
        <h2>Total Authors</h2>
        <div class="widget">
            {{store.getters.uniqueAuthors}}
        </div>
    </section>    
</template>