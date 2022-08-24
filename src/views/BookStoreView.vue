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

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
