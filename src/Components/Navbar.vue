<template>

    <nav class="navbar">
        <ul class="navlinks">
            <li class="active"><a href="#Skills">Skills</a></li>
            <li class ="active"><a href="#Projects">Projets</a></li>
            <li class="active"><a href="#Contact">Contacts</a></li>
        </ul>
    </nav>


</template>

<style scoped>

    .navbar {
        display: flex;
        justify-content: right;
        width: 85%;
        background-color: var(--indigo-a1);
        font-family: sans-serif;
    }

    .navlinks {
        display: flex;
        gap: 10px;
        list-style: none;
        box-shadow: 0 4px 1px -3px rgba(46, 52, 129, 0.1); 

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
    animation-duration: 0.3s;
    animation-fill-mode: forwards; 
    }

    .navlinks a {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.801);
    padding: 10px 18px;
    font-size: medium;
    transition: background-color 0.3 ease, color 0.3 ease, transform 0.3s ease;
    }

    ul {
    padding: 5px;
    }

    .navlinks a:hover {
    color: rgb(6, 24, 104);
    }

</style>