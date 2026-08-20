<template>

    <section id="Skills">
        <h1>Compétences</h1>
        <p style="padding: 20px;" class="txt">Encore en phase d'évolution, voici mes compétences actuels sur les langages de programmations et 
        framework que j'ai appris</p><br>

        <div class="stats">
            <div class="skill">         
                <p><iconify-icon icon="logos:html-5" width="40"></iconify-icon> 80%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 80%;"></div>
                </div>
            </div>   
            <div class="skill">         
                <p><iconify-icon icon="logos:css-3" width="40"></iconify-icon> 70%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 70%;"></div>
                </div>
            </div> 
            <div class="skill">         
                <p><iconify-icon icon="logos:javascript" width="40"></iconify-icon> 50%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 50%;"></div>
                </div>
            </div>
            <div class="skill">
                <p><iconify-icon icon="logos:vue" width="40"></iconify-icon>60%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 60%;"></div>
                </div>
            </div>
        </div>

        <div class="stats">
            <div class="skill">         
                <p><iconify-icon icon="logos:mysql" width="40"></iconify-icon> 65%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 65%;"></div>
                </div>
            </div>
            <div class="skill">         
                <p><iconify-icon icon="logos:c-plusplus" width="40"></iconify-icon> 50%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 50%;"></div>
                </div>
            </div>
            
            <div class="skill">
                <p><iconify-icon icon="logos:php" width="40"></iconify-icon> 60%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 60%;"></div>
                </div>
            </div>
            <div class="skill">         
                <p><iconify-icon icon="logos:spring-icon" width="40"></iconify-icon> 70%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 70%;"></div>
                </div>
            </div>
        </div>
        
        <div class="stats">
            <div class="skill">
                <p><iconify-icon icon="logos:postgresql" width="40"></iconify-icon> 50%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 50%;"></div>
                </div>
            </div>
            <div class="skill">
                <p><iconify-icon icon="logos:c-sharp" width="40"></iconify-icon> 50%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 50%;"></div>
                </div>
            </div>
            <div class="skill">
                <p><img src="@/Assets/Image/idXHBlXS9v_logos.svg" height="40" alt=""> 60%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 60%;"></div>
                </div>
                
            </div>
            <div class="skill">
                <p><iconify-icon icon="logos:java" width="40"></iconify-icon> 55%</p>
                <div class="bar">
                    <div class="progress-bar" style="width: 55%;"></div>
                </div>
                
            </div>
        </div>
    </section>

</template>

<style scoped>

    #Skills, #Services, #Skills2, #Projects {
        width: 85%;
        margin: 50px auto 0;
    }

    .skill {
        margin-bottom: 20px;
        display: grid;
        gap: 5px;
        place-items: center ;
        margin: 10px;
        background: #55555560;
        padding: 20px;
        border-radius: 5px;
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

    .stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(200px, 1fr));
        gap: 20px;
        padding: 20px;
    }

</style>