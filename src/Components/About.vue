<template>

    <section id="About" class="about"> 
        <div>
            <img src="@/Assets/Image/3646.png" alt="image">
        </div>    
        <div class="more">
             <h1>Information</h1>
            <p class="txt">
                Je suis actuellement étudiant L2 dans le parcours Genie Logicielle & Base de donnée `a l'<b>Ecole Nationale d'Informatique
                (ENI)</b> `a Fianarantsoa.
                <br><br>
                Tout au long de mes deux ans de parcours académique, j'ai développer des <b>compétences</b> en matieres d'<b>analyse et résolution de problèmes</b>
                J'ai egalement acquis de l'éxperience en travaillant sur des projets variés donné par l'école et en menant mes projets personnelles.
                <br><br>
                Mon but est de devenenir <b>Full Stack Developer</b>, un ingenieur qui conçois, design et entretient des architectures
                qui ont un réel impacte pour la société.
            </p>
        </div>
    </section>

</template>

<style scoped>

    .about {
        display: flex;
        justify-content: space-between;
        animation-name: showContent;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }

    #About{
        width: 90%;
        margin: 50px auto 0;
    }

    img {
        width: 300px;
        margin: 50px auto 0;
    }

    h1 {
        margin-bottom: 20px;
    }

    .more {
        background: #d8c1c14d;
        border-radius: 20px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.459);
        padding: 30px;
        width: 55%;
    }

    .txt{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

</style>