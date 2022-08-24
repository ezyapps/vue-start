<script setup lang="ts">
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore();
const count = computed(()=> {
    return store.state.count;
})
const totalBooks = computed(()=>{
    return store.state.books.length;
})
</script>

<template>
    <section>
        <h2>Total Books</h2>
        <span>{{totalBooks}}</span>
    </section>    
</template>