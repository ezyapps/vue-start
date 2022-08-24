<script setup lang="ts">
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore();
const count = computed(()=> {
    return store.state.count;
})
const totalBooks = computed(()=>{
    return store.getters.totalBooks;
})
</script>

<template>
    <section>
        <h2>Total Books</h2>
        <div class="widget">{{store.getters.totalBooks}}</div>
    </section>    
</template>
<style scoped>

</style>