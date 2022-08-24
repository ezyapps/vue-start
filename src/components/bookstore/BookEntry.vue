
<script setup lang="ts">
import { ref } from 'vue';


const authors = ref (['Shohel Rana', 'Jafor Iqbal', 'Jhonkor Mahbub']); 
const issbn = ref('');
const title = ref('');
const author = ref('');
const quantity = ref(0);
function saveBook() {
    alert(issbn.value);
}
</script>

<template>
    <section>
        <h2>Book Entry Form {{issbn}} {{$store.state.count}} </h2>
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
                        <td><input type="text" id="bookName" required /></td>
                        <td>
                            <select id="author" v-model="author" required>
                                <option value="">Select Author</option>
                                <option v-for="author in authors" value="author">{{author}}</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" id="quantity" required />
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