<template>
    <section id="Projects">
        <h1>Mes projets</h1>
        <Carousel v-bind="carouselCfg">
            <Slide v-for="element in projects" :key="element.id">
                <div class="card" @click="openModal(element)">
                    <img :src="element.image" :alt="element.title" class="img">
                    <div class="card-overlay">
                        <span>{{ element.title }}</span>
                    </div>
                </div>
            </Slide>
            <template #addons><Navigation /></template>
        </Carousel>

        <Teleport to="body">

            <Transition name="modal">

                <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">

                    <div class="modal-content">
                        <button class="close-btn" @click="closeModal">&times;</button>
                        <div class="modal-body">
                            <div class="modal-image-container">
                                <img :src="selectedProject.image" :alt="selectedProject.title" class="modal-img">
                                <div class="modal-actions">
                                    <a v-if="selectedProject.links" :href="selectedProject.links" target="_blank" class="btn btn-github">
                                        <iconify-icon icon="mdi:github" width="20"></iconify-icon> Voir le repository
                                    </a>
                                </div>
                            </div>

                            <div class="modal-info">
                                <span class="badge-context">{{ selectedProject.context }}</span>
                                <h2>{{ selectedProject.title }}</h2>
                                <p class="description">{{ selectedProject.description }}</p>
                                <div class="features">
                                    <h3><iconify-icon icon="mdi:star-four-points"></iconify-icon> Fonctionnalités</h3>
                                    <ul>
                                        <li v-for="(feature, i) in selectedProject.features" :key="i">{{ feature }}</li>
                                    </ul>
                                </div>

                                <div class="tech-stack">
                                    <h3><iconify-icon icon="mdi:code-tags"></iconify-icon> Technologies</h3>
                                    <div class="tags">
                                        <span v-for="(tech, i) in selectedProject.tech" :key="i" class="tag">{{ tech }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </section>
</template>

<script setup>

import { ref } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'iconify-icon'

import GestionAvion from '../Assets/Projects/gestion_avion.png'
import GestionPension from '../Assets/Projects/gestion_pension.png'
import Gestionsoutenance from '../Assets/Projects/gestion_soutenance.png'
import GestionLocationVoiture from '../Assets/Projects/gestion_locationVoiture.png'

const selectedProject = ref(null)

const openModal = (project) => {
    selectedProject.value = project
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    selectedProject.value = null
    document.body.style.overflow = ''
}

const projects = [
    {
        id: 1, title: 'Fast Travel', 
        image: GestionAvion, 
        context: 'Projet Académique',
        description: 'Application de gestion aéroportuaire et suivi des vols.',
        features: ['App desktop (C# / Avalonia)', 'Gestion des vols et compagnie aérienne', 'Réservation et suivi'],
        tech: ['C#', 'Avalonia UI', 'AXAML', 'PostgreSQL'],
        links: 'https://github.com/Ratsi0ry/Fast-Travel.git'
    },
    {
        id: 2, title: 'Gestion Soutenance', 
        image: Gestionsoutenance, 
        context: 'Projet Académique',
        description: 'Planification et organisation des soutenances étudiantes.',
        features: ['Filtrage avancé', 'Dashboard jury/élève', 'Gestion des séances'],
        tech: ['PHP', 'Vue.js', 'MySQL', 'HTML/CSS'],
        links: 'https://github.com/Ratsi0ry/gestion-de-soutenance.git'
    },
    {
        id: 3, title: 'My Pocket', 
        image: GestionPension, 
        context: 'Projet Académique',
        description: 'Gestion sécurisée des bases de données de pensionnaires.',
        features: ['API RESTful (Spring Boot)', 'Gestion historiques', 'Interface fluide'],
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'FXML'],
        links: 'https://github.com/Ratsi0ry/My-Pocket.git'
    },
    {
        id: 4, title: 'Gestion Location voiture', 
        image: GestionLocationVoiture, 
        context: 'Projet Académique',
        description: 'Réservation en ligne et suivi de flotte de véhicules.',
        features: ['Réservations rapides', 'Dashboard admin', 'SPA'],
        tech: ['JavaScript', 'Vue.js', 'MySQL', 'PHP'],
        links: 'https://github.com/Ratsi0ry/Projet-SPA.git'
    }
]

const carouselCfg = { itemsToShow: 1.8, snapAlign: 'center', wrapAround: true, gap: 20 }
</script>

<style scoped>

    .modal-info h2, .features h3, .tech-stack h3, .description, .features li, .btn {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, sans-serif;
    }

    .tag, .badge-context {
        font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    }

    #Projects {
        width: 85%;
        max-width: 1200px;
        margin: 50px auto 0;
    }

    h1 {
        margin-bottom: 25px;
    }

    .card {
        width: 100%;
        height: 380px;
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        background: #1a1a1a;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }

    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        display: block;
    }

    .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 15px;
        background: linear-gradient(transparent, rgba(0,0,0,0.85));
        color: #fff;
        font-weight: 600;
        font-size: 1.1rem;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .card:hover .card-overlay {
        opacity: 1;
    }

    .carousel__slide {
        opacity: 0.5;
        transform: scale(0.85);
        transition: all 0.3s ease;
        padding: 10px 0;
    }

    .carousel__slide--active {
        opacity: 1;
        transform: scale(1);
    }

    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    .modal-content {
        background: rgba(30,30,36,0.9);
        border: 1px solid rgba(255,255,255,0.1);
        box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        color: #fff;
        width: 90%;
        max-width: 900px;
        border-radius: 20px;
        padding: 30px;
        position: relative;
    }

    .close-btn {
        position: absolute;
        top: 15px;
        right: 20px;
        background: rgba(255,255,255,0.1);
        border: none;
        color: #ddd;
        font-size: 24px;
        cursor: pointer;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease;
    }

    .close-btn:hover {
        background: rgba(255,255,255,0.2);
        color: #fff;
        transform: scale(1.1);
    }

    .modal-body {
        display: flex;
        gap: 30px;
        margin-top: 10px;
    }

    .modal-image-container {
        flex: 1.2;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .modal-img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.05);
    }

    .modal-actions {
        display: flex;
        gap: 10px;
    }

    .btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        transition: 0.2s ease;
    }

    .btn-github {
        background: #2b3137;
        color: #fff;
        border: 1px solid #444;
    }

    .btn-github:hover {
        background: #404448;
    }

    .btn-primary {
        background: #42b883;
        color: #1a1a1a;
    }

    .btn-primary:hover {
        background: #33a06f;
    }

    .modal-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .badge-context {
        display: inline-block;
        padding: 4px 10px;
        background: rgba(66,184,131,0.2);
        color: #42b883;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
        margin-bottom: 12px;
        align-self: flex-start;
    }

    .modal-info h2 {
        margin: 0;
        font-size: 2rem;
        letter-spacing: -0.5px;
    }

    .description {
        color: #d1d5db;
        line-height: 1.6;
        margin: 15px 0;
        font-size: 0.95rem;
    }

    .features h3, 
    .tech-stack h3 {
        font-size: 1rem;
        color: #fff;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .features ul {
        list-style: none;
        padding: 0;
        margin: 0 0 20px 0;
    }

    .features li {
        color: #9ca3af;
        font-size: 0.9rem;
        margin-bottom: 6px;
        position: relative;
        padding-left: 15px;
    }

    .features li::before {
        content: '•';
        color: #42b883;
        position: absolute;
        left: 0;
        font-weight: bold;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .tag {
        background: rgba(18, 46, 201, 0.822);
        border: 1px solid rgba(255,255,255,0.1);
        padding: 5px 12px;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: bold;
        color: #e5e7eb;
    }

    .modal-enter-active, 
    .modal-leave-active {
        transition: opacity 0.3s ease;
    }

    .modal-enter-active .modal-content, 
    .modal-leave-active .modal-content {
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .modal-enter-from, 
    .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-from .modal-content, 
    .modal-leave-to .modal-content {
        transform: scale(0.9);
    }

    @media (max-width: 768px) {
        .modal-body {
            flex-direction: column;
        }
        .modal-img {
            height: 200px;
        }
    }
</style>