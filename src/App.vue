<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import './css/index.css';


export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
@import './css/index.css';
/* Add any additional styles here */
</style>

<!-- <template>
  <div>
    <Navbar />
    <router-view />
    
    <div>
      <ul>
        <li v-for="repo in paginatedRepos" :key="repo.id">
          {{ repo.name }}
        </li>
      </ul>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template> -->

