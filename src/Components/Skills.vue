<template>

    <section id="Skills">

        <h1>Skills</h1>

        <p class="txt">
            En constante évolution, voici un aperçu de mes compétences techniques : langages de programmation, 
            frameworks et systèmes de gestion de bases de données.
        </p>


        <!-- LANGAGES -->

        <div class="category">

            <h2>Langages</h2>

            <div class="skills-grid">

                <div class="skill">
                    <iconify-icon
                        icon="logos:java"
                        width="45"
                    ></iconify-icon>

                    <span>Java</span>
                </div>


                <div class="skill">
                    <iconify-icon
                        icon="logos:javascript"
                        width="45"
                    ></iconify-icon>

                    <span>JavaScript</span>
                </div>


                <div class="skill">
                    <iconify-icon
                        icon="logos:c-sharp"
                        width="45"
                    ></iconify-icon>

                    <span>C#</span>
                </div>


                <div class="skill">
                    <iconify-icon
                        icon="logos:html-5"
                        width="45"
                    ></iconify-icon>

                    <span>HTML</span>
                </div>


                <div class="skill">
                    <iconify-icon
                        icon="logos:css-3"
                        width="45"
                    ></iconify-icon>

                    <span>CSS</span>
                </div>

            </div>

        </div>


        <!-- FRAMEWORKS -->

        <div class="category">

            <h2>Frameworks</h2>

            <div class="skills-grid">

                <div class="skill">
                    <iconify-icon
                        icon="logos:spring-icon"
                        width="45"
                    ></iconify-icon>

                    <span>Spring Boot</span>
                </div>


                <div class="skill">
                    <iconify-icon
                        icon="logos:vue"
                        width="45"
                    ></iconify-icon>

                    <span>Vue.js</span>
                </div>

            </div>

        </div>

        <!-- SGBDR  -->

        <div class="category">

            <h2>SGBDR</h2>

            <div class="skill">
                <iconify-icon 
                    icon="logos:mysql"
                    width="45"></iconify-icon>

                <span>MySQL</span>
            </div>

        </div>

    </section>

</template>


<style scoped>

#Skills {

    width: 85%;

    max-width: 1200px;

    margin: 50px auto 0;

    margin-bottom: 15rem;

}

#Skills h1 {

    margin-bottom: 10px;

}

.txt {
    max-width: 650px;
    padding: 10px 0;
    line-height: 1.7;
    opacity: 0.65;
}

.category {
    margin-top: 50px;
}

.category h2 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    opacity: 0.8;
}

.skills-grid {

    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(170px, 1fr));
    gap: 18px;

}

.skill {
    min-height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    border-radius: 16px;
    background: #55555520;
    border: 1px solid rgba(128, 128, 128, 0.15);
    transition:
        transform 0.25s ease,
        background 0.25s ease,
        border-color 0.25s ease;
}

.skill iconify-icon {
    transition:transform 0.25s ease;
}

.skill span {
    font-size: 0.95rem;
    font-weight: 500;
    opacity: 0.8;

}


.skill:hover {
    transform: translateY(-6px);
    background: #55555535;
    border-color: rgba(139, 92, 246, 0.4);

}


.skill:hover iconify-icon {
    transform: scale(1.1);
}



</style>