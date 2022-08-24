<script setup lang="ts">
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore();
const count = computed(()=> {
    return store.state.count;
})
</script>

<template>
    <section>
        <h2>Total Books</h2>
        <span>{{count}}</span>
    </section>    
</template>