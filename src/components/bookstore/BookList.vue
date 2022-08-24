<script setup lang="ts">
import {ref, computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore();


</script>

<template>
    <section>
        <h2>Book List</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th><th>ISSBN</th><th>Title</th><th>Author</th><th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in store.state.books" :key="book.id">
                    <td>{{book.id}}</td>
                    <td>{{book.issbn}}</td>
                    <td>{{book.title}}</td>
                    <td>{{book.author}}</td>
                    <td>{{book.quantity}}</td>                    
                </tr>
            </tbody>
        </table>
        <!-- <ul>
            <li v-for="book in store.state.books" :key="book.id">{{book.id}} - {{book.issbn}} - {{book.title}} - {{book.author}} - {{book.quantity}}</li>
        </ul> -->
    </section>    
</template>
<style scoped>
table {
    border: 1px solid #CCCCCC;
    width: 100%;
}
table thead {
    background-color: hsla(160, 100%, 37%, 0.80);
}
table tbody {
    background-color: #f0eaea;
}
table tbody td {
    text-align: center;
}
</style>