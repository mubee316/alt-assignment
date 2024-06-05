<script>

import 'C:/Users/USER/Documents/vuew/node_modules/@fortawesome/fontawesome-free/css/all.css';
export default {
  name: 'GitHubLogo'
};

</script> 

<template>
  <div class="navbar">
    <div><h1><i class="fab fa-github"></i>MUBARAK'S GITHUB PAGES</h1></div>
    <span class="extras">
<div class="repos">
  <router-link class="link" to="/">Home</router-link>
</div>
<div class="error404">
  <router-link to="/error" class="link">Error404</router-link>
</div>
<div class="errorbound">
  <router-link to="/error" class="link">Error boundary</router-link>
</div>
</span>
  
  
   
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: green;
 color:white;
 height: 7em;
 border-radius: 6px;
 border: none;
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.extras{
  display: flex;
  gap: 20px;
  padding:0 ,auto;
  /* margin-left: 20px; */
  justify-content: center;
     
  
}

.link{
  background-color: green;
  border: 2px solid;
  border-color: white;
  border-radius: 5px;
  padding: 10px 10px;
}
.link:hover{
  background-color: hsl(120, 100%, 35%);
  cursor: pointer;
}
.link:active{
  background-color: hsl(120, 100%, 45%);

}
</style>
