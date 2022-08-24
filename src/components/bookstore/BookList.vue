<script setup lang="ts">
import {ref, computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore();


</script>

<template>
    <section>
        <h2>Book List</h2>
        <ul>
            <li v-for="book in store.state.books" :key="book.id">{{book.id}} - {{book.issbn}} - {{book.title}} - {{book.author}} - {{book.quantity}}</li>
        </ul>
    </section>    
</template>