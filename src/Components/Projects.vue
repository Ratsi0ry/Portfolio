<template>
    <section id="Projects">

        <h1>Mes projets</h1>

        <Carousel v-bind="carouselCfg">

            <Slide v-for="element in projects" :key="element.if">
                <div class = 'card' @click="openModal(element)">
                    <img :src="element.img" :alt="element.title" class="img">
                    <div class="card-overlay">
                        <span>{{ element.title }}</span>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>

        </Carousel>

        <!-- details projet -->
        <Teleport to="body">

            <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">

                <div class="modal-content">
                    <button class="close-btn" @click="closeModal">&times;</button>

                    <div class="modal-body">
                        <div class="modal-image-container">
                            <img :src="selectedProject.img" :alt="selectedProject.title" class="modal-img">
                        </div>

                        <div class="modal-info">
                            <h2>{{ selectedProject.title }}</h2>
                            <p class="descritpion">{{ selectedProject.description }}</p>

                            <div class="tech-stack">
                                <h3>Technologie utilisées</h3>

                                <div class="tags">
                                    <span v-for="(tech, index) in selectedProject.tech">{{ tech }}</span>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Teleport>

    </section>
</template>

<script setup>

    import { ref } from 'vue'
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Navigation, SLIDE_EFFECTS } from 'vue3-carousel'
    import 'iconify-icon'
    
    import GestionAvion from '../Assets/Projects/gestion_avion.png'
    import GestionPension from '../Assets/Projects/gestion_pension.png'
    import GestionSoutenance from '../Assets/Projects/gestion_soutenance.png'
    import GestionLocationVoiture from '../Assets/Projects/gestion_locationVoiture.png'

    //Etat de la modale
    const selectedProject = ref(null);

    const openModal = (project) => {
        selectedProject.value = project;
    }

    const closeModal = () => {
        selectedProject.value = null;
    }

    const projects = [
        {
            id: 1,
            title:'Fast Travel',
            img: GestionAvion,
            description: "Application de gestion d'avion",
            tech: ['C#', 'Avalonia UI', 'MySQL', 'AXAML']
        },
        {
            id: 2,
            title: 'Gestion de Soutenance',
            img: GestionSoutenance,
            description: 'Plateforme web de planification, de filtrage et d\'organisation des soutenances académiques.',
            tech: ['PHP', 'Vue.js', 'MySQL', 'HTML/CSS', 'Javascript']
        },
        {
            id: 3,
            title: 'My Pocket',
            img: GestionPension,
            description: 'Système de gestion et de suivi des données de pensionnaires et retraités.',
            tech: ['Java', 'Spring Boot', 'PostgreSQL', 'FXML']
        },
        {
            id: 4,
            title: 'Gestion de Location voiture',
            img: GestionLocationVoiture,
            description: 'Plateforme web de réservation et de suivi de flotte de véhicules de location.',
            tech: ['JavaScript', 'Vue.js', 'Express', 'Node.js']
        }

    ]

     const carouselCfg = {
        itemsToShow: 1.8, //taille image carousel
        snapAlign: 'center',
        wrapAround: true,
        gap: 20
     }

</script>

<style scoped>

    #Projects{
        width: 90%;
        margin: 50px auto 0;
    }

    h1{
        margin-bottom: 20px;
    }

    /* card  */
    .card{
        width: 100%;
        height: 380px;
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        /* transition: transform 0.3 ease;
        aspect-ratio: 16/9; */
        background-color: #1a1a1a;
    }

    .img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
    }

    .card-overlay{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 12px;
        background: linear-gradient(transparent, rgba(9, 8, 70, 0.8));
        color: rgb(17, 0, 116);
        font-weight: 600;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease;

    }

    .card:hover .card-overlay{
        opacity: 1;
    }

    /* carousel */
    .carousel{
        --vc-nav-background: rgba(255, 255, 255, 0.7);
        --vc-nav-border-radius: 100%;
    }

    .img{
        border-radius: 8px;
        width: 100%;
        height:100%;
        object-fit: cover;
        object-position: center;
        display: block;

        /* amelioration pique et rendu contour  */
        image-rendering: -webkit-optimize-contrast;
        image-rendering: high-quality;
        backface-visibility: hidden;
    }

    .carousel-viewport{
        perspective: 2000px;
    }

    .carousel__track{
        transform-style: preserve-3d;
    }

    .carousel__slide{
        opacity: 0.6;
        transform: scale(0.85);
        transition: transform 300ms ease, opacity 300ms ease;
        padding: 10px 0;

        /* anti flou image  */
        /* backface-visibility: hidden;    
        -webkit-backface-visibility: hidden;
        will-change: transform; */

    }

    .carousel__slide--prev{
        opacity: 0.85;
        transform: rotateY(-10deg) scale(0.95);
    }

    .carousel__slide--active{
        opacity: 1;
        /* transform: rotateY(0deg) scale(1); */
        transform: scale(1);
    }

    .carousel__slide--next{
        opacity: 0.85;
        transform: rotateY(10deg) scale(0.95);
    }

    .carousel__slide--next ~ .carousel__slide{
        opacity: var(--carousel-opacity-inactive);
        transform: translateY(-10px) rotate(12deg) scale(0.9);
    }

    /* modal */
    .modal-backdrop{
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    .modal-content{
        background: #191e24;
        color: white;
        width: 90%;
        opacity: 800px;
        border-radius: 16px;
        padding: 24px;
        position: relative;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    .close-btn{
        position: absolute;
        top: 12px;
        right: 16px;
        background: transparent;
        border: none;
        color: #aaa;
        font-size: 30px;
        cursor: pointer;
    }

    .close-btn:hover{
        color: #fff;
    }

    .modal-body{
        display: flex;
        gap: 24px;
        margin-top: 10px;
    }

    .modal-image-container{
        flex: 1;
        max-height: 350px;
        border-radius: 10px;
        overflow: hidden;      
    }

    .modal-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .modal-info{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .modal-info h2{
        margin-top: 0;
        font-size: 1.6rem;
    }

    .description{
        color: #ccc;
        line-height: 1.5;
        margin: 15px 0;
    }

    .tech-stack h3{
        font-size: 0.95rem;
        color: #aaa;
        margin-bottom: 8px;
    }

    .tags{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .tag {
        background: rgba(255, 255, 255, 0.1);
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 0.85rem;
        color: #646cff;
    }

    @media(max-width: 650px){
        .modal-body{
            flex-direction: column;
        }
    }

</style>