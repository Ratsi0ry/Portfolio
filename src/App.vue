<template>
  <div class="MainContent">
    
    <header>
      <Navbar/>
    </header>

    <main class="content">
      
      <Hero/>
      <!-- <About/> -->
      <Skills/>
      <Projects/>
      <Languages/>
      <!-- <Contact/> -->

    </main>
  </div>
</template>


<script setup>
  // import Home from './Components/Home.vue';
  // import About from './Components/About.vue';
  import Skills from './Components/Skills.vue';
  import Projects from './Components/Projects.vue';
  import Navbar from './Components/Navbar.vue';
  import Languages from './Components/Languages.vue';
  import Hero from './Components/Hero.vue';
// import Contact from './Components/Contact.vue';
</script>

<style scopedz>

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

  :root {
	--indigo-a1: #00008002;
	--indigo-a2: #0040ff08;
	--indigo-a3: #0047f112;
	--indigo-a4: #0044ff1e;
	--indigo-a5: #0044ff2d;
	--indigo-a6: #003eff3e;
	--indigo-a7: #0037ed54;
	--indigo-a8: #0034dc72;
	--indigo-a9: #0031d2c1;
	--indigo-a10: #002ec9cc;
	--indigo-a11: #002bb7c5;
	--indigo-a12: #001046e0;
}

</style>
