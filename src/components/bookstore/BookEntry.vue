
<script setup lang="ts">
import { createStructuralDirectiveTransform } from '@vue/compiler-core';
import { ref, computed } from 'vue';
import {useStore} from 'vuex'

const store = useStore();

const authors = ref (['Shohel Rana', 'Jafor Iqbal', 'Jhonkor Mahbub']); 
const issbn = ref('');
const title = ref('');
const author = ref('');
const quantity = ref(0);
const count = computed(() => {
    return store.state.count;
});
const totalBooks = computed( () => {
    return store.getters.totalBooks+1;
})
function saveBook() {
    // alert(issbn.value);
    var book = {
        id: totalBooks.value,
        issbn: issbn.value,
        title: title.value,
        author: author.value,
        quantity: quantity.value
    }
    store.commit('pushBook', book);
    resetForm();
}
function resetForm(){
    issbn.value = '';
    title.value = '';
    author.value = '';
    quantity.value = 0
}
</script>

<template>
    <section>
        <h2>Book Entry Form </h2>
        <form @submit.prevent="saveBook">
            <table>
                <thead>
                    <tr>
                        <th>ISSBN</th><th>Title</th><th>Author</th><th>Quantity</th><th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" id="issbn" v-model="issbn" required /></td>
                        <td><input type="text" id="bookName" v-model="title" required /></td>
                        <td>
                            <select id="author" v-model="author" required>
                                <option value="">Select Author</option>
                                <option v-for="author in authors" :value="author">{{author}}</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" id="quantity" v-model="quantity" required />
                        </td>
                        <td><input type="submit" value="Save Book" /></td>
                    </tr>
                </tbody>
            </table>
            
        </form>
    </section>    
</template>
<style>
article {
    display: inline-block;
}
input {
    /* width: 100%; */
}
#issbn{
    width: 100px
}
#quantity {
    width: 80px;
    text-align: right;
}
</style>