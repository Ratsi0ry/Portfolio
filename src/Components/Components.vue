<template>
   
    <section id="Home" class="info">
        
        <div class="txt">

            <p class="badge"> Disponible en freelance</p>
            <h1>Developpeur Fullstack</h1>
            <p class="description">
            Bienvenue sur mon profil, je m'appele Tsiory. Je suis un jeune étudiant passionné pour tou ce qui
            concerne les systèmes Informatiques aussi bien le <span>Front-End</span> que le <span>Back-End</span>.
            <br>
             Pour moi, le fondement d'un bon programme reside dans un code solide et bien structurer.
            </p>

            <div class="btn">
                <a href="#" class="btn-primary">M'engager</a>
                <a href="#" class="btn-outline"> Telechager le CV</a>
            </div>

        </div>

        <div class="img_voiture">
            <img src="@/Assets/Image/Porsche 911 GT3 RS.png" alt="profile" style="width: 300px;">
        </div>

    </section>

    <section id="About" class="about"> 
        <div class="img">
            <img src="@/Assets/Image/3646.png" alt="image">
        </div>    
        <div class="more">
             <h1>Information</h1>
            <p>
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

    <section id="Skills">
        <h1>Compétences</h1>
        <p style="padding: 20px;">Encore en phase d'évolution, voici mes compétences actuels sur les langages de programmations et 
        framework que j'ai appris</p><br>

        <div class="stats">
            <div class="skill">         
                <p><b>HTML</b> 80%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 80%;"></div>
                </div>
            </div>   
            <div class="skill">         
                <p><b>CSS</b> 70%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 70%;"></div>
                </div>
            </div> 
            <div class="skill">         
                <p><b>JS</b> 50%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 50%;"></div>
                </div>
            </div>
            <div class="skill">
                <p><b>Vue.js</b> 55%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 55%;"></div>
                </div>
            </div>
        </div>

        <div class="stats">
            <div class="skill">         
                <p><b>MySQL</b> 65%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 65%;"></div>
                </div>
            </div>
            <div class="skill">         
                <p><b>C++</b> 50%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 50%;"></div>
                </div>
            </div>
            
            <div class="skill">
                <p><b>Php</b> 60%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 60%;"></div>
                </div>
            </div>
            <div class="skill">         
                <p><b>QT</b> 45%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 40%;"></div>
                </div>
            </div>
        </div>
        
        <div class="stats">
            <div class="skill">
                <p><b>PostgreSql</b> 50%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 50%;"></div>
                </div>
            </div>
            <div class="skill">
                <p><b>C#</b> 50%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 50%;"></div>
                </div>
            </div>
            <div class="skill">
                <p><b>Avalonia</b> 40%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 40%;"></div>
                </div>
            </div>
        </div>
    </section>     

        <section id="Projects">
            <h1>Projets</h1>
            <p style="padding: 20px;  font-size: medium;" >Du concept à l'impact, parcourez mes dernières réalisations Web, 
                Logiciels et Bases de données. Un aperçu concret de mes compétences en 
                action et de ma manière de structurer un projet de A à Z.</p>
        </section>  

    <section id="Skills2">
        <h3><u>Langues</u></h3>
        <div class="skill2">         
            <p><b>Anglais</b> 75%</p>
            <div class="bar">
                <div class="progress-bar2" style="width: 77%;"></div>
            </div>
        </div>
        <div class="skill2">         
            <p><b>Français</b> 85%</p>
            <div class="bar">
                <div class="progress-bar2" style="width: 77%;"></div>
            </div>
        </div>
        <div class="skill2">         
            <p><b>Malagasy</b> 77% (Maternel)</p>
            <div class="bar">
                <div class="progress-bar2" style="width: 77%;"></div>
            </div>
        </div>
    
    </section>

</template>

<script setup></script>

<style scoped>

@keyframes entreeVoiture{
    from{
        transform: translateX(100px);
        opacity: 0;
    } to {
        transform: translateX(0);
        opacity: 1;
    }
}

.info {
    width: 85%;
    margin: 50px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

@keyframes showContent{
    from{
        opacity: 0;
    } to{
        opacity: 1;
    }
}

.txt {
    flex: 1;
    animation-name: showContent;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}

.about {
    display: flex;
    justify-content: space-between;
    animation-name: showContent;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}

.badge {
    display: inline-block;
    background: #eee;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 20px;
}

.info h1 .about {
    font-size: 48px;
    margin-bottom: 20px;
}

.info h1 span {
    color: black;
}

.description {
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 500px;
    border-bottom: 1px solid #333;
    padding-bottom: 20px;
}

h1,h3 {
    margin-bottom: 20px;
}

h3 {
    color: #03173bbd;
}


.btn {
    display: flex;
    gap: 15px;
    padding-bottom: 50px;
}

.btn-primary {
    background: black;
    color: white;
    padding: 12px 22px;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.3s;
    box-shadow: 0 5px 20px rgba(20, 13, 13, 0.459);
    transition: all 0.2s ease-in-out;
}

.btn-primary:hover {
    animation: swing 1s ease;
    animation-iteration-count: 1;
}

@keyframes swing {
15% {
transform: translateX(5px);
}
30% {
transform: translateX(-5px);
}
50% {
transform: translateX(3px);
}
65% {
transform: translateX(-3px);
}
80% {
transform: translateX(2px);
}
100% {
transform: translateX(0);
}}

.btn-outline {
    color: 1px solid black;
    color: black;
    padding: 12px 22px;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.3s;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.418);
    opacity: 1;
}

.btn-outline:hover {
    background: rgb(20, 1, 88);
    color: white;
}

.img {
    flex: 1;
    text-align: center;
}

.img_voiture{
    flex: 1;
    text-align: center;
    animation-name: entreeVoiture;
    animation-duration: 1.3s;
    animation-fill-mode: forwards;
    transition: ease-out;
}

.img img {
    width: 300px;
}

.more {
    background: #d8c1c14d;
    border-radius: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.459);
    margin-right: 30px;
    padding: 30px;
    width: 55%;
}

#Skills, #Services, #Skills2, #Projects {
    width: 85%;
    margin: 50px auto 0;
}

.skill {
    margin-bottom: 20px;
    display: flex;
    gap: 5px;
    margin: 5px;
    background: #55555560;
    padding: 20px;
    border-radius: 5px;
}

.skill2 {
    margin-bottom: 10px;
    display: flex;
    gap: 5px;
    margin: 5px;
    padding: 20px;
    border-radius: 5px;
    width: 50%;
}

.bar {
    width: 100%;
    height: 12px;
    background: #000000e8;
    border-radius: 7px;
}

.progress-bar {
    height: 100%;
    background: rgba(75, 7, 201, 0.788);
    border-radius: 7px;
}

.progress-bar2 {
    height: 100%;
    background: rgba(0, 63, 158, 0.788);
    border-radius: 7px;
}


.stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

</style>