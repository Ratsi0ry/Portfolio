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

</template>

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
        width: 90%;
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .badge {
        display: inline-block;
        background: #eee;
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 12px;
        margin-bottom: 20px;
    }

    .description {
        color: #555;
        line-height: 1.6;
        margin-bottom: 30px;
        max-width: 500px;
        border-bottom: 1px solid #333;
        padding-bottom: 20px;
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
        }
    }

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

</style>