<!-- <script setup lang="">
 export default {
  name: 'HomePage'
};
</script>
<template>
    <div>
        Home
    </div>
</template>

<style>
   
</style> -->
<template>
    <div>
      <section class="repo-container">
        <div v-for="userElement in user" :key="userElement.id" class="repo-card">
          <router-link :to="`/repodetails/${userElement.name}`">
            <h2 class="repo-name">{{ userElement.name }}</h2>
          </router-link>
          <p class="language">Language: {{ userElement.language ? userElement.language : "none" }}</p>
          <p class="date">Start date & time: {{ userElement.created_at }}</p>
          <p class="visibility">Visibility: {{ userElement.visibility }}</p>
        </div>
      </section>
      <p class="view-more" @click="viewMore">{{ showViewMore }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue';
  import '../css/index.css';
  
  export default {
    name: 'HomePage',
    setup() {
      const user = ref([]);
      const currentPage = ref(1);
      const showViewMore = ref('');
  
      const fetchRepos = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/mubee316/repos?per_page=6&page=${currentPage.value}`);
          const data = await response.json();
          if (data.length === 0) {
            showViewMore.value = 'End of Repos';
          } else {
            user.value = [...user.value, ...data];
            showViewMore.value = 'View More';
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      onMounted(fetchRepos);
  
      watch(currentPage, fetchRepos);
  
      const viewMore = () => {
        currentPage.value += 1;
      };
  
      return {
        user,
        currentPage,
        showViewMore,
        viewMore
      };
    }
  };
  </script>
  
  <style scoped>
  @import '../css/index.css';
  /* Add any additional styles here */
  </style>
  