<script setup lang="ts">
import BookEntry from "../components/bookstore/BookEntry.vue";
import BookList from "../components/bookstore/BookList.vue";
import BookCount from "../components/bookstore/BookCount.vue";
import AuthorCount from "../components/bookstore/AuthorCount.vue";

</script>
<template>
  <div style="width:100%">
    <h1>The Book Shop</h1>
    <div class="container">
      <BookEntry />
      <BookCount />
      <BookList />
      <AuthorCount />
    </div>
    
  </div>
</template>

<style>
h2 {
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  border-bottom: 1px solid #CCCCCC;
  padding: 3px;
  background-color: #EEEEEE;
  margin-bottom: 10px;
  text-align: center;
}
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .container section {
    /* background-color: #EEEEEE; */
    margin: 5px;
    padding: 3px;
    border: 1px dotted #AAAAAA;
  }
  .container section h2 {
    border-bottom: 1px solid #AAAAAA;
  }
</style>
