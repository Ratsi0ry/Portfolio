<template>

    <nav class="navbar">
        <ul class="navlinks">
            <li class="active"><a href="#Home">Accueil</a></li>
            <li class="active"><a href="#About">Information</a></li>
            <li class="active"><a href="#Skills">Compétences</a></li>
            <li class ="active"><a href="#Projects">Projets</a></li>
            <li class="active"><a href="#Contact">Contact</a></li>
        </ul>
    </nav>


</template>

<style scoped>

    .navbar {
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        box-shadow: 0 4px 1px -3px rgba(46, 52, 129, 0.1); 
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