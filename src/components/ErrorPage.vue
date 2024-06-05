<!-- <template lang="">
    <div>
        error
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style> -->
<template>
    <div class="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p class="error-status">{{ error.status }}</p>
      <p class="error-status-text"><i>{{ error.statusText }}</i></p>
      <p>Go to <router-link to="/"><b>Home page</b></router-link></p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'ErrorPage',
    setup() {
      const route = useRoute();
      const error = ref({ status: null, statusText: null });
  
      onMounted(() => {
        const routeError = route.meta.error;
        if (routeError) {
          error.value = routeError;
          console.error(routeError);
        }
      });
  
      return { error };
    }
  }
  </script>
  
  <style scoped>
  /* .error-page { */
    /* Add your styles here if any */
  /* } */
  </style>
  