<template>

    <section id="Languages">
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

<style scoped>

    h3 {
        margin-bottom: 20px;
        color: #03173bbd;
    }

    #Languages {
        width: 85%;
        margin: 50px auto 0;
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

     .progress-bar2 {
        height: 100%;
        background: rgba(0, 63, 158, 0.788);
        border-radius: 7px;
    }


</style>