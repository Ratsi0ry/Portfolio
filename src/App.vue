<template>
  <div class="MainContent">
    
    <header>
      <Navbar/>
    </header>

    <main class="content">

      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Languages/>

    </main>
  </div>
</template>


<script setup>
  import Home from './Components/Home.vue';
  import About from './Components/About.vue';
  import Skills from './Components/Skills.vue';
  import Projects from './Components/Projects.vue';
  import Navbar from './Components/Navbar.vue';
import Languages from './Components/Languages.vue';
</script>

<style scoped>

  .MainContent {
    background-color: #bebebed2;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  header {
    position: -webkit-sticky; 
    position: sticky;         
    top: 0;                   
    width: 100%;              
    background-color: #bebebe;    
    z-index: 9999;             
    padding: 5px 0;         
  }

</style>
