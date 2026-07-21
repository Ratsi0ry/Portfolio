<template>
  <div class="MainContent">
    <header>
            <nav class="navbar">
                <ul class="navlinks">
                    <li class="active"><a href="#Home">Accueil</a></li>
                    <li class="active"><a href="#About">Information</a></li>
                    <li class="active"><a href="#Skills">Compétences</a></li>
                    <li class ="active"><a href="#Projects">Projets</a></li>
                    <li class="active"><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
    </header>

    <main class="content">
      <Components />  
    </main>
  </div>
</template>


<script setup>
  import Components from './Components/Components.vue';
</script>

<style scoped>
.navbar {
  padding: 10px 20px;
  display: flex;
  justify-content: center;
}

.navlinks {
  display: flex;
  gap: 10px;
  list-style: none;
}

@keyframes entreeNav{
    from{
        transform: translateY(-30px);
        opacity: 0;
    } to{
        transform: translateY(0);
        opacity: 1;
    }
}

nav{
  animation-name: entreeNav;
  animation-duration: 1s;
  animation-fill-mode: forwards; 
}

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

.navlinks li {
  border-radius: 30px;
}

.navlinks a {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: #380474ad;
  padding: 10px 18px;
  border-radius: 30px;
  font-size: 14px;
  transition: background-color 0.3 ease, color 0.3 ease, transform 0.3s ease;
}

ul {
  background: linear-gradient(to right, #c8c5cabd, #010d6b9a);
  padding: 5px;
  border-radius: 20px;
}

.navlinks a:hover {
  background: rgb(50, 8, 104);
  color: white;
  transform: scale(1.1);
}

.navlinks .active a {
  background: rgba(0, 0, 0, 0.774);
  color: white;
}


</style>
