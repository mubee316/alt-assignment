<template>
    <div id="repodetail">
      <div class="repodetail-card" v-if="details">
        <h2 class="repo-name">{{ details.name }}</h2>
        <div class="repo-mini-details">
          <p><font-awesome-icon icon="star" class="icons" /> Stars: {{ details.stargazers_count }}</p>
          <p><font-awesome-icon icon="eye" class="icons" /> Watch: {{ details.watchers }}</p>
          <p><font-awesome-icon icon="code-branch" class="icons" /> Forks: {{ details.forks }}</p>
          <p><font-awesome-icon icon="code-branch" class="icons" /> Branches: {{ branch.length }}</p>
        </div>
        <p>Main Language: {{ details.language === null ? 'none' : details.language }}</p>
        <p>
          Live site:
          <span v-if="deployment.length === 0">none</span>
          <span v-else>
            <a :href="`https://mubee316.github.io/${details.name}`">
              mubee316.github.io/{{ details.name }}
            </a>
          </span>
        </p>
        <p><a :href="`https://github.com/${details.full_name}`">View on Github</a></p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'RepoDetails',
    setup() {
      const route = useRoute();
      const id = route.params.id;
      const details = ref(null);
      const branch = ref([]);
      const deployment = ref([]);
  
      const fetchRepoDetails = async () => {
        const response = await fetch(`https://api.github.com/repos/mubee316/${id}`);
        const data = await response.json();
        details.value = data;
      };
  
      const fetchBranches = async () => {
        const response = await fetch(`https://api.github.com/repos/mubee316/${id}/branches`);
        const data = await response.json();
        branch.value = data;
      };
  
      const fetchDeployments = async () => {
        const response = await fetch(`https://api.github.com/repos/mubee316/${id}/deployments`);
        const data = await response.json();
        deployment.value = data;
      };
  
      onMounted(() => {
        fetchRepoDetails();
        fetchBranches();
        fetchDeployments();
      });
  
      return { details, branch, deployment };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  